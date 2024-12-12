import { call, delay, put } from "redux-saga/effects";
import {
  fetchDialyTasksError,
  fetchDialyTasksStart,
  fetchDialyTasksSuccess,
} from "../../slices/dashboard";
import { getDailyTasksApi } from "../../../services/api";

const MAX_RETRIES = 5;
const INITIAL_DELAY = 1000;

export function* dailyTasksSaga(action) {
  try {
    yield put(fetchDialyTasksStart());

    let success = false;
    let retries = 0;

    while (retries <= MAX_RETRIES && !success) {
      try {
        let res = yield call(getDailyTasksApi, action.payload);
        yield put(fetchDialyTasksSuccess(res.body));
        success = true;
      } catch (error) {
        retries++;
        const delayTime = INITIAL_DELAY * 2 ** retries;
        yield delay(delayTime);
      }
    }
  } catch (error) {
    yield put(
      fetchDialyTasksError({
        error: { error: "stuff", code: 200, message: "placeholder" },
      })
    );
  }
}
