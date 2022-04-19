// 사용자의 상태를 담는 리덕스 모듈

import { createAction, handleActions } from "redux-actions";
import { takeLatest } from "redux-saga/effects";
import * as authAPI from "../lib/api/auth";
import createRequestSaga, {
  createRequestActionTypes,
} from "../lib/createRequestSaga";

// 새로고침 이후 임시 로그인 처리
const TEMP_USER = "user/TEMP_USER";

// 회원 정보 확인
const [CHECK, CHECK_SUCCESS, CHECK_FAILURE] =
  createRequestActionTypes("user/CHECK");

export const tempUser = createAction(TEMP_USER, (user) => user);
export const check = createAction(CHECK);

const checkSaga = createRequestSaga(CHECK, authAPI.check);
export function* userSaga() {
  yield takeLatest(CHECK, checkSaga);
}

const initialState = {
  user: null,
  checkError: null,
};

export default handleActions(
  {
    [TEMP_USER]: (state, { payload: user }) => ({
      ...state,
      user,
    }),
    [CHECK_SUCCESS]: (state, { payload: user }) => ({
      ...state,
      user,
      checkError: null,
    }),
    [CHECK_FAILURE]: (state, { payload: error }) => ({
      ...state,
      user: null,
      checkError: error,
    }),
  },
  initialState
);
