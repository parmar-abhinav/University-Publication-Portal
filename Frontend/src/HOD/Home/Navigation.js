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
        this.props.history.push('/HODMyprofile');
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
                    <NavLink to="/HODHome">Home</NavLink>
                    <NavLink to="/HODJournals">Journals</NavLink>
                    <NavLink to="/HODConference">Conference</NavLink>
                    <NavLink to="/HODBookchapter">Book Chapter</NavLink>
                    <NavLink to="/HODBook">Book</NavLink>
                    <NavLink to="/HODAddarticle">Add Article</NavLink>
                    <NavLink to="/HODRequest">Request</NavLink>
                    <NavLink to="/HODAlert">Alert</NavLink>
                    <NavLink to="/HODCite">Cite</NavLink>
                    <NavLink to="/Department">Manage Department</NavLink>
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