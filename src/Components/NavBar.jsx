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








// import React from 'react'
// import { Link } from 'react-router-dom'

// const NavBar = () => {
//   return (
//     <div>
//       <Link to="/transactions">Transactions</Link>
//       <Link to="/">Home</Link>
//         <Link to="/transactions/new">New Transaction</Link>
      
      
//     </div>
//   )
// }

// export default NavBar