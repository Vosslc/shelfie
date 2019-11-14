import React, { Component } from 'react';
import { HashRouter } from "react-router-dom";
import routes from "./routes";
import './App.css';
import Header from './components/header/Header';
// import Dashboard from './components/dashboard/Dashboard';
// import Form from './components/form/Form';



class App extends Component {

  render(){
    return (
      <HashRouter>
        <div className="">
          <div className="header">
            <Header />
          </div>
{/*         
          <div className="App">
            
            <Dashboard 
              inventoryList={this.state.inventory}
              getProductsFn={this.getProducts}
              editProductMethod={this.editProduct}

            
            />
            <Form 
              getProductsFn={this.getProducts}
              currentSelectedProduct={this.state.selectedProduct}
            />
           
          </div> */}
          {routes}
        </div>
      </HashRouter>
    );
  }
}

export default App