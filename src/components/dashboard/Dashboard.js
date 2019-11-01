import React, { Component } from 'react';
import Product from '../product/Product'

class Dashboard extends Component {
  render() {
    return (
      <div>
        <Product />
        <h2>Dashboard.js</h2>
      </div>
    );
  }
}

export default Dashboard;