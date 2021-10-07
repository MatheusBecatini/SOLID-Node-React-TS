import React from "react";
import IUser from "../interfaces/IUser";

interface Props {
  user: IUser;
  index?: number;
}

const UserFragment: React.FC<Props> = (props) => {
  const { user, index } = props;
  return (
    <div style={{ marginBottom: 50 }}>
      <h3>Usuário {index}</h3>
      <p>{`👨‍💻 Id: ${user.id}`}</p>
      <p>{`😀 Nome: ${user.name}`}</p>
      <p>{`📩 Email: ${user.email}`}</p>
      <p>{`🔑 Password: ${user.password}`}</p>
    </div>
  );
};

export default UserFragment;
