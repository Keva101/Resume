import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './contents/Home';
import Skills from './contents/Skills';
import Education from './contents/Education';
import Experiences from './contents/Experiences';
import Contacts from './contents/Contacts';


function App() {
  return (
    <Router>
      <>
        <Route exact path='/' component ={Home} />
        <Switch>
        <Route path='/skills' component ={Skills} />
        <Route path='/education' component ={Education} />
        <Route path='/experiences' component ={Experiences} />
        <Route path='/contacts' component ={Contacts} />
        </Switch>
      </>
    </Router>
  );
}

export default App;
