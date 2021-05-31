import shoes1 from './shoes1.jpg';
import shoes2 from './shoes2.jpg';
import shoes3 from './shoes3.jpg';
import shoes4 from './shoes4.jpg';
import './App.css';

function App() {
  return (
    <div className="card-wrapper">
      <div className="card">
        {/* left card */}
        <div className="product-imgs">
          <div className="img-display">
            <div className="img-showcase">
              <img src={shoes1} alt="shoes"/>
              <img src={shoes2} alt="shoes"/>
              <img src={shoes3} alt="shoes"/>
              <img src={shoes4} alt="shoes"/>
            </div>
          </div>

          <div className="img-select">
            <div className="img-item">
              <a href="#" id="1">
                <img src={shoes1} alt="shoes main"/>
              </a>
            </div>
            <div className="img-item">
              <a href="#" id="2">
                <img src={shoes2} alt="shoes2 details"/>
              </a>
            </div>
            <div className="img-item">
              <a href="#" id="3">
                <img src={shoes3} alt="shoes3 details"/>
              </a>
            </div>
            <div className="img-item">
              <a href="#" id="4">
                <img src={shoes4} alt="shoes4 details"/>
              </a>
            </div>
          </div>
        </div>

        {/* right card */}
        <div className="product-content">
          <h2 className="product-title">Shoes</h2>
          
          <div className="product-price">
            <p className="price">Price: <span>$180.00</span></p>
          </div>

          <div className="product-detail">
            <h2>Description:</h2>
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
            <ul>
            <li>Brand: <span>Nike</span></li>
            <li>Color: <span>White</span></li>
            <li>Available: <span>in stock</span></li>
            <li>Category: <span>Shoes</span></li>
            <li>Shipping Area: <span>All North America</span></li>
            <li>Shipping Fee: <span>Free</span></li>
          </ul>
          </div>

          <div className="purchase-info">
            <input type="number" min="0" value="1"></input>
            <button type="button" className="btn">Add to Cart</button>
            <button type="button" className="btn">Buy</button>
          </div>

        </div>

        
      </div>      
    </div>
  );
}

export default App;
