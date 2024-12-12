import { call, put } from "redux-saga/effects";
import {
  fetchProgramRequest,
  fetchProgramSuccess,
  fetchProgramError,
} from "../../slices/result";
import { programResultsApi } from "../../../services/results/programResults";

export function* programResultsSaga(action) {
  try {
    yield put(fetchProgramRequest());

    const res = yield call(programResultsApi, action.payload);

    yield put(
      fetchProgramSuccess({
        data: res.data || {},
        status: res.status || null,
      })
    );
  } catch (error) {
    yield put(
      fetchProgramError({
        error: { error: "stuff", code: 200, message: "placeholder" },
      })
    );
  }
}
