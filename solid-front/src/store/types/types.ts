import IUser from "../../interfaces/IUser";

//All Aplication Stores
export interface ApplicationStore {
  userRepositories: UserRepositoryState;
}

// Action types
export enum RepositoriesTypes {
  LOAD_REQUEST = "@repositories/LOAD_REQUEST",
  LOAD_SUCCES = "@repositories/LOAD_SUCCES",
  LOAD_FAILURE = "@repositories/LOAD_FAILURE",
}

//Redux State type
export interface UserRepositoryState {
  readonly data: IUser[];
  readonly loading: boolean;
  readonly error: boolean;
}
