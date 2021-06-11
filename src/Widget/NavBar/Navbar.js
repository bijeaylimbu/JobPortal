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
          <a href="#">
           <img src={Logo} className="logo"/>
          </a>
        </div>
        <ul className={click ? "nav-options active" : "nav-options"}>
          <li className="option" onClick={closeMobileMenu}>
           <NavLink to='/' > Job</NavLink>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <a href="#">Companies</a>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <a href="#">BLOG</a>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <a href="#">About</a>
          </li>
          <li className="option mobile-option" onClick={closeMobileMenu}>
            <a href="#">SIGN-IN</a>
          </li>
          <li className="option mobile-option" onClick={closeMobileMenu}>
            <a href="" className="sign-up">
              SIGN-UP
            </a>
          </li>
        </ul>
      </div>
      <ul className="signin-up">
        <li className="sign-in" onClick={closeMobileMenu}>
          <a href="#">SIGN-IN</a>
        </li>
        <li onClick={closeMobileMenu}>
          <a href="" className="signup-btn">
            SIGN-UP
          </a>
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