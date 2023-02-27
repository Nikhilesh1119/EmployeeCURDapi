import express from "express";
import "dotenv/config";
import {configdb} from "./src/database/configdb.js";
import Employeerouter from './src/router/EmployeeRouter.js';
import cors from 'cors';

const app=express();
app.use(cors());
app.use(express.json());
app.use(Employeerouter);
app.listen(process.env.PORT,(req,res)=>{
    configdb();
    console.log(`Server is running at port ${process.env.PORT}`);
})
