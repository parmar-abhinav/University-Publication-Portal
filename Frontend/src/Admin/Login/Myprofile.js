import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import Navigation from '../Home/Navigation';
import axios from 'axios';
import '../Style.css';

class Myprofile extends Component
{
    constructor(props)
    {
        super(props);
        this.state={
            empid: 'abhinav',
            password: '',
            name: '',
            dob: '',
            gender: "",
            Mobile: '',
            email: '',
            dept: '',
            post: ''        }
    }
    componentDidMount()
    {
        axios.get('http://localhost:3001/Myprofile')
        .then(res => {
            this.setState({
                empid: res.data.empid,
                password: res.data.password,
                name: res.data.name,
                dob: res.data.dob,
                gender: res.data.gender,
                Mobile: res.data.Mobile,
                email: res.data.email,
                dept: res.data.dept,
                post: res.data.post,
            })
            console.log(this.state);
        })
        .catch(err => {
            console.log(err);
        });
    }
    render(){
        return(
            <div>
            <Navigation ></Navigation>
            <div className="Profile" style={{textAlign: 'center'}}>
                 <p style={{fontSize: '30px', color: 'green'}}><strong>My Profile</strong></p>
                 <br />
                 <table width="400"  style={{textAlign: 'left', borderCollapse: 'collapse', marginLeft: 'auto', marginRight: 'auto',color: 'green',fontSize: '20px'}}>
                    <tr className="tdd">
                        <td height="50"><strong>Employee Id</strong></td>
                        <td ><strong>{this.state.empid}</strong></td>
                    </tr>
                    <tr className="tdd">
                        <td height="50"><strong>Name</strong></td>
                        <td><strong>{this.state.name}</strong></td>
                    </tr>
                    <tr className="tdd">
                        <td height="50"><strong>Gender</strong></td>
                        <td><strong>{this.state.gender}</strong></td>
                    </tr>
                    <tr className="tdd">
                        <td height="50"><strong>Mobile</strong></td>
                        <td><strong>{this.state.Mobile}</strong></td>
                    </tr>
                    <tr className="tdd">
                        <td height="50"><strong>Email</strong></td>
                        <td><strong>{this.state.email}</strong></td>
                    </tr>
                    <tr className="tdd">
                        <td height="50"><strong>Department</strong></td>
                        <td><strong>{this.state.dept}</strong></td>
                    </tr>
                    <tr className="tdd">
                        <td height="50"><strong>Post</strong></td>
                        <td><strong>{this.state.post}</strong></td>
                    </tr>
                </table>
            </div>
            </div>
        )
    }
}
export default Myprofile;