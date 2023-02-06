import {
  compose,
  legacy_createStore as createStore,
  applyMiddleware,
} from "redux";
// Reducers
import reducers from "./index.reducer";
// List of middleware
import middleware, { sagaMiddleware } from "./index.middleware";
// Sagas
import sagas from "./index.sagas";

const env = "development";

const isDevelopment = env === "development";

const enhancer =
  (isDevelopment ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null) ||
  compose;

const rootStore = createStore(
  reducers,
  {},
  enhancer(applyMiddleware(...middleware))
);

sagaMiddleware.run(sagas);

export default rootStore;
