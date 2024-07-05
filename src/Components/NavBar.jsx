import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
      <Link to="/transactions">Index</Link>
      <button>
        <Link to="/transactions/new">New Transactions</Link>
        </button>
    </div>
  )
}

export default NavBar