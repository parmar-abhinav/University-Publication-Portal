import React, {Component} from 'react';
import Navigation from '../Home/Navigation';
import '../Style.css';
import axios from 'axios';

class Yourarticles extends Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            Conferences: [],
            username: ''
        }
    }
    componentDidMount()
    {
        axios.get('http://localhost:3001/Home')
        .then(res => {
            this.setState({
                username: res.data.empid,
                Conferences: this.state.Conferences
            })
            axios.get(`http://localhost:3001/Addarticle/Conference/${this.state.username}`)
            .then(res => {
                console.log(res);
                this.setState({
                    Conferences: res.data,
                    username: this.state.username
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
        const { Conferences } = this.state
        return(
            <div style={{textAlign: 'center'}}>
                <Navigation></Navigation>
                <p style={{color: 'green', fontSize: '30px', marginTop: '10px', marginBottom: '10px'}}><strong>Conference</strong></p>
                <div style={{textAlign: 'center'}}>
                    <div style={{display: 'inline-block'}}>
                    <table  width= "1200" style={{border: '1px solid black', borderCollapse: 'collapse'}}>
                    <tr className="tra">
                        <th>Number</th>
                        <th> Article ID </th>
                        <th>Title</th>
                        <th>Indexing</th>
                        <th>Location</th>
                        <th>Page From</th>
                        <th>Page To</th>
                        <th>Cited By</th>
                        <th>Link</th>
                    </tr>
                    {Conferences.length ?
                    Conferences.map((Conference, no) => {
                        return(
                            <tr className="tdd">
                                <td>{no + 1}</td>
                                <td>{Conference.articleid}</td>
                                <td>{Conference.title}</td>
                                <td>{Conference.indexing}</td>
                                <td>{Conference.location}</td>
                                <td>{Conference.pagefrom}</td>
                                <td>{Conference.pageto}</td>
                                <td>{Conference.citation}</td>
                                <td><a href={Conference.link} target="_blank" >{Conference.articleid}</a></td>
                            </tr>
                        )
                    })
                    :null}
                </table>
                <br />
                <br />
                    </div>
                </div>
            </div>
        )
    }
}
export default Yourarticles;