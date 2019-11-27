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
            Books: [],
            username: ''
        }
    }
    componentDidMount()
    {
        axios.get('http://localhost:3001/Home')
        .then(res => {
            this.setState({
                username: res.data.empid,
                Books: this.state.Books
            })
            axios.get(`http://localhost:3001/Addarticle/Book/${this.state.username}`)
            .then(res => {
                console.log(res);
                this.setState({
                    Books: res.data,
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
        const { Books } =this.state
        return(
            <div style={{textAlign: 'center'}}>
                <Navigation></Navigation>
                <p style={{color: 'green', fontSize: '30px', marginTop: '10px', marginBottom: '10px'}}><strong>Book</strong></p>
                <div style={{textAlign: 'center'}}>
                    <div style={{display: 'inline-block'}}>
                    <table  width= "1200" style={{border: '1px solid black', borderCollapse: 'collapse'}}>
                    <tr className="tra">
                        <th>Number</th>
                        <th> Article ID </th>
                        <th>Title</th>
                        <th>Indexing</th>
                        <th>Publication House</th>
                        <th>ISBN No</th>
                        <th>Accession No</th>
                        <th>Cited By</th>
                        <th>Link</th>
                    </tr>
                    {Books.length ?
                    Books.map((Book, no) => {
                        return(
                            <tr className="tdd">
                                <td>{no + 1}</td>
                                <td>{Book.articleid}</td>
                                <td>{Book.title}</td>
                                <td>{Book.indexing}</td>
                                <td>{Book.publicationhouse}</td>
                                <td>{Book.isbnno}</td>
                                <td>{Book.accessionno}</td>
                                <td>{Book.citation}</td>
                                <td><a href={Book.link} target="_blank">{Book.articleid}</a></td>
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