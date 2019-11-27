import React, {Component} from 'react';
import Navigation from '../Home/Navigation'
import axios from 'axios';
import '../Style.css';

class Request extends Component
{
    constructor(props)
    {
        super(props)
        this.state={
            empid: '',
            articleid:'',
            authorid: ''
        }
        this.handleSend=this.handleSend.bind(this);
        this.handlearticleid=this.handlearticleid.bind(this);
        this.handleauthorid=this.handleauthorid.bind(this);
    }
    handlearticleid(e)
    {
        this.setState({
            empid: this.state.empid,
            articleid:e.target.value,
            authorid: this.state.authorid,
            message: 'dvsdvsdvsdv',
            color: 'white'
        })
    }
    handleauthorid(e)
    {
        this.setState({
            empid: e.target.value,
            articleid:this.state.articleid,
            authorid: this.state.authorid,
            message: 'dvsdvsdvsdv',
            color: 'white'
        })
    }
    handleSend()
    {
        console.log(this.state.empid);
        console.log(this.state.articleid);
        if(this.state.articleid === '' || this.state.empid === '')
        {
            this.setState({
                message: 'Complete all the fields before submitting',
                color: 'red'
            })
        }
        else if(this.state.empid === this.state.authorid)
        {
            this.setState({
                message: 'Enter Valid Author ID',
                color: 'red'
            })
        }
        else
        {
            axios.post("http://localhost:3001/Alert", this.state)
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
                    message: 'Enter Valid Author ID & Article ID',
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
                authorid: res.data.empid
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
                    <b style={{fontSize: '30px', marginTop: '10px', marginBottom: '10px', color: 'green'}}><strong>Send Request</strong></b>
                    <br />
                    <br />
        <p style={{fontSize: '20px', marginTop: '10px', marginBottom: '10px', color: this.state.color}}>{this.state.message}</p>
                <div className="login">
                <div>
                    <label htmlFor='authorid'><strong>Author ID</strong></label>
                    <br />
                    <input value={this.state.empid} onChange={this.handleauthorid} style={{fontSize:'15px', width: '250px',padding: '12px 20px', marginBottom: '10px', borderRadius: '4px'}} type="text" name="authorid" id="authorid" placeholder="Author id"/>
                 </div>
                 <div>
                    <label htmlFor='articleid'><strong>Article ID</strong></label>
                    <br />
                    <input value={this.state.articleid} onChange={this.handlearticleid} style={{fontSize:'15px', width: '250px',padding: '12px 20px', marginBottom: '10px', borderRadius: '4px'}} type="text" name="articleid" id="articleid" placeholder="Article ID"/>
                 </div>
                 <button onClick={this.handleSend} style={{fontSize: '15px', backgroundColor: '#4285F4',color: 'white',width: '300px',padding: '12px 20px', marginBottom: '10px', borderRadius: '4px'}}>Send</button>
            </div>
                </div>
            </div>
        )
    }
}
export default Request;