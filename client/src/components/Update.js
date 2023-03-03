import { useState } from 'react';
import { UpdateEmployee } from '../Service/Service';
import { Link } from 'react-router-dom';

export function Update(id) {
    const [emp, setemp] = useState({});

    const handleChange = (e) => {
        setemp({ ...emp, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(emp);
        console.log(id);
        UpdateEmployee(id, emp);
    }

    return (
        <div>
            <div className="container">
                <Link to="/">Home2</Link>
                <form className="mt-4" onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="mb-3 col-lg-6 col-md-6 col-12">
                            <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                            <input type="text" onChange={handleChange} name="name" className="form-control" aria-describedby="emailHelp" />
                        </div>
                        <div className="mb-3 col-lg-6 col-md-6 col-12">
                            <label htmlFor="exampleInputPassword1" className="form-label">email</label>
                            <input type="email" onChange={handleChange} name="email" className="form-control" />
                        </div>
                        <div className="mb-3 col-lg-6 col-md-6 col-12">
                            <label htmlFor="exampleInputPassword1" className="form-label">age</label>
                            <input type="number" onChange={handleChange} name="age" className="form-control" />
                        </div>
                        <div className="mb-3 col-lg-6 col-md-6 col-12">
                            <label htmlFor="exampleInputPassword1" className="form-label">Mobile</label>
                            <input type="number" onChange={handleChange} name="mobile" className="form-control" />
                        </div>
                        <div className="mb-3 col-lg-6 col-md-6 col-12">
                            <label htmlFor="exampleInputPassword1" className="form-label">Work</label>
                            <input type="text" onChange={handleChange} name="work" className="form-control" />
                        </div>
                        <div className="mb-3 col-lg-6 col-md-6 col-12">
                            <label htmlFor="exampleInputPassword1" className="form-label">Address</label>
                            <input type="text" onChange={handleChange} name="add" className="form-control" />
                        </div>
                        <div className="mb-3 col-lg-12 col-md-12 col-12">
                            <label htmlFor="exampleInputPassword1" className="form-label">Description</label>
                            <textarea name="desc" onChange={handleChange} className="form-control" cols="30" rows="5"></textarea>
                        </div>

                        <button type="submit" className="btn btn-primary">Update</button>
                    </div>
                </form>
            </div>
        </div>
    )
}