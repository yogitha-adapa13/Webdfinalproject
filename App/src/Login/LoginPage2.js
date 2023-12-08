import React from "react";
import { useNavigate } from "react-router-dom";
import "../Login/LoginPage.css"

export default function LoginPage({...props}){
    const navigate = useNavigate();
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const handleSignIn = (e) => {
        
        let result = fetch(`http://localhost:3000/user/get?email=${email}`, {
          method: 'GET',
          crossDomain: true,
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            'Access-Control-Allow-Origin': '*',
          },
        });
        result.then(res => {
          if (res.ok) {
            props.handle();
            navigate('/main');
            return res.json();
          } else {
            throw new Error('Network response was not ok.');
          }
        }).then(data => {
          console.log(data);
        }).catch(error => {
          console.error('There was a problem with the fetch operation:', error);
        });
      }
      
    return(
        <div className="login-page">
            <h1> Login Page</h1>
            <form>
                <label>
                    Email:
                    <input type="text" placeholder = "Email" className="login-input" onChange={(e)=>setEmail(e.target.value)}/>
                </label>
                <br/>
                <label>
                    Password:
                    <input type="password" placeholder="Password" className="login-input" onChange={(e) => setPassword(e.target.value)}/>
                </label>
                <br/>
                <button type="submit" className="login-button" onClick={handleSignIn}>Sign In</button>
            </form>
        </div>
    )
}