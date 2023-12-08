import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    time: '',
    guests: 1,
  });

  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/bookings/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      // Assuming your server sends a success message in the response
      if (result.code === 200) {
        // Show confirmation message and details
        setShowConfirmation(true);
      } else {
        // Handle the case where the booking was not successful
        console.error('Booking failed:', result.message);
      }
    } catch (error) {
      console.error('Error submitting booking:', error);
    }
  };

  return (
    <div className="container mt-5 p-4 rounded" style={{ backgroundColor: '#333', color: '#fff' }}>
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
      <h2 className="text-center mb-4" style={{ color: '#ff6347' }}>
        Book a Table
      </h2>
      {!showConfirmation ? (
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label" style={{ color: '#ff6347' }}>
              Name:
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              style={{ color: '#333', backgroundColor: '#fff' }}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="date" className="form-label" style={{ color: '#ff6347' }}>
              Date:
            </label>
            <input
              type="date"
              className="form-control"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              style={{ color: '#333', backgroundColor: '#fff' }}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="time" className="form-label" style={{ color: '#ff6347' }}>
              Time:
            </label>
            <input
              type="time"
              className="form-control"
              id="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              style={{ color: '#333', backgroundColor: '#fff' }}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="guests" className="form-label" style={{ color: '#ff6347' }}>
              Number of Guests:
            </label>
            <input
              type="number"
              className="form-control"
              id="guests"
              name="guests"
              value={formData.guests}
              onChange={handleChange}
              min="1"
              style={{ color: '#333', backgroundColor: '#fff' }}
              required
            />
          </div>
          <button type="submit" className="btn btn-danger">
            Book Now
          </button>
        </form>
      ) : (
        <div className="text-center">
          <p className="mb-4">Your booking is successful!</p>
          <p>Name: {formData.name}</p>
          <p>Date: {formData.date}</p>
          <p>Time: {formData.time}</p>
          <p>Number of Guests: {formData.guests}</p>
        </div>
      )}
    </div>
  );
};

export default BookingForm;