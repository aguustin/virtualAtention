import axios from "axios";

export const saveUserAxios = () => axios.post("/enterUser");

export const getUsersAxios = () => axios.get("/getUsers");

export const enterAdminAxios = () => axios.post("/adminAccount");
