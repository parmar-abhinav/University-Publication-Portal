import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import '../Style.css';

class Navigation extends Component
{
    render(){
        return(
            <div>
                <img src="https://www.juet.ac.in/images/Header2.jpg"  alt="Jaypee logo" width="100%"/>
                <div className="navbar">
                    <NavLink to="/HODhome">Home</NavLink>
                    <NavLink to="/Yourarticles">Your Articles</NavLink>
                    <NavLink to="/Addarticle">Add Article</NavLink>
                    <NavLink to="/Request">Request</NavLink>
                    <NavLink to="/Alert">Alert</NavLink>
                    <NavLink to="/Managedept">Manage Department</NavLink>
                    <div className="dropdown">
                        <button className="dropbtn">Profile</button>
                        <div className="dropdown-content">
                            <a onClick={this.handleMyProfile}>My Profile</a>
                            <a id="logout" onClick={this.handleLogOut}>Log Out</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Navigation;