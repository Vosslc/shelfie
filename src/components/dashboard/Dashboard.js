import React, { Component } from 'react';
import Product from '../product/Product'
import './Dash.css'
import axios from 'axios';

class Dashboard extends Component {
  constructor(props) {
    super(props)

      this.state = {
        inventory: []
    };
    this.getProducts = this.getProducts.bind(this);
    this.deleteAProduct=this.deleteAProduct.bind(this);
  };

  //Life Cycles
  componentDidMount() {
    this.getProducts()
  }
  
  // METHODS
  
    getProducts() {
      axios
      .get('/api/inventory')
      .then(res => {
        this.setState({
          inventory: res.data
        })
      })
    }
  
    deleteAProduct(id){
      // console.log(id)
        axios.delete(`/api/inventory/${id}`)
        .then(()=> {
          this.getProducts();
        })
    }

  render() {

    return (
      <div className="dash">


        
        {/* <h2>Dashboard.js</h2> */}

        {this.state.inventory.map((element, index) => (
        <Product 
        
          key={element.id}  
          element={element}
          index={index}
          deleteAProductFn={this.deleteAProduct}
        />
        ))}
      </div>
    )
  } 
}

export default Dashboard;

