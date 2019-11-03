import React, { Component } from 'react';



class Form extends Component {

  constructor() {
    super();

      this.state = {
        img_url: '',
        name: '',
        price: 0
    };
  }

// METHODS

handleImgUrlChange(url){
  this.setState({ img_url: url })
}

handleProductNameChange(productName){
  this.setState({ name: productName })
}

handlePriceChange(priceChange){
  this.setState({ price: priceChange })
}
handleCancelBtn(){
  document.getElementById("product-form").reset();
}





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
        <button onClick={this.handleCancelBtn} className="cancel">Cancel</button>
        <button className="add">Add To Inventory</button>

      </div>
    );
  }

}

export default Form;