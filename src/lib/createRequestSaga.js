import { call, put } from "@redux-saga/core/effects";
import { startLoading, finishLoading } from "../modules/loading";

export const createRequestActionTypes = (type) => {
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;
  return [type, SUCCESS, FAILURE];
};

export const createRequestSaga = (type, request) => {
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;

  return function* (action) {
    yield put(startLoading(type));

    try {
      const response = yield call(request, action.payload);
      yield put({ type: SUCCESS, payload: response.data });
    } catch (err) {
      yield put({ type: FAILURE, payload: err, error: true });
    }

    yield put(finishLoading(type));
  };
};

export default createRequestSaga;
