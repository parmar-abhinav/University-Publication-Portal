import React, {Component} from 'react';
import Navigation from '../Home/Navigation';
import axios from 'axios';
import '../Style.css';

class Delete extends Component
{
    constructor(props)
    {
        super(props)
        this.state={
            empid: ''
        }
        this.handleSend=this.handleSend.bind(this);
        this.handleauthorid=this.handleauthorid.bind(this);
    }
    handleauthorid(e)
    {
        this.setState({
            empid: e.target.value,
            message: 'dvsdvsdvsdv',
            color: 'white'
        })
    }
    handleSend()
    {
            axios.get(`http://localhost:3001/Delete/${this.state.empid}`)
            .then(res => {
                if(res.data === 'Deleted the account')
                {
                    console.log(res);
                    this.setState({
                        message: 'Deleted the account',
                        color: 'green'
                    })
                }
                else if(res.data === 'Invalid Employee ID')
                {
                    this.setState({
                        message: 'Invalid Employee ID',
                        color: 'red'
                    })
                }
                else
                {
                    this.setState({
                        message: 'Operation Not Performed',
                        color: 'red'
                    })
                }
            })
            .catch(err => {
                console.log(err);
            });
    }
    render(){
        return(
            <div>
                <Navigation></Navigation>
                <div style={{textAlign: 'center'}}>
                    <b style={{fontSize: '30px', marginTop: '10px', marginBottom: '10px', color: 'red'}}><strong>Delete Account</strong></b>
                    <br />
                    <br />
                <p style={{fontSize: '20px', marginTop: '10px', marginBottom: '10px', color: this.state.color}}>{this.state.message}</p>
                <div className="login">
                <div>
                    <label htmlFor='authorid'><strong>Employee ID</strong></label>
                    <br />
                    <br />
                    <input value={this.state.empid} onChange={this.handleauthorid} style={{fontSize:'15px', width: '250px',padding: '12px 20px', marginBottom: '20px', borderRadius: '4px'}} type="text" name="authorid" id="authorid" placeholder="Employee ID"/>
                 </div>
                 <button onClick={this.handleSend} style={{fontSize: '15px', backgroundColor: '#4285F4',color: 'white',width: '300px',padding: '12px 20px', marginBottom: '10px', borderRadius: '4px'}}>Delete</button>
            </div>
                </div>
            </div>
        )
    }
}
export default Delete;