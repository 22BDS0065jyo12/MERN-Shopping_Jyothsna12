import React, { useState, useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { useNavigate } from 'react-router-dom';

const PlaceOrder = () => {
  const { cartItems, products, clearCart } = useContext(ShopContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    paymentMethod: 'cod',
  });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Order placed successfully!');
    clearCart();
    navigate('/');
  };

  const cartProductDetails = Object.keys(cartItems).map(id => {
    const product = products.find(p => p._id === id);
    return { ...product, quantity: cartItems[id] };
  });

  const totalAmount = cartProductDetails.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Billing & Shipping</h1>
      {cartProductDetails.length === 0 ? (
        <p>Your cart is empty. Add items before placing order.</p>
      ) : (
        <>
          <div className="mb-6">
            <h2 className="font-semibold mb-2">Order Summary</h2>
            {cartProductDetails.map(item => (
              <p key={item._id}>
                {item.name} x {item.quantity} = ₹{item.price * item.quantity}
              </p>
            ))}
            <p className="font-bold mt-2">Total: ₹{totalAmount}</p>
          </div>

          <form onSubmit={handleSubmit} className="max-w-md">
            <label className="block mb-2">
              Name:
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
              />
            </label>

            <label className="block mb-2">
              Email:
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
              />
            </label>

            <label className="block mb-2">
              Address:
              <textarea
                name="address"
                required
                value={formData.address}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
              />
            </label>

            <label className="block mb-4">
              Payment Method:
              <select
                name="paymentMethod"
                value={formData.paymentMethod}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
              >
                <option value="cod">Cash on Delivery</option>
                <option value="card">Credit/Debit Card</option>
              </select>
            </label>

            <button
              type="submit"
              className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
            >
              Place Order
            </button>
          </form>
        </>
      )}
    </div>
  );
};

export default PlaceOrder;

