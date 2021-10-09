import { all, takeLatest } from "@redux-saga/core/effects";
import { RepositoriesTypes } from "../types/types";
import { buscarUsuarios } from "./repositories/sagas";

export default function* rootSaga() {
  return yield all([
    takeLatest(RepositoriesTypes.LOAD_REQUEST, buscarUsuarios),
  ]);
}
