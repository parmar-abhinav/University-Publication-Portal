import React, {Component} from 'react';
import Navigation from '../Home/Navigation';
import '../Style.css';
import axios from 'axios';

class Addhod extends Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            requests: []
        }
    }
    componentDidMount()
    {
            axios.get(`http://localhost:3001/Requests`)
            .then(res => {
                console.log(res.data);
                this.setState({
                    requests: res.data,
                    color: 'black'
                })
            })
            .catch(err => {
                console.log(err);
            });
    }
    handleapprove(no)
    {
        const User = this.state.requests[no];
        axios.put(`http://localhost:3001/Requests/${User.empid}`, User)
            .then(res => {
                console.log(res);
                axios.get(`http://localhost:3001/Requests`)
                .then(res => {
                    console.log(res.data);
                    this.setState({
                        requests: res.data,
                        color: 'black'
                    })
                })
                .catch(err => {
                    console.log(err);
                });
            })
            .catch(err => {
                console.log(err);
                alert("cannot perform the operation")
            });
    }
    handlereject(no)
    {
        const User = this.state.requests[no];
        axios.delete(`http://localhost:3001/Requests/${User.empid}`)
        .then(res => {
            axios.get(`http://localhost:3001/Requests`)
            .then(res => {
                console.log(res.data);
                this.setState({
                    requests: res.data,
                    color: 'black'
                })
            })
            .catch(err => {
                console.log(err);
            });
        })
        .catch(err => {
            alert("cannot perform the operation")
        });
    }
    render(){
        const { requests } = this.state
        return(
            <div style={{textAlign: 'center'}}>
                <Navigation></Navigation>
                <p style={{color: '#FF6347', fontSize: '30px', marginTop: '10px', marginBottom: '10px'}}><strong>HOD Requests</strong></p>
                <div style={{textAlign: 'center'}}>
                    <div style={{display: 'inline-block'}}>
                    <table  width= "1200" style={{border: '1px solid black', borderCollapse: 'collapse'}}>
                    <tr className="tra">
                        <th>Number</th>
                        <th>Employee ID</th>
                        <th>Department</th>
                        <th>Approve</th>
                        <th>Reject</th>
                    </tr>
                    {requests.length ?
                    requests.map((request, no) => {
                        return(
                            <tr className="tdd">
                                <td>{no+1}</td>
                                <td>{request.empid}</td>
                                <td>{request.dept}</td>
                                <td><label className="change" onClick = {() => {this.handleapprove(no)}}>Approve</label></td>
                                <td><label className="Nochange" onClick = {() => {this.handlereject(no)}}>Reject</label></td>
                            </tr>
                        )
                    })
                    :null}
                </table>
                    </div>
                </div>
            </div>
        )
    }
}
export default Addhod;