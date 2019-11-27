import React, {Component} from 'react';
import {NavLink, BrowserRouter as Router, Link, Route, withRouter} from 'react-router-dom';
import axios from 'axios';
import '../Style.css';
import PropTypes from 'prop-types';
import Navigation from '../Home/Navigation'
import { throwStatement } from '@babel/types';



class Department extends Component
{
    constructor(props)
    {
        super(props)
        this.state={
            Faculty: [],
            dept: '',
            name: '',
            type: 'Journal',
            Journals: [],
            Conferences: [],
            Chapters: [],
            Books: []
        }
        this.handlename=this.handlename.bind(this);
        this.handletype=this.handletype.bind(this);
    }
    componentDidMount()
    {
        //alert("handle sign in");

        axios.get('http://localhost:3001/Home')
        .then(res => {
            this.setState({
                dept: res.data.dept
            }, () => {
                axios.get(`http://localhost:3001/Get/${this.state.dept}`)
                .then(response => {
                        console.log(response);
                        this.setState({
                            name: response.data[0].empid,
                            Faculty: response.data
                        })
                })
                .catch(error => {
                    console.log(error);
                });
            })
        })
        .catch(error => {
            console.log(error);
        });
    }
    handlename(e)
    {
        this.setState({
            name: e.target.value
        }, () => {
            axios.get(`http://localhost:3001/Addarticle/Journals/${this.state.name}`)
            .then(res => {
                console.log(res);
                this.setState({
                    Journals: res.data
                }, () => {
                    axios.get(`http://localhost:3001/Addarticle/Conference/${this.state.name}`)
                    .then(res => {
                        console.log(res);
                        this.setState({
                            Conferences: res.data
                        }, () => {
                            axios.get(`http://localhost:3001/Addarticle/Bookchapter/${this.state.name}`)
                            .then(res => {
                                console.log(res);
                                this.setState({
                                    Chapters: res.data
                                }, () => {
                                    axios.get(`http://localhost:3001/Addarticle/Book/${this.state.username}`)
                                    .then(res => {
                                        console.log(res);
                                        this.setState({
                                            Books: res.data
                                        })
                                    })
                                    .catch(err => {
                                        console.log(err);
                                    });
                                })
                            })
                            .catch(err => {
                                console.log(err);
                            });
                        })
                    })
                    .catch(err => {
                        console.log(err);
                    });
                })
            })
            .catch(err => {
                console.log(err);
            });
        })
    }
    handletype(e)
    {
        this.setState({
            type: e.target.value
        }, () => {console.log(this.state.type)})
    }
    render(){
        const {Faculty} = this.state
        const { Books } =this.state
        const { Chapters } = this.state
        const { Conferences } = this.state
        const {Journals} = this.state
        if(this.state.type === 'Journal')
        {
            return(
                <div className="login" style={{textAlign: 'center'}}>
                     <Navigation />
                     <p style={{fontSize: '15px', color: 'green'}}>Faculty member</p>
                    <select value={this.state.name} onChange={this.handlename} id="post" name="post" style={{width: '500px',padding: '12px 20px', marginBottom: '10px', borderRadius: '4px'}}>
                    {Faculty.length ?
                        Faculty.map((faculty, no) => {
                            return(
                                <option value={faculty.empid}>{faculty.name} ( {faculty.empid} )</option>        
                            )
                        })
                        :null}
                    </select> 
    
                    <p style={{fontSize: '15px', color: 'green'}}>Faculty member</p>
                    <select value={this.state.type} onChange={this.handletype} id="post" name="post" style={{width: '500px',padding: '12px 20px', marginBottom: '10px', borderRadius: '4px'}}>
                                <option value="Journal">Journal</option>
                                <option value="Conference">Conference</option>
                                <option value="Book Chapter">Book Chapter</option>
                                <option value="Book">Book</option>
                    </select> 
                    <br />
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
        else if(this.state.type === 'Conference')
        {
            return(
                <div className="login" style={{textAlign: 'center'}}>
                     <Navigation />
                     <p style={{fontSize: '15px', color: 'green'}}>Faculty member</p>
                    <select value={this.state.name} onChange={this.handlename} id="post" name="post" style={{width: '500px',padding: '12px 20px', marginBottom: '10px', borderRadius: '4px'}}>
                    {Faculty.length ?
                        Faculty.map((faculty, no) => {
                            return(
                                <option value={faculty.empid}>{faculty.name} ( {faculty.empid} )</option>        
                            )
                        })
                        :null}
                    </select> 
    
                    <p style={{fontSize: '15px', color: 'green'}}>Faculty member</p>
                    <select value={this.state.type} onChange={this.handletype} id="post" name="post" style={{width: '500px',padding: '12px 20px', marginBottom: '10px', borderRadius: '4px'}}>
                                <option value="Journal">Journal</option>
                                <option value="Conference">Conference</option>
                                <option value="Book Chapter">Book Chapter</option>
                                <option value="Book">Book</option>
                    </select> 
                    <br />
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
        else if(this.state.type === 'Book Chapter')
        {
            return(
                <div className="login" style={{textAlign: 'center'}}>
                     <Navigation />
                     <p style={{fontSize: '15px', color: 'green'}}>Faculty member</p>
                    <select value={this.state.name} onChange={this.handlename} id="post" name="post" style={{width: '500px',padding: '12px 20px', marginBottom: '10px', borderRadius: '4px'}}>
                    {Faculty.length ?
                        Faculty.map((faculty, no) => {
                            return(
                                <option value={faculty.empid}>{faculty.name} ( {faculty.empid} )</option>        
                            )
                        })
                        :null}
                    </select> 
                    <p style={{fontSize: '15px', color: 'green'}}>Faculty member</p>
                    <select value={this.state.type} onChange={this.handletype} id="post" name="post" style={{width: '500px',padding: '12px 20px', marginBottom: '10px', borderRadius: '4px'}}>
                                <option value="Journal">Journal</option>
                                <option value="Conference">Conference</option>
                                <option value="Book Chapter">Book Chapter</option>
                                <option value="Book">Book</option>
                    </select> 
                    <br />
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
        else if(this.state.type === 'Book')
        {
            return(
                <div className="login" style={{textAlign: 'center'}}>
                     <Navigation />
                     <p style={{fontSize: '15px', color: 'green'}}>Faculty member</p>
                    <select value={this.state.name} onChange={this.handlename} id="post" name="post" style={{width: '500px',padding: '12px 20px', marginBottom: '10px', borderRadius: '4px'}}>
                    {Faculty.length ?
                        Faculty.map((faculty, no) => {
                            return(
                                <option value={faculty.empid}>{faculty.name} ( {faculty.empid} )</option>        
                            )
                        })
                        :null}
                    </select> 
    
                    <p style={{fontSize: '15px', color: 'green'}}>Faculty member</p>
                    <select value={this.state.type} onChange={this.handletype} id="post" name="post" style={{width: '500px',padding: '12px 20px', marginBottom: '10px', borderRadius: '4px'}}>
                                <option value="Journal">Journal</option>
                                <option value="Conference">Conference</option>
                                <option value="Book Chapter">Book Chapter</option>
                                <option value="Book">Book</option>
                    </select> 
                    <br />
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
}



export default Department;