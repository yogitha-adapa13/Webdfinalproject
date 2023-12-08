import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';
import './DeliveryPartnerDashboard.css';

function DeliveryPartnerDashboard() {
  const [orders, setOrders] = useState([]);
  const [selectedStatus, setSelectedStatus] = useState('');
  const [showProfile, setShowProfile] = useState(false);
  const [showMapModal, setShowMapModal] = useState(false);
  const [selectedMapCoordinates, setSelectedMapCoordinates] = useState([51.505, -0.09]); // Default coordinates
  const [searchInput, setSearchInput] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    fetchOrders(searchInput).then((data) => setOrders(data));
  }, [searchInput]);

  const fetchOrders = async (query) => {
    try {
      const response = await fetch('http://localhost:3000/orders/getAll');
      const rawData = await response.text();
      const data = JSON.parse(rawData);
      return data.newOrderDetails || [];
    } catch (error) {
      console.error('Error fetching orders:', error);
      return [];
    }
  };

  const handleStatusChange = (orderId, status) => {
    console.log(`Order ${orderId} status changed to ${status}`);
    setSelectedStatus((prevStatus) => ({ ...prevStatus, [orderId]: status }));
  };

  const openProfileModal = () => {
    setShowProfile(true);
  };

  const closeProfileModal = () => {
    setShowProfile(false);
  };

  const openMapModal = () => {
    // You can set the selectedMapCoordinates based on the actual delivery location
    setSelectedMapCoordinates([37.7749, -122.4194]); // Replace with actual coordinates
    setShowMapModal(true);
  };

  const closeMapModal = () => {
    setShowMapModal(false);
  };

  const handleSearch = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    console.log('Search Input:', searchInput);
    // Filter bookings based on the entered search input
    const results = orders.filter((order) =>
      Object.values(order).some((value) =>
        String(value).toLowerCase().includes(searchInput.toLowerCase())
      )
    );
    console.log('Orders:', orders);
    console.log('Search Results:', results);
  
  
    setSearchResults(results);
  };
  const showOrderDetails = (orderId) => {
    // Implement the logic to show order details based on the orderId
    console.log(`Showing details for order with ID: ${orderId}`);
    // You can open a modal or navigate to a details page, etc.
  };
  const showbg=false;
  
  return (
    <div>
      <nav className="navbar bg-body-tertiary fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            8 Dollar Meal
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                Welcome
              </h5>
              <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#" onClick={() => openMapModal()}>
                    Map
                  </a>
                </li>
                <li className="nav-item">
                 
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#order2">
                    Orders Details
                  </a>
                </li>
              </ul>
              
              <div className="d-grid gap-2">
                <br />
                <br />
                <a href="loginpage.html" className="btn btn-danger">
                  Logout
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="container-fluid">
        <div id="carouselExampleControls" className="carousel slide" data-mdb-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="https://www.sapaad.com/wp-content/uploads/2022/06/shutterstock-1706184913.webp"
                className="d-block w-100"
                alt="Wild Landscape"
              />
              <div className="carousel-caption jumbotron text-center">
                <h4>
                  {' '}
                  <span className="badge text-bg-light font-style">We specialize in meals</span>
                </h4>
                <form onSubmit={(e) => handleSearch(e)}>
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            size="50"
            placeholder="Enter Order ID, Name, Address, Number, or Cost"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            required
          />
          <div className="input-group-btn">
            <button type="submit" className="btn btn-danger">
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
        <section className="delivery-partner-dashboard mt-3" id="order2">
          <h2>Orders Dashboard</h2>
          <div className="all-orders">
            <h3>All Orders</h3>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">#Order ID</th>
                  <th scope="col">Customer Name</th>
                  <th scope="col">Address</th>
                  <th scope="col">Phone Number</th>
                  <th scope="col">Total Cost</th>
                  <th scope="col">Delivery Status</th>
                </tr>
              </thead>
              <tbody>
              {searchResults.length > 0 ? (
                searchResults.map((order) => (
                  <tr key={order._id} onClick={() => showOrderDetails(order._id)}>
                    <th scope="row">{order._id}</th>
                    <td>{order.name}</td>
                    <td>{order.address}</td>
                    <td>{order.phoneNumber}</td>
                    <td>{order.totalCost}</td>
                    <td>
                      <div className="btn-group">
                        <button
                          type="button"
                          className={`btn btn-outline-primary ${
                            selectedStatus[order._id] === 'onTheWay' ? 'active' : ''
                          }`}
                          onClick={() => handleStatusChange(order._id, 'onTheWay')}
                        >
                          On The Way
                        </button>
                        <button
                          type="button"
                          className={`btn btn-outline-primary ${
                            selectedStatus[order._id] === 'deliveryComplete' ? 'active' : ''
                          }`}
                          onClick={() => handleStatusChange(order._id, 'deliveryComplete')}
                        >
                          Delivery Complete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                orders.map((order) => (
                  <tr key={order._id} onClick={() => showOrderDetails(order._id)}>
                    <th scope="row">{order._id}</th>
                    <td>{order.name}</td>
                    <td>{order.address}</td>
                    <td>{order.phoneNumber}</td>
                    <td>{order.totalCost}</td>
                    <td>
                      <div className="btn-group">
                        <button
                          type="button"
                          className={`btn btn-outline-primary ${
                            selectedStatus[order._id] === 'onTheWay' ? 'active' : ''
                          }`}
                          onClick={() => handleStatusChange(order._id, 'onTheWay')}
                        >
                          On The Way
                        </button>
                        <button
                          type="button"
                          className={`btn btn-outline-primary ${
                            selectedStatus[order._id] === 'deliveryComplete' ? 'active' : ''
                          }`}
                          onClick={() => handleStatusChange(order._id, 'deliveryComplete')}
                        >
                          Delivery Complete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
            </table>
          </div>
        </section>
      </div>

      {/* Profile Modal */}
      {showProfile && (
        <div className="modal" tabIndex="-1" role="dialog" style={{ display: 'block' }}>
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">My Profile</h5>
                <button type="button" className="close" onClick={closeProfileModal} aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <p>Name: {user.name}</p>
                <p>Email: {user.email}</p>
                {/* Add other profile details here */}
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={closeProfileModal}>
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Map Modal */}
      {showMapModal && (
        <div className="modal" tabIndex="-1" role="dialog" style={{ display: 'block' }}>
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Delivery Map</h5>
                <button type="button" className="close" onClick={closeMapModal} aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                {/* Render the map section inside the modal */}
                <section className="map-section">
                  <MapContainer center={selectedMapCoordinates} zoom={13} style={{ height: '400px', width: '100%' }}>
                    <TileLayer
                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    />
                    {/* Marker for the delivery location */}
                    <Marker position={selectedMapCoordinates}>
                      <Popup>Delivery Destination</Popup>
                    </Marker>
                  </MapContainer>
                </section>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={closeMapModal}>
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    </div>
  );
}

export default DeliveryPartnerDashboard;
