import { all, fork } from "redux-saga/effects";
// Sagas
import UsersSaga from "./Users/users.sagas";

export default function* root() {
  yield all([fork(UsersSaga)]);
}
