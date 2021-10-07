import api from "../api";
import IUser from "../interfaces/IUser";

export const buscarUsuarios = async (): Promise<IUser[]> => {
  const response = await api.get<IUser[]>("/");
  return response.data;
};
