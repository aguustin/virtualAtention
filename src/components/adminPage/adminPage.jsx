
//deleteUsers
// deleteAllUsers 
import { useContext, useEffect, useState } from "react";
import { getUsersAxios } from "../../api/requests";
import AdminUserContext from "../../context/apiContext";

const AdminPage = () => {

    const [allUsers, setAllUsers] = useState([]);
    const {adminInfo} = useContext(AdminUserContext);

    useEffect(() => {
        const users = getUsersAxios();
        allUsers(users);
    }, []);

    console.log(adminInfo);
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
                    <button>Aceptar</button>
                    <button>Borrar</button>
                </thead>
                <tbody>
                    <tr>
                        <td>Nombre</td>
                        <td>Apellido</td>
                        <button>Aceptar</button>
                        <button>Borrar</button>
                    </tr>
                    <tr>
                        <td>Nombre</td>
                        <td>Apellido</td>
                        <button>Aceptar</button>
                        <button>Borrar</button>
                    </tr>
                    <tr>
                        <td>Nombre</td>
                        <td>Apellido</td>
                        <button>Aceptar</button>
                        <button>Borrar</button>
                    </tr>
                    <tr>
                        <td>Nombre</td>
                        <td>Apellido</td>
                        <button>Aceptar</button>
                        <button>Borrar</button>
                    </tr>
                    <tr>
                        <td>Nombre</td>
                        <td>Apellido</td>
                        <button>Aceptar</button>
                        <button>Borrar</button>
                    </tr>
                    <tr>
                        <td>Nombre</td>
                        <td>Apellido</td>
                        <button>Aceptar</button>
                        <button>Borrar</button>
                    </tr>
                    <tr>
                        <td>Nombre</td>
                        <td>Apellido</td>
                        <button>Aceptar</button>
                        <button>Borrar</button>
                    </tr>
                    <tr>
                        <td>Nombre</td>
                        <td>Apellido</td>
                        <button>Aceptar</button>
                        <button>Borrar</button>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default AdminPage;