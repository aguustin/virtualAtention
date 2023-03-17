import dotenv from "dotenv";
dotenv.config();

export const port = process.env.PORT;
export const mongooseDB = process.env.MONGOOSE_URI;