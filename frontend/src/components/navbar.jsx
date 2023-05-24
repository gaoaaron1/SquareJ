import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'phosphor-react';
import './navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <ul>
        <li style={{ float: 'right' }}>
          <Link to="/login" className="active">
            Logout
          </Link>
        </li>
        <li>
          <Link to="/shop">Shop</Link>
        </li>
        <li>
          <Link to="/cart" className="cartStyle">
            <ShoppingCart size={32} />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
