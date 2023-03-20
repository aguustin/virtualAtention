
//deleteUsers
// deleteAllUsers 
import { useContext, useEffect } from "react";
//import { getUsersAxios } from "../../api/requests";
import AdminUserContext from "../../context/apiContext";
import UsersFiles from "../usersFiles/usersFiles";


const AdminPage = () => {

    const {getUsersContext, adminInfo, allUsers} = useContext(AdminUserContext);


    useEffect(() => {

        (async() => {
            await getUsersContext();
        })();
       
    }, []);

    if(allUsers.length === 0){
        return(
            <div>
                <h1>no hay ningun usuario</h1>
            </div>
        )
      
    }else{

        return(
            <div>
                <nav>
                    <div>
                        Municipalidad
                    </div>
                    <p>{adminInfo[0].name}</p>
                </nav>
            { allUsers.map(allU => (
                 <UsersFiles  allU={allU} key={allU._id} />
            )) }
            </div>
        )

    }

}

export default AdminPage;