import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';

const OrderSummary = () => {
  const { id } = useParams();
  const { token } = useContext(AuthContext); // ✅ get token
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/orders/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`, // ✅ attach token
          },
        });
        setOrder(res.data);
      } catch (err) {
        console.error('Fetch failed:', err.response?.data || err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchOrder();
  }, [id, token]);

  if (loading) return <p>Loading order details...</p>;
  if (!order) return <p className="text-red-500">Order not found or access denied.</p>;

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 border rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
      <ul className="list-disc pl-5">
        {order.items.map((item, index) => (
          <li key={index}>
            {item.name} x {item.quantity} = ₹{item.price * item.quantity}
          </li>
        ))}
      </ul>
      <p className="mt-4 font-bold">Total: ₹{order.total}</p>
      <p>Payment Method: {order.paymentMethod}</p>
      <p>Shipping Address: {order.shippingAddress}</p>
    </div>
  );
};

export default OrderSummary;
