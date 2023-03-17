import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { enterAdminAxios, deleteUserAxios } from "../api/requests";


const AdminUserContext = createContext();

export const AdminUserContextProvider = ({children}) => {

    const navigate = useNavigate();

    const [adminInfo, setAdminInfo] = useState([]);
    const [allusers, setAllusers] = useState([]);

    const getAdminInfo = async (name, email, password) => {
        
        const info = await enterAdminAxios({name, email, password});
        setAdminInfo(info.data);
        navigate("/Admin");
    }

    const deleteUser = async (id) => {
        const res = await deleteUserAxios(id);
        setAllusers(res);
    }


    return <AdminUserContext.Provider value={{getAdminInfo, deleteUser , adminInfo, allusers, setAllusers }}>{children}</AdminUserContext.Provider>
    
}

export default AdminUserContext;