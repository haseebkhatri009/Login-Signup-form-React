import React from 'react';
import { Link } from 'react-router-dom';
import './signup.css'


function Signup() {
  return (
    <div id='signupdiv'>
      <h2>Signup Page</h2>
      <form id='signupform'>
        <input id='signupusername' type="text" placeholder="Username" />
        <input id='signupemail' type="email" placeholder="Email" />
        <input id='signuppass' type="password" placeholder="Password" />
        <button id='signupbtn' type="submit">Sign up</button>
      </form>
      <p id='already'>
          Already have an account? <Link id='loginanchor' to="/">Login</Link>
        </p>
    </div>
  );
}

export default Signup;
