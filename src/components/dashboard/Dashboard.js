import React, { Component } from 'react';
import Product from '../product/Product'

class Dashboard extends Component {
  render() {
    return (
      <div>
        <Product />
        <h2>Dashboard.js</h2>

        <div className="products-to-display" key={this.props.index}>
          {console.log(this.props.index)}
          <p>Img: </p>
          <img src={this.props.el.image} alt=''/>
          <p>Name: {this.props.el.name}</p>
          <p>Price: ${this.props.el.price}</p>
          {console.log(this.props.el)}
        </div>
      </div>
    );
  } 
}

export default Dashboard;