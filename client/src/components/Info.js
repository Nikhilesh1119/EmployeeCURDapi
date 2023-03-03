import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import { Delete } from '../Service/Service';
// import CreateIcon from '@mui/icons-material/Create';
// import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import WorkIcon from '@mui/icons-material/Work';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { FindByName } from '../Service/Service';

export default class Info extends Component {
    async componentDidMount(name) {
        const res = await FindByName(name);
        console.log(res)
      }
    render() {
        return (
            <div>
                <div className="container mt-3">
                    <h1 style={{ fontWeight: 400 }}>Welcome</h1>

                    <Card sx={{ maxWidth: 600 }}>
                        <CardContent>
                            {/* <div className="add_btn"> */}
                                {/* <Link to="/update" >  <button className="btn btn-primary mx-2"><CreateIcon /></button></Link>
                                <button className="btn btn-danger" onClick={() => { Delete(this.state._id) }}><DeleteOutlineIcon /></button>
                            </div> */}
                            <div className="row">
                                <div className="left_view col-lg-6 col-md-6 col-12">
                                    <img src="/profile.png" style={{ width: 50 }} alt="profile" />
                                    <h3 className="mt-3">Name: <span ></span></h3>
                                    <h3 className="mt-3">Age: <span ></span></h3>
                                    <p className="mt-3"><MailOutlineIcon />Email: <span></span></p>
                                    <p className="mt-3"><WorkIcon />Occuption: <span></span></p>
                                </div>
                                <div className="right_view  col-lg-6 col-md-6 col-12">

                                    <p className="mt-5"><PhoneAndroidIcon />mobile: <span>+91 </span></p>
                                    <p className="mt-3"><LocationOnIcon />location: <span></span></p>
                                    <p className="mt-3">Description: <span></span></p>
                                </div>
                            </div>

                        </CardContent>
                    </Card>
                </div>
            </div>
        )
    }
}