import "./enterForms.css";
import { useContext, useState } from "react";
import { saveUserAxios } from "../../api/requests";
import AdminUserContext from "../../context/apiContext";


const EnterForms = () => {

    const [provitionalState, setProvitionalState] = useState(true);
    const {getAdminInfo} = useContext(AdminUserContext);

    const saveUser = () => {
        saveUserAxios();
    }

    const enterAdmin = () => {
        getAdminInfo();
    }

    const UserForm = () => {
        return(
            <div className="divForm">
                <button className="change" onClick={() => setProvitionalState(!provitionalState)}>change</button>
                <form method="POST" onSubmit={() => saveUser()} className="userForm">
                    <div>
                        <label for="Nombre"></label>
                            <input className="form-input" type="text" name="name" placeholder="Ingresa tu nombre"></input>
                    </div>
                    <div>
                        <label for="Apellido"></label>
                            <input className="form-input" type="text" name="lastname" placeholder="Ingresa tu apellido"></input>
                    </div>
                    <button type="submit">Ingresar</button>
                </form>
            </div>
        )
    }
   

    const AdminForm = () => {
        return(
            <div>
                <button className="change" onClick={() => setProvitionalState(!provitionalState)}>change</button>
                <form method="POST" onSubmit={() => enterAdmin()} className="userForm">
                    <div>
                        <label for="Nombre"></label>
                            <input className="form-input" type="text" name="name" placeholder="Ingresa tu nombre"></input>
                    </div>
                    <div>
                        <label for="Email"></label>
                            <input className="form-input" type="text" name="email" placeholder="Ingresa tu email"></input>
                    </div>
                    <div>
                        <label for="Password"></label>
                            <input className="form-input" type="text" name="password" placeholder="Ingresa tu contraseña"></input>
                    </div>
                    <div>
                        <label for="RepeatPassword"></label>
                            <input className="form-input" type="text" name="repeatPassword" placeholder="Repetir contraseña"></input>
                    </div>
                    <button type="submit">Ingresar</button>
                </form>
            </div>
        )
    }

    return(
        <div>
            {provitionalState ? <UserForm/> : <AdminForm/>}
        </div>
    )

   
}

export default EnterForms