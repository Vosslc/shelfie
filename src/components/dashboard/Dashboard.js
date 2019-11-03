import React, { Component } from 'react';
import Product from '../product/Product'

class Dashboard extends Component {
  render() {
    return (
      <div>


        
        <h2>Dashboard.js</h2>

        {this.props.inventoryList.map((element, index) => (
        <Product 
        
          key={element.id}  //change this to id
          el={element}
          index={index}
        />

        ))}
        


      </div>
    );
  } 
}

export default Dashboard;

