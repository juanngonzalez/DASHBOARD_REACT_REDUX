import {
  POST_DENUNCIA,
  GET_TIPOS_SINIESTRO,
  GET_SUBTIPOS_SINIESTRO,
  GET_FORMAS_ACCIDENTE,
  GET_AGENTES_CAUSANTES,
  GET_AGENTES_CAUSANTES_ENFERMEDAD_PROFESIONAL,
  GET_DIAGNOSTICOS_OMS,
  GET_GRAVEDADES,
  GET_ZONAS_AFECTADAS,
  GET_NATURALEZAS_LESION,
  GET_AMBITOS_DETECCION_ENFERMEDAD_PROFESIONAL,
  GET_TIPOS_ENFERMEDAD_PROFESIONAL,
  POST_DATOS_TRABAJADOR,
  POST_DIRECCION_TRABAJADOR,
  POST_DATOS_NOMINA,
  POST_DATOS_DENUNCIA,
  POST_LUGAR_OCURRENCIA,
  POST_ACCIDENTE_TRABAJO,
  POST_ENFERMEDAD_PROFESIONAL,
  POST_DIAGNOSTICO_ENFERMEDAD,
  PUT_DIAGNOSTICO_ENFERMEDAD,
  DELETE_DIAGNOSTICO_ENFERMEDAD,
  POST_DIAGNOSTICO_ACCIDENTE,
  PUT_DIAGNOSTICO_ACCIDENTE,
  DELETE_DIAGNOSTICO_ACCIDENTE,
  EXISTE_NOMINA,
  CLEAR_DENUNCIA,
  GET_MODALIDADES,
  GET_DEPENDENCIAS_EMPLEADOR,
  POST_BUSCAR_SINIESTRO,
  POST_CARGAR_FI,
  GET_AGENTES_MATERIAL_ENFERMEDAD_PROFESIONAL,
} from "../actions/denuncia";

const INITIAL_STATE = {
  tiposSiniestro: {
    loading: false,
    error: false,
    data: [],
  },
  agentesMaterialEnfermedadProfesional: {
    loading: false,
    error: false,
    data: [],
  },
  nomina: {
    loading: false,
    error: false,
    data: null,
  },
  subtiposSiniestro: {
    loading: false,
    error: false,
    data: [],
  },
  formasAccidente: {
    loading: false,
    error: false,
    data: [],
  },
  agentesCausantes: {
    loading: false,
    error: false,
    data: [],
  },
  agentesCausantesEnfermedadProfesional: {
    loading: false,
    error: false,
    data: [],
  },
  diagnosticosOMS: {
    loading: false,
    error: false,
    data: [],
  },
  gravedades: {
    loading: false,
    error: false,
    data: [],
  },
  zonasAfectadas: {
    loading: false,
    error: false,
    data: [],
  },
  naturalezasLesion: {
    loading: false,
    error: false,
    data: [],
  },
  ambitosDeteccionEnfermedadProfesional: {
    loading: false,
    error: false,
    data: [],
  },
  tiposEnfermedadProfesional: {
    loading: false,
    error: false,
    data: [],
  },
  paises: {
    loading: false,
    error: false,
    data: [],
  },
  provincias: {
    loading: false,
    error: false,
    data: {},
  },
  localidades: {
    loading: false,
    error: false,
    data: {},
  },
  modalidades: {
    loading: false,
    error: false,
    data: [],
  },
  dependenciasEmpleador: {
    loading: false,
    error: false,
    data: [],
  },
  siniestros: {
    loading: false,
    error: false,
    data: [],
  },
  cargarFi: {
    loading: false,
    error: false,
    data: {},
  },
  denuncia: {
    loading: false,
    error: false,
    data: {},
  },
  postDenuncia: {
    datosTrabajador: {},
    direccionTrabajador: {},
    datosNomina: {},
    datosDenuncia: {},
    lugarOcurrencia: {},
    accidenteTrabajo: {
      subTipoAccidente: "",
      ocurrenciaViaPublica: false,
      teletrabajo: false,
      agenteCausante: "",
      formaAccidente: "",
    },
    diagnosticoAccidente: [],
    enfermedadProfesional: {
      tipoEnfermedadProfesional: "",
      tiempoExposicionAgenteCausante: "",
      agenteCausante: "",
      agenteCausanteEnfermedadProfesional: "",
    },
    diagnosticoEnfermedad: [],
  },
};

