import mongoose from "mongoose";
const Employeeschema=new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    age:{type:Number,required:true},
    mobile:{type:Number,required:true},
    work:{type:String,require:true},
    add:{type:String,require:true},
    desc:{type:String,require:true}
});
export const EmployeeModel=mongoose.model('employee',Employeeschema);