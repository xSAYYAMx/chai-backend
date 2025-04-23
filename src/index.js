// require('dotenv').config()
import dotenv from "dotenv";
import connectDb from "./db/db.js";

dotenv.config({
    path: "./env"
});

connectDb()



















/*

//FIRST APPROACH OF CONNECTING DATABASE DIRECTLY IN THE index.js FILE

import express from "express";
const app = express();


//IIFE banake connect kiaa h database ko
( async () => {
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)

        app.on("error", (error)=>{
            console.log("Error: ", error);
            throw error;
        })

        app.listen(process.env.PORT, () => {
            console.log(`Server is running on port ${process.env.PORT}`);
        })
    }
    catch(error){
        console.error("Error: ", error);
        throw error;
    }
})()

*/