import React, {Component} from 'react';
import Navigation from '../Home/Navigation';
import axios from 'axios';
import '../Style.css';

class Yourarticles extends Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            Journals: [],
            username: ''
        }
    }
    componentDidMount()
    {
        axios.get('http://localhost:3001/Home')
        .then(res => {
            this.setState({
                username: res.data.empid,
                Journals: this.state.Journals
            })
            axios.get(`http://localhost:3001/Addarticle/Journals/${this.state.username}`)
            .then(res => {
                console.log(res);
                this.setState({
                    Journals: res.data,
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
        const {Journals} = this.state 
        return(
            <div style={{textAlign: 'center'}}>
                <Navigation></Navigation>
                <p style={{color: 'green', fontSize: '30px', marginTop: '10px', marginBottom: '10px'}}><strong>Journals</strong></p>
                <div style={{textAlign: 'center'}}>
                    <div style={{display: 'inline-block'}}>
                    <table width= "1200" style={{border: '1px solid black', borderCollapse: 'collapse'}}>
                    <tr className="tra">
                        <th>Number</th>
                        <th> Article ID </th>
                        <th>Title</th>
                        <th>Indexing</th>
                        <th>Volume No.</th>
                        <th>Issue No.</th>
                        <th>Page From</th>
                        <th>Page To</th>
                        <th>Cited By</th>
                        <th>Link</th>
                    </tr>
                    {Journals.length ?
                    Journals.map((Journal, no) => {
                        return(
                            <tr className="tdd">
                                <td>{no+1}</td>
                                <td>{Journal.articleid}</td>
                                <td>{Journal.title}</td>
                                <td>{Journal.indexing}</td>
                                <td>{Journal.volumeno}</td>
                                <td>{Journal.issueno}</td>
                                <td>{Journal.pagefrom}</td>
                                <td>{Journal.pageto}</td>
                                <td>{Journal.citation}</td>
                                <td><a href={Journal.link} target="_blank">{Journal.articleid}</a></td>
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