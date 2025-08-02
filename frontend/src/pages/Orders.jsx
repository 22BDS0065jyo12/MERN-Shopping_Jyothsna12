import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Orders = () => {
  const { token } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get('http://localhost:5000/api/orders/user', {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setOrders(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [token]);

  if (loading) return <p className="text-center mt-10">Loading your orders...</p>;

  if (orders.length === 0)
    return <p className="text-center mt-10">You have no orders yet.</p>;

  return (
    <div className="max-w-4xl mx-auto mt-10 p-4 border rounded shadow">
      <h2 className="text-2xl font-semibold mb-6">Your Orders</h2>
      <ul className="flex flex-col gap-4">
        {orders.map((order) => (
          <li
            key={order._id}
            className="p-4 border rounded cursor-pointer hover:bg-gray-100"
            onClick={() => navigate(`/order-summary/${order._id}`)}
          >
            <p>
              <strong>Order ID:</strong> {order._id}
            </p>
            <p>
              <strong>Date:</strong> {new Date(order.createdAt).toLocaleString()}
            </p>
            <p>
              <strong>Total:</strong> ₹{order.total}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Orders;
