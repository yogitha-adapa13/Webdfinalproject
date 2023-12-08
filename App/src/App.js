import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './Login/LoginPage';
import MainPage from './Main/MainPage';
import About from './pages/About';
import Jobs from './pages/Jobs';
import Home from './pages/Home';
import Profile from './pages/Profile';
import MenuTab from './pages/MenuTab';
import BookingForm from './pages/BookingForm';
import RegisterPage from './Login/RegisterPage';
import ForgotPasswordPage from './Login/ForgotPasswordPage';
import AdminDashboard from './admin/AdminDashboard';
import DeliveryPartnerDashboard from './delivery/DeliveryPartnerDashboard';
import CheckoutPage from './pages/CheckoutPage';
import OrderSuccess from './pages/orderSuccess';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function handleLogin() {
    setIsLoggedIn(true);
  }

  function handleLogout() {
    setIsLoggedIn(false);
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage handle={handleLogin} />} />
        <Route path="/RegisterPage" element={<RegisterPage />} />
        <Route path="/ForgotPasswordPage" element={<ForgotPasswordPage />} />
      
        {isLoggedIn && (
          <>
            <Route path="/main" element={<MainPage onLogout={handleLogout} />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/BookingForm" element={<BookingForm />} />
            <Route path="/MenuTab" element={<MenuTab />} />
            <Route path="/AdminDashboard" element={<AdminDashboard />} />
            <Route path="/DeliveryPartnerDashboard" element={<DeliveryPartnerDashboard />} />
            <Route path="/CheckoutPage" element={<CheckoutPage />} />
            <Route path="/order-success" element={<OrderSuccess/>} />
          </>
        )}
        {!isLoggedIn && (
          <>
            <Route path="/" element={<LoginPage />} />
            <Route path="*" element={<Navigate to="/" />} />
          </>
        )}
      </Routes>
    </Router>
  );
}

export default App;
