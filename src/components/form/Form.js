import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


class Form extends Component {

  constructor() {
    super();

      this.state = {
        currentSelectedId: null,
        image_url: '',
        // 'https://epaper.thesangaiexpress.com/images/not_found.png'
        name: '',
        price: 0,
    };
    // this.addAProduct = this.addAProduct.bind(this); 
    this.clearInputField = this.clearInputField.bind(this);
  }

//Life Cycles
//! NOTE componentDidUpdate anytime the component recives new props it will run, and it captures the previous props. the whole perpose is to compare the new props to old props
componentDidUpdate(prevProps){ //this is react magic.....   the prev props is automaticly stored here...
  // console.log(this.props.editProductMethod)
  const { id, image_url, name, price } = this.props.editProductMethod;
  // console.log(image_url)
  if (this.props.editProductMethod !== prevProps.editProductMethod){
    this.setState({
      currentSelectedId: id,
      image_url: image_url, 
      name: name, 
      price: price 
    })
  }
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
  this.setState({ 
    currentSelectedId: null,
    image_url: 'https://epaper.thesangaiexpress.com/images/not_found.png',
    name: '',
    price: 0,
  });
}

addAProduct = () => { //Arrow Functions lexically bind their context so this actually refers to the originating context REF https://hackernoon.com/javascript-es6-arrow-functions-and-lexical-this-f2a3e2a5e8c4
  const {image_url, price, name} = this.state;
    axios
    .post('/api/inventory', {image_url, price, name })
    .then(() => {this.props.getProductsFn()})
    .catch(err => console.log(err))
    this.clearInputField()
}

saveChanges = () => {
  axios
    .put(`/api/inventory/${this.state.currentSelectedId}`, { 
      image_url: this.state.image_url,
      name: this.state.name,
      price: this.state.price,
    })
    .then(() => {this.props.getProductsFn()})     //this.props.history.push("/")
    .catch(err => console.log(err))
}




// handleCurrentSelectedProduct(){}

// deleteAProduct(){
//   const {id} = this.state;
//     axios.delete('/api/inventory/:id', {id})
//     .then(()=> {this.props.getProductsFn()})
// }


//*********/ 

  render() {
    const { image_url, name, price } = this.state;
    return (
      <div>

        <h2>Form.js</h2>
        <form id="product-form">
          <p>IMG URL:</p>
          <input 
            onChange={e => this.handleImgUrlChange(e.target.value)} 
            type="text"
            value={image_url}
          />

          <p>Product Name:</p>
          <input 
            onChange={e => this.handleProductNameChange(e.target.value)} 
            type="text"
            value={name}
          />

          <p>Price:</p>
          <input 
          onChange={e => this.handlePriceChange(e.target.value)} 
          type="text"
          value={price}
          />
        </form>

        <Link to="/">
          <button onClick={this.clearInputField} className="cancel">Cancel</button>
          {!this.state.currentSelectedId ? (
            <button onClick={this.addAProduct} className="add">Add To Inventory</button>
            ) : (
              <button onClick={this.saveChanges} className="save">Save Changes</button>
          )}
        </Link>
      </div>
    );
  }

}

export default Form;