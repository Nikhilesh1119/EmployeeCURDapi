import { EmployeeModel } from "../model/EmployeeModel.js";
import { StatusCodes } from "http-status-codes";

export async function Create(req, res) {
    try {
        let s1 = new EmployeeModel(req.body);
        let x = await s1.save();
        res.status(StatusCodes.CREATED).json(x);
    } catch (error) {
        console.log(error);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json();
    }
}
export async function Update(req, res) {
    try {
        await EmployeeModel.findByIdAndUpdate(req.params.id, req.body);
        res.status(StatusCodes.NO_CONTENT).json();
    } catch (err) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json();
    }
}
export async function Findbyname(req, res) {
    try {
        const find = await EmployeeModel.find({ 'name': req.params.name });
        if (find.length > 0) res.status(StatusCodes.OK).json(find);
        else res.status(StatusCodes.NOT_FOUND).json('not found')
    } catch (err) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR);
    }
}
export async function Find(req, res) {
    try {
        const emp = await EmployeeModel.find();
        if (emp) res.status(StatusCodes.OK).json(emp);
        else res.status(StatusCodes.NOT_FOUND).json('not found');
    } catch (err) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR);
    }
}
export async function Delete(req, res) {
    try {
        await EmployeeModel.findByIdAndDelete(req.params.id);
        res.status(StatusCodes.OK).json();
    } catch (err) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json();
    }
}
