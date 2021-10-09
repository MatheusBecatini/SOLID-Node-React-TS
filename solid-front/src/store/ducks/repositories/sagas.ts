import { AxiosResponse } from "axios";
import { call, put } from "redux-saga/effects";
import api from "../../../api";
import IUser from "../../../interfaces/IUser";
import { loadError, loadSucces } from "./actions";

export function* buscarUsuarios() {
  try {
    const response: AxiosResponse<IUser[]> = yield call(api.get, "/");
    yield put(loadSucces(response.data));
  } catch (err) {
    yield put(loadError());
  }
}
