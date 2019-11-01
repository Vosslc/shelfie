import React, { Component } from 'react';
import './App.css';
import Header from './components/header/Header';
import Dashboard from './components/dashboard/Dashboard';
import Form from './components/form/Form';



class App extends Component {

  constructor(props) {
    super(props);

      this.state = {
        inventory: [{
          image: 'https://picsum.photos/id/1018/300/150',
          name: "coffee",
          price: "10"
        },
        {
          image: 'https://picsum.photos/id/2/300/150',
          name: "Stuff",
          price: "888"
        }
      ]
    };
  }

  render(){
    return (
      <div className="App">

        
        <Header />
        {this.state.inventory.map((el, index) => (
          <Dashboard 
            
            key={index}  //change this to id
            el={el}
            index={index}
            
          />
        ))}
        <Form />
        
      </div>
    );
  }
}

export default App