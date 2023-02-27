import { useState } from 'react';
import { UpdateEmp } from '../Service/Service.js';
import { Link } from 'react-router-dom';

export function Update(id) {
    const [emp, setemp] = useState({});
    const [isupdate, setisupdate] = useState(false);

    const handleChange = (e) => {
        setemp({ ...emp, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res=await UpdateEmp(id,emp);
        setisupdate(true);
        console.log(res);
    }
    return (
        <>
            <div className="container">
                <Link to="/">home2</Link>
                <form className="mt-4" onSubmit={handleSubmit} >
                    <div className="row">
                        <div class="mb-3 col-lg-6 col-md-6 col-12">
                            <label for="exampleInputEmail1" class="form-label">Name</label>
                            <input type="text" onChange={handleChange} name="name" class="form-control" aria-describedby="emailHelp" />
                        </div>
                        <div class="mb-3 col-lg-6 col-md-6 col-12">
                            <label for="exampleInputPassword1" class="form-label">email</label>
                            <input type="email" onChange={handleChange} name="email" class="form-control" />
                        </div>
                        <div class="mb-3 col-lg-6 col-md-6 col-12">
                            <label for="exampleInputPassword1" class="form-label">age</label>
                            <input type="text" onChange={handleChange} name="age" class="form-control" />
                        </div>
                        <div class="mb-3 col-lg-6 col-md-6 col-12">
                            <label for="exampleInputPassword1" class="form-label">Mobile</label>
                            <input type="number" onChange={handleChange} name="mobile" class="form-control" />
                        </div>
                        <div class="mb-3 col-lg-6 col-md-6 col-12">
                            <label for="exampleInputPassword1" class="form-label">Work</label>
                            <input type="text" onChange={handleChange} name="work" class="form-control" />
                        </div>
                        <div class="mb-3 col-lg-6 col-md-6 col-12">
                            <label for="exampleInputPassword1" class="form-label">Address</label>
                            <input type="text" onChange={handleChange} name="add" class="form-control" />
                        </div>
                        <div class="mb-3 col-lg-12 col-md-12 col-12">
                            <label for="exampleInputPassword1" class="form-label">Description</label>
                            <textarea name="desc" onChange={handleChange} className="form-control" cols="30" rows="5"></textarea>
                        </div>

                        <button type="submit" class="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        </>
    )
}