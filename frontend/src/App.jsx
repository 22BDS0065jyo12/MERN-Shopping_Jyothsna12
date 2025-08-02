import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Collection from './pages/Collection';
import Cart from './pages/Cart';
import PlaceOrder from './pages/PlaceOrder';
import About from './pages/About';
import Contact from './pages/Contact';
import OrderSummary from './pages/OrderSummary';
import Login from './components/Login';
import Register from './components/Register';
import Billing from './components/Billing';

const App = () => {
  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/place-order" element={<PlaceOrder />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/billing" element={<Billing />} />
        <Route path="/order-summary/:id" element={<OrderSummary />} />
      </Routes>
    </div>
  );
};

export default App;
