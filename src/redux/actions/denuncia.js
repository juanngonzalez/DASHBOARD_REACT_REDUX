import axios from "axios";
export const GET_TIPOS_SINIESTRO = "GET_TIPOS_SINIESTRO";
export const GET_SUBTIPOS_SINIESTRO = "GET_SUBTIPOS_SINIESTRO";

export const GET_FORMAS_ACCIDENTE = "GET_FORMAS_ACCIDENTE";
export const GET_AGENTES_CAUSANTES = "GET_AGENTES_CAUSANTES";
export const GET_AGENTES_CAUSANTES_ENFERMEDAD_PROFESIONAL =
  "GET_AGENTES_CAUSANTES_ENFERMEDAD_PROFESIONAL";
export const GET_DIAGNOSTICOS_OMS = "GET_DIAGNOSTICOS_OMS";
export const GET_GRAVEDADES = "GET_GRAVEDADES";
export const GET_ZONAS_AFECTADAS = "GET_ZONAS_AFECTADAS";
export const GET_NATURALEZAS_LESION = "GET_NATURALEZAS_LESION";
export const GET_AMBITOS_DETECCION_ENFERMEDAD_PROFESIONAL =
  "GET_AMBITOS_DETECCION_ENFERMEDAD_PROFESIONAL";
export const GET_TIPOS_ENFERMEDAD_PROFESIONAL =
  "GET_TIPOS_ENFERMEDAD_PROFESIONAL";
export const POST_DENUNCIA = "POST_DENUNCIA";
export const POST_DATOS_TRABAJADOR = "POST_DATOS_TRABAJADOR";
export const POST_DIRECCION_TRABAJADOR = "POST_DIRECCION_TRABAJADOR";
export const POST_DATOS_NOMINA = "POST_DATOS_NOMINA";
export const POST_DATOS_DENUNCIA = "POST_DATOS_DENUNCIA";
export const POST_LUGAR_OCURRENCIA = "POST_LUGAR_OCURRENCIA";
export const POST_ACCIDENTE_TRABAJO = "POST_ACCIDENTE_TRABAJO";
export const POST_ENFERMEDAD_PROFESIONAL = "POST_ENFERMEDAD_PROFESIONAL";
export const POST_DIAGNOSTICO_ACCIDENTE = "POST_DIAGNOSTICO_ACCIDENTE";
export const PUT_DIAGNOSTICO_ACCIDENTE = "PUT_DIAGNOSTICO_ACCIDENTE";
export const DELETE_DIAGNOSTICO_ACCIDENTE = "DELETE_DIAGNOSTICO_ACCIDENTE";
export const POST_DIAGNOSTICO_ENFERMEDAD = "POST_DIAGNOSTICO_ENFERMEDAD";
export const PUT_DIAGNOSTICO_ENFERMEDAD = "PUT_DIAGNOSTICO_ENFERMEDAD";
export const DELETE_DIAGNOSTICO_ENFERMEDAD = "DELETE_DIAGNOSTICO_ENFERMEDAD";
export const EXISTE_NOMINA = "EXISTE_NOMINA";
export const CLEAR_DENUNCIA = "CLEAR_DENUNCIA";
export const GET_MODALIDADES = "GET_MODALIDADES";
export const GET_DEPENDENCIAS_EMPLEADOR = "GET_DEPENDENCIAS_EMPLEADOR";
export const POST_BUSCAR_SINIESTRO = "POST_BUSCAR_SINIESTRO";
export const POST_CARGAR_FI = "POST_CARGAR_FI";
export const GET_AGENTES_MATERIAL_ENFERMEDAD_PROFESIONAL =
  "GET_AGENTES_MATERIAL_ENFERMEDAD_PROFESIONAL";

export const getAgentesMaterialEnfermedadProfesional = (id) => (dispatch) => {
  return dispatch({
    type: GET_AGENTES_MATERIAL_ENFERMEDAD_PROFESIONAL,
    payload: axios
      .get(
        `denuncia/agentesMaterialEnfermedadProfesional?idAgenteCausanteEnfermedadProfesional=${id}`
      )
      .then((response) => ({ data: response.data }))
      .catch((error) => Promise.reject(error)),
  });
};

