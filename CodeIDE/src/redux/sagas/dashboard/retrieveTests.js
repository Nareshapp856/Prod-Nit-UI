import { call, put } from "redux-saga/effects";
import {
  fetchMcqAndProgramError,
  fetchMcqAndProgramStart,
  fetchMcqAndProgramSuccess,
} from "../../slices/dashboard";
import { getMcqandProgramsApi } from "../../../services/api";

export function* mcqsandprogramsSaga(action) {
  try {
    yield put(fetchMcqAndProgramStart());

    const res = yield call(getMcqandProgramsApi, action.payload);

    yield put(
      fetchMcqAndProgramSuccess({
        data: res.data.dbresult || [],
        status: res.status || null,
      })
    );
  } catch (error) {
    yield put(
      fetchMcqAndProgramError({
        error: { error: error.name, code: 999, message: error.message },
      })
    );
  }
}
