import React from 'react'
import { Link } from 'react-router-dom'

const Transaction = ({ transaction }) => {
    return (
      <div className="transaction-item">
        <Link className="transaction-link" to={`/transactions/${transaction.id}`}>
          {transaction.type}
        </Link>
      </div>
    );
  }

export default Transaction;