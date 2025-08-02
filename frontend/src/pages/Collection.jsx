import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { Link } from 'react-router-dom';

const Collection = () => {
  const { products, addToCart } = useContext(ShopContext);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
      {products.map(product => (
        <div key={product._id} className="border rounded-xl p-3 shadow-sm">
          <img
            src={product.image[0]}
            alt={product.name}
            className="w-full h-64 object-cover rounded-xl mb-2"
          />
          <p className="font-medium">{product.name}</p>
          <p className="text-sm text-gray-600">₹{product.price}</p>
          <button
            onClick={() => addToCart(product._id)}
            className="mt-2 px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Add to Cart
          </button>
          <Link
            to={`/product/${product._id}`}
            className="block mt-2 text-sm text-blue-600 underline"
          >
            View Details
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Collection;


