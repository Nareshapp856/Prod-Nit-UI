import { takeLatest } from "redux-saga/effects";
import { types } from "../../actions/types";
import { programResultsSaga } from "./programResult";

export function* resultsWatcherSaga() {
  yield takeLatest(types.R_PROGRAM_RESULT, programResultsSaga);
}
