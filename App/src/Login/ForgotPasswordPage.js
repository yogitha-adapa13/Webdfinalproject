// ForgotPasswordPage.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Login/ForgotPasswordPage.css"

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Implement your forgot password logic here, for example, send a reset email
    // You can make a fetch request to your backend to handle the password reset

    // For demonstration purposes, we'll just show a success message
    setMessage(`Password reset instructions sent to ${email}`);
  };

  return (
    <div className="forgot-password-page">
      <h2>Forgot Password</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit">Reset Password</button>
      </form>
      {message && <p>{message}</p>}
      <p>
        Remember your password? <Link to="/">Sign In</Link>
      </p>
    </div>
  );
};

export default ForgotPasswordPage;