export const existeNomina = (cuil) => (dispatch) => {
  return dispatch({
    type: EXISTE_NOMINA,
    payload: axios
      .get(`denuncia/existeNomina?cuil=${cuil}`)
      .then((response) => ({ data: response.data }))
      .catch((error) => Promise.reject(error)),
  });
};

export const getTiposSiniestro = () => (dispatch) => {
  return dispatch({
    type: GET_TIPOS_SINIESTRO,
    payload: axios
      .get("denuncia/tiposSiniestro")
      .then((response) => ({ data: response.data }))
      .catch((error) => Promise.reject(error)),
  });
};

export const getSubtiposSiniestro = (idSiniestro) => (dispatch) => {
  return dispatch({
    type: GET_SUBTIPOS_SINIESTRO,
    payload: axios
      .get(`denuncia/subtiposSiniestro?idTipoSiniestro=${idSiniestro}`)
      .then((response) => ({ data: response.data }))
      .catch((error) => Promise.reject(error)),
  });
};

export const getFormasAccidente = () => (dispatch) => {
  return dispatch({
    type: GET_FORMAS_ACCIDENTE,
    payload: axios
      .get("denuncia/formasAccidente")
      .then((response) => ({ data: response.data }))
      .catch((error) => Promise.reject(error)),
  });
};

export const getAgentesCausantes = () => (dispatch) => {
  return dispatch({
    type: GET_AGENTES_CAUSANTES,
    payload: axios
      .get("denuncia/agentesCausantes")
      .then((response) => ({ data: response.data }))
      .catch((error) => Promise.reject(error)),
  });
};

export const getAgentesCausantesEnfermedadProfesional = () => (dispatch) => {
  return dispatch({
    type: GET_AGENTES_CAUSANTES_ENFERMEDAD_PROFESIONAL,
    payload: axios
      .get("denuncia/agentesCausantesEnfermedadProfesional")
      .then((response) => ({ data: response.data }))
      .catch((error) => Promise.reject(error)),
  });
};

export const getDiagnosticosOms = (idTipoSiniestro) => (dispatch) => {
  return dispatch({
    type: GET_DIAGNOSTICOS_OMS,
    payload: axios
      .get(`denuncia/diagnosticosOms?idTipoSiniestro=${idTipoSiniestro}`)
      .then((response) => ({ data: response.data }))
      .catch((error) => Promise.reject(error)),
  });
};

export const getGravedades = (idDiagnosticoOms) => (dispatch) => {
  return dispatch({
    type: GET_GRAVEDADES,
    payload: axios
      .get(`denuncia/gravedades?idDiagnosticoOms=${idDiagnosticoOms}`)
      .then((response) => ({ data: response.data }))
      .catch((error) => Promise.reject(error)),
  });
};

export const getZonasAfectadas = (diagnosticoOms) => (dispatch) => {
  return dispatch({
    type: GET_ZONAS_AFECTADAS,
    payload: axios
      .get(`denuncia/zonasAfectadas?idDiagnosticoOms=${diagnosticoOms.id}`)
      .then((response) => ({ data: response.data }))
      .catch((error) => Promise.reject(error)),
  });
};

export const getNaturalezasLesion = (idDiagnosticoOms) => (dispatch) => {
  return dispatch({
    type: GET_NATURALEZAS_LESION,
    payload: axios
      .get(`denuncia/naturalezasLesion?idDiagnosticoOms=${idDiagnosticoOms}`)
      .then((response) => ({ data: response.data }))
      .catch((error) => Promise.reject(error)),
  });
};

export const getAmbitosDeteccionEnfermedadProfesional = () => (dispatch) => {
  return dispatch({
    type: GET_AMBITOS_DETECCION_ENFERMEDAD_PROFESIONAL,
    payload: axios
      .get(`denuncia/ambitosDeteccionEnfermedadProfesional`)
      .then((response) => ({ data: response.data }))
      .catch((error) => Promise.reject(error)),
  });
};

