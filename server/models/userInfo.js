import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    lastname: {
        type: String,
        require: true
    },
    userCount: {
        type: Number,
        require: true
    }
})

export default mongoose.model("User", UserSchema);