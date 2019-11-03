import React, { Component } from 'react';
import './App.css';
import Header from './components/header/Header';
import Dashboard from './components/dashboard/Dashboard';
import Form from './components/form/Form';
import axios from 'axios';


class App extends Component {

  constructor(props) {
    super(props);

      this.state = {
        inventory: []
    };
    this.getProducts = this.getProducts.bind(this);
  }


  componentDidMount() {
    this.getProducts()
  }

  getProducts() {
    axios
    .get('/api/inventory')
    .then(res => {
      this.setState({
        inventory: res.data
      })
    })
  }
  
  render(){
    return (
      <div className="App">
        <Header />
        <Dashboard 
          inventoryList={this.state.inventory}
        // componentDidMountFn={this.componentDidMount}
        />
        <Form 
          getProductsFn={this.getProducts}
        />
      </div>
    );
  }
}

export default App