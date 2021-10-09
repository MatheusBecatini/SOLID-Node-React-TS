import { action } from "typesafe-actions";

//action creators

import IUser from "../../../interfaces/IUser";
import { RepositoriesTypes } from "../../types/types";

export const loadRequest = () => action(RepositoriesTypes.LOAD_REQUEST);

export const loadSucces = (payload: IUser[]) =>
  action(RepositoriesTypes.LOAD_SUCCES, payload);

export const loadError = () => action(RepositoriesTypes.LOAD_FAILURE);
