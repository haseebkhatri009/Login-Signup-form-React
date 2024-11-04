import { useState } from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import './App.css'


function App() {
  return (
    <div id='body'>
      <h1 id='mainheading'>Login Signup by React</h1>
      <div id='maindiv'>

        <Router>
          <Routes>
            <Route path="/" element={<Login />}/>
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)