import { put } from "@redux-saga/core/effects";
import { startLoading, finishLoading } from "../modules/loading";
import axios from "axios";

export const createRequestActionTypes = (type) => {
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;
  return [type, SUCCESS, FAILURE];
};

export default function createRequestSaga(type, request) {
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;

  const login = async (id, password) => {
    console.log(id, password);
    await axios.post("/admin/signin", {
      id: id,
      pw: password,
    });
  };

  return function* (action) {
    yield put(startLoading(type));
    try {
      console.log(action.payload);
      request(action.payload.userId, action.payload.password).then((response) =>
        console.log(response)
      );
      yield put({
        type: SUCCESS,
        //response: res,
      });
    } catch (err) {
      yield put({ type: FAILURE, payload: err, error: true });
    }

    yield put(finishLoading(type));
  };
}
