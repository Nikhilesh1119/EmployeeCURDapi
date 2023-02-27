import React, { Component } from 'react';
import { Insert } from '../Service/Service.js';

export default class Register extends Component {
    constructor(){
        super();
        this.state={
            data:{}
        }
    }
    handleChange=(e)=>{
        this.setState({
            data:{
                ...this.state.data,[e.target.name]:e.target.value
            }
        })
    }
    handleSubmit=(event)=>{
        event.preventDefault();
        Insert(this.state.data);
        console.log(this.state.data);
    }
  render() {
    return (
      <div>
        <div className="container">
            <form className="mt-4" onSubmit={this.handleSubmit}>
                <div className="row">
                    <div className="mb-3 col-lg-6 col-md-6 col-12">
                        <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                        <input type="text" onChange={this.handleChange} name="name" className="form-control" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3 col-lg-6 col-md-6 col-12">
                        <label htmlFor="exampleInputPassword1" className="form-label">email</label>
                        <input type="email" onChange={this.handleChange} name="email" className="form-control" />
                    </div>
                    <div className="mb-3 col-lg-6 col-md-6 col-12">
                        <label htmlFor="exampleInputPassword1" className="form-label">age</label>
                        <input type="number" onChange={this.handleChange}  name="age" className="form-control" />
                    </div>
                    <div className="mb-3 col-lg-6 col-md-6 col-12">
                        <label htmlFor="exampleInputPassword1" className="form-label">Mobile</label>
                        <input type="number" onChange={this.handleChange} name="mobile" className="form-control" />
                    </div>
                    <div className="mb-3 col-lg-6 col-md-6 col-12">
                        <label htmlFor="exampleInputPassword1" className="form-label">Work</label>
                        <input type="text" onChange={this.handleChange} name="work" className="form-control" />
                    </div>
                    <div className="mb-3 col-lg-6 col-md-6 col-12">
                        <label htmlFor="exampleInputPassword1" className="form-label">Address</label>
                        <input type="text" onChange={this.handleChange}  name="add" className="form-control" />
                    </div>
                    <div className="mb-3 col-lg-12 col-md-12 col-12">
                        <label htmlFor="exampleInputPassword1" className="form-label">Description</label>
                        <textarea name="desc" onChange={this.handleChange} className="form-control" cols="30" rows="5"></textarea>
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
      </div>
    )
  }
}