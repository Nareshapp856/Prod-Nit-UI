import { takeLatest } from "redux-saga/effects";
import { types } from "../../actions/types";
import { loginSaga } from "./login";

export function* authWatcherSaga() {
  yield takeLatest(types.A_LOGIN, loginSaga);
}
