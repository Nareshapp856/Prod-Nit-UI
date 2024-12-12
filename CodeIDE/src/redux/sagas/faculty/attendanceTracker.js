import { call, put } from "redux-saga/effects";
import {
  at_fetchSlots,
  at_fetchStudents,
  at_retrieveDetailsActions,
  at_submitUserActions,
} from "../../../services/api";
import {
  at_fetchRetrieveDetailsError,
  at_fetchRetrieveDetailsStart,
  at_fetchRetrieveDetailsSuccess,
  at_fetchSlotError,
  at_fetchSlotStart,
  at_fetchSlotSuccess,
  at_fetchStudentError,
  at_fetchStudentStart,
  at_fetchStudentSuccess,
  at_submitActionsError,
  at_submitActionsRequest,
  at_submitActionsSuccess,
} from "../../slices/faculty/attendanceTracker";

export function* at_studentsSaga(action) {
  try {
    yield put(at_fetchStudentStart());

    const res = yield call(at_fetchStudents, action.payload);

    yield put(at_fetchStudentSuccess(res));
  } catch (error) {
    yield put(
      at_fetchStudentError({
        error: { error: error.name, code: 999, message: error.message },
      })
    );
  }
}

export function* at_slotsSaga(action) {
  try {
    yield put(at_fetchSlotStart());

    const res = yield call(at_fetchSlots, action.payload);

    yield put(at_fetchSlotSuccess(res));
  } catch (error) {
    yield put(
      at_fetchSlotError({
        error: { error: error.name, code: 999, message: error.message },
      })
    );
  }
}

export function* at_submitActionsSaga(action) {
  try {
    yield put(at_submitActionsRequest());

    const res = yield call(at_submitUserActions, action.payload);

    yield put(at_submitActionsSuccess(res));
  } catch (error) {
    yield put(
      at_submitActionsError({
        error: { error: error.name, code: 999, message: error.message },
      })
    );
  }
}

export function* at_retrieveDetailsSaga(action) {
  try {
    yield put(at_fetchRetrieveDetailsStart());

    const res = yield call(at_retrieveDetailsActions, action.payload);

    yield put(at_fetchRetrieveDetailsSuccess(res));
  } catch (error) {
    yield put(
      at_fetchRetrieveDetailsError({
        error: { error: error.name, code: 999, message: error.message },
      })
    );
  }
}
