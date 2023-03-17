import { createContext, useState } from "react";
import { enterAdminAxios, getUsersAxios } from "../api/requests";
import { Navigate } from "react-router-dom";

const AdminUserContext = createContext();

export const AdminUserContextProvider = ({children}) => {

    const navigate = Navigate();

    const [allUsers, setAllUsers] = useState([]);
    const [adminInfo, setAdminInfo] = useState([]);

    const getAllUsers = () => {
        const users = getUsersAxios();
        setAllUsers(users);
    }

    const getAdminInfo = () => {
        console.log("estas en getAdminInfo");
        const info = enterAdminAxios();
        setAdminInfo(info);
        navigate("/Admin");
    }


    return(
        <AdminUserContext.Provider value={{getAllUsers, getAdminInfo, allUsers, adminInfo }}>{children}</AdminUserContext.Provider>
    )
}

export default AdminUserContext;