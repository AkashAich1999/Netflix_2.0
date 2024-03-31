// Step 1: Create Server
// const express = require("express");
import express from "express";
import dotenv from "dotenv";
import databaseConnection from "./utils/database.js";
import cookieParser from "cookie-parser";
import userRoute from "./routes/userRoute.js";

databaseConnection();

dotenv.config({
    path:".env"
});

const app = express();
// middlewares
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cookieParser());

// api
app.use("/api/v1/user", userRoute);
// http://localhost:8080/api/v1/user/register

app.listen(process.env.PORT, () => {
    console.log(`Server listen at Port ${process.env.PORT}`);
});

