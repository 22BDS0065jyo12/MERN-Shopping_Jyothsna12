import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const OrderSummary = () => {
  const { id } = useParams();
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/orders/${id}`);
        setOrder(res.data);
      } catch (err) {
        console.error('Order fetch failed:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchOrder();
  }, [id]);

  if (loading) return <p className="text-center mt-10">Loading order details...</p>;
  if (!order) return <p className="text-center mt-10 text-red-500">Order not found.</p>;

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 border rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Order Successfully Placed 🎉</h2>

      <div>
        <h3 className="text-lg font-semibold mb-2">Items:</h3>
        <ul className="list-disc pl-5 space-y-1">
          {order.items.map((item, index) => (
            <li key={index}>
              {item.name} x {item.quantity} = ₹{item.price * item.quantity}
            </li>
          ))}
        </ul>
        <p className="mt-4 font-bold">Total Paid: ₹{order.total}</p>
        <p className="mt-2">Payment Method: {order.paymentMethod}</p>
        <p>Shipping Address: {order.shippingAddress}</p>
      </div>
    </div>
  );
};

export default OrderSummary;
