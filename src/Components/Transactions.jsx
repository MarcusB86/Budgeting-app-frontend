import React from "react";
import { useState, useEffect } from 'react';
import Transaction from "./Transaction";



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
        <div>
          <h1>Transactions</h1>
          {transactions.map(transactions => {
            return <Transaction key={transactions.id} transactions={transactions} />
    })}
        </div>
      )
}

export default Transactions;
