import React from 'react';
import './Details.css';
import Colors from './componentsDetails/Colors'
import DetailsThumb from './componentsDetails/DetailsThumb';

import shoes1 from './img/shoes1.jpg';
import shoes2 from './img/shoes2.jpg';
import shoes3 from './img/shoes3.jpg';
import shoes4 from './img/shoes4.jpg';

class Details extends React.Component{

  state = {
    products: [
      {
        "id": "1",
        "brand": "Nike",
        "name": "Air Jordan",
        "type": "Shoes",
        "price": "180",
        "available": "In Stock",
        "shipping": "All North America",
        "colors": ["blue","black","orange","teal"],
        "size": "10",
        "gender": "Unisex",
        "image": [
          shoes1,
          shoes2,
          shoes3,
          shoes4
        ],
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        "category": "Clothing",
        "fee": "Free",
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

  render(){
    const {products, index} = this.state;
    return(
      <div className="app">
        {
          products.map(item =>(
            <div className="card-wrapper" key={item._id}>

                <div className="product-imgs">

                  <div className="img-showcase">
                    <img src={item.image[index]} alt=""/>
                  </div>

                  <div className="img-select">
                    <DetailsThumb images={item.image} tab={this.handleTab} myRef={this.myRef} />
                  </div>  
                  
                </div>

                <div className="product-content">

                    <div className="title-price">                   
                      <h2 className="product-title">{item.name}</h2>

                      <div className="product-price">
                        <p className="price">Price: <span>${item.price}</span></p>
                      </div>
                    </div> 
                     
                    <div className="product-detail">
                      <h2>Description:</h2>
                      <p>{item.description}</p>
                      <Colors colors={item.colors} />
                      <ul>
                        <li>Brand: <span>{item.brand}</span></li>
                        <li>Availability: <span>{item.available}</span></li>
                        <li>Category: <span>{item.category}</span></li>
                        <li>Shipping Area: <span>{item.shipping}</span></li>
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

export default Details;