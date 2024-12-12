import {
  requestReportError,
  requestReportStart,
  requestReportSuccess,
} from "../../slices/report/reportSlice";
import { types } from "../../actions/types";
import { reportApi } from "../../../services/api";
import { call, put, takeLatest } from "redux-saga/effects";

export function* reportSage(action) {
  try {
    yield put(requestReportStart());

    const res = yield call(reportApi, action.payload);

    yield put(requestReportSuccess(res));
  } catch (error) {
    yield put(
      requestReportError({
        error: { error: error.name, code: 999, message: error.message },
      })
    );
  }
}

export function* reportWatcherSaga() {
  yield takeLatest(types.REPORT, reportSage);
}
