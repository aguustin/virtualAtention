import { useContext } from "react";
import AdminUserContext from "../../context/apiContext";

//http://meet.google.com/new
const UsersFiles = ({ allU }) => {

    const {deleteUser} = useContext(AdminUserContext);

    return(
        <div>
             <table>
                <thead>
                    <td>Nombre</td>
                    <td>Apellido</td>
                </thead>
                <tbody>
                    <tr>
                        <td>{allU.name}</td>
                        <td>{allU.lastname}</td>
                        <button>Aceptar</button>
                        <button onClick={() => deleteUser(allU._id)}>Borrar</button>
                        <input type="text" name="meetURL" placeholder="meetText"></input>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default UsersFiles;