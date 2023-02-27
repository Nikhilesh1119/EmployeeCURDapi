import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Find, Delete } from '../Service/Service.js';
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import CreateIcon from "@mui/icons-material/Create";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      empdata: []
    }
  }

  async componentDidMount() {
    const res = await Find();
    this.setState({ empdata: res.data });
  }

  async componentDidUpdate() {
    const res = await Find();
    this.setState({ empdata: res.data });
  }

  render() {
    return (
      <div>
        <div className="mt-5">
          <div className="container">
            <div className="add_btn mt-2 mb-2">
              <Link to="/register" className="btn btn-primary">
                Add data
              </Link>
            </div>
            <table className="table">
              <thead>
                <tr className="table-dark">
                  <th scope="col">Username</th>
                  <th scope="col">email</th>
                  <th scope="col">Job</th>
                  <th scope="col">Number</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                {
                  this.state.empdata.map((e) => {
                    return (
                      <tr>
                        <td>{e.name}</td>
                        <td>{e.email}</td>
                        <td>{e.work}</td>
                        <td>{e.mobile}</td>
                        <td className="d-flex justify-content-between">
                          <Link to="/info">{" "}
                            <button className="btn btn-success"><RemoveRedEyeIcon /></button>
                          </Link>
                          <Link to="/update">{" "}
                            <button className="btn btn-primary"><CreateIcon /></button>
                          </Link>
                          <Link>
                            <button className="btn btn-danger" onClick={() => { Delete(e._id) }}><DeleteOutlineIcon /></button>
                          </Link>
                        </td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </table>
          </div>
        </div>
      </div >
    )
  }
}