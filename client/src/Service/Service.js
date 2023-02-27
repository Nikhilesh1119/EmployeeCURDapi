import axios from 'axios';

export function Insert(data){
    return axios.post('http://localhost:4800/employee',data);
}

export function Find(){
    return axios.get('http://localhost:4800/employee');
}

export function FindByName(name){
    return axios.get('http://localhost:4800/employee/'+name);
}

export function UpdateEmp(id,data){
    return axios.put('http://localhost:4800/employee/'+id,data);
}

export function Delete(id){
    return axios.delete('http://localhost:4800/employee/'+id);
}