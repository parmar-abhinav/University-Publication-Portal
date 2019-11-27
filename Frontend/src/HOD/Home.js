import React, {Component} from 'react';
import Navigation from './Home/Navigation';
import {NavLink, BrowserRouter as Router, Link, Route, withRouter} from 'react-router-dom';
import './Style.css';
import axios from 'axios';


class Home extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            username: '',
            empid: '',
            Journals: [],
            Conferences: [],            
            Chapters: [],
            Books: []
        }
    }
    componentDidMount()
    {
        axios.get('http://localhost:3001/Home')
        .then(res => {
            this.setState({
                username: res.data.name
            })
            //Journal

            axios.get('http://localhost:3001/Home')
            .then(res => {
                this.setState({
                    empid: res.data.empid
                })
                axios.get(`http://localhost:3001/Addarticle/Journals`)
                .then(res => {
                    console.log(res);
                    this.setState({
                        Journals: res.data
                    })
                    //CONFERENCE
                    console.log("Journal")
                    console.log(res.data);
                    axios.get(`http://localhost:3001/Addarticle/Conference`)
                    .then(res => {
                        console.log(res);
                        this.setState({
                            Conferences: res.data
                        })
                        //  chapter
                        console.log("Conference")
                        console.log(res.data);
                        axios.get(`http://localhost:3001/Addarticle/Bookchapter`)
                        .then(res => {
                            console.log(res);
                            this.setState({
                                Chapters: res.data
                            })
                             //BOOK
                             console.log("Chapter")
                            console.log(res.data);
                             axios.get(`http://localhost:3001/Addarticle/Book`)
                             .then(res => {
                                 console.log(res);
                                 this.setState({
                                     Books: res.data
                                 })
                             })
                             .catch(err => {
                                 console.log(err);
                             });
                             //BOOK
                             console.log("Book")
                             console.log(res.data);
                        })
                        .catch(err => {
                            console.log(err);
                        });
                        //  chapter
                    })
                    .catch(err => {
                        console.log(err);
                    });

                    //CONFERENCE
                })
                .catch(err => {
                    console.log(err);
                });
            })
            .catch(err => {
                console.log(err);
            });

            //Journal
        })
        .catch(err => {
            console.log(err);
        });
    }
    render(){
        const { Journals } = this.state
        const { Conferences } = this.state
        const { Chapters } = this.state
        const { Books } =this.state
        return(
            <div>
                <div>
                    <Navigation></Navigation>
                </div>
                <br />
                <label>Welcome {this.state.username}</label>
                <br />
                <br />
        <p style={{fontSize: '20px', marginTop: '10px', marginBottom: '10px', color: 'green', textAlign: 'center'}}><strong>University Publications Of All Discipline : {Journals.length + Conferences.length + Chapters.length + Books.length}</strong></p>
                <br />
                <table  width="1200" style={{textAlign: 'center', border: '1px solid black', borderCollapse: 'collapse', marginLeft: 'auto', marginRight: 'auto'}}>
                    <tr className="tra">
                        <th>Number</th>
                        <th> Article ID </th>
                        <th> Author ID </th>
                        <th>Title</th>
                        <th>Cited By</th>
                    </tr>
                    {Journals.length ?
                    Journals.map((Journal, no) => {
                        return(
                            <tr className="tdd">
                                <td>{no+1}</td>
                                <td>{Journal.articleid}</td>
                                <td>{Journal.empid}</td>
                                <td>{Journal.title}</td>
                                <td>{Journal.citation}</td>
                            </tr>
                        )
                    })
                    :null}

                    {Conferences.length ?
                    Conferences.map((Conference, no) => {
                        return(
                            <tr className="tdd">
                                <td>{Journals.length + no + 1}</td>
                                <td>{Conference.articleid}</td>
                                <td>{Conference.empid}</td>
                                <td>{Conference.title}</td>
                                <td>{Conference.citation}</td>
                            </tr>
                        )
                    })
                    :null}

                    {Chapters.length ?
                    Chapters.map((Chapter, no) => {
                        return(
                            <tr className="tdd">
                                <td>{Journals.length + Conferences.length +  no + 1}</td>
                                <td>{Chapter.articleid}</td>
                                <td>{Chapter.empid}</td>
                                <td>{Chapter.title}</td>
                                <td>{Chapter.citation}</td>
                            </tr>
                        )
                    })
                    :null}

                    {Books.length ?
                    Books.map((Book, no) => {
                        return(
                            <tr className="tdd">
                                <td>{Journals.length + Conferences.length + Chapters.length +  no + 1}</td>
                                <td>{Book.articleid}</td>
                                <td>{Book.empid}</td>
                                <td>{Book.title}</td>
                                <td>{Book.citation}</td>
                            </tr>
                        )
                    })
                    :null}
                </table>
                <br />
                <br />
            </div>
        )
    }
}
export default withRouter(Home);