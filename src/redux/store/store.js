import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";
import rootReducer from "../reducer/reducers";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";
import ErrorMiddleware from "../middlewares/errorMiddleware";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth"],
};

const middleware = [thunk, ErrorMiddleware, promise];

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  persistedReducer,
  applyMiddleware(...middleware)
);

export const persistor = persistStore(store);
