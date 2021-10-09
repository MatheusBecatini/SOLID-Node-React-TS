import { useEffect } from "react";
import { connect } from "react-redux";
import { Dispatch, bindActionCreators } from "redux";
import IUser from "../interfaces/IUser";
import { ApplicationStore } from "../store/types/types";
import UserFragment from "./UserFragment";
import * as repositoriesActions from "../store/ducks/repositories/actions";

interface StateProps {
  users: IUser[];
  loading: boolean;
  error: boolean;
}

interface DispatchProps {
  loadRequest(): void;
}

interface OwnProps {
  any?: any;
}

type Props = StateProps & DispatchProps & OwnProps;

const UsersComponent: React.FC<Props> = (props) => {
  const { users, loading, error, loadRequest } = props;

  useEffect(() => {
    loadRequest();
  }, [loadRequest]);

  return (
    <div>
      <h1>Usuários adicionados na API</h1>
      {loading && <h4> Carregando...</h4>}
      {error && (
        <h2 style={{ color: "red" }}>
          Ocorreu um erro ao comunicar com o servidor!!!
        </h2>
      )}
      {!loading &&
        !error &&
        users.map((user, index) => {
          return <UserFragment key={index} user={user} index={index} />;
        })}
    </div>
  );
};

const mapStateToProps = (state: ApplicationStore) => {
  return {
    users: state.userRepositories.data,
    loading: state.userRepositories.loading,
    error: state.userRepositories.error,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(repositoriesActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(UsersComponent);
