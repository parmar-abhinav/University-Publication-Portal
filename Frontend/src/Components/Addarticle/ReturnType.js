import React, {Component} from 'react';
import '../Style.css';

class ReturnType extends Component
{
    constructor(props)
    {
        super(props)
        this.state={
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
            accessionno: ''
        }
        this.handleindexing=this.handleindexing.bind(this);
        this.handlejournalname=this.handlejournalname.bind(this);
        this.handlevolumeno=this.handlevolumeno.bind(this)
        this.handleissueno=this.handleissueno.bind(this);
        this.handlepagefrom=this.handlepagefrom.bind(this);
        this.handlepageto=this.handlepageto.bind(this);
        this.handleconferencename=this.handleconferencename.bind(this);
        this.handlelocation=this.handlelocation.bind(this);
        this.handledate=this.handledate.bind(this);
        this.handlepublicationhouse=this.handlepublicationhouse.bind(this);
        this.handleisbnno=this.handleisbnno.bind(this);
        this.handleaccessionno=this.handleaccessionno.bind(this);
    }
    handleindexing(e)
    {
        this.setState({
            type: this.state.type,
            empid: this.state.empid,
            articleid: this.state.articleid,
            title: this.state.title,
            link: this.state.link,
            indexing: e.target.value,
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
            accessionno: this.state.accessionno
        }, () => {this.props.handlereturntype(this.state)})
    }
    handlejournalname(e)
    {
        this.setState({
            type: this.state.type,
            empid: this.state.empid,
            articleid: this.state.articleid,
            title: this.state.title,
            link: this.state.link,
            indexing: this.state.indexing,
            Journalname: e.target.value,
            volumeno: this.state.volumeno,
            issueno: this.state.issueno,
            pagefrom: this.state.pagefrom,
            pageto: this.state.pageto,
            conferecename: this.state.conferecename,
            location: this.state.location,
            date: this.state.date,
            publicationhouse: this.state.publicationhouse,
            isbnno: this.state.isbnno,
            accessionno: this.state.accessionno
        }, () => {this.props.handlereturntype(this.state)})
    }
    handlevolumeno(e)
    {
        this.setState({
            type: this.state.type,
            empid: this.state.empid,
            articleid: this.state.articleid,
            title: this.state.title,
            link: this.state.link,
            indexing: this.state.indexing,
            Journalname: this.state.Journalname,
            volumeno: e.target.value,
            issueno: this.state.issueno,
            pagefrom: this.state.pagefrom,
            pageto: this.state.pageto,
            conferecename: this.state.conferecename,
            location: this.state.location,
            date: this.state.date,
            publicationhouse: this.state.publicationhouse,
            isbnno: this.state.isbnno,
            accessionno: this.state.accessionno
        }, () => {this.props.handlereturntype(this.state)})
    }
    handleissueno(e)
    {
        this.setState({
            type: this.state.type,
            empid: this.state.empid,
            articleid: this.state.articleid,
            title: this.state.title,
            link: this.state.link,
            indexing: this.state.indexing,
            Journalname: this.state.Journalname,
            volumeno: this.state.volumeno,
            issueno: e.target.value,
            pagefrom: this.state.pagefrom,
            pageto: this.state.pageto,
            conferecename: this.state.conferecename,
            location: this.state.location,
            date: this.state.date,
            publicationhouse: this.state.publicationhouse,
            isbnno: this.state.isbnno,
            accessionno: this.state.accessionno
        }, () => {this.props.handlereturntype(this.state)})
    }
    handlepagefrom(e)
    {
        this.setState({
            type: this.state.type,
            empid: this.state.empid,
            articleid: this.state.articleid,
            title: this.state.title,
            link: this.state.link,
            indexing: this.state.indexing,
            Journalname: this.state.Journalname,
            volumeno: this.state.volumeno,
            issueno: this.state.issueno,
            pagefrom: e.target.value,
            pageto: this.state.pageto,
            conferecename: this.state.conferecename,
            location: this.state.location,
            date: this.state.date,
            publicationhouse: this.state.publicationhouse,
            isbnno: this.state.isbnno,
            accessionno: this.state.accessionno
        }, () => {this.props.handlereturntype(this.state)})
    }
    handlepageto(e)
    {
        this.setState({
            type: this.state.type,
            empid: this.state.empid,
            articleid: this.state.articleid,
            title: this.state.title,
            link: this.state.link,
            indexing: this.state.indexing,
            Journalname: this.state.Journalname,
            volumeno: this.state.volumeno,
            issueno: this.state.issueno,
            pagefrom: this.state.pagefrom,
            pageto: e.target.value,
            conferecename: this.state.conferecename,
            location: this.state.location,
            date: this.state.date,
            publicationhouse: this.state.publicationhouse,
            isbnno: this.state.isbnno,
            accessionno: this.state.accessionno
        }, () => {this.props.handlereturntype(this.state)})
    }
    handleconferencename(e)
    {
        this.setState({
            type: this.state.type,
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
            conferecename: e.target.value,
            location: this.state.location,
            date: this.state.date,
            publicationhouse: this.state.publicationhouse,
            isbnno: this.state.isbnno,
            accessionno: this.state.accessionno
        }, () => {this.props.handlereturntype(this.state)})
    }
    handlelocation(e)
    {
        this.setState({
            type: this.state.type,
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
            location: e.target.value,
            date: this.state.date,
            publicationhouse: this.state.publicationhouse,
            isbnno: this.state.isbnno,
            accessionno: this.state.accessionno
        }, () => {this.props.handlereturntype(this.state)})
    }
    handledate(e)
    {
        this.setState({
            type: this.state.type,
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
            date: e.target.value,
            publicationhouse: this.state.publicationhouse,
            isbnno: this.state.isbnno,
            accessionno: this.state.accessionno
        }, () => {this.props.handlereturntype(this.state)})
    }
    handlepublicationhouse(e)
    {
        this.setState({
            type: this.state.type,
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
            publicationhouse: e.target.value,
            isbnno: this.state.isbnno,
            accessionno: this.state.accessionno
        }, () => {this.props.handlereturntype(this.state)})
    }
    handleisbnno(e)
    {
        this.setState({
            type: this.state.type,
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
            isbnno: e.target.value,
            accessionno: this.state.accessionno
        }, () => {this.props.handlereturntype(this.state)})
    }
    handleaccessionno(e)
    {
        this.setState({
            type: this.state.type,
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
            accessionno: e.target.value
        }, () => {this.props.handlereturntype(this.state)})
    }
    render(){
        if(this.props.type==="Journal")
        {
            return(
                <div style={{textAlign: 'left'}}>
                    <div style={{display: 'inline-block', marginLeft: '50px', marginBottom: '10px'}}>
                        <label style={{fontSize: '20px', marginRight: '10px', marginBottom: '10px', display: 'block'}} htmlFor="type">Indexing</label>
                        <select value={this.state.indexing} onChange={this.handleindexing} id="Indexing" name="Indexing" style={{padding: '6px 20px', fontSize:'15px',  width: '550px', marginBottom: '10px', borderRadius: '4px'}}>
                            <option value="SCI">SCI</option>
                            <option value="SCOPUS">SCOPUS</option>
                            <option value="PubMed">PubMed</option>
                            <option value="ICI">ICI</option>
                            <option value="other">other</option>
                        </select>  
                    </div>
                    <div>
                        <div style={{display: 'inline-block', marginLeft: '50px', marginBottom: '10px'}}>
                            <label style={{fontSize: '20px', marginRight: '10px', marginBottom: '10px', display: 'block'}} htmlFor="journalname">Journal Name</label>
                            <input style={{padding: '6px 20px', fontSize:'15px',  width: '500px', marginBottom: '10px', borderRadius: '4px'}} type="text" id="journalname" placeholder="Journal Name" value={this.state.Journalname} onChange={this.handlejournalname}/>
                        </div>
                    </div>
                    <div>
                        <div style={{display: 'inline-block', marginLeft: '50px', marginBottom: '10px'}}>
                            <label style={{fontSize: '20px', marginRight: '10px', marginBottom: '10px', display: 'block'}} htmlFor="volno">Volume Number</label>
                            <input style={{padding: '6px 20px', fontSize:'15px',  width: '500px', marginBottom: '10px', borderRadius: '4px'}} type="number" id="volno" placeholder="Volume Number" value={this.state.volumeno} onChange={this.handlevolumeno}/>
                        </div>
                    </div>
                    <div>
                        <div style={{display: 'inline-block', marginLeft: '50px', marginBottom: '10px'}}>
                            <label style={{fontSize: '20px', marginRight: '10px', marginBottom: '10px', display: 'block'}} htmlFor="Issue">Issue Number</label>
                            <input style={{padding: '6px 20px', fontSize:'15px',  width: '500px', marginBottom: '10px', borderRadius: '4px'}} type="number" id="Issue" placeholder="Issue Number" value={this.state.issueno} onChange={this.handleissueno}/>
                        </div>
                    </div>
                    <div>
                        <div style={{display: 'inline-block', marginLeft: '50px', marginBottom: '10px'}}>
                            <label style={{fontSize: '20px', marginRight: '10px', marginBottom: '5px', display: 'block'}} htmlFor="pageno">Page Number</label>
                            <label style={{fontSize: '15px', marginRight: '10px', marginBottom: '10px'}} htmlFor="from">From</label>
                            <input style={{padding: '6px 20px', fontSize:'15px',  width: '190px', marginRight: '10px', marginBottom: '10px', borderRadius: '4px'}} type="number" id="from" placeholder="Start Page Number" value={this.state.pagefrom} onChange={this.handlepagefrom}/>
                            <label style={{fontSize: '15px', marginRight: '10px', marginBottom: '10px'}} htmlFor="to">To</label>
                            <input style={{padding: '6px 20px', fontSize:'15px',  width: '190px', marginRight: '10px', marginBottom: '10px', borderRadius: '4px'}} type="number" id="to" placeholder="Ending Page Number" value={this.state.pageto} onChange={this.handlepageto}/>
                        </div>
                    </div>
                </div>
            )
        }
        else if(this.props.type==="Conference")
        {
            return(
                <div style={{textAlign: 'left'}}>
                    <div>
                    <div style={{display: 'inline-block', marginLeft: '50px', marginBottom: '10px'}}>
                        <label style={{fontSize: '20px', marginRight: '10px', marginBottom: '10px', display: 'block'}} htmlFor="type">Indexing</label>
                        <select value={this.state.indexing} onChange={this.handleindexing} id="Indexing" name="Indexing" style={{padding: '6px 20px', fontSize:'15px',  width: '550px', marginBottom: '10px', borderRadius: '4px'}}>
                            <option value="SCOPUS">SCOPUS</option>
                            <option value="other">other</option>
                        </select>  
                    </div>
                    <div>
                        <div style={{display: 'inline-block', marginLeft: '50px', marginBottom: '10px'}}>
                            <label style={{fontSize: '20px', marginRight: '10px', marginBottom: '10px', display: 'block'}} htmlFor="conferencename">Conference Name</label>
                            <input style={{padding: '6px 20px', fontSize:'15px',  width: '500px', marginBottom: '10px', borderRadius: '4px'}} type="text" id="conferencename" placeholder="Conference Name" value={this.state.conferecename} onChange={this.handleconferencename}/>
                        </div>
                    </div>
                    <div>
                        <div style={{display: 'inline-block', marginLeft: '50px', marginBottom: '10px'}}>
                            <label style={{fontSize: '20px', marginRight: '10px', marginBottom: '10px', display: 'block'}} htmlFor="location">Location</label>
                            <input style={{padding: '6px 20px', fontSize:'15px',  width: '500px', marginBottom: '10px', borderRadius: '4px'}} type="text" id="location" placeholder="Location" value={this.state.location} onChange={this.handlelocation}/>
                        </div>
                    </div>
                    <div>
                        <div style={{display: 'inline-block', marginLeft: '50px', marginBottom: '10px'}}>
                            <label style={{fontSize: '20px', marginRight: '10px', marginBottom: '10px', display: 'block'}} htmlFor="date">Date</label>
                            <input style={{padding: '6px 20px', fontSize:'15px',  width: '500px', marginBottom: '10px', borderRadius: '4px'}} type="date" id="date" placeholder="Date" value={this.state.date} onChange={this.handledate}/>
                        </div>
                    </div>
                    </div>
                    <div>
                        <div style={{display: 'inline-block', marginLeft: '50px', marginBottom: '10px'}}>
                            <label style={{fontSize: '20px', marginRight: '10px', marginBottom: '5px', display: 'block'}} htmlFor="pageno">Page Number</label>
                            <label style={{fontSize: '15px', marginRight: '10px', marginBottom: '10px'}} htmlFor="from">From</label>
                            <input style={{padding: '6px 20px', fontSize:'15px',  width: '190px', marginRight: '10px', marginBottom: '10px', borderRadius: '4px'}} type="number" id="from" placeholder="Start Page Number" value={this.state.pagefrom} onChange={this.handlepagefrom}/>
                            <label style={{fontSize: '15px', marginRight: '10px', marginBottom: '10px'}} htmlFor="to">To</label>
                            <input style={{padding: '6px 20px', fontSize:'15px',  width: '190px', marginRight: '10px', marginBottom: '10px', borderRadius: '4px'}} type="number" id="to" placeholder="Ending Page Number" value={this.state.pageto} onChange={this.handlepageto}/>
                        </div>
                    </div>
                </div>
            )
        }
        else if(this.props.type==="Book Chapter")
        {
             return(
            <div style={{textAlign: 'left'}}>
                <div style={{display: 'inline-block', marginLeft: '50px', marginBottom: '10px'}}>
                        <label style={{fontSize: '20px', marginRight: '10px', marginBottom: '10px', display: 'block'}} htmlFor="type">Indexing</label>
                        <select value={this.state.indexing} onChange={this.handleindexing} id="Indexing" name="Indexing" style={{padding: '6px 20px', fontSize:'15px',  width: '550px', marginBottom: '10px', borderRadius: '4px'}}>
                            <option value="SCOPUS">SCOPUS</option>
                            <option value="other">other</option>
                        </select>  
                    </div>
                <div>
                    <div style={{display: 'inline-block', marginLeft: '50px', marginBottom: '10px'}}>
                        <label style={{fontSize: '20px', marginRight: '10px', marginBottom: '10px', display: 'block'}} htmlFor="publicationhouse">Publication House</label>
                        <input style={{padding: '6px 20px', fontSize:'15px',  width: '500px', marginBottom: '10px', borderRadius: '4px'}} type="text" id="publicationhouse" placeholder="Publication House" value={this.state.publicationhouse} onChange={this.handlepublicationhouse}/>
                    </div>
                </div>
                <div>
                        <div style={{display: 'inline-block', marginLeft: '50px', marginBottom: '10px'}}>
                            <label style={{fontSize: '20px', marginRight: '10px', marginBottom: '10px', display: 'block'}} htmlFor="location">Location</label>
                            <input style={{padding: '6px 20px', fontSize:'15px',  width: '500px', marginBottom: '10px', borderRadius: '4px'}} type="text" id="location" placeholder="Location" value={this.state.location} onChange={this.handlelocation}/>
                        </div>
                    </div>
                    <div>
                        <div style={{display: 'inline-block', marginLeft: '50px', marginBottom: '10px'}}>
                            <label style={{fontSize: '20px', marginRight: '10px', marginBottom: '10px', display: 'block'}} htmlFor="date">Date</label>
                            <input style={{padding: '6px 20px', fontSize:'15px',  width: '500px', marginBottom: '10px', borderRadius: '4px'}} type="date" id="date" placeholder="Date" value={this.state.date} onChange={this.handledate}/>
                        </div>
                    </div>
            </div>
             )
        }
        else
        {
            return(
                <div style={{textAlign: 'left'}}>
                    <div style={{display: 'inline-block', marginLeft: '50px', marginBottom: '10px'}}>
                        <label style={{fontSize: '20px', marginRight: '10px', marginBottom: '10px', display: 'block'}} htmlFor="type">Indexing</label>
                        <select value={this.state.indexing} onChange={this.handleindexing} id="Indexing" name="Indexing" style={{padding: '6px 20px', fontSize:'15px',  width: '550px', marginBottom: '10px', borderRadius: '4px'}}>
                            <option value="SCOPUS">SCOPUS</option>
                            <option value="other">other</option>
                        </select>  
                    </div>
                   <div>
                    <div style={{display: 'inline-block', marginLeft: '50px', marginBottom: '10px'}}>
                        <label style={{fontSize: '20px', marginRight: '10px', marginBottom: '10px', display: 'block'}} htmlFor="publicationhouse">Publication House</label>
                        <input style={{padding: '6px 20px', fontSize:'15px',  width: '500px', marginBottom: '10px', borderRadius: '4px'}} type="text" id="publicationhouse" placeholder="Publication House" value={this.state.publicationhouse} onChange={this.handlepublicationhouse}/>
                    </div>
                </div>
                <div>
                        <div style={{display: 'inline-block', marginLeft: '50px', marginBottom: '10px'}}>
                            <label style={{fontSize: '20px', marginRight: '10px', marginBottom: '10px', display: 'block'}} htmlFor="date">Date</label>
                            <input style={{padding: '6px 20px', fontSize:'15px',  width: '500px', marginBottom: '10px', borderRadius: '4px'}} type="date" id="date" placeholder="Date" value={this.state.date} onChange={this.handledate}/>
                        </div>
                    </div>
                    <div>
                        <div style={{display: 'inline-block', marginLeft: '50px', marginBottom: '10px'}}>
                            <label style={{fontSize: '20px', marginRight: '10px', marginBottom: '10px', display: 'block'}} htmlFor="Isbnno">Isbn Number</label>
                            <input style={{padding: '6px 20px', fontSize:'15px',  width: '500px', marginBottom: '10px', borderRadius: '4px'}} type="number" id="Isbnno" placeholder="Isbn Number" value={this.state.isbnno} onChange={this.handleisbnno}/>
                        </div>
                    </div>
                    <div>
                        <div style={{display: 'inline-block', marginLeft: '50px', marginBottom: '10px'}}>
                            <label style={{fontSize: '20px', marginRight: '10px', marginBottom: '10px', display: 'block'}} htmlFor="accno">Accession Number</label>
                            <input style={{padding: '6px 20px', fontSize:'15px',  width: '500px', marginBottom: '10px', borderRadius: '4px'}} type="number" id="accno" placeholder="Accession Number" value={this.state.accessionno} onChange={this.handleaccessionno}/>
                        </div>
                    </div>
                </div>
            )
        }
    }
} 
export default ReturnType;