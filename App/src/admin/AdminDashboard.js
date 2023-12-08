import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../admin/AdminDashboard.css';

function AdminDashboard() {
  const [bookings, setBookings] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    // Fetch all bookings initially
    fetchBookings().then((data) => setBookings(data));
  }, []);

  const fetchBookings = async () => {
    try {
      const response = await fetch('http://localhost:3000/bookings/getAll');
      const rawData = await response.text();
      const data = JSON.parse(rawData);
      return data.bookings;
    } catch (error) {
      console.error('Error fetching bookings:', error);
      return [];
    }
  };

  const handleSearch = () => {
    // Filter bookings based on the entered search input
    const results = bookings.filter((booking) =>
      Object.values(booking).some((value) =>
        String(value).toLowerCase().includes(searchInput.toLowerCase())
      )
    );
    setSearchResults(results);
  };


  return (
    <div>
      <nav className="navbar bg-body-tertiary fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">8 Dollar Meal</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Welcome Admin</h5>
              <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">Dashboard</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#order1">Orders</a>
                </li>
                
            
                
              </ul>
              
              <div className="d-grid gap-2">
                <br /><br />
                
                <a href="loginpage.html" className="btn btn-danger">Logout</a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="container-fluid">
        <div id="carouselExampleControls" className="carousel slide" data-mdb-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="https://wallpapers.com/images/high/festive-indian-food-with-rice-and-chicken-i39qrhkpvunqe0hb.webp" className="d-block w-100" alt="Wild Landscape" />
              <div className="carousel-caption jumbotron text-center">
                <h4> <span className="badge text-bg-light font-style">We specialize in meals</span></h4>
                <form>
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            size="50"
            placeholder="Enter Booking ID, Customer Name, Date, Time, or Number of Guests"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            required
          />
          <div className="input-group-btn">
            <button
              type="button"
              className="btn btn-danger"
              onClick={handleSearch}
            >
              Search
            </button>
          </div>
        </div>
      </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-5 pt-5">
        <section className="table-bookings mt-3" id="order1">
          <h2>Table Bookings</h2>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#Booking ID</th>
                <th scope="col">Customer</th>
                <th scope="col">Date</th>
                <th scope="col">Time</th>
                <th scope="col">Number of Guests</th>
              </tr>
            </thead>
            <tbody>
             {searchResults.length > 0
          ? searchResults.map((booking) => (
              <tr key={booking._id}>
                <th scope="row">{booking._id}</th>
                <td>{booking.customerName}</td>
                <td>{new Date(booking.date).toLocaleDateString()}</td>
                <td>{booking.time}</td>
                <td>{booking.numberOfGuests}</td>
              </tr>
            ))
          : bookings.map((booking) => (
              <tr key={booking._id}>
                <th scope="row">{booking._id}</th>
                <td>{booking.customerName}</td>
                <td>{new Date(booking.date).toLocaleDateString()}</td>
                <td>{booking.time}</td>
                <td>{booking.numberOfGuests}</td>
              </tr>
            ))}
      </tbody>
    </table>
  </section>
      </div>

      <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    </div>
  );
}

export default AdminDashboard;
