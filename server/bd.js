import mongoose from "mongoose";
import { mongooseDB } from "./config.js";

export const connectionDB = () => {
    try{

        mongoose.set('strictQuery', false);
        mongoose.connect(mongooseDB, {useNewUrlParser: true});

    }catch(err){
        console(err);
    }
}