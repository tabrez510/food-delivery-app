import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/connectDB";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;


app.listen(PORT, () => {
    connectDB();
    console.log(`Server listen at port ${PORT}`);
});