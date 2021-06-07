import './Header.css';
import React, { Component } from 'react';
import logo1 from './img/logo1.png';


class Header extends Component {    
  render () {
        return (

          <>
            <header> 
                <img src={logo1} />

                <nav className = "navBar">
                    <input type = "search" className = "search" placeholder = "search for anything"/>
                    <button type = "button" className = "login" > Log in </button>
                    <button type = "button" className = "cart" > Cart </button>
                </nav>


            </header>
          </>

        ); 
  }
}

export default Header; 