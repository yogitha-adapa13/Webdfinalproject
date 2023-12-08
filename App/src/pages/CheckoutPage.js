import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import GooglePayButton from '@google-pay/button-react';
import './CheckoutPage.css';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';


function validatePhone(phoneNumber) {
  const phonePattern = /^\d{10}$/;
  return phonePattern.test(phoneNumber);
}

function validateName(name) {
  return name.length >= 4;
}

function validateAddress(address) {
  return address.length >= 10;
}

const CheckoutPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    address: '',
    phoneNumber: '',
  });
  const [validationErrors, setValidationErrors] = useState({
    name: false,
    address: false,
    phoneNumber: false,
  });
  const [orderPlaced, setOrderPlaced] = useState(null);
  const [submittedData, setSubmittedData] = useState(null);
  const [step, setStep] = useState(1);

  const { cart, totalPrice } = useLocation().state || {};

  const handleBlur = (field) => {
    switch (field) {
      case 'name':
        setValidationErrors({ ...validationErrors, name: !validateName(formData.name) });
        break;
      case 'address':
        setValidationErrors({ ...validationErrors, address: !validateAddress(formData.address) });
        break;
      case 'phoneNumber':
        setValidationErrors({ ...validationErrors, phoneNumber: !validatePhone(formData.phoneNumber) });
        break;
      default:
        break;
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const placeOrder = async () => {
    try {
      const response = await fetch('http://localhost:3000/orders/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          cart,
          totalCost: totalPrice,
        }),
      });
      if (response.ok) {
        const result = await response.json();
        setOrderPlaced(result);
        setStep(3);
      } else {
        console.error('Failed to place order');
      }
    } catch (error) {
      console.error('Error placing order:', error);
    }
  };

  const handleContinue = (e) => {
    e.preventDefault();

    const nameValid = validateName(formData.name);
    const addressValid = validateAddress(formData.address);
    const phoneNumberValid = validatePhone(formData.phoneNumber);

    setValidationErrors({
      name: !nameValid,
      address: !addressValid,
      phoneNumber: !phoneNumberValid,
    });

    if (nameValid && addressValid && phoneNumberValid) {
      setStep(2);
    } else {
      if (!nameValid) {
        document.getElementById('name').focus();
      } else if (!addressValid) {
        document.getElementById('address').focus();
      } else if (!phoneNumberValid) {
        document.getElementById('phoneNumber').focus();
      }
    }
  };

  return (
    <div className="checkout-page">
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
      <h1>Checkout</h1>
      {step === 1 && (
        <form onSubmit={handleContinue}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              onBlur={() => handleBlur('name')}
              required
            />
            {validationErrors.name && (
              <p className="validation-error">Name must be at least 4 characters.</p>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="address">Address:</label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              onBlur={() => handleBlur('address')}
              required
            />
            {validationErrors.address && (
              <p className="validation-error">Address must be at least 10 characters.</p>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="phoneNumber">Phone Number:</label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              onBlur={() => handleBlur('phoneNumber')}
              required
            />
            {validationErrors.phoneNumber && (
              <p className="validation-error">Enter a valid 10-digit phone number.</p>
            )}
          </div>

          <button type="submit" className="btn btn-success">
            Continue
          </button>
        </form>
      )}

      {step === 2 && (
        <div className="verify-details">
          <h2>Verify Your Details</h2>
          <p>Name: {formData.name}</p>
          <p>Address: {formData.address}</p>
          <p>Phone Number: {formData.phoneNumber}</p>
          <button type="button" className="btn btn-success" onClick={placeOrder}>
            Confirm Order
          </button>
        </div>
      )}

      {step === 3 && (
        <div className="order-summary">
          <h2>Your Order Details</h2>
          <p>Name: {formData.name}</p>
          <p>Address: {formData.address}</p>
          <p>Phone Number: {formData.phoneNumber}</p>

          <GooglePayButton
            environment="TEST"
            paymentRequest={{
              apiVersion: 2,
              apiVersionMinor: 0,
              allowedPaymentMethods: [
                {
                  type: 'CARD',
                  parameters: {
                    allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
                    allowedCardNetworks: ['MASTERCARD', 'VISA'],
                  },
                  tokenizationSpecification: {
                    type: 'PAYMENT_GATEWAY',
                    parameters: {
                      gateway: 'example',
                      gatewayMerchantId: 'exampleId',
                    },
                  },
                },
              ],
              merchantInfo: {
                merchantId: '1234567896533',
                merchantName: 'Demo',
              },
              transactionInfo: {
                totalPriceStatus: 'FINAL',
                totalPriceLabel: 'Total',
                totalPrice: totalPrice.toFixed(2),
                currencyCode: 'USD',
                countryCode: 'US',
              },
              shippingAddressRequired: true,
              callbackIntents: ['PAYMENT_AUTHORIZATION'],
            }}
            onLoadPaymentData={(paymentRequest) => {
              console.log(paymentRequest);
            }}
            onPaymentAuthorized={(paymentData) => {
              console.log(paymentData);
              navigate('/order-success'); // Specify the route of your OrderSuccessPage.js
              placeOrder();
              return { transactionState: 'SUCCESS' };
            }}
            existingPaymentMethodRequired="false"
            buttonColor="Black"
            buttonType="buy"
          ></GooglePayButton>
        </div>
      )}
    </div>
  );
};

export default CheckoutPage;