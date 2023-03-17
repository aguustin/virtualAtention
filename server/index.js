import express, { urlencoded } from "express";
import adminRoutes from "./routes/adminRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import { connectionDB } from "./bd.js";
import { port } from "./config.js";

const app = express();
connectionDB();

//settings

//middlewares
app.use(express.json());
app.use(express.text());
app.use(urlencoded({extended: false}));

//routes

app.use(adminRoutes);
app.use(userRoutes);

//listen
app.listen(port);
console.log("The server is running in port:", port);
