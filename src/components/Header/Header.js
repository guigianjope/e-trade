import './Header.css';
import React, { Component } from 'react';


class Header extends Component {    
  render () {
        return (

          <>
            {/* Navigation button */}
            <header> 
                <h1>e-Trade</h1>

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