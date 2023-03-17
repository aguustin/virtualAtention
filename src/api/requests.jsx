import axios from "axios";

export const saveUserAxios = () => axios.post("/enterUser");

export const getUsersAxios = () => axios.get("/getUsers");

export const enterAdminAxios = async (name, email, password) => await axios.post("/adminAccount", name, email, password);

export const deleteUserAxios = async (id) => await axios.delete(`/deleteUser/${id}`);
