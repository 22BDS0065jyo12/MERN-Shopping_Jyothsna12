import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cartItems, products, addToCart, removeFromCart } = useContext(ShopContext);
  const navigate = useNavigate();

  const cartProductDetails = Object.keys(cartItems).map(id => {
    const product = products.find(p => p._id === id);
    return { ...product, quantity: cartItems[id] };
  });

  const totalAmount = cartProductDetails.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {cartProductDetails.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartProductDetails.map(item => (
            <div key={item._id} className="flex items-center gap-4 mb-4 border-b pb-3">
              <img src={item.image[0]} alt={item.name} className="w-20 h-20 object-cover rounded" />
              <div className="flex-1">
                <p className="font-semibold">{item.name}</p>
                <p>Price: ₹{item.price}</p>
                <p>Quantity: {item.quantity}</p>
                <div className="flex gap-2 mt-1">
                  <button
                    onClick={() => removeFromCart(item._id)}
                    className="px-2 py-1 bg-red-500 text-white rounded"
                  >
                    -
                  </button>
                  <button
                    onClick={() => addToCart(item._id)}
                    className="px-2 py-1 bg-green-500 text-white rounded"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          ))}

          <p className="text-lg font-semibold mt-4">Total: ₹{totalAmount}</p>

          <button
            onClick={() => navigate('/place-order')}
            className="mt-6 px-4 py-2 bg-black text-white rounded"
          >
            Proceed to Billing
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;

