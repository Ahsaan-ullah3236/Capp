import axios from "axios";
import { User } from "../types/user";

const API_URL = "http://localhost:5000/users";

export const getUsers = async () => {
  return axios.get<User[]>(API_URL);
};

export const createUser = async (user: User) => {
  return axios.post(API_URL, user);
};

export const updateUser = async (id: number, user: User) => {
  return axios.put(`${API_URL}/${id}`, user);
};

export const deleteUser = async (id: number) => {
  return axios.delete(`${API_URL}/${id}`);
};