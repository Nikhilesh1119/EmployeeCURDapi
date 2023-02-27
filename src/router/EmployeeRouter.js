import express from "express";
import { Create,Find,Findbyname,Update,Delete } from "../controller/EmployeeController.js";
const Employeerouter=express.Router();

Employeerouter.get("/employee",Find);
Employeerouter.get("/employee/:name",Findbyname);
Employeerouter.post("/employee",Create);
Employeerouter.put("/employee/:id",Update);
Employeerouter.delete("/employee/:id",Delete);

export default Employeerouter;