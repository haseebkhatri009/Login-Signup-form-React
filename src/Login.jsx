import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'

function Login() {
    return (
      <div id='logindiv'>
        <h2>Login Page</h2>
        <form id='loginform'>
          <input id='loginname' type="text" placeholder="Username" /><br />
          <input id='loginpass' type="password" placeholder="Password" /><br />
          <button id='loginbtn' type="submit">Login</button>
        </form>
        <p id='dont'>
          Don't have an account? <Link id='signupanchor' to="/signup">Sign-up</Link>
        </p>
      </div>
    );
  }
  
  export default Login;
  