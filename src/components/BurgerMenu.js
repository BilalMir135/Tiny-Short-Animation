import React from 'react';
import { stack as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';
import './BurgerMenu.css';

const BurgerMenu = () => {
  return (
    <div>
      <h2 className='logo'>Standard Books</h2>
      <Menu right>
        <Link to='/home'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/services'>Services</Link>
        <Link to='/contact'>Contact</Link>
      </Menu>
    </div>
  );
};

export default BurgerMenu;
