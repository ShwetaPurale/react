import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './components/Navbar';

const App = () => (
  <div className="container">
    <Navbar />
    <h1>Welcome to the Auth App</h1>
    <Link to="/register" className="btn btn-primary m-2">Register</Link>
    <Link to="/login" className="btn btn-secondary m-2">Login</Link>
  </div>
);

export default App;
