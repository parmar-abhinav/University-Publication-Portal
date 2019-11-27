import React, {Component} from 'react';
import {NavLink, BrowserRouter as Router, Link, Route, withRouter} from 'react-router-dom';
import axios from 'axios';
import '../Style.css';
import PropTypes from 'prop-types';



class Loginn extends Component
{
    constructor(props)
    {
        super(props)
        this.state={
            username:'',
            password:'',
            message: 'white',
            post: 'Faculty'
        }
        this.handleforgotpassword=this.handleforgotpassword.bind(this);
        this.handlesignin=this.handlesignin.bind(this);
        this.handleusername=this.handleusername.bind(this);
        this.handlepassword=this.handlepassword.bind(this);
        this.handlepost = this.handlepost.bind(this);
    }
    handlepost(e)
    {
        this.setState({
            post: e.target.value
        })
    }
    handleusername(e)
    {
        this.setState({
            username: e.target.value,
            password: this.state.password,
            message: this.state.message

        })
    }
    handlepassword(e)
    {
        this.setState({
            username: this.state.username,
            password: e.target.value,
            message: this.state.message
        })
    }
    handleforgotpassword()
    {
        alert("Contact Administrator");
    }
    handlesignin(e)
    {
        //alert("handle sign in");
        
        axios.post('http://localhost:3001', this.state)
        .then(response => {
            this.setState({
                username: this.state.username,
                password: this.state.password,
                message: 'white'
            })
            if(this.state.post === 'Faculty')
            {
                axios.put(`http://localhost:3001/Home/${this.state.username}`);
                setTimeout(() => {this.props.history.push('/Home')},500);
            }
            else if(this.state.post === 'HOD')
            {
                axios.put(`http://localhost:3001/Home/${this.state.username}`);
                setTimeout(() => {this.props.history.push('/HODhome')},500);
            }
            else if(this.state.post === 'Admin')
            {
                axios.put(`http://localhost:3001/Home/${this.state.username}`);
                setTimeout(() => {this.props.history.push('/Adminhome')},500);
            }
            
        })
        .catch(error => {
            this.setState({
                username: this.state.username,
                password: this.state.password,
                message: 'red'
            })
            console.log(error);
            setTimeout(() => {
                this.setState({
                    username: this.state.username,
                    password: this.state.password,
                    message: 'white'
                })
              }, 1000);
        });
    }
    render(){
        return(
            <div className="login" style={{textAlign: 'center'}}>
                 <img src="https://www.juet.ac.in/images/Header2.jpg" alt="Jaypee"/>
                 <p style={{fontSize: '30px'}}>Publication Portal</p>
                 <p style={{fontSize: '20px', color: this.state.message}}>Incorrect Credentials</p>
                 <input value={this.state.username} onChange={this.handleusername} style={{width: '250px',padding: '12px 20px', marginBottom: '10px', borderRadius: '4px'}} type="text" name="username" placeholder="User ID"/>
                 <br />
                 <input value={this.state.password} onChange={this.handlepassword} style={{width: '250px',padding: '12px 20px', marginBottom: '10px', borderRadius: '4px'}} type="password" name="password" placeholder="Password"/>
                 <br />
                <select value={this.state.post} onChange={this.handlepost} id="post" name="post" style={{width: '293px',padding: '12px 20px', marginBottom: '10px', borderRadius: '4px'}}>
                    <option value="Faculty">Faculty</option>
                    <option value="HOD">Head Of Department</option>
                    <option value="Admin">Admin</option>
                </select> 
                 <br />
                 <button onClick={this.handlesignin} style={{fontSize: '15px', backgroundColor: '#4285F4',color: 'white',width: '300px',padding: '12px 20px', marginBottom: '10px', borderRadius: '4px'}}>Sign in</button>
                 <br />
                 <button onClick={this.handleforgotpassword} style={{fontSize: '15px', backgroundColor: '#4285F4',color: 'white', width: '300px',padding: '12px 20px', marginBottom: '10px', borderRadius: '4px'}}>Forgot Password</button>
                 <p>Not a member <NavLink to="/Newuser" style={{textDecoration: 'none'}}>Register</NavLink></p>
                 <br />
                 <br />
                 <p>Copyright2019 - All Rights Reserved - Jaypee University Of Engineering And Technology, Guna</p>
                 <p>Developed by : Abhinav Singh Parmar, Anuhar Tripathi</p>
            </div>
        )
    }
}

Loginn.propTypes = {
    router: PropTypes.object.isRequired,
};

export default withRouter(Loginn);