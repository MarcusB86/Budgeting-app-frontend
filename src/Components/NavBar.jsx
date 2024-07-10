import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <Link to="/" className="nav-item logo">Budget Buddy</Link>
        <Link to="/transactions" className="nav-item">Transactions</Link>
        <Link to="/transactions/new" className="nav-item">New Transaction</Link>
      </div>
      <div className="navbar-right">
        <Link to="/profile" className="nav-item">👤</Link>
      </div>
    </div>
  );
}

export default NavBar;