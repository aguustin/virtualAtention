import User from "../models/userInfo.js"

export const enterUser = async (req, res) => {

    const name = req.body.name;
    const lastname = req.body.lastname;

    if(name && lastname){

        const dataCounter = await User.find().count();

        if(!dataCounter){
            const userFile = 0;

            const saveUser = new User({
                name: name,
                lastname: lastname,
                userCount: userFile
            })

            await saveUser.save();

            res.send(saveUser);

        }else{

            const saveUser = new User({
                name: name,
                lastname: lastname,
                userCount: dataCounter
            })

            await saveUser.save();

            console.log(saveUser);

            res.send(saveUser);
        }

    }else{
        console.log("Ingresar credenciales");
    }
}

export const getUsers = async (req, res) => {

    const allUsers = await User.find().sort({userCount: +1});

    res.send(allUsers);
}

export const deleteUsers = async (req, res) => {

    const id = req.params.id;

    await User.findByIdAndDelete({_id: id});

    const refresh = await User.find().sort({userCount: +1})
    
    res.send(refresh);
}

export const deleteAllUsers = async (req, res) => {

    await User.deleteMany();

    res.sendStatus(200);

}