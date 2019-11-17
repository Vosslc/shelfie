import React, { Component } from 'react';
import { HashRouter } from "react-router-dom";
import './App.css';
import Header from './components/header/Header';
import Routes from "./routes";
// import Dashboard from './components/dashboard/Dashboard';
// import Form from './components/form/Form';



class App extends Component {



  render(){
    return (
      <HashRouter>
        <div className="">
            <Header />
        <div className="app">
          
          
          {Routes}
        </div>
        </div>
      </HashRouter>
    );
  }
}

export default App