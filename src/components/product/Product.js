import React, { Component } from 'react';

class Product extends Component {



  render() {
    return (

      <div className="products-to-display">
        {/* {console.log(this.props.index)} */}
        <p>Img: </p>
        <img src={this.props.element.image_url} alt=''/>
        <p>Name: {this.props.element.name}</p>
        <p>Price: ${this.props.element.price}</p>
        {/* {console.log(this.props.element)} */}
        <button onClick={() => 
          this.props.deleteAProductFn(this.props.element.id)} 
          className='delete'>Delete
        </button>
        <button 
          onClick={() =>
            this.props.editProductMethod(this.props.element)
          }
          className='edit'>
            Edit
        </button>
      </div>

    );
  }
}

export default Product;