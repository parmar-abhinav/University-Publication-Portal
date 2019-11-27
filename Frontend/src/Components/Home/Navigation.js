import React, {Component} from 'react';
import {NavLink, BrowserRouter as Router, Link, Route, withRouter} from 'react-router-dom';
import '../Style.css';
import axios from 'axios';

class Navigation extends Component
{
    constructor(props)
    {
        super(props);
        this.handleMyProfile = this.handleMyProfile.bind(this);
        this.handlelogout = this.handlelogout.bind(this);
    }
    handleMyProfile()
    {
        this.props.history.push('/Myprofile');
    }
    handlelogout(e)
    {
        /*e.preventDefault()
        
        axios.get('http://localhost:3001/')
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.log(error);
        });*/
        console.log("logout");
    }
    render(){
        return(
            <div>
                <img src="https://www.juet.ac.in/images/Header2.jpg"  alt="Jaypee logo" width="100%"/>
                <div className="navbar">
                    <NavLink to="/Home">Home</NavLink>
                    <NavLink to="/Journals">Journals</NavLink>
                    <NavLink to="/Conference">Conference</NavLink>
                    <NavLink to="/Bookchapter">Book Chapter</NavLink>
                    <NavLink to="/Book">Book</NavLink>
                    <NavLink to="/Addarticle">Add Article</NavLink>
                    <NavLink to="/Request">Request</NavLink>
                    <NavLink to="/Alert">Alert</NavLink>
                    <NavLink to="/Cite">Cite</NavLink>
                    <div className="dropdown">
                        <button className="dropbtn">Profile</button>
                        <div className="dropdown-content">
                            <a onClick={this.handleMyProfile}>My Profile</a>
                            <NavLink id="logout" to="/Logout" onClick ={this.handlelogout}>Log Out</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default withRouter(Navigation);