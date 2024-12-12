import { all } from "redux-saga/effects";
import { dashboardWatcherSaga } from "./dashboard";
import { authWatcherSaga } from "./auth";
import { resultsWatcherSaga } from "./result";
import { facultyWatcherSaga } from "./faculty";
import { reportWatcherSaga } from "./report";

export function* adminSaga() {
  yield all([
    dashboardWatcherSaga(),
    authWatcherSaga(),
    resultsWatcherSaga(),
    facultyWatcherSaga(),
    resultsWatcherSaga(),
    reportWatcherSaga(),
  ]);
}
