import React, { useState } from 'react';
import { AiFillCloseCircle as CloseMenu } from "react-icons/ai";
import { FiMenu as MenuIcon } from "react-icons/fi";
import  Logo  from "../../assets/Image/logo.png";
import "../NavBar/Navbar.css";
import {NavLink} from 'react-router-dom';
 
const Navbar=()=>{


    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);


        return (
<>
<div className="header">
      <div className="logo-nav">
        <div className="logo-container">
       
           <img src={Logo} className="logo"/>
         
        </div>
        <ul className={click ? "nav-options active" : "nav-options"}>
          <li className="option" onClick={closeMobileMenu}>
           <NavLink to='/' 
            style={{ textDecoration: 'none' }}
            > Job</NavLink>
          </li>
          
          <li className="option" onClick={closeMobileMenu}>
          <NavLink to='/' 
            style={{ textDecoration: 'none' }}
            > Blog</NavLink>
          </li>
          <li className="option" onClick={closeMobileMenu}>
          <NavLink to='/' 
            style={{ textDecoration: 'none' }}
            > About</NavLink>
          </li>
          <li className="option mobile-option" onClick={closeMobileMenu}>
          <NavLink to='/' 
          className="sign-in"
            style={{ textDecoration: 'none' }}
            > Sign In</NavLink>
          </li>
          <li className="option mobile-option" onClick={closeMobileMenu}>
          <NavLink to='/' 
           className="signup-btn"
            style={{ textDecoration: 'none' }}
            > Sign-Up</NavLink>
          </li>
        </ul>
      </div>
      <ul className="signin-up">
        <li className="sign-in" onClick={closeMobileMenu}>
        <NavLink to='/' 
          className="sign-in"
            style={{ textDecoration: 'none' }}
            > Sign In</NavLink>
        </li>
        <li onClick={closeMobileMenu}>
        <NavLink to='/' 
           className="signup-btn"
            style={{ textDecoration: 'none' }}
            > Sign-Up</NavLink>
        </li>
      </ul>
      <div className="mobile-menu" onClick={handleClick}>
        {click ? (
          <CloseMenu className="menu-icon" />
        ) : (
          <MenuIcon className="menu-icon" />
        )}
      </div>
    </div>
</>

        );
    
}

export default Navbar;