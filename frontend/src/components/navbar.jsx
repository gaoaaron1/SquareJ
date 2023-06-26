import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'phosphor-react';
import { AiOutlineHome } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';
import { AiOutlineShopping } from 'react-icons/ai';
import './navbar.css';
import { Button } from './Button';

const Navbar = ({ loginStatus, loggedIn }) => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

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

  const handleLoginStatusClick = () => {
    console.log(loginStatus);
  };


  //Items used for navigation
  function NavigationItem(props) {
    return (
      <>
        {/* Navigation Item */}
        <li className='nav-item'>
          <Link to={props.navigationName} className='nav-links' onClick={closeMobileMenu}>
            <props.iconName size={32} />
          </Link>
        </li>
      </>
    )
  }



  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            Square J <i className='fab fa-typo3' />
          </Link>

          {loggedIn ? (
            <Link to="/login" className="active" onClick={closeMobileMenu}>
              Logout
            </Link>
          ) : null}



          {/* Menu Icon navigation */}
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>




            {/* Navigation Bar item function */}
            <NavigationItem iconName={AiOutlineHome} navigationName={'/'} />
            <NavigationItem iconName={AiOutlineShopping} navigationName={'/shop'} />
            <NavigationItem iconName={ShoppingCart} navigationName={'/cart'} />
            <NavigationItem iconName={CgProfile} navigationName={'/profile'} />

          </ul>


          {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}


        </div>
      </nav >
    </>
  );
};

export default Navbar;
