import { put, call } from "redux-saga/effects";
import {
  loginFailure,
  loginRequest,
  loginSuccess,
} from "../../slices/user/userSlice";
import { loginApi } from "../../../services/api";
import { SER_AO_INSTANCE } from "../../../services/auth/LoginObservers";

export function* loginSaga(action) {
  try {
    yield put(loginRequest());

    const res = yield call(loginApi, action.payload);

    const {
      IsAuthenticated: isAuthenticated,
      studentId: userId,
      UserName: userName,
      UserName: email,
      FirstName: firstName,
      LastName: lastName,
      BatchName: batchName,
      role: role,
    } = res.data;


    const statusCode = res.status;

    yield put(
      loginSuccess({
        isAuthenticated,
        userId,
        userName,
        firstName,
        lastName,
        email,
        statusCode,
        batchName,
        role,
      })
    );

    SER_AO_INSTANCE.SER_AO_D_login(res);
  } catch (error) {
    if (error.response.status === 401) {
      yield put(
        loginFailure({
          error: {
            message: error.response.data,
            status: error.response.data,
            isSuccessResponse: error.response.status,
          },
        })
      );
    } else {
      yield put(loginFailure(error));
    }
  }
}
