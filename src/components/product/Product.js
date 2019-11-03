import React, { Component } from 'react';

class Product extends Component {
  render() {
    return (

      <div className="products-to-display">
        {/* {console.log(this.props.index)} */}
        <p>Img: </p>
        <img src={this.props.el.image_url} alt=''/>
        <p>Name: {this.props.el.name}</p>
        <p>Price: ${this.props.el.price}</p>
        {/* {console.log(this.props.el)} */}
      </div>

    );
  }
}

export default Product;