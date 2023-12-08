import React , { useState, useEffect }from "react";
import { useNavigate } from "react-router-dom";
import {Link,Router} from 'react-router-dom'

import "../Login/LoginPage.css"

export default function LoginPage({...props}){
    const navigate = useNavigate();
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [role, setRole] = React.useState('');
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState('');
    const [showForgotPasswordModal, setShowForgotPasswordModal] = useState(false);

    /*const handleSignIn = () => {
        if(email === "admin" && password === "admin"){
            props.handle();
            navigate('/main')
        }else{
            alert("Invalid Credentials")
        }
    }*/
    const handleSignIn = (event) => {
       
        event.preventDefault();

        fetch('http://localhost:3000/user/get', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body: JSON.stringify({
                email: email,
                password: password,
                role: role,
                
            }),
        }).then(response => {
            if (response.status === 200) {
                // User authenticated, navigate to the main page
                props.handle();
                response.json().then(data => {
                console.log(data.role);
/*                 console.log(response.json());
 */                if(data.role == "admin"){ 
                    navigate('/AdminDashboard')}
                    else if (data.role == "DeliveryPartner"){
                        navigate('/DeliveryPartnerDashboard')
                    }
                else{ navigate('/main')}
            })
/*                 navigate('/main');
 */            } else {
                // Error occurred, display error message
                response.json().then(errorData => {
                    setError(errorData.error);
                });
                alert("User Invalid");
            }
        }).catch(error => {
            console.log(error)
        })
    };
    const showbg=true;
    

    return(
    
        <div className="background-page">
            <h1 id = 'testLoginHeader'>8$ Meal</h1>
            
            {/* <form>
                <label>
                    Username:
                    <input type="text" classNameName="login-input" onChange={(e)=>setEmail(e.target.value)} />
                </label>
                <br/>
                <label>
                    Password:
                    <input type="password" classNameName="login-input" onChange={(e) => setPassword(e.target.value)}/>
                </label>
                <br/>
                <button type="submit" classNameName="login-button" onClick={handleSignIn}>Sign In</button>
            </form> */}
            <div className="container">
        {/* <!-- Left side (Login Container) --> */}
        
        <div className="login-container">
            
            <form id="login-form">
                
                <h2 className="form-heading">SIGN IN</h2>
                <div className="form-group">
                    <label for="email">Email:</label>
                    <input type="email" className="form-control" id="email" placeholder="Enter your email" onChange={(e)=>setEmail(e.target.value)} required></input>
                </div>
                <div className="form-group">
                    <label for="password">Password:</label>
                    <input type="password" className="form-control" id="password" placeholder="Enter your password" onChange={(e) => setPassword(e.target.value)} required></input>
                </div>
                <button type="button" id="signinbtn" className="btn btn-primary" onClick={handleSignIn}>Sign in</button>
                &nbsp;&nbsp;
                <Link to="/ForgotPasswordPage">Forgot Password ?</Link>
                        <br></br><br></br>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;
{/*                 <a href="javascript:void(0);" className="signup-link">Don't have an account? SIGN UP</a>
 */}                <Link to="/RegisterPage">Don't have an account? SIGN UP</Link>
                
           
            </form>

            <form id="signup-form" className="hidden">
                <h2 className="form-heading"></h2>
                <div className="form-group">
                    <label for="regEmail">Email:</label>
                    <input type="email" className="form-control" id="regEmail" placeholder="Enter your email" required></input>
                </div>
                <div className="form-group">
                    <label for="regPassword">Password:</label>
                    <input type="password" className="form-control" id="regPassword" placeholder="Enter your password" required></input>
                </div>
                <div className="form-group">
                    <label for="location">Location:</label>
                    <select className="form-control" id="location">
                        <option value="New York">Brighton</option>
                        <option value="Los Angeles">Downtown</option>
                        <option value="Chicago">Jamaica Plain</option>
                        <option value="Miami">Mission hill</option>
                    </select>
                </div>
                <button type="button" id="registerbtn" className="btn btn-brown" data-toggle="tooltip" data-placement="bottom" title="Register" onclick="validateRegistrationForm()">Register</button>
                <br></br><br></br>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;
                
                <a href="javascript:void(0);" className="login-link">Already have an account? Sign in</a>
            </form>


        </div>
{/*         <!-- Right side (Images) -->
 */}      {/* <div className="image-container">
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
</div>*/}
    </div>
    
    
    {/* <div className="center-content">
        <a href="dashboard.html" className="home-link">Back to Home</a>
    </div> */}
        </div>
    )
}