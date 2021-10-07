import React, { useState, useEffect } from "react";
import IUser from "../interfaces/IUser";
import UserFragment from "./UserFragment";
import { buscarUsuarios } from "./userService";

const Users = () => {
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    const buscarDados = async () => {
      setUsers(await buscarUsuarios());
    };
    buscarDados();
  }, []);

  return (
    <div>
      <h1>Usuários adicionados na API</h1>
      {users.map((user, index) => {
        return <UserFragment key={index} user={user} index={index} />;
      })}
    </div>
  );
};

export default Users;
