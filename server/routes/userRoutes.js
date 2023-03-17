import { Router } from "express";
import { enterUser, getUsers, deleteUsers, deleteAllUsers } from "../controllers/userControllers.js";

const router = Router();

router.post("/enterUser", enterUser);

router.get("/getUsers", getUsers);

router.delete("/deleteUser/:id", deleteUsers);

router.delete("/deleteAllUsers", deleteAllUsers);


export default router;