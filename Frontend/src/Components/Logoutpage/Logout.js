import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import '../Style.css';

class Logout extends Component
{
    render(){
        return(
            <div style={{textAlign: 'center'}}>
                <img src="https://www.juet.ac.in/images/Header2.jpg" alt="Jaypee logo" />
                <p style={{fontSize: '30px', color: 'green'}}>Successfully Logout</p>
                <br />
                <span style={{fontSize: '20px',}}><NavLink to="/" style={{textDecoration: 'none'}}>Login</NavLink> again</span>
            </div>
        )
    }
}
export default Logout;