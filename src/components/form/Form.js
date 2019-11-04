import React, { Component } from 'react';
import axios from 'axios';


class Form extends Component {

  constructor() {
    super();

      this.state = {
        // id: '',
        image_url: '',
        name: '',
        price: 0
    };
    this.addAProduct = this.addAProduct.bind(this);
  }

// METHODS

handleImgUrlChange(url){
  this.setState({ image_url: url })
}

handleProductNameChange(productName){
  this.setState({ name: productName })
}

handlePriceChange(priceChange){
  this.setState({ price: priceChange })
}
clearInputField(){
  document.getElementById("product-form").reset();
}

addAProduct(){
  const {image_url, price, name} = this.state;
    axios.post('/api/inventory', {image_url, price, name })
    .then(() => {this.props.getProductsFn()})
    this.clearInputField()
}

// deleteAProduct(){
//   const {id} = this.state;
//     axios.delete('/api/inventory/:id', {id})
//     .then(()=> {this.props.getProductsFn()})
// }


//*********/ 

  render() {
    return (
      <div>
        <h2>Form.js</h2>
        
        <form id="product-form">
          <p>IMG URL:</p>
          <input onChange={e => this.handleImgUrlChange(e.target.value)} type="text"/>
          <p>Product Name:</p>
          <input onChange={e => this.handleProductNameChange(e.target.value)} type="text"/>
          <p>Price:</p>
          <input onChange={e => this.handlePriceChange(e.target.value)} type="text"/>
        </form>
        <button onClick={this.clearInputField} className="cancel">Cancel</button>
        <button onClick={this.addAProduct}className="add">Add To Inventory</button>

      </div>
    );
  }

}

export default Form;