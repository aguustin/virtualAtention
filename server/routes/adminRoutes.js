import { Router } from "express";
import { createAdminAccount, enterAdminAccount } from "../controllers/adminControllers.js";

const router = Router();

router.post("/createAdmin", createAdminAccount);

router.post("/adminAccount", enterAdminAccount);


export default router;