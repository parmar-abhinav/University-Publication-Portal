import React, {Component} from 'react';
import Navigation from '../Home/Navigation';
import RetrunType from './ReturnType';
import axios from 'axios';
import '../Style.css';

class Addarticle extends Component
{
    constructor(props)
    {
        super(props)
        this.state={
            type: "Journal",
            empid: '',
            articleid: '',
            title: '',
            link: '',
            indexing: 'other',
            Journalname: '',
            volumeno: '',
            issueno: '',
            pagefrom: '',
            pageto: '',
            conferecename: '',
            location: '',
            date: '',
            publicationhouse: '',
            isbnno: '',
            accessionno: '',
            message: '',
            color: ''
        }
        this.handletype=this.handletype.bind(this);
        this.handleadd=this.handleadd.bind(this);
        this.handlearticleid=this.handlearticleid.bind(this);
        this.handlelink=this.handlelink.bind(this);
        this.handletitle=this.handletitle.bind(this);
        this.handlereturntype=this.handlereturntype.bind(this);
    }
    handleadd()
    {
        axios.post('http://localhost:3001/Addarticle', this.state)
        .then(res => {
            console.log(res);
            if(res.data === 'Complete all the fields before submitting')
            {
                this.setState({
                    message: 'Complete all the fields before submitting',
                    color: 'red'
                })
            }
            else if(res.data === 'Number fields must be greater tha zero')
            {
                this.setState({
                    message: 'Number fields must be greater tha zero',
                    color: 'red'
                })
            }
            else if(res.data === 'Page from Must be less than Page to field')
            {
                this.setState({
                    message: 'Page from field Must be less than Page to field',
                    color: 'red'
                })
            }
            else
            {
                this.setState({
                    message: 'Successfully Added',
                    color: 'green'
                })
            }
        })
        .catch(err => {
            console.log(err);
            this.setState({
                message: 'Article Id should be Unique',
                color: 'red'
            })
        });
        window.scrollTo(0, 0);
    }
    handlearticleid(e)
    {
        this.setState({
            type: this.state.type,
            empid: this.state.empid,
            articleid: e.target.value,
            title: this.state.title,
            link: this.state.link,
            indexing: this.state.indexing,
            Journalname: this.state.Journalname,
            volumeno: this.state.volumeno,
            issueno: this.state.issueno,
            pagefrom: this.state.pagefrom,
            pageto: this.state.pageto,
            conferecename: this.state.conferecename,
            location: this.state.location,
            date: this.state.date,
            publicationhouse: this.state.publicationhouse,
            isbnno: this.state.isbnno,
            accessionno: this.state.accessionno,
            message: 'sfd',
            color: 'white'
        })
    }
    handletitle(e)
    {
        this.setState({
            type: this.state.type,
            empid: this.state.empid,
            articleid: this.state.articleid,
            title: e.target.value,
            link: this.state.link,
            indexing: this.state.indexing,
            Journalname: this.state.Journalname,
            volumeno: this.state.volumeno,
            issueno: this.state.issueno,
            pagefrom: this.state.pagefrom,
            pageto: this.state.pageto,
            conferecename: this.state.conferecename,
            location: this.state.location,
            date: this.state.date,
            publicationhouse: this.state.publicationhouse,
            isbnno: this.state.isbnno,
            accessionno: this.state.accessionno,
            message: 'sfd',
            color: 'white'
        })
    }
    handletype(e)
    {
        this.setState({
            type: e.target.value,
            empid: this.state.empid,
            articleid: this.state.articleid,
            title: this.state.title,
            link: this.state.link,
            indexing: this.state.indexing,
            Journalname: this.state.Journalname,
            volumeno: this.state.volumeno,
            issueno: this.state.issueno,
            pagefrom: this.state.pagefrom,
            pageto: this.state.pageto,
            conferecename: this.state.conferecename,
            location: this.state.location,
            date: this.state.date,
            publicationhouse: this.state.publicationhouse,
            isbnno: this.state.isbnno,
            accessionno: this.state.accessionno,
            message: 'sfd',
            color: 'white'
        })
    }
    handlelink(e)
    {
        this.setState({
            type: this.state.type,
            empid: this.state.empid,
            articleid: this.state.articleid,
            title: this.state.title,
            link: e.target.value,
            indexing: this.state.indexing,
            Journalname: this.state.Journalname,
            volumeno: this.state.volumeno,
            issueno: this.state.issueno,
            pagefrom: this.state.pagefrom,
            pageto: this.state.pageto,
            conferecename: this.state.conferecename,
            location: this.state.location,
            date: this.state.date,
            publicationhouse: this.state.publicationhouse,
            isbnno: this.state.isbnno,
            accessionno: this.state.accessionno,
            message: 'sfd',
            color: 'white'
        })
    }
    handlereturntype(returnstate)
    {
        this.setState({
            type: this.state.type,
            empid: this.state.empid,
            articleid: this.state.articleid,
            title: this.state.title,
            link: this.state.link,
            indexing: returnstate.indexing,
            Journalname: returnstate.Journalname,
            volumeno: returnstate.volumeno,
            issueno: returnstate.issueno,
            pagefrom: returnstate.pagefrom,
            pageto: returnstate.pageto,
            conferecename: returnstate.conferecename,
            location: returnstate.location,
            date: returnstate.date,
            publicationhouse: returnstate.publicationhouse,
            isbnno: returnstate.isbnno,
            accessionno: returnstate.accessionno,
            message: 'sfd',
            color: 'white'
        })
    }
    componentDidMount()
    {
        axios.get('http://localhost:3001/Home')
        .then(res => {
            this.setState({
                type: this.state.type,
                empid: res.data.empid,
                articleid: this.state.articleid,
                title: this.state.title,
                link: this.state.value,
                indexing: this.state.indexing,
                Journalname: this.state.Journalname,
                volumeno: this.state.volumeno,
                issueno: this.state.issueno,
                pagefrom: this.state.pagefrom,
                pageto: this.state.pageto,
                conferecename: this.state.conferecename,
                location: this.state.location,
                date: this.state.date,
                publicationhouse: this.state.publicationhouse,
                isbnno: this.state.isbnno,
                accessionno: this.state.accessionno,
                message: 'sfd',
                color: 'white'
            })
        })
        .catch(err => {
            console.log(err);
        });
    }
    render(){ 
        return(
            <div style={{textAlign: 'center'}}>
                <Navigation></Navigation>
                <p style={{fontSize: '30px',color: 'green', marginTop: '10px', marginBottom: '15px'}}><strong>Add Article</strong></p>
                <p style={{fontSize: '15px',color: this.state.color, marginTop: '10px', marginBottom: '15px'}}>{this.state.message}</p>
                <div style={{textAlign: 'left'}}>
                    <div style={{display: 'inline-block', marginLeft: '50px', marginBottom: '10px'}}>
                        <label style={{fontSize: '20px', marginRight: '10px', marginBottom: '10px', display: 'block'}} htmlFor="empid">Employee ID</label>
                        <input style={{padding: '6px 20px', fontSize:'15px',  width: '500px', marginBottom: '10px', borderRadius: '4px'}} type="text" id="empid"  value={this.state.empid} disabled/>
                    </div>
                    <br />
                    <div style={{display: 'inline-block', marginLeft: '50px', marginBottom: '10px'}}>
                        <label style={{fontSize: '20px', marginRight: '10px', marginBottom: '10px', display: 'block'}} htmlFor="articleid">Article ID</label>
                        <input style={{padding: '6px 20px', fontSize:'15px',  width: '500px', marginBottom: '10px', borderRadius: '4px'}} type="text" id="articleid" placeholder="Article ID" value ={this.state.articleid} onChange={this.handlearticleid}/>
                    </div>
                    <br />
                    <div style={{display: 'inline-block', marginLeft: '50px', marginBottom: '10px'}}>
                        <label style={{fontSize: '20px', marginRight: '10px', marginBottom: '10px', display: 'block'}} htmlFor="type">Article Type</label>
                        <select value={this.state.type} onChange={this.handletype} id="ArticleType" name="ArticleType" style={{padding: '6px 20px', fontSize:'15px',  width: '550px', marginBottom: '10px', borderRadius: '4px'}}>
                            <option value="Journal">Journal</option>
                            <option value="Conference">Conference</option>
                            <option value="Book Chapter">Book Chapter</option>
                            <option value="Book">Book</option>
                        </select>  
                    </div>
                    <br />
                    <div style={{display: 'inline-block', marginLeft: '50px', marginBottom: '10px'}}>
                        <label style={{fontSize: '20px', marginRight: '10px', marginBottom: '10px', display: 'block'}} htmlFor="title">Title</label>
                        <input style={{padding: '6px 20px', fontSize:'15px',  width: '500px', marginBottom: '10px', borderRadius: '4px'}} type="text" id="title" placeholder="Title" value ={this.state.title} onChange={this.handletitle}/>
                    </div>
                    <br />
                    <div style={{display: 'inline-block', marginLeft: '50px', marginBottom: '10px'}}>
                        <label style={{fontSize: '20px', marginRight: '10px', marginBottom: '10px', display: 'block'}} htmlFor="articlelink">Link of Article</label>
                        <input style={{padding: '6px 20px', fontSize:'15px',  width: '500px', marginBottom: '10px', borderRadius: '4px'}} type="text" id="articlelink" placeholder="Link of the Article" value ={this.state.link} onChange={this.handlelink}/>
                    </div>
                </div>
                <RetrunType type={this.state.type} handlereturntype={this.handlereturntype}/>
                <button onClick={this.handleadd} style={{fontSize: '15px', backgroundColor: '#4285F4',color: 'white',width: '200px',padding: '12px 20px', marginBottom: '10px', marginLeft: '50px', borderRadius: '4px',float: 'left'}}>Add Article</button>
            </div>
        )
    }
}
export default Addarticle;