import React from 'react';
import Home from './Components/Home.js';
import HODhome from './HOD/Home';
import AdminHome from './Admin/Home';
import Loginn from './Components/Login/Loginn.js';
import Journal from './Components/Yourarticles/Journal';
import HODJournal from './HOD/Yourarticles/Journal';
import Conference from './Components/Yourarticles/Conference';
import HODConference from './HOD/Yourarticles/Conference';
import Bookchapter from './Components/Yourarticles/Bookchapter';
import HODBookchapter from './HOD/Yourarticles/Bookchapter';
import Book from './Components/Yourarticles/Book';
import HODBook from './HOD/Yourarticles/Book';
import Request from './Components/Request/Request';
import HODRequest from './HOD/Request/Request';
import Alert from './Components/Alert/Alert';
import HODAlert from './HOD/Alert/Alert';
import Addarticle from './Components/Addarticle/Addarticle';
import HODAddarticle from './HOD/Addarticle/Addarticle';
import Newuser from './Components/Login/Newuser';
import Logout from './Components/Logoutpage/Logout';
import Myprofile from './Components/Login/Myprofile';
import HODMyprofile from './HOD/Login/Myprofile';
import AdminMyprofile from './Admin/Login/Myprofile';
import Department from './HOD/Department/Department';
import Delete from './Admin/Delete/Delete';
import Addhod from './Admin/AddHOD/Addhod';
import Cite from './Components/Citation/Citation';
import HODCite from './HOD/Citation/Citation';
import {BrowserRouter, Route, Switch, NavLink,withRouter} from 'react-router-dom';

function App() {
  return (
      <BrowserRouter>
          <Route path="/" component={Loginn} exact />
          <Route path="/Home" component={Home} />
          <Route path="/HODhome" component = {HODhome} />
          <Route path="/AdminHome" component={AdminHome} />
          <Route path="/Journals" component={Journal} />
          <Route path="/HODJournals" component={HODJournal} />
          <Route path="/Conference" component={Conference} />
          <Route path="/HODConference" component={HODConference} />
          <Route path="/Bookchapter" component={Bookchapter} />
          <Route path="/HODBookchapter" component={HODBookchapter} />
          <Route path="/Book" component={Book} />
          <Route path="/HODBook" component={HODBook} />
          <Route path="/Request" component={Request} exact />
          <Route path="/HODRequest" component={HODRequest} exact />
          <Route path="/Alert" component={Alert} exact />
          <Route path="/HODAlert" component={HODAlert} exact />
          <Route path="/Addarticle" component={Addarticle} exact />
          <Route path="/HODAddarticle" component={HODAddarticle} exact />
          <Route path="/Newuser" component={Newuser} exact />
          <Route path="/Myprofile" component={Myprofile} exact />
          <Route path="/HODMyprofile" component={HODMyprofile} exact />
          <Route path="/AdminMyprofile" component={AdminMyprofile} exact />
          <Route path="/Logout" component={Logout} exact />
          <Route path="/Department" component={Department} exact />
          <Route path="/Delete" component={Delete} exact />
          <Route path="/Addhod" component={Addhod} exact />
          <Route path="/Cite" component={Cite} exact />
          <Route path="/HODCite" component={HODCite} exact />
      </BrowserRouter>
  );
}

export default App;
