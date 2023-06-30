//const express = require("express");
import express from 'express';
import cors from 'cors';
import mongoose  from 'mongoose';
import dotenv from 'dotenv';
import userrouter from './routes/user-routes';
import adminrouter from './routes/admin-routes';
import busrouter from './routes/bus-routes';
import bussearchrouter from './routes/bussearch-routes';
import bookingrouter from './routes/booking-routes';
const app = express();

dotenv.config();
app.use(cors());

// app.use("/", (req, res, next)=>{
//     res.send("<h1>Pavan Kumar Simma</h1><h3>This is a heading 3 . \n wdhhnkm</h3>");
// });
app.use(express.json());
// headers('Access-Control-Allow-Origin: *');
// headers('Access-Control-Allow-Methods: POST, GET, PUT, OPTIONS, DELETE');
// headers('Access-Control-Allow-Headers: Content-Type, X-Auth-Token, Origin, Authorization');

app.use("/user", userrouter);
app.use("/admin", adminrouter);
app.use("/bus", busrouter);
app.use("/booking", bookingrouter);
app.use("/search", bussearchrouter);

mongoose.connect(
    `mongodb+srv://pavankumarsimma08:${process.env.MONGODB_PWD}@cluster0.vwuk02l.mongodb.net/?retryWrites=true&w=majority`
).then(()=>app.listen(5000, ()=>
    //console.log(`Connected to port ${5000}`);
    console.log("Connected to DB ans Server is running")
    )
    ).catch((err)=>console.log(err));

// app.listen(5000, ()=>{
//     console.log(`Connected to port ${5000}`);
// kldfklmklmfn
// fbkjndfjbjnmdbjf
// });


//Iitpavan931