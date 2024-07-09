import React from "react";
import { useState, useEffect } from 'react';
import Transaction from "./Transaction";
import './Transactions.css'; 



const API = import.meta.env.VITE_API_URL



const Transactions = () => {
    const[transactions, setTransactions] = useState([]);
    useEffect(() => {
        fetch(`${API}/transactions`)
        .then((res) => {
         return res.json()
        })
        .then(resJSON => {
            console.log(resJSON)
            setTransactions(resJSON)
        })
        .catch((error) => console.error(error))
    }, [])

    return (
        <div className="transactions-container">
          {/* <h1>Transactions</h1> */}
          {transactions.map(transaction => {
            return <Transaction key={transaction.id} transaction={transaction} />
    })}
        </div>
      )
}

export default Transactions;
