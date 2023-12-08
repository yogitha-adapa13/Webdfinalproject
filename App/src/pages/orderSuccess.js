import React from 'react';
import {Link  } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import './orderSuccess.css';

const OrderSuccessPage = () => {
  return (
    <div className="order-success-page">
       <nav className="navbar bg-body-tertiary fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">8 Dollar Meal</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Welcome User</h5>
              <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <br></br>
                <Link to="/main">Home</Link>
                <br></br>
                
              </ul>
             
              <div className="d-grid gap-2">
                <br></br><br></br>
                {/* <!--<button type="button" className="btn btn-danger">Login</button>
                <button type="button" className="btn btn-danger">Signin</button>!--> */}
                {/* <button onClick={handleLogoutClick}>Logout</button> */}
              </div>
            </div>
          </div>
        </div>
      </nav>
      <h1>Order Successful! <FontAwesomeIcon icon={faCheckCircle} style={{ color: 'green' }} /></h1>
      <p>Your order has been placed successfully. Thank you for shopping with us!</p>
      {/* You can add additional information or links here */}
    </div>
  );
};

export default OrderSuccessPage;