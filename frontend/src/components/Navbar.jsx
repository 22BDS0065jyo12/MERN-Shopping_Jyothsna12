import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { assets } from '../assets/assets';

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  // For demo, hardcode last placed order id (replace with actual logic or context)
  const lastOrderId = '64a123abc456def789012345'; // Replace with your real order ID or state

  const navItems = [
    { name: 'HOME', path: '/' },
    { name: 'COLLECTION', path: '/collection' },
    { name: 'ABOUT', path: '/about' },
    { name: 'CONTACT', path: '/contact' },
  ];

  return (
    <div className="flex items-center justify-between py-5 px-8 font-medium relative">
      {/* Logo */}
      <img src={assets.logo} className="w-36" alt="Serendipity" />

      {/* Nav Menu - Desktop */}
      <ul className="hidden sm:flex gap-8 text-sm text-gray-700">
        {navItems.map((item) => (
          <li key={item.path}>
            <NavLink to={item.path}>
              {({ isActive }) => (
                <div className="flex flex-col items-center gap-1">
                  <p className={`${isActive ? 'text-black font-semibold' : ''}`}>{item.name}</p>
                  <hr
                    className={`w-2/4 border-none h-[1.5px] bg-gray-700 transition-all duration-200 ${
                      isActive ? 'block' : 'hidden'
                    }`}
                  />
                </div>
              )}
            </NavLink>
          </li>
        ))}
      </ul>

      {/* Icons Section */}
      <div className="flex items-center gap-6">
        {/* Search */}
        <img src={assets.search_icon} className="w-5 cursor-pointer" alt="Search" />

        {/* Profile Dropdown */}
        <div className="relative group">
          <img className="w-5 cursor-pointer" src={assets.profile_icon} alt="Profile" />
          <div className="hidden group-hover:block absolute right-0 pt-4 z-10">
            <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded shadow-md">
              <p className="cursor-pointer hover:text-black">My Profile</p>
              <Link
                to={`/order-summary/${lastOrderId}`}
                className="cursor-pointer hover:text-black"
              >
                Orders
              </Link>
              <p className="cursor-pointer hover:text-black">Logout</p>
            </div>
          </div>
        </div>

        {/* Cart */}
        <Link to="/cart" className="relative">
          <img src={assets.cart_icon} className="w-5 min-w-5" alt="Cart" />
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
            1
          </p>
        </Link>

        {/* Hamburger Menu */}
        <img
          onClick={() => setVisible(true)}
          src={assets.menu_icon}
          className="w-5 cursor-pointer sm:hidden"
          alt="Menu"
        />
      </div>

      {/* Sidebar menu for small screens */}
      <div
        className={`fixed top-0 right-0 h-full bg-white z-20 transition-all duration-300 ease-in-out ${
          visible ? 'w-64 p-5' : 'w-0 p-0 overflow-hidden'
        }`}
      >
        {/* Back Button */}
        <div onClick={() => setVisible(false)} className="flex items-center gap-4 cursor-pointer mb-6">
          <img className="h-4 rotate-180" src={assets.dropdown_icon} alt="Back" />
          <p>Back</p>
        </div>

        {/* Sidebar Links */}
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className="block py-2 pl-2 border-b text-gray-700 hover:text-black"
            onClick={() => setVisible(false)}
          >
            {item.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Navbar;

