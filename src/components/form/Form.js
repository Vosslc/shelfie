import React, { Component } from 'react';



class Form extends Component {

  constructor() {
    super();
      this.state = {
      name: '',
      price: 0,
      imgurl: ''
    };
  }


  render() {
    return (
      <div>
        <h2>Form.js</h2>
        <input type="text" name="" id=""/>
        <input type="text" name="" id=""/>
        <input type="text" name="" id=""/>
        <button className="cancel">Cancel</button>
        <button className="add">Add To Inventory</button>

      </div>
    );
  }

}

export default Form;