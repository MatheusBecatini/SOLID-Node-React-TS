import { applyMiddleware, createStore, Store } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import rootReducer from "./ducks/rootReducer";
import { UserRepositoryState } from "./types/types";
import rootSaga from "./ducks/rootSaga";

export interface ApplicationStore {
  userRepositories: UserRepositoryState;
}

const sagaMiddleware = createSagaMiddleware();

const store: Store<ApplicationStore> = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

export default store;
