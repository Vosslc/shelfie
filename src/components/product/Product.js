import React, { Component } from 'react';
import {Link} from 'react-router-dom'

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

        <Link to={`/edit/${this.props.element.id}`}>
          <button 
            className='edit'>
              Edit
          </button>
        </Link>
      </div>

    );
  }
}

export default Product;