// RegisterPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Login/LoginPage.css';
import {Link,Router} from 'react-router-dom'

function validateEmail(email) {
  // Use a regular expression for basic email validation
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return email.match(emailPattern);
}

function validateRole(role){
  return role.length>=1;
}

function validatePassword(password) {
  // Validate password length
  return password.length >= 6;
}

function validateFullName(fullname) {
  // Validate full name length
  return fullname.length >= 4;
}

export default function RegisterPage({ ...props }) {
  const navigate = useNavigate();
  const [regEmail, setRegEmail] = useState('');
  const [regPassword, setRegPassword] = useState('');
  const [location, setLocation] = useState('');
  const [fullname, setFullname] = useState('');
  const [role, setRole] = useState('');
  const handleRegister = async (event) => {
    event.preventDefault();

    // Validate email, password, and full name
    if (!validateEmail(regEmail)) {
      alert('Please enter a valid email address.');
      return;
    }

    if (!validatePassword(regPassword)) {
      alert('Password must be at least 6 characters.');
      return;
    }

    if (!validateFullName(fullname)) {
      alert('Please enter at least four or more characters for full name.');
      return;
    }
    if(!validateRole(role)){
      alert('Please select the dropdown.');
      return;
    }

    try {
      const response = await fetch('http://localhost:3000/user/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          email: regEmail,
          fullname: fullname,
          password: regPassword,
          role: role,
        }),
      });

      if (response.status === 200) {
        // Registration successful, you can redirect or perform other actions
        alert('Registration successful!');
        navigate('/'); // Redirect to the login page
      } else {
        // Registration failed, display error message
        const errorData = await response.json();
        console.error('Registration failed:', errorData.error);
        alert('Registration failed');
      }
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }

    // After successful registration, you can navigate to the main page
    props.handle();
    navigate('/main');
  };
  return(
    <div classNameName="login-page">
       
       
        <div className="container">
    {/* <!-- Left side (Login Container) --> */}
    <div className="login-container">
        

    <form id="signup-form">
        <h2 className="form-heading">REGISTER</h2>
        <div className="form-group">
          <label htmlFor="regEmail">Email:</label>
          <input type="email" className="form-control" id="regEmail" placeholder="Enter your email" value={regEmail} onChange={(e) => setRegEmail(e.target.value)} required />
        </div>

        <div className="form-group">
          <label htmlFor="fullname">Full Name:</label>
          <input type="fullname" className="form-control" id="fullname" placeholder="Enter your name" value={fullname} onChange={(e) => setFullname(e.target.value)} required />
        </div>

        <div className="form-group">
          <label htmlFor="regPassword">Password:</label>
          <input type="password" className="form-control" id="regPassword" placeholder="Enter your password" value={regPassword} onChange={(e) => setRegPassword(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="role">You're here as ?</label>
          <select className="form-control" id="role" value={role} onChange={(e) => setRole(e.target.value)}>
          <option value={null}>Select Role</option>
            <option value="Customer">Customer</option>
            <option value="DeliveryPartner">Delivery Partner</option>
            
        
          </select>
        </div>

       

        <button type="button" id="registerbtn" className="btn btn-brown" data-toggle="tooltip" data-placement="bottom" title="Register" onClick={handleRegister}>Register</button>
        <br /><br />
        <div className="signup-link">
          Already have an account? <Link to="/LoginPage">Sign In</Link>
        </div>
      </form>


    </div>
{/*         <!-- Right side (Images) -->
*/}        <div className="image-container">
        <div className="row">
            <div className="col-md-6">
                <img src="loginimg1.jpeg" alt="Image 1" className="img-fluid image"></img>
            </div>
            <div className="col-md-6">
                <img src="loginimg2.jpeg" alt="Image 2" className="img-fluid image"></img>
            </div>
        </div>
        <div className="row">
            <div className="col-md-6">
                <img src="loginimg3.jpeg" alt="Image 3" className="img-fluid image"></img>
            </div>
            <div className="col-md-6">
                <img src="loginimg4.jpeg" alt="Image 4" className="img-fluid image"></img>
            </div>
        </div>
    </div>
</div>


{/* <div className="center-content">
    <a href="dashboard.html" className="home-link">Back to Home</a>
</div> */}
    </div>
);
}
