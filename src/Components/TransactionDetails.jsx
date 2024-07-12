import React from "react";
import { useEffect, useState } from "react";
import {Link, useParams, useNavigate } from "react-router-dom";
import './TransactionDetails.css'

const API = import.meta.env.VITE_API_URL;

const TransactionDetails = () => {
    const [transaction, setTransaction] = useState({ "item_name": "", "amount": 0, "date": "", "from": "", "category": "" });
    let { id } = useParams();
    let navigate = useNavigate();


    useEffect(() => {
        fetch(`${API}/transactions/${id}`)
        .then((res) => {
        return res.json();
        })
        .then(resJSON => {
          console.log(resJSON)
          setTransaction(resJSON);
        })
        .catch(() => {
        navigate("/notfound");
      })

    }, [id, navigate]);

    const handleDelete = () => {
      fetch(`${API}/transactions/${id}`, {
          method: "DELETE"
      })
        .then(() => {
        navigate("/transactions")
        })
        .catch((error) => console.error(error))
    }

      return (
        <div className="transaction-details">
      <h1>Transaction Details</h1>
      <p>{transaction.item_name}</p>
      <p>${transaction.amount}</p>
      <p>{transaction.date}</p>
      <p>{transaction.from}</p>
      <p>{transaction.category}</p>
      <Link to={`/transactions/${id}/edit`}>
        <button className="edit-button">Edit</button>
      </Link>
      <button className="delete-button" onClick={handleDelete}>Delete</button>
    </div>
      )

}

export default TransactionDetails;