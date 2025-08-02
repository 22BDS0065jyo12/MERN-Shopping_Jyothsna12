import React from 'react';

const teamMembers = [
  {
    name: "Niranjana Rajesh",
    email: "niranjanarajesh111@gmail.com",
    phone: "+91 xxxxxxxx",
  },
  {
    name: "Jyothsna",
    email: "jyothsnahanumanthu12@gmail.com",
    phone: "+91 xxxxxxxx",
  },
  {
    name: "Divya",
    email: "divyailangovan04@gmail.com",
    phone: "+91 xxxxxxx",
  },
  {
    name: "Aishwarya",
    email: "aishwarya.prakashks@gmail.com",
    phone: "+91 xxxxxxxx",
  },
];

const Contact = () => {
  return (
    <div className="my-12 px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <h1 className="text-3xl font-bold text-gray-800 text-center mb-8">Contact Us</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {teamMembers.map((member, index) => (
          <div key={index} className="bg-gray-100 p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <h2 className="text-xl font-semibold text-gray-800">{member.name}</h2>
            <p className="text-sm text-gray-600 mt-2">
              📧 <a href={`mailto:${member.email}`} className="hover:underline">{member.email}</a>
            </p>
            <p className="text-sm text-gray-600 mt-1">
              📞 <a href={`tel:${member.phone}`} className="hover:underline">{member.phone}</a>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
