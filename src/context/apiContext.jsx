import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { enterAdminAxios, getUsersAxios ,deleteUserAxios } from "../api/requests";


const AdminUserContext = createContext();

export const AdminUserContextProvider = ({children}) => {

    const [adminInfo, setAdminInfo] = useState([]);
    const [allUsers, setAllusers] = useState([]);

    const getUsersContext = async () => {
        const users = await getUsersAxios();
        setAllusers(users.data);
    }

    const getAdminInfo = async (name, email, password) => {
        
        const info = await enterAdminAxios({name, email, password});
        
        setAdminInfo(info.data);

        console.log(adminInfo);
        
    }

    const deleteUser = async (id) => {
        try {
            await deleteUserAxios(id);
            setAllusers(allUsers.filter((users) => users._id !== id));
        } catch (error) {
            console.log(error);
        }
        
        
    }


    return <AdminUserContext.Provider value={{getAdminInfo, deleteUser , adminInfo, getUsersContext, allUsers, setAllusers }}>{children}</AdminUserContext.Provider>
    
}

export default AdminUserContext;