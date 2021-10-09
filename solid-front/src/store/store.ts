import { applyMiddleware, createStore, Store } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import rootReducer from "./ducks/rootReducer";
import rootSaga from "./ducks/rootSaga";
import { ApplicationStore } from "./types/types";

const sagaMiddleware = createSagaMiddleware();

const store: Store<ApplicationStore> = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

export default store;
