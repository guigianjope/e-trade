import React from 'react';
import './App.css';
import Colors from './components/Colors'
import DetailsThumb from './components/DetailsThumb';

import shoes1 from './img/shoes1.jpg';
import shoes2 from './img/shoes2.jpg';
import shoes3 from './img/shoes3.jpg';
import shoes4 from './img/shoes4.jpg';

class App extends React.Component{

  state = {
    products: [
      {
        "_id": "1",
        "title": "Shoes",
        "brand": "Nike",
        "src": [
            shoes1,
            shoes2,
            shoes3,
            shoes4
          ],
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "category": "Shoes",
        "area": "All North America",
        "fee": "Free",
        "availability": "in stock",  
        "price": 180,
        "colors":["blue","black","orange","teal"],
        "count": 1
      }
    ],
    index: 0
  };

  myRef = React.createRef();

  handleTab = index =>{
    this.setState({index: index})
    const images = this.myRef.current.children;
    for(let i=0; i<images.length; i++){
      images[i].className = images[i].className.replace("active", "");
    }
    images[index].className = "active";
  };

  componentDidMount(){
    const {index} = this.state;
    this.myRef.current.children[index].className = "active";
  }


  render(){
    const {products, index} = this.state;
    return(
      <div className="app">
        {
          products.map(item =>(
            <div className="card-wrapper" key={item._id}>

                <div className="product-imgs">

                  <div className="img-showcase">
                    <img src={item.src[index]} alt=""/>
                  </div>

                  <div className="img-select">
                    <DetailsThumb images={item.src} tab={this.handleTab} myRef={this.myRef} />
                  </div>  
                  
                </div>

                <div className="product-content">
                                        
                    <h2 className="product-title">{item.title}</h2>

                    <div className="product-price">
                      <p className="price">Price: <span>${item.price}</span></p>
                    </div>
                    
                    <div className="product-detail">
                      <h2>Description:</h2>
                      <p>{item.description}</p>
                      <Colors colors={item.colors} />
                      <ul>
                        <li>Brand: <span>{item.brand}</span></li>
                        <li>Availability: <span>{item.availability}</span></li>
                        <li>Category: <span>{item.category}</span></li>
                        <li>Shipping Area: <span>{item.area}</span></li>
                        <li>Shipping Fee: <span>{item.fee}</span></li>
                      </ul>
                    </div>

                    
                    <div className="purchase-info">
                      <input type="number" min="0" value="1"></input>
                      <button type="button" className="btn">Add to Cart</button>
                      <button type="button" className="btn">Buy</button>
                    </div>

                </div>
              
            </div>
          ))
        }
      </div>
    );
  };
}

export default App;