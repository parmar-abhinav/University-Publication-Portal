import React, {Component} from 'react';
import Navigation from '../Home/Navigation';
import '../Style.css';
import axios from 'axios';

class Alert extends Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            empid: '',
            alerts: []
        }
    }
    componentDidMount()
    {
        axios.get('http://localhost:3001/Home')
        .then(res => {
            this.setState({
                empid: res.data.empid,
                alerts: this.state.alerts
            })
            axios.get(`http://localhost:3001/Alert/${this.state.empid}`)
            .then(res => {
                console.log(res.data);
                this.setState({
                    alerts: res.data,
                    empid: this.state.empid
                })
            })
            .catch(err => {
                console.log(err);
            });
        })
        .catch(err => {
            console.log(err);
        });
    }
    render(){
        const { alerts } = this.state
        return(
            <div style={{textAlign: 'center'}}>
                <Navigation></Navigation>
                <p style={{color: '#FF6347', fontSize: '30px', marginTop: '10px', marginBottom: '10px'}}><strong>Alerts</strong></p>
                <div style={{textAlign: 'center'}}>
                    <div style={{display: 'inline-block'}}>
                    <table  width= "1200" style={{border: '1px solid black', borderCollapse: 'collapse'}}>
                    <tr className="tra">
                        <th>Number</th>
                        <th>Author ID</th>
                        <th>Article ID</th>
                        <th>Link</th>
                    </tr>
                    {alerts.length ?
                    alerts.map((alert, no) => {
                        return(
                            <tr className="tdd">
                                <td>{no+1}</td>
                                <td>{alert.authorid}</td>
                                <td>{alert.articleid}</td>
                                <td><a href={alert.link} target="_blank">Link</a></td>
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
export default Alert;