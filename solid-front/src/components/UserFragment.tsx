import React from "react";
import IUser from "../interfaces/IUser";

interface OwnProps {
  user: IUser;
  index?: number;
}

const UserFragment: React.FC<OwnProps> = (props) => {
  const { user, index } = props;
  return (
    <div style={{ marginBottom: 50 }}>
      <h3>UsuΓ‘rio {index}</h3>
      <p>{`π¨βπ» Id: ${user.id}`}</p>
      <p>{`π Nome: ${user.name}`}</p>
      <p>{`π© Email: ${user.email}`}</p>
      <p>{`π Password: ${user.password}`}</p>
    </div>
  );
};

export default UserFragment;
