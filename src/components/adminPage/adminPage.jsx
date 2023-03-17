
//deleteUsers
// deleteAllUsers 
import { useContext, useEffect, useState } from "react";
import { getUsersAxios } from "../../api/requests";
import AdminUserContext from "../../context/apiContext";

const AdminPage = () => {

    const {deleteUser, allUsers, setAllUsers} = useContext(AdminUserContext);


    useEffect(() => {
        (async () => {
            const users = await getUsersAxios();
            setAllUsers(users.data);
        })();
       
    }, []);

    

    return(
        <div>
            <nav>
                <div>
                    Municipalidad
                </div>
                <p>NombreAdmin</p>
            </nav>
            <table>
                <thead>
                    <td>Nombre</td>
                    <td>Apellido</td>
                </thead>
                <tbody>
                    {allUsers.map(a => <tr key={a._id}>
                        <td>{a.name}</td>
                        <td>{a.lastname}</td>
                        <button>Aceptar</button>
                        <button onClick={() => deleteUser(a._id)}>Borrar</button>
                    </tr>)}
                </tbody>
            </table>
        </div>
    )
}

export default AdminPage;