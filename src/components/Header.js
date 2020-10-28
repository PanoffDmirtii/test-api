import React from 'react';
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className='header'>
      <ul className='nav'>
        <li className='nav_item'><NavLink to='/test-api'>Home</NavLink></li>
        <li className='nav_item'><NavLink to='/test-api/coin'>Coin</NavLink></li>
      </ul>
    </div>
  );
};

export default Header;