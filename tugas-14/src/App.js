import React from 'react';
import logo from './logo.svg';
import {BrowserRouter as Router}from "react-router-dom"
import './App.css';
import Routes from './tugas 13/tugas 14/tugas 15/Routes'
  


function App() {
  return (
   

<div className="App">
      
     <Router>
       <Routes/>
     </Router>
     
     <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          React-JS 頑張りましょう
        </a>
      </header>
     
    </div>
  );
}

export default App;  