import { all, takeLatest, put, delay } from "redux-saga/effects";
import UsersActions from "./users.actions";
// Constants
import * as types from "./users.constants";

function* getUsers() {
  try {
    yield put(UsersActions.setLoading(true));
    yield delay(2000);
    const response = yield fetch("https://jsonplaceholder.typicode.com/users");
    const data = yield response.json();
    yield put(UsersActions.handleUsers(data));
  } catch (error) {
    console.log("Debug ~ function*getUsers ~ error", error);
  } finally {
    yield put(UsersActions.setLoading(false));
  }
}

export default function* listeners() {
  yield all([takeLatest(types.SAGAS_GET_USERS, getUsers)]);
}
