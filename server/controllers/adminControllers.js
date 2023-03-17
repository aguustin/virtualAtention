import bcrypt from "bcrypt";
import Admin from "../models/adminInfo.js";

export const createAdminAccount = async (req, res) => {

    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    const repitePassword = req.body.repitePassword;

    if(name && email && password && repitePassword){

        if(password == repitePassword){

            const salt = await bcrypt.genSaltSync(10);

            const hashedPass = await bcrypt.hash(password, salt);
    
            const saveAdminAccount = new Admin({
                name: name,
                email: email,
                password: hashedPass
            })
    
            await saveAdminAccount.save()
    
            res.send(saveAdminAccount);
    
        }else{
            console.log("los passwords no coinciden");
            res.sendStatus(500);
        }

    }else{

        console.log("Ingresar todos los campos");

        res.sendStatus(500);

     }
    }


export const enterAdminAccount = async (req, res) => {

    const email = req.body.email;
    const password = req.body.password;

    if(!email || !password){
      
        console.log("ingresar credenciales");

        res.sendStatus(404);

    }else{

        const searchForAdmin = await Admin.find({email: email});

        if(searchForAdmin != 0){

            const succesfullCompare = await bcrypt.compareSync(password, searchForAdmin[0].password);

            if(succesfullCompare){

                res.send(searchForAdmin);

            }else{

                res.sendStatus(404);

            }

        }else{
            console.log("Mail no encontrado");

            res.sendStatus(404);

        }
    }
}