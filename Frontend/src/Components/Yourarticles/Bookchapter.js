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
            Chapters: [],
            username: ''
        }
    }
    componentDidMount()
    {
        axios.get('http://localhost:3001/Home')
        .then(res => {
            this.setState({
                username: res.data.empid,
                Chapters: this.state.Chapters
            })
            axios.get(`http://localhost:3001/Addarticle/Bookchapter/${this.state.username}`)
            .then(res => {
                console.log(res);
                this.setState({
                    Chapters: res.data,
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
        const { Chapters } = this.state
        return(
            <div style={{textAlign: 'center'}}>
                <Navigation></Navigation>
                <p style={{color: 'green', fontSize: '30px', marginTop: '10px', marginBottom: '10px'}}><strong>Book Chapter</strong></p>
                <div style={{textAlign: 'center'}}>
                    <div style={{display: 'inline-block'}}>
                    <table  width= "1200" style={{border: '1px solid black', borderCollapse: 'collapse'}}>
                    <tr className="tra">
                        <th>Number</th>
                        <th> Article ID </th>
                        <th>Title</th>
                        <th>Indexing</th>
                        <th>Publication House</th>
                        <th>Location</th>
                        <th>Cited By</th>
                        <th>Link</th>
                    </tr>
                    {Chapters.length ?
                    Chapters.map((Chapter, no) => {
                        return(
                            <tr className="tdd">
                                <td>{no + 1}</td>
                                <td>{Chapter.articleid}</td>
                                <td>{Chapter.title}</td>
                                <td>{Chapter.indexing}</td>
                                <td>{Chapter.publicationhouse}</td>
                                <td>{Chapter.location}</td>
                                <td>{Chapter.citation}</td>
                                <td><a href={Chapter.link} target="_blank">{Chapter.articleid}</a></td>
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