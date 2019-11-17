import React from 'react';
import './Header.css'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <header className="header">
        <Link to='/' ><div className='logo'>SHELFIE</div></Link>
        <Link to='/' ><button>Dashboard</button></Link>
        <Link to='/add'><button>Add Inventory</button></Link>
      </header>
    </div>
  );
}

export default Header;