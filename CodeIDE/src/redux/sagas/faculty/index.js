import { takeLatest } from "redux-saga/effects";
import { types } from "../../actions/types";
import {
  at_retrieveDetailsSaga,
  at_slotsSaga,
  at_studentsSaga,
  at_submitActionsSaga,
} from "./attendanceTracker";

export function* facultyWatcherSaga() {
  yield takeLatest(types.AT_STUDENTS_LIST, at_studentsSaga);
  yield takeLatest(types.AT_SLOTS_LIST, at_slotsSaga);
  yield takeLatest(types.AT_SUBMITACTIONS, at_submitActionsSaga);
  yield takeLatest(types.AT_RETRIEVEDETAILS, at_retrieveDetailsSaga);
}
