import { useEffect, useState } from "react";
import {Link, useParams, useNavigate, json } from "react-router-dom";

const API = import.meta.env.VITE_API_URL;

const TransactionDetails = () => {
    const [transaction, setTransaction] = useState({ item_name: "", amount: 0, date: "", from: "", category: "" });
    let navigate = useNavigate();
    let { id } = useParams();


    useEffect(() => {
        fetch(`${API} /transactions/${id}`)
        .then((res) => {
            return res.json();
        })
        .then((resJSON) => {
            setTransaction(resJSON);
        })
        .catch(() => {
            navigate("/not_available");
        })
    }, [id, navigate]);

    const handleDelete = () => {
        fetch(`${API}/transaction/${id}`, {
          method: "DELETE"
        })
          .then(() => {
          navigate("/transaction")
          })
        .catch((error) => console.error(error))
      }

      return (
        <div>
          <h1>TransactionDetails</h1>
          <p>{transaction.item_name}</p>
          <p>{transaction.amount}</p>
          <Link to={`/transactions/${id}/edit`}>
          <button>Edit</button>
          </Link>
          <button onClick={handleDelete}>Delete</button>
        </div>
      )

}

export default TransactionDetails;