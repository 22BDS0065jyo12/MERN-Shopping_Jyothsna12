import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';

const Navbar = () => {
  const { cartItems } = useContext(ShopContext);
  const cartCount = Object.values(cartItems).reduce((sum, qty) => sum + qty, 0);

  return (
    <nav className="flex justify-between items-center py-4 border-b mb-8">
      <Link to="/" className="text-2xl font-bold">Serendipity</Link>
      <div className="flex gap-6 items-center">
        <Link to="/collection" className="hover:underline">Shop</Link>
        <Link to="/cart" className="relative hover:underline">
          Cart
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-3 bg-red-600 text-white rounded-full px-2 text-xs">{cartCount}</span>
          )}
        </Link>
        <Link to="/login" className="hover:underline">Login</Link>
      </div>
    </nav>
  );
};

export default newnav;
