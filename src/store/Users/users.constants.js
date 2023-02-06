// Utilities
import { createReduxPrefix } from "../../utils/action.util";

const prefix = createReduxPrefix("USERS");

export const SET_USERS = prefix("SET_USERS");
export const SAGAS_GET_USERS = prefix("SAGAS_GET_USERS");

export const SET_LOADING = prefix("SET_LOADING");
