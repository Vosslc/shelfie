import React, { Component } from 'react';
import Product from '../product/Product'
// import Form from '../form/Form'
import axios from 'axios';

class Dashboard extends Component {
  constructor(props) {
    super(props)

      this.state = {
        inventory: [],
        selectedProduct: {}
    };
    this.getProducts = this.getProducts.bind(this);
    this.editProduct = this.editProduct.bind(this);
    this.deleteAProduct=this.deleteAProduct.bind(this);
  };

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
  
    deleteAProduct(id){
      // console.log(id)
        axios.delete(`/api/inventory/${id}`)
        .then(()=> {
          this.getProducts();
        })
    }

  render() {

    return (
      <div>


        
        <h2>Dashboard.js</h2>

        {this.state.inventory.map((element, index) => (
        <Product 
        
          key={element.id}  
          element={element}
          index={index}
          deleteAProductFn={this.deleteAProduct}
          editProductMethod={this.editProducts}
        />
        ))}

        {/* <Form 
              getProductsFn={this.getProducts}
              currentSelectedProduct={this.state.selectedProduct}
              
        /> */}
        
        {/* <button className='delete'>Delete</button>
        <button className='edit'>Edit</button> */}
      </div>
    )
  } 
}

export default Dashboard;