export const getTiposEnfermedadProfesional = () => (dispatch) => {
  return dispatch({
    type: GET_TIPOS_ENFERMEDAD_PROFESIONAL,
    payload: axios
      .get("denuncia/tiposEnfermedadProfesional")
      .then((response) => ({ data: response.data }))
      .catch((error) => Promise.reject(error)),
  });
};

export const postDenuncia = (denuncia) => (dispatch) => {
  return dispatch({
    type: POST_DENUNCIA,
    payload: axios
      .post(`denuncia/cargarDenuncia`, denuncia)
      .then((response) => ({ data: response.data }))
      .catch((error) => Promise.reject(error)),
  });
};

export const getModalidadesDenuncia = () => (dispatch) => {
  return dispatch({
    type: GET_MODALIDADES,
    payload: axios
      .get("denuncia/modalidadesDenuncia")
      .then((response) => ({ data: response.data }))
      .catch((error) => Promise.reject(error)),
  });
};

export const getDependenciasEmpleador = () => (dispatch) => {
  return dispatch({
    type: GET_DEPENDENCIAS_EMPLEADOR,
    payload: axios
      .get("empleador/dependenciasEmpleador")
      .then((response) => ({ data: response.data }))
      .catch((error) => Promise.reject(error)),
  });
};

export const buscarSiniestro = (filter) => (dispatch) => {
  return dispatch({
    type: POST_BUSCAR_SINIESTRO,
    payload: axios
      .post("denuncia/buscarSiniestro", filter)
      .then((response) => ({ data: response.data }))
      .catch((error) => Promise.reject(error)),
  });
};

export const cargarFI = (body) => (dispatch) => {
  return dispatch({
    type: POST_CARGAR_FI,
    payload: axios
      .post("denuncia/cargarFiDIPE", body)
      .then((response) => ({ data: response.data }))
      .catch((error) => Promise.reject(error)),
  });
};

export const clearDenuncia = () => (dispatch) => {
  return dispatch({
    type: CLEAR_DENUNCIA,
  });
};

export const saveDatosTrabajador = (data) => (dispatch) => {
  return dispatch({
    type: POST_DATOS_TRABAJADOR,
    payload: data,
  });
};

export const saveDireccionTrabajador = (data) => (dispatch) => {
  return dispatch({
    type: POST_DIRECCION_TRABAJADOR,
    payload: data,
  });
};

export const saveDatosNomina = (data) => (dispatch) => {
  return dispatch({
    type: POST_DATOS_NOMINA,
    payload: data,
  });
};

export const saveDatosDenuncia = (data) => (dispatch) => {
  return dispatch({
    type: POST_DATOS_DENUNCIA,
    payload: data,
  });
};

export const saveLugarOcurrencia = (data) => (dispatch) => {
  return dispatch({
    type: POST_LUGAR_OCURRENCIA,
    payload: data,
  });
};

export const saveAccidenteTrabajo = (data) => (dispatch) => {
  return dispatch({
    type: POST_ACCIDENTE_TRABAJO,
    payload: data,
  });
};

export const saveEnfermedadProfesional = (data) => (dispatch) => {
  return dispatch({
    type: POST_ENFERMEDAD_PROFESIONAL,
    payload: data,
  });
};

export const saveDiagnosticoAccidente = (data) => (dispatch) => {
  return dispatch({
    type: POST_DIAGNOSTICO_ACCIDENTE,
    payload: data,
  });
};

export const putDiagnosticoAccidente = (data) => {
  return {
    type: PUT_DIAGNOSTICO_ACCIDENTE,
    payload: data,
  };
};

export const deleteDiagnosticoAccidente = (id) => {
  return {
    type: DELETE_DIAGNOSTICO_ACCIDENTE,
    payload: id,
  };
};

export const saveDiagnosticoEnfermedad = (data) => (dispatch) => {
  return dispatch({
    type: POST_DIAGNOSTICO_ENFERMEDAD,
    payload: data,
  });
};

export const putDiagnosticoEnfermedad = (data) => {
  return {
    type: PUT_DIAGNOSTICO_ENFERMEDAD,
    payload: data,
  };
};

export const deleteDiagnosticoEnfermedad = (id) => {
  return {
    type: DELETE_DIAGNOSTICO_ENFERMEDAD,
    payload: id,
  };
};
