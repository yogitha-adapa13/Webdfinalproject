import React , {useEffect} from "react";

import { useNavigate } from 'react-router-dom';
import "../Main/MainPage.css"
import {Link  } from 'react-router-dom';
import BookingForm from "../pages/BookingForm";
import MenuTab from "../pages/MenuTab";

export default function MainPage({ onLogout }){
    const handleLogoutClick = () => {
        // Call the onLogout function passed as a prop from App.js
        if (onLogout) {
            onLogout();
          }
          // You can also perform any other cleanup or redirection here
        };
        const navigate = useNavigate();  // Use useNavigate for navigation

        const handleAddToCartClick = () => {
            // Perform any necessary actions when adding to cart
            // For now, just navigate to the MenuTab page
            navigate('/MenuTab');  // Use navigate instead of history.push
        };

     
        const scrollToElement = (elementId) => {
            const element = document.getElementById(elementId);
        
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
            }
          };
        const linkStyle = {
            textDecoration: 'none', // Removes the default underline
            fontSize: '16px',
            fontWeight: 'bold',
            color: '#007BFF', // Blue color
            marginRight: '15px', // Adjust spacing between links
          };
    return(
        <><div>
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
                                
                                <Link to="/BookingForm">Reserve a table</Link>
                                <br></br>
                                <Link to="/MenuTab">Menu</Link>
                                

                                <li className="nav-item dropdown">
                                    
                                    
                                </li>
                            </ul>
                            
                            <div className="d-grid gap-2">
                                <br></br><br></br>
                                {/* <!--<button type="button" className="btn btn-danger">Login</button>
    <button type="button" className="btn btn-danger">Signin</button>!--> */}
                                
                                <button onClick={handleLogoutClick}>Logout</button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            <div className="container-fluid">
                <div id="carouselExampleControls" className="carousel slide" data-mdb-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">

                            <img src="https://c4.wallpaperflare.com/wallpaper/899/593/118/cuisine-food-india-indian-wallpaper-preview.jpg" className="d-block w-100" alt="Wild Landscape"></img>

                            <div className="carousel-caption jumbotron text-center">

                                <h4> <span className="badge text-bg-light font-style">We specialize in meals</span></h4>
                                <form>
                                    <div className="input-group">
                                        <input type="email" className="form-control" size="50" placeholder="Location" required></input>
                                        <div className="input-group-btn">
                                            <button href="#maps1" type="button" className="btn btn-danger" onClick={() => scrollToElement('maps1')}>Find your Store</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                    {/* <!-- <div className="carousel-item">
      <img src="https://mdbcdn.b-cdn.net/img/new/slides/042.webp" className="d-block w-100" alt="Camera"/>
    </div>
    <div className="carousel-item">
      <img src="https://mdbcdn.b-cdn.net/img/new/slides/043.webp" className="d-block w-100" alt="Exotic Fruits"/>
    </div> --> */}


                </div>
                <br></br>
                <br></br>
                {/*    <!-- <div className="input-group">
         <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
         <button type="button" className="btn btn-outline-primary">Find your Store</button>
       </div>
     <br>
     <br> --> */}

                <div className="album py-5 bg-body-tertiary">
                    <div className="container">

                        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                            <div className="col">
                                <div className="card shadow-sm">
                                    <img src="chicken.JPEG" className="bd-placeholder-img card-img-top" width="100%" height="225" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"></img><title>Tandori Chicken Wings</title>

                                    <rect width="100%" height="100%" fill="#55595c"></rect>

                                    {/*                     <!-- <text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text> -->
     */}
                                    <div className="card-body">
                                        <p className="card-text fw-bolder fs-5" style={{color:'red'}}>$8.00 Tandori Chicken Wings</p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="btn-group">
                                                 
                                                <button type="button" className="btn btn-sm btn-outline-secondary" onClick={handleAddToCartClick}>Add to Cart</button>
                                            </div>
                                            {/*                       <!-- <small className="text-body-secondary">9 mins</small> -->
     */}                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card shadow-sm">
                                    <img src="pulao.JPEG" className="bd-placeholder-img card-img-top" width="100%" height="225" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"></img><title>Pulao</title><rect width="100%" height="100%" fill="#55595c"></rect>

                                    <div className="card-body">
                                        <p className="card-text fw-bolder fs-5" style={{color:'red'}}>$8.00 Pulao</p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="btn-group">
                                                 
                                                <button type="button" className="btn btn-sm btn-outline-secondary" onClick={handleAddToCartClick}>Add to Cart</button>
                                            </div>
                                            {/*                       <!-- <small className="text-body-secondary">9 mins</small> -->
     */}                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card shadow-sm">
                                    <img src="dosa.JPEG" className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"></img><title>Masala Dosa</title><rect width="100%" height="100%" fill="#55595c"></rect>

                                    <div className="card-body">
                                        <p className="card-text fw-bolder fs-5" style={{ color: 'red' }}>$8.00 Masala Dosa</p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="btn-group">
                                                 
                                                <button type="button" className="btn btn-sm btn-outline-secondary" onClick={handleAddToCartClick}>Add to Cart</button>
                                            </div>
                                            {/*                       <!-- <small className="text-body-secondary">9 mins</small> -->
     */}                    </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col">
                                <div className="card shadow-sm">
                                    <img src="idli.JPEG" className="bd-placeholder-img card-img-top" width="100%" height="225" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"></img><title>Indian Idli</title><rect width="100%" height="100%" fill="#55595c"></rect>

                                    <div className="card-body">
                                        <p className="card-text fw-bolder fs-5" style={{ color: 'red' }}>$8.00 Indian Idli</p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="btn-group">
                                                 
                                                <button type="button" className="btn btn-sm btn-outline-secondary" onClick={handleAddToCartClick}>Add to Cart</button>
                                            </div>
                                            {/*                       <!-- <small className="text-body-secondary">9 mins</small> -->
     */}                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card shadow-sm">
                                    <img src="vada.JPEG" className="bd-placeholder-img card-img-top" width="100%" height="225" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"></img><title>Indian Vada</title><rect width="100%" height="100%" fill="#55595c"></rect>

                                    <div className="card-body">
                                        <p className="card-text fw-bolder fs-5" style={{ color: 'red' }}>$8.00 Indian Vada</p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="btn-group">
                                                 
                                                <button type="button" className="btn btn-sm btn-outline-secondary" onClick={handleAddToCartClick}>Add to Cart</button>
                                            </div>
                                            {/*                       <!-- <small className="text-body-secondary">9 mins</small> -->
     */}                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card shadow-sm">
                                    <img src="paw.JPEG" className="bd-placeholder-img card-img-top" width="100%" height="225" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false">
                                    </img>
                                    <title>Vada Pav</title><rect width="100%" height="100%" fill="#55595c"></rect>


                                    <div className="card-body">
                                        <p className="card-text fw-bolder fs-5" style={{ color: 'red' }}>$8.00 Vada Paw</p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="btn-group">
                                                 
                                                <button type="button" className="btn btn-sm btn-outline-secondary" onClick={handleAddToCartClick}>Add to Cart</button>
                                            </div>
                                            {/* <!-- <small className="text-body-secondary">9 mins</small> -->*/}
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>





            </div>
        </div>
        <footer className="restaurant-footer">
                <div id="maps1" className="container">
                    <div className="row container-fluid">
                        <div className="col-4">
                            <h4>About Us</h4>
                            <p>We're on a mission to redefine the dining experience. We believe that everyone should have access to delicious, wholesome meals without emptying your value.</p>
                            <p>We take pride in our commitment to making high-quality, satisfying food feasible for everyone because great taste should never be a luxury.</p>
                        </div>
                        <div className="col-4">
                            <h4>Contact Us</h4>
                            <ul className="list-unstyled">
                                <li><i className="fas fa-map-marker-alt"></i> 123 Restaurant St, City, Country</li>
                                <li><i className="fas fa-phone"></i> <a href="tel:1234567891">123-456-7891</a></li>
                                <li><i className="fas fa-envelope"></i> <a href="mailto:info@restaurant.com">8$meal@gmail.com</a></li>
                            </ul>
                        </div>
                        <div className="col-4">
                            <h4>Connect with Us</h4>
                            <div className="social-icons">
                                <a href="#"><i className="fab fa-facebook"></i></a>
                                <a href="#"><i className="fab fa-twitter"></i></a>
                                <a href="#"><i className="fab fa-instagram"></i></a>
                                <a href="#"><i className="fab fa-yelp"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-8">
                            {/*  <!-- Larger Google Map --> */}
                            <center>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2949.1223638721926!2d-71.09131212399265!3d42.33991447119481!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e37a18eb671617%3A0x9cd32e303a7cec87!2s360%20Huntington%20Ave%2C%20Boston%2C%20MA%2002115!5e0!3m2!1sen!2sus!4v1698194690073!5m2!1sen!2sus" width="600" height="450" style={{border:'0'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            </center>
                        </div>
                    </div>
                </div>
            </footer></>
    )
}

