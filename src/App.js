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
        inventory: [],
        selectedProduct: {}
    };
    this.getProducts = this.getProducts.bind(this);
    this.editProduct = this.editProduct.bind(this);
  }

//Life Cycles
componentDidMount() {
  this.getProducts()
}

// METHODS
  editProduct(product){ 
    console.log(product)
    this.setState({selectedProduct: product})//this is an obecjt thats on state
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




  // editProduct() {
  //   axios
  //   .get('/api/inventory')
  //   .then(res => {
  //     this.setState({
  //       inventory: res.data
  //     })
  //   })
  // }
  
  render(){
    return (
      <div className="">
        <div className="header">
          <Header />
        </div>
      
        <div className="App">
          
          <Dashboard 
            inventoryList={this.state.inventory}
            getProductsFn={this.getProducts}
            editProductMethod={this.editProduct}

          // componentDidMountFn={this.componentDidMount}
          />
          <Form 
            getProductsFn={this.getProducts}
            currentSelectedProduct={this.state.selectedProduct}
          />
        </div>
      </div>
    );
  }
}

export default App