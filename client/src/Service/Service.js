import axios from 'axios';

export function Insert(data) {
    return axios.post('http://localhost:4800/employee', data);
}

export function Find() {
    return axios.get('http://localhost:4800/employee');
}

export async function FindByName(name) {
    return await axios.get('http://localhost:4800/employee/' + name);
}

export async function UpdateEmployee(id, data) {
    const res = 'http://127.0.0.1:4800/employee/' + id;
    // console.log("updated");
    // console.log(id);
    // console.log(res);
    return await axios.put(res, data);
}

export async function Delete(id) {
    return await axios.delete('http://localhost:4800/employee/' + id);
}