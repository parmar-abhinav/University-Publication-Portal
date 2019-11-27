import React, {Component} from 'react';
import Navigation from '../Home/Navigation';
import axios from 'axios';
import '../Style.css';

class Citation extends Component
{
    constructor(props)
    {
        super(props)
        this.state={
            empid: '',
            emparticleid: '',
            authorid: '',
            authorarticleid: ''
        }
        this.handleSend=this.handleSend.bind(this);
        this.handlearticleid=this.handlearticleid.bind(this);
        this.handlerarticleid=this.handlerarticleid.bind(this);
        this.handlerauthorid=this.handlerauthorid.bind(this);
    }
    handlearticleid(e)
    {
        this.setState({
            emparticleid: e.target.value,
            message: 'Invalid Referenced Article ID',
            color: 'white'
        }, () => {console.log(this.state.emparticleid)})
    }
    handlerauthorid(e)
    {
        this.setState({
            authorid: e.target.value,
            message: 'Invalid Referenced Article ID',
            color: 'white'
        }, () => {console.log(this.state.authorid)})
    }
    handlerarticleid(e)
    {
        this.setState({
            authorarticleid: e.target.value,
            message: 'Invalid Referenced Article ID',
            color: 'white'
        }, () => {console.log(this.state.authorarticleid)})
    }
    handleSend()
    {
        if(this.state.emparticleid === '' || this.state.authorid === '' || this.state.authorarticleid === '')
        {
            this.setState({
                message: 'Complete all the fields before submitting',
                color: 'red'
            })
        }
        else if(this.state.emparticleid === this.state.authorarticleid)
        {
            this.setState({
                message: "Article ID's Must Be Different",
                color: 'red'
            })
        }
        else
        {
            axios.post("http://localhost:3001/Cite", this.state)
            .then(res => {
                console.log(res);
                if(res.data === 'Enter Valid Article ID')
                {
                    this.setState({
                        message: 'Enter Valid Article ID',
                        color: 'red'
                    })
                }
                else if(res.data === 'Enter Valid Author ID')
                {
                    this.setState({
                        message: 'Enter Valid Author ID',
                        color: 'red'
                    })
                }
                else if(res.data === 'Invalid Referenced Article ID')
                {
                    this.setState({
                        message: 'Invalid Referenced Article ID',
                        color: 'red'
                    })
                }
                else
                {
                    this.setState({
                        message: 'Request Send',
                        color: 'green'
                    })
                }
            })
            .catch(err => {
                console.log(err);
                this.setState({
                    message: 'Cannot Perform Operation',
                    color: 'red'
                })
            });
        }
    }
    componentDidMount()
    {
        axios.get('http://localhost:3001/Home')
        .then(res => {
            this.setState({
                empid: res.data.empid,
                message: 'Invalid Referenced Article ID',
                color: 'white'
            })
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
                    <b style={{fontSize: '30px', marginTop: '10px', marginBottom: '10px', color: 'green'}}><strong>Citation</strong></b>
                    <br />
                    <br />
                <p style={{fontSize: '20px', marginTop: '10px', marginBottom: '10px', color: this.state.color}}>{this.state.message}</p>
                <div className="login">
                <div>
                    <label htmlFor='authorid'><strong>Author ID</strong></label>
                    <br />
                    <input style={{fontSize:'15px', width: '250px',padding: '12px 20px', marginBottom: '10px', borderRadius: '4px'}} type="text" name="authorid" id="authorid" placeholder="Author id" value={this.state.empid} disabled/>
                 </div>
                 <div>
                    <label htmlFor='articleid'><strong>Article ID</strong></label>
                    <br />
                    <input value={this.state.articleid} onChange={this.handlearticleid} style={{fontSize:'15px', width: '250px',padding: '12px 20px', marginBottom: '10px', borderRadius: '4px'}} type="text" name="articleid" id="articleid" placeholder="Article ID"/>
                 </div>
                 <label htmlFor='articleid' style={{fontSize: '15px', marginTop: '15px', marginBottom: '20px', color: 'green'}}><strong>Referenced</strong></label>
                 <div>
                    <label htmlFor='articleid'><strong>Author ID</strong></label>
                    <br />
                    <input value={this.state.rauthorid} onChange={this.handlerauthorid} style={{fontSize:'15px', width: '250px',padding: '12px 20px', marginBottom: '10px', borderRadius: '4px'}} type="text" name="articleid" id="articleid" placeholder="Article ID"/>
                 </div>
                 <div>
                    <label htmlFor='articleid'><strong>Article ID</strong></label>
                    <br />
                    <input value={this.state.rarticleid} onChange={this.handlerarticleid} style={{fontSize:'15px', width: '250px',padding: '12px 20px', marginBottom: '10px', borderRadius: '4px'}} type="text" name="articleid" id="articleid" placeholder="Article ID"/>
                 </div>
                 <button onClick={this.handleSend} style={{fontSize: '15px', backgroundColor: '#4285F4',color: 'white',width: '300px',padding: '12px 20px', marginBottom: '10px', borderRadius: '4px'}}>Send</button>
            </div>
                </div>
            </div>
        )
    }
}
export default Citation;