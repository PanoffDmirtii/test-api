import React from 'react';
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className='header'>
      <ul className='nav'>
        <li className='nav_item'><NavLink to='/'>Home</NavLink></li>
        <li className='nav_item'><NavLink to='coin'>Coin</NavLink></li>
      </ul>
    </div>
  );
};

export default Header;