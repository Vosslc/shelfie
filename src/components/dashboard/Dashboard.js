import React, { Component } from 'react';
import Product from '../product/Product'
import axios from 'axios';

class Dashboard extends Component {
constructor(){
  super()

  this.deleteAProduct=this.deleteAProduct.bind(this)
}


  deleteAProduct(id){
    // console.log(id)
      axios.delete(`/api/inventory/${id}`)
      .then(()=> {
        this.props.getProductsFn();
      })
  }

  render() {
    return (
      <div>


        
        <h2>Dashboard.js</h2>

        {this.props.inventoryList.map((element, index) => (
        <Product 
        
          key={element.id}  //change this to id
          el={element}
          index={index}
          deleteAProductFn={this.deleteAProduct}
        />
        ))}
        
        {/* <button className='delete'>Delete</button>
        <button className='edit'>Edit</button> */}
      </div>
    );
  } 
}

export default Dashboard;

