import { call, put } from "redux-saga/effects";

import {
  deleteProgramApi,
  fetchProgramsByTechnbologyApi,
} from "../../../services/api";
import {
  fetchProgramsError,
  fetchProgramsStart,
  fetchProgramsSuccess,
  requestDeleteProgramError,
  requestDeleteProgramStart,
  requestDeleteProgramSuccess,
} from "../../slices/programView/programsSlice";

export function* programsSaga(action) {
  try {
    yield put(fetchProgramsStart({}));

    const res = yield call(fetchProgramsByTechnbologyApi, action.payload);

    yield put(fetchProgramsSuccess({ ...res }));
  } catch (error) {
    yield put(
      fetchProgramsError({
        error: { error: error?.name },
        status: error?.response?.status,
      })
    );
  }
}

export function* deleteProgramSaga(action) {
  try {
    yield put(requestDeleteProgramStart({}));

    const res = yield call(deleteProgramApi, action.payload);

    yield put(requestDeleteProgramSuccess({ ...res }));
  } catch (error) {
    yield put(
      requestDeleteProgramError({
        error: { error: error?.name },
        status: error?.response?.status,
      })
    );
  }
}
