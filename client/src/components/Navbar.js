import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FindByName } from '../Service/Service';
export default class Navbar extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            emp: []
        }
    }

    handleChange = (e) => {
        this.setState({ 'name': e.target.value });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const res = FindByName(this.state.name);
        this.setState({ emp: res.data });
        console.log(this.state.emp);
    }
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">CRUD APP</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                                </li>
                            </ul>
                            <form className="d-flex" onSubmit={this.handleSubmit}>
                                <input className="form-control me-2" onChange={this.handleChange} type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success" onClick={() => { FindByName(this.state.name) }} type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}