import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'phosphor-react';
import './navbar.css';
import { Button } from './Button';

const Navbar = () => {
  // Use state for clicking
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  // Method for setting button based on window size
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/login" className="active" onClick={closeMobileMenu}>
            Logout
          </Link>
          <div className="menu-icon" onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>

                  {/* Navigation Item */}
                  <li className='nav-item'>
                    <Link to='/shop' className='nav-links' onClick={closeMobileMenu}>
                      Home
                    </Link>
                  </li>

                  {/* Navigation Item */}
                  <li className='nav-item'>
                    <Link to='/cart' className='nav-links' onClick={closeMobileMenu}>
                    <ShoppingCart size={32} />
                    </Link>
                  </li>              

            </ul>

            {button && <Button buttonStyle='btn--outline'>SIGN UP
                
                </Button>}
          </div>
        
      </nav>
    </>
  );
};

export default Navbar;
