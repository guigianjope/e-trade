import './Footer.css';
import React from 'react';

function Footer() {
  return (
    <div className="main-footer">
        <div className="container">
            <div className="row">

                {/* Column 1 */}
                <div className="col">
                    <h4>e-Trade Inc</h4>
                    <ul className="list-unstyled">
                        <li>555-444-8888</li>
                        <li>Vancouver - Canada</li>
                        <li>789 - Footer St</li>
                    </ul>
                </div>
                {/* Column 2 */}
                <div className="col">
                    <h4>About</h4>
                    <ul className="list-unstyled">
                        <li>Policies</li>
                        <li>Careers</li>
                        <li>Company info</li>
                    </ul>
                </div>
                {/* Column 3 */}
                <div className="col">
                    <h4>More</h4>
                    <ul className="list-unstyled">
                        <li>Some Info</li>
                        <li>More Info</li>
                        <li>Whatever</li>
                    </ul>
                </div>

            </div>
            <hr />
            <div className="row">
                <p className="col-sm">
                &copy;{new Date().getFullYear()} e-Trade | All rights reserved | Terms Of Service | Privacy
                </p>
            </div>

        </div>
    </div>
  );
}

export default Footer;
