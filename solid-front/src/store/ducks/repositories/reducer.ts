import { Reducer } from "redux";
import { RepositoriesTypes, UserRepositoryState } from "../../types/types";

const INITIAL_STATE: UserRepositoryState = {
  data: [],
  error: false,
  loading: false,
};

const reducer: Reducer<UserRepositoryState> = (
  state = INITIAL_STATE,
  action
) => {
  switch (action.type) {
    case RepositoriesTypes.LOAD_REQUEST:
      return { ...state, loading: true, error: false };
    case RepositoriesTypes.LOAD_SUCCES:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload,
      };
    case RepositoriesTypes.LOAD_FAILURE:
      return { ...state, loading: false, error: true };

    default:
      return state;
  }
};

export default reducer;
