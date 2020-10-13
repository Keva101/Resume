import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './contents/Home'

function App() {
  return (
    <Router>
      <>
        <Route exact path='/' component ={Home} />
      </>
    </Router>
  );
}

export default App;
