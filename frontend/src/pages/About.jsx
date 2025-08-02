import React from 'react';
import { assets } from '../assets/assets';

const About = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      {/* Top section: Logo + About us */}
      <div className="flex flex-col sm:flex-row items-center gap-8 border-b pb-10">
        {/* Logo */}
        <div className="w-32 sm:w-48 flex-shrink-0">
          <img src={assets.about_img} alt="Serendipity Logo" className="w-full h-auto" />
        </div>

        {/* About Text */}
        <div>
          <h2 className="text-3xl font-bold mb-4">About Serendipity</h2>
          <p className="text-gray-700 leading-relaxed max-w-xl">
            Serendipity is a full-stack shopping website built with the MERN stack. It offers a seamless and intuitive
            shopping experience for users, supporting product discovery, filtering, cart management, secure
            authentication, and smooth checkout — all powered by CRUD operations and robust backend logic.
          </p>
        </div>
      </div>

      {/* Team Members */}
      <div className="mt-10">
        <h3 className="text-2xl font-semibold mb-4">Meet the Team</h3>
        <ul className="list-disc pl-6 text-gray-800 space-y-2">
          <li><span className="font-medium">Niranjana Rajesh</span> – CSE</li>
          <li><span className="font-medium">Hanumanthu Jyothsna</span> – BDS</li>
          <li><span className="font-medium">Divya Ilangovan</span> – CSE</li>
          <li><span className="font-medium">Aishwarya Prakash</span> - CSE</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
