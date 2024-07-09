import React from "react";
import { useEffect, useState } from "react";
import {Link, useParams, useNavigate } from "react-router-dom";
import "./TransactionDetails.css";


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
        <div className="transaction-details-container">
          <h2>Transaction Details</h2>
          <div className="details">
            <p>Item Name: {transaction.item_name}</p>
            <p>Amount: {transaction.amount}</p>
          </div>
          <div className="actions">
            <Link to={`/transactions/${id}/edit`} className="action-link">
              Edit
            </Link>
            <button onClick={handleDelete} className="action-button">
              Delete
            </button>
          </div>
        </div>
      );



}

export default TransactionDetails;



// return (
//   <div>
//     <h1>TransactionDetails</h1>
//     <p>{transaction.item_name}</p>
//     <p>{transaction.amount}</p>
//     <Link to={`/transactions/${id}/edit`}>
//        <button>Edit</button>
//     </Link>
//     <button onClick={handleDelete}>Delete</button>
//   </div>
// )