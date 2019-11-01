import React, { Component } from 'react';
import './App.css';
import Header from './components/header/Header';
import Dashboard from './components/dashboard/Dashboard';
import Form from './components/form/Form';


class App extends Component {
  render(){
    return (
      <div className="App">

        <Header />
        <Dashboard />
        <Form />

      </div>
    );
  }
}

export default App