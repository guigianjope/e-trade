import React, { Component } from "react";
import Header from './components/Header/Header'
import Details from './components/Details/Details';
import Footer from './components/Footer/Footer';

class App extends Component {

  render () {
    return (
      <>
        <Header />
        <Details />
        <Footer />
      </>
    );
  }
  
}

export default App;
