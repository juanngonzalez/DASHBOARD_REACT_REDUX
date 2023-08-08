import { setErrorMessage } from "../actions/error";
import { toast } from "react-toastify";
import { logout } from "../actions/auth";

const ErrorMiddleware = (store) => (next) => (action) => {
  if (action.type.includes("persist")) return next(action);

  if (action.type.includes("_REJECTED")) {
    store.dispatch(
      setErrorMessage(
        action.payload?.request?.status,
        action.payload?.data?.Message
      )
    );

    let errorMessage =
      "Estamos teniendo problemas para conectarnos con el servidor, por favor inténtelo nuevamente.";

    if (action.payload?.response?.data?.Message) {
      errorMessage = action.payload?.response?.data?.Message;
    } 
    toast.error(errorMessage);
  }

  return next(action);
};

export default ErrorMiddleware;
