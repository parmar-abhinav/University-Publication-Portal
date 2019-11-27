import React, {Component} from 'react';
import {NavLink, BrowserRouter as Router, Link, Route, withRouter} from 'react-router-dom';
import axios from 'axios';
import '../Style.css';

class Newuser extends Component
{
    constructor(props)
    {
        super(props);
        this.state={
            empid: '',
            password: '',
            name: '',
            dob: '',
            gender: "Male",
            Mobile: '',
            email: '',
            dept: 'CSE',
            post: 'HODrequest',
            message: 'ghfghf',
            color: 'white'
        }
        this.handleempid = this.handleempid.bind(this);
        this.handlepassword = this.handlepassword.bind(this);
        this.handlename = this.handlename.bind(this);
        this.handledob = this.handledob.bind(this);
        this.handlegender=this.handlegender.bind(this);
        this.handlemobile = this.handlemobile.bind(this);
        this.handleemail = this.handleemail.bind(this);
        this.handlepost=this.handlepost.bind(this);
        this.handledept=this.handledept.bind(this);
        this.handleregister=this.handleregister.bind(this);
    }
    handleempid(e)
    {
        this.setState({
            empid: e.target.value,
            password: this.state.password,
            name: this.state.name,
            dob: this.state.dob,
            gender: this.state.gender,
            Mobile: this.state.Mobile,
            email: this.state.email,
            dept: this.state.dept,
            post: this.state.post,
            message: 'fhghf',
            color: 'white'
        }, () => {console.log(this.state.empid);})
    }
    handlepassword(e)
    {
        this.setState({
            empid: this.state.empid,
            password: e.target.value,
            name: this.state.name,
            dob: this.state.dob,
            gender: this.state.gender,
            Mobile: this.state.Mobile,
            email: this.state.email,
            dept: this.state.dept,
            post: this.state.post,
            message: 'ghfghfgh',
            color: 'white'
        }, () => {console.log(this.state.password);})
    }
    handlename(e)
    {
        this.setState({
            empid: this.state.empid,
            password: this.state.password,
            name: e.target.value,
            dob: this.state.dob,
            gender: this.state.gender,
            Mobile: this.state.Mobile,
            email: this.state.email,
            dept: this.state.dept,
            post: this.state.post,
            message: 'ghfgh',
            color: 'white'
        }, () => {console.log(this.state.name);})
    }
    handledob(e)
    {
        this.setState({
            empid: this.state.empid,
            password: this.state.password,
            name: this.state.name,
            dob: e.target.value,
            gender: this.state.gender,
            Mobile: this.state.Mobile,
            email: this.state.email,
            dept: this.state.dept,
            post: this.state.post,
            message: 'hfghf',
            color: 'white'
        }, () => {console.log(this.state.dob);})
    }
    handlegender(e)
    {
        this.setState({
            empid: this.state.empid,
            password: this.state.password,
            name: this.state.name,
            dob: this.state.dob,
            gender: e.target.value,
            Mobile: this.state.Mobile,
            email: this.state.email,
            dept: this.state.dept,
            post: this.state.post,
            message: 'fdfbd',
            color: 'white'
        })
    }
    handlemobile(e)
    {
        this.setState({
            empid: this.state.empid,
            password: this.state.password,
            name: this.state.name,
            dob: this.state.dob,
            gender: this.state.gender,
            Mobile: e.target.value,
            email: this.state.email,
            dept: this.state.dept,
            post: this.state.post,
            message: 'fbdfb',
            color: 'white'
        }, () => {console.log(this.state.Mobile);})
    }
    handleemail(e)
    {
        this.setState({
            empid: this.state.empid,
            password: this.state.password,
            name: this.state.name,
            dob: this.state.dob,
            gender: this.state.gender,
            Mobile: this.state.Mobile,
            email: e.target.value,
            dept: this.state.dept,
            post: this.state.post,
            message: 'fbdfb',
            color: 'white'
        }, () => {console.log(this.state.email);})
    }
    handledept(e)
    {
        this.setState({
            empid: this.state.empid,
            password: this.state.password,
            name: this.state.name,
            dob: this.state.dob,
            gender: this.state.gender,
            Mobile: this.state.Mobile,
            email: this.state.email,
            dept: e.target.value,
            post: this.state.post,
            message: 'dbdfb',
            color: 'white'
        })
    }
    handlepost(e)
    {
        this.setState({
            empid: this.state.empid,
            password: this.state.password,
            name: this.state.name,
            dob: this.state.dob,
            gender: this.state.gender,
            Mobile: this.state.Mobile,
            email: this.state.email,
            dept: this.state.dept,
            post: e.target.value,
            message: 'fbdfb',
            color: 'white'
        })
    }
    handleregister(event)
    {
        //alert("register")
        if(this.state.empid === '' || this.state.password === '' || this.state.name === '' || this.state.dob === '' || this.state.gender === '' || this.state.Mobile === '' || this.state.email === '')
        {
            this.setState({
                message: "Complete All Input Fields",
                color: 'red'
            })
            window.scrollTo(0, 0);
        }
        else if(this.state.Mobile.toString().length !== 10)
        {
            this.setState({
                message: "Invalid Mobile Number",
                color: 'red'
            })
            window.scrollTo(0, 0);
        }
        else
        {
            axios.post('http://localhost:3001/Newuser', this.state)
            .then((response) => {
                console.log(response.config);
                this.setState({
                    empid: this.state.empid,
                    password: this.state.password,
                    name: this.state.name,
                    dob: this.state.dob,
                    gender: this.state.gender,
                    Mobile: this.state.Mobile,
                    email: this.state.email,
                    dept: this.state.dept,
                    post: this.state.post,
                    message: this.state.name + " registration Successfull",
                    color: 'green'
                }, () => {
                    window.scrollTo(0, 0);
                })
                setTimeout(() => {
                    this.props.history.push('/');
                }, 1000)
            })
            .catch((error) => {
                this.setState({
                    empid: this.state.empid,
                    password: this.state.password,
                    name: this.state.name,
                    dob: this.state.dob,
                    gender: this.state.gender,
                    Mobile: this.state.Mobile,
                    email: this.state.email,
                    dept: this.state.dept,
                    post: this.state.post,
                    message: "Registration not done",
                    color: 'red'
                })
            });
        }
    }
    render(){
            return(
                <div style={{textAlign: 'center'}}>
                    <img src="https://www.juet.ac.in/images/Header2.jpg" />
                    <p style={{fontSize: '30px', color: 'green'}}>Employee Registration</p>
                    <p style={{fontSize: '20px', color: this.state.color}}>{this.state.message}</p>
                    <div style={{textAlign: 'left'}}>
                            <div>
                            <div style={{display: 'inline-block', marginLeft: '400px', marginBottom: '10px'}}>
                                <label style={{fontSize: '20px', marginRight: '10px', marginBottom: '10px', display: 'block'}} htmlFor="enrollment">Employee Id</label>
                                <input style={{padding: '6px 20px', fontSize:'15px',  width: '500px', marginBottom: '10px', borderRadius: '4px'}} type="text" id="enrollment" placeholder="Employee Id" value={this.state.empid} onChange = {this.handleempid}/>
                            </div>
                            </div>
                            <div>
                            <div style={{display: 'inline-block', marginLeft: '400px', marginBottom: '10px'}}>
                                <label style={{fontSize: '20px', marginRight: '10px', marginBottom: '10px', display: 'block'}} htmlFor="password">Password</label>
                                <input style={{padding: '6px 20px', fontSize:'15px',  width: '500px', marginBottom: '10px', borderRadius: '4px'}} type="password" id="password" placeholder="password" value={this.state.password} onChange = {this.handlepassword}/>
                            </div>
                            </div>
                            <div>
                            <div style={{display: 'inline-block', marginLeft: '400px', marginBottom: '10px'}}>
                                <label style={{fontSize: '20px', marginRight: '10px', marginBottom: '10px', display: 'block'}} htmlFor="name">Name</label>
                                <input style={{padding: '6px 20px', fontSize:'15px',  width: '500px', marginBottom: '10px', borderRadius: '4px'}} type="text" id="name" placeholder="Name" value={this.state.name} onChange = {this.handlename}/>
                            </div>
                            </div>
                            <div>
                            <div style={{display: 'inline-block', marginLeft: '400px', marginBottom: '10px'}}>
                                <label style={{fontSize: '20px', marginRight: '10px', marginBottom: '10px', display: 'block'}} htmlFor="date">Date of Birth</label>
                                <input style={{padding: '6px 20px', fontSize:'15px',  width: '500px', marginBottom: '10px', borderRadius: '4px'}} type="date" id="dob" value={this.state.dob} onChange = {this.handledob} />
                            </div>
                            </div>
                            <div style={{display: 'inline-block', marginLeft: '400px', marginBottom: '10px'}}>
                            <label style={{fontSize: '20px', marginRight: '10px', marginBottom: '10px', display: 'block'}} htmlFor="type">Gender</label>
                            <select onChange={this.handlegender} id="gender" name="gender" style={{padding: '6px 20px', fontSize:'15px',  width: '550px', marginBottom: '10px', borderRadius: '4px'}}>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>  
                            </div>
                            <div>
                            <div style={{display: 'inline-block', marginLeft: '400px', marginBottom: '10px'}}>
                                <label style={{fontSize: '20px', marginRight: '10px', marginBottom: '10px', display: 'block'}} htmlFor="mobno">Mobile Number</label>
                                <input style={{padding: '6px 20px', fontSize:'15px',  width: '500px', marginBottom: '10px', borderRadius: '4px'}} type="number" id="mobno" placeholder="Mobile Number" min='1000000000' max="9999999999" value={this.state.Mobile} onChange = {this.handlemobile}/>
                            </div>
                            </div>
                            <div>
                            <div style={{display: 'inline-block', marginLeft: '400px', marginBottom: '10px'}}>
                                <label style={{fontSize: '20px', marginRight: '10px', marginBottom: '10px', display: 'block'}} htmlFor="email">Email</label>
                                <input style={{padding: '6px 20px', fontSize:'15px',  width: '500px', marginBottom: '10px', borderRadius: '4px'}} type="text" id="email" placeholder="Email" value={this.state.email} onChange = {this.handleemail}/>
                            </div>
                            </div>
                            <div style={{display: 'inline-block', marginLeft: '400px', marginBottom: '10px'}}>
                            <label style={{fontSize: '20px', marginRight: '10px', marginBottom: '10px', display: 'block'}} htmlFor="dept">Department</label>
                            <select onChange={this.handledept} id="dept" name="dept" style={{padding: '6px 20px', fontSize:'15px',  width: '550px', marginBottom: '10px', borderRadius: '4px'}}>
                                <option value="CSE">Computer Science Engineering (CSE)</option>
                                <option value="CIVIL">Civil Engineering</option>
                                <option value="CE">	Chemical Engineering (CE)</option>
                                <option value="ECE">Electronics And Communication Engineering</option>
                                <option value="ME">Mechanical Engineering (ME)</option>
                                <option value="CHEMISTRY">Chemistry</option>
                                <option value="HSS">Humanities And Social Sciences</option>
                                <option value="Maths">Mathematics</option>
                                <option value="Physics">Physics</option>
                            </select>  
                            </div>
                            <div>
                            <div style={{display: 'inline-block', marginLeft: '400px', marginBottom: '10px'}}>
                            <label style={{fontSize: '20px', marginRight: '10px', marginBottom: '10px', display: 'block'}} htmlFor="post">Post</label>
                            <select onChange={this.handlepost} id="post" name="post" style={{padding: '6px 20px', fontSize:'15px',  width: '550px', marginBottom: '10px', borderRadius: '4px'}}>
                                <option value="HODrequest">Head Of Department</option>
                                <option value="Faculty">Associate Professor</option>
                                <option value="Faculty">Assistant Professor</option>
                                <option value="Faculty">Lecturer</option>
                            </select>  
                            </div>
                            </div>
                           <div>
                           <div style={{display: 'inline-block', marginLeft: '400px', marginBottom: '10px'}}>
                                <button onClick={this.handleregister} style={{fontSize: '15px', backgroundColor: '#4285F4',color: 'white',width: '150px',padding: '12px 20px', marginBottom: '10px', borderRadius: '4px'}}>Register</button>
                            </div>
                           </div>
                    </div>
                </div>
            )
    }
}
export default Newuser;