import { combineReducers } from "redux";
import error from "./error";
import auth from "./auth";
import userPreferences from "./userPreferences";
import informacion from "./informacion";
import contrato from "./contrato";
import cuentaCorriente from "./cuentaCorriente";
import denuncia from "./denuncia";
import direccion from "./direccion";
import nomina from "./nomina";
import certificadoCobertura from "./certificadoCobertura";
import siniestralidad from "./siniestralidad";
const allReducers = combineReducers({
  auth,
  error,
  userPreferences,
  informacion,
  contrato,
  cuentaCorriente,
  denuncia,
  direccion,
  nomina,
  certificadoCobertura,
  siniestralidad,
});

const rootReducer = (state, action) => {
  return allReducers(state, action);
};

export default rootReducer;