const denuncia = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case `${GET_AGENTES_MATERIAL_ENFERMEDAD_PROFESIONAL}_PENDING`:
      return {
        ...state,
        agentesMaterialEnfermedadProfesional: {
          ...state.agentesMaterialEnfermedadProfesional,
          loading: true,
        },
      };
    case `${GET_AGENTES_MATERIAL_ENFERMEDAD_PROFESIONAL}_REJECTED`:
      return {
        ...state,
        agentesMaterialEnfermedadProfesional: {
          ...state.agentesMaterialEnfermedadProfesional,
          error: true,
          loading: false,
        },
      };
    case `${GET_AGENTES_MATERIAL_ENFERMEDAD_PROFESIONAL}_FULFILLED`:
      return {
        ...state,
        agentesMaterialEnfermedadProfesional: {
          ...state.agentesMaterialEnfermedadProfesional,
          error: false,
          loading: false,
          data: action.payload.data,
        },
      };
    case `${GET_TIPOS_SINIESTRO}_PENDING`:
      return {
        ...state,
        tiposSiniestro: { ...state.tiposSiniestro, loading: true },
      };
    case `${GET_TIPOS_SINIESTRO}_REJECTED`:
      return {
        ...state,
        tiposSiniestro: {
          ...state.tiposSiniestro,
          error: true,
          loading: false,
        },
      };
    case `${GET_TIPOS_SINIESTRO}_FULFILLED`:
      return {
        ...state,
        tiposSiniestro: {
          ...state.tiposSiniestro,
          error: false,
          loading: false,
          data: action.payload.data,
        },
      };
    case `${GET_SUBTIPOS_SINIESTRO}_PENDING`:
      return {
        ...state,
        subtiposSiniestro: { ...state.subtiposSiniestro, loading: true },
      };
    case `${GET_SUBTIPOS_SINIESTRO}_REJECTED`:
      return {
        ...state,
        subtiposSiniestro: {
          ...state.subtiposSiniestro,
          error: true,
          loading: false,
        },
      };
    case `${GET_SUBTIPOS_SINIESTRO}_FULFILLED`:
      return {
        ...state,
        subtiposSiniestro: {
          ...state.subtiposSiniestro,
          error: false,
          loading: false,
          data: action.payload.data,
        },
      };
    case `${GET_FORMAS_ACCIDENTE}_PENDING`:
      return {
        ...state,
        formasAccidente: { ...state.formasAccidente, loading: true },
      };
    case `${GET_FORMAS_ACCIDENTE}_REJECTED`:
      return {
        ...state,
        formasAccidente: {
          ...state.formasAccidente,
          error: true,
          loading: false,
        },
      };
    case `${GET_FORMAS_ACCIDENTE}_FULFILLED`:
      return {
        ...state,
        formasAccidente: {
          ...state.formasAccidente,
          error: false,
          loading: false,
          data: action.payload.data,
        },
      };
    case `${GET_AGENTES_CAUSANTES}_PENDING`:
      return {
        ...state,
        agentesCausantes: { ...state.agentesCausantes, loading: true },
      };
    case `${GET_AGENTES_CAUSANTES}_REJECTED`:
      return {
        ...state,
        agentesCausantes: {
          ...state.agentesCausantes,
          error: true,
          loading: false,
        },
      };
    case `${GET_AGENTES_CAUSANTES}_FULFILLED`:
      return {
        ...state,
        agentesCausantes: {
          ...state.agentesCausantes,
          error: false,
          loading: false,
          data: action.payload.data,
        },
      };
    case `${GET_AGENTES_CAUSANTES_ENFERMEDAD_PROFESIONAL}_PENDING`:
      return {
        ...state,
        agentesCausantesEnfermedadProfesional: {
          ...state.agentesCausantesEnfermedadProfesional,
          loading: true,
        },
      };
    case `${GET_AGENTES_CAUSANTES_ENFERMEDAD_PROFESIONAL}_REJECTED`:
      return {
        ...state,
        agentesCausantesEnfermedadProfesional: {
          ...state.agentesCausantesEnfermedadProfesional,
          error: true,
          loading: false,
        },
      };
    case `${GET_AGENTES_CAUSANTES_ENFERMEDAD_PROFESIONAL}_FULFILLED`:
      return {
        ...state,
        agentesCausantesEnfermedadProfesional: {
          ...state.agentesCausantesEnfermedadProfesional,
          error: false,
          loading: false,
          data: action.payload.data,
        },
      };
    case `${GET_DIAGNOSTICOS_OMS}_PENDING`:
      return {
        ...state,
        diagnosticosOMS: { ...state.diagnosticosOMS, loading: true },
      };
    case `${GET_DIAGNOSTICOS_OMS}_REJECTED`:
      return {
        ...state,
        diagnosticosOMS: {
          ...state.diagnosticosOMS,
          error: true,
          loading: false,
        },
      };
    case `${GET_DIAGNOSTICOS_OMS}_FULFILLED`:
      return {
        ...state,
        diagnosticosOMS: {
          ...state.diagnosticosOMS,
          error: false,
          loading: false,
          data: action.payload.data,
        },
      };
    case `${GET_GRAVEDADES}_PENDING`:
      return {
        ...state,
        gravedades: { ...state.gravedades, loading: true },
      };
    case `${GET_GRAVEDADES}_REJECTED`:
      return {
        ...state,
        gravedades: { ...state.gravedades, error: true, loading: false },
      };
    case `${GET_GRAVEDADES}_FULFILLED`:
      return {
        ...state,
        gravedades: {
          ...state.gravedades,
          error: false,
          loading: false,
          data: action.payload.data,
        },
      };
    case `${GET_ZONAS_AFECTADAS}_PENDING`:
      return {
        ...state,
        zonasAfectadas: { ...state.zonasAfectadas, loading: true },
      };
    case `${GET_ZONAS_AFECTADAS}_REJECTED`:
      return {
        ...state,
        zonasAfectadas: {
          ...state.zonasAfectadas,
          error: true,
          loading: false,
        },
      };
    case `${GET_ZONAS_AFECTADAS}_FULFILLED`:
      return {
        ...state,
        zonasAfectadas: {
          ...state.zonasAfectadas,
          error: false,
          loading: false,
          data: action.payload.data,
        },
      };
    case `${GET_NATURALEZAS_LESION}_PENDING`:
      return {
        ...state,
        naturalezasLesion: { ...state.naturalezasLesion, loading: true },
      };
    case `${GET_NATURALEZAS_LESION}_REJECTED`:
      return {
        ...state,
        naturalezasLesion: {
          ...state.naturalezasLesion,
          error: true,
          loading: false,
        },
      };
    case `${GET_NATURALEZAS_LESION}_FULFILLED`:
      return {
        ...state,
        naturalezasLesion: {
          ...state.naturalezasLesion,
          error: false,
          loading: false,
          data: action.payload.data,
        },
      };
    case `${GET_AMBITOS_DETECCION_ENFERMEDAD_PROFESIONAL}_PENDING`:
      return {
        ...state,
        ambitosDeteccionEnfermedadProfesional: {
          ...state.ambitosDeteccionEnfermedadProfesional,
          loading: true,
        },
      };
    case `${GET_AMBITOS_DETECCION_ENFERMEDAD_PROFESIONAL}_REJECTED`:
      return {
        ...state,
        ambitosDeteccionEnfermedadProfesional: {
          ...state.ambitosDeteccionEnfermedadProfesional,
          error: true,
          loading: false,
        },
      };
    case `${GET_AMBITOS_DETECCION_ENFERMEDAD_PROFESIONAL}_FULFILLED`:
      return {
        ...state,
        ambitosDeteccionEnfermedadProfesional: {
          ...state.ambitosDeteccionEnfermedadProfesional,
          error: false,
          loading: false,
          data: action.payload.data,
        },
      };

    case `${GET_TIPOS_ENFERMEDAD_PROFESIONAL}_PENDING`:
      return {
        ...state,
        tiposEnfermedadProfesional: {
          ...state.tiposEnfermedadProfesional,
          loading: true,
        },
      };
    case `${GET_TIPOS_ENFERMEDAD_PROFESIONAL}_REJECTED`:
      return {
        ...state,
        tiposEnfermedadProfesional: {
          ...state.tiposEnfermedadProfesional,
          error: true,
          loading: false,
        },
      };
    case `${GET_TIPOS_ENFERMEDAD_PROFESIONAL}_FULFILLED`:
      return {
        ...state,
        tiposEnfermedadProfesional: {
          ...state.tiposEnfermedadProfesional,
        },
      };
    case `${EXISTE_NOMINA}_PENDING`:
      return {
        ...state,
        nomina: { ...state.nomina, error: false, loading: true },
      };
    case `${EXISTE_NOMINA}_REJECTED`:
      return {
        ...state,
        nomina: { ...state.nomina, error: true, loading: false },
      };
    case `${EXISTE_NOMINA}_FULFILLED`:
      return {
        ...state,
        nomina: {
          ...state.nomina,
          error: false,
          loading: false,
          data: {
            ...action.payload.data,
            ...action.payload.data.datosNominaDenunciaPortal,
          },
        },
      };

    case `${POST_DENUNCIA}_PENDING`:
      return {
        ...state,
        denuncia: { ...state.denuncia, error: false, loading: true },
      };
    case `${POST_DENUNCIA}_REJECTED`:
      return {
        ...state,
        denuncia: { ...state.denuncia, error: true, loading: false },
      };
    case `${POST_DENUNCIA}_FULFILLED`:
      return {
        ...state,
        denuncia: {
          ...state.denuncia,
          error: false,
          loading: false,
          data: action.payload,
        },
      };
    case POST_DATOS_TRABAJADOR:
      return {
        ...state,
        postDenuncia: {
          ...state.postDenuncia,
          datosTrabajador: { ...action.payload },
        },
      };

    case POST_DIRECCION_TRABAJADOR:
      return {
        ...state,
        postDenuncia: {
          ...state.postDenuncia,
          direccionTrabajador: { ...action.payload },
        },
      };

    case POST_DATOS_NOMINA:
      return {
        ...state,
        postDenuncia: {
          ...state.postDenuncia,
          datosNomina: { ...action.payload },
        },
      };

    case POST_DATOS_DENUNCIA:
      return {
        ...state,
        postDenuncia: {
          ...state.postDenuncia,
          datosDenuncia: { ...action.payload },
        },
      };

    case POST_LUGAR_OCURRENCIA:
      return {
        ...state,
        postDenuncia: {
          ...state.postDenuncia,
          lugarOcurrencia: { ...action.payload },
        },
      };

    case POST_ACCIDENTE_TRABAJO:
      return {
        ...state,
        postDenuncia: {
          ...state.postDenuncia,
          accidenteTrabajo: { ...action.payload },
        },
      };

    case POST_ENFERMEDAD_PROFESIONAL:
      return {
        ...state,
        postDenuncia: {
          ...state.postDenuncia,
          enfermedadProfesional: { ...action.payload },
        },
      };

    case POST_DIAGNOSTICO_ACCIDENTE:
      return {
        ...state,
        postDenuncia: {
          ...state.postDenuncia,
          diagnosticoAccidente: [
            ...state.postDenuncia.diagnosticoAccidente,
            action.payload,
          ],
        },
      };
    case PUT_DIAGNOSTICO_ACCIDENTE:
      let putDiagnosticoAccidente = state.postDenuncia.diagnosticoAccidente;
      const indexPutDA = putDiagnosticoAccidente.findIndex(
        (c) => c.id === action.payload.id
      );

      putDiagnosticoAccidente[indexPutDA] = action.payload;

      return {
        ...state,
        postDenuncia: {
          ...state.postDenuncia,
          diagnosticoAccidente: putDiagnosticoAccidente,
        },
      };

    case DELETE_DIAGNOSTICO_ACCIDENTE:
      const deleteDiagnosticoAccidente =
        state.postDenuncia.diagnosticoAccidente;

      const newArrayDA = deleteDiagnosticoAccidente.filter(
        (d) => d.id !== action.payload
      );

      return {
        ...state,

        postDenuncia: {
          ...state.postDenuncia,

          diagnosticoAccidente: [...newArrayDA],
        },
      };

    case POST_DIAGNOSTICO_ENFERMEDAD:
      return {
        ...state,
        postDenuncia: {
          ...state.postDenuncia,
          diagnosticoEnfermedad: [
            ...state.postDenuncia.diagnosticoEnfermedad,
            action.payload,
          ],
        },
      };

    case PUT_DIAGNOSTICO_ENFERMEDAD:
      let putDiagnosticoEnfermedad = state.postDenuncia.diagnosticoEnfermedad;
      const indexPutDE = putDiagnosticoEnfermedad.findIndex(
        (c) => c.id === action.payload.id
      );
      putDiagnosticoEnfermedad[indexPutDE] = action.payload;
      return {
        ...state,
        postDenuncia: {
          ...state.postDenuncia,
          diagnosticoEnfermedad: putDiagnosticoEnfermedad,
        },
      };

    case DELETE_DIAGNOSTICO_ENFERMEDAD:
      const deleteDiagnosticoEnfermedad =
        state.postDenuncia.diagnosticoEnfermedad;
      const newArrayDE = deleteDiagnosticoEnfermedad.filter(
        (d) => d.id !== action.payload
      );
      return {
        ...state,
        postDenuncia: {
          ...state.postDenuncia,
          diagnosticoEnfermedad: [...newArrayDE],
        },
      };

    case CLEAR_DENUNCIA:
      return INITIAL_STATE;

    case `${GET_MODALIDADES}_PENDING`:
      return {
        ...state,
        modalidades: { ...state.modalidades, error: false, loading: true },
      };
    case `${GET_MODALIDADES}_REJECTED`:
      return {
        ...state,
        modalidades: { ...state.modalidades, error: true, loading: false },
      };
    case `${GET_MODALIDADES}_FULFILLED`:
      return {
        ...state,
        modalidades: {
          ...state.modalidades,
          error: false,
          loading: false,
          data: action.payload.data,
        },
      };

    case `${GET_DEPENDENCIAS_EMPLEADOR}_PENDING`:
      return {
        ...state,
        dependenciasEmpleador: {
          ...state.dependenciasEmpleador,
          error: false,
          loading: true,
        },
      };
    case `${GET_DEPENDENCIAS_EMPLEADOR}_REJECTED`:
      return {
        ...state,
        dependenciasEmpleador: {
          ...state.dependenciasEmpleador,
          error: true,
          loading: false,
        },
      };
    case `${GET_DEPENDENCIAS_EMPLEADOR}_FULFILLED`:
      return {
        ...state,
        dependenciasEmpleador: {
          ...state.dependenciasEmpleador,
          error: false,
          loading: false,
          data: action.payload.data,
        },
      };

    case `${POST_BUSCAR_SINIESTRO}_PENDING`:
      return {
        ...state,
        siniestros: {
          ...state.siniestros,
          error: false,
          loading: true,
        },
      };
    case `${POST_BUSCAR_SINIESTRO}_REJECTED`:
      return {
        ...state,
        siniestros: {
          ...state.siniestros,
          error: true,
          loading: false,
        },
      };
    case `${POST_BUSCAR_SINIESTRO}_FULFILLED`:
      return {
        ...state,
        siniestros: {
          ...state.siniestros,
          error: false,
          loading: false,
          data: action.payload.data,
        },
      };

    case `${POST_CARGAR_FI}_PENDING`:
      return {
        ...state,
        cargarFi: {
          ...state.cargarFi,
          error: false,
          loading: true,
        },
      };
    case `${POST_CARGAR_FI}_REJECTED`:
      return {
        ...state,
        cargarFi: {
          ...state.cargarFi,
          error: true,
          loading: false,
        },
      };
    case `${POST_CARGAR_FI}_FULFILLED`:
      return {
        ...state,
        cargarFi: {
          ...state.cargarFi,
          error: false,
          loading: false,
          data: action.payload.data,
        },
      };
    default:
      return state;
  }
};

export default denuncia;
