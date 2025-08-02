import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='my-10 mt-40 text-sm px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14'>
        {/* Logo and description */}
        <div>
          <img src={assets.logo} className='mb-5 w-32' alt="Logo" />
          <p className='w-full md:w-2/3 text-gray-600'>
            Serendipity is a full-stack e-commerce website built with the MERN stack, designed to provide a seamless shopping experience. It incorporates CRUD operations for product management and features secure user authentication for personalized access.
          </p>
        </div>

        {/* Company Links */}
        <div className='flex flex-col gap-2'>
          <h2 className='text-lg font-semibold text-gray-800 mb-2'>Members</h2>
          <p className='text-gray-600 cursor-pointer'>Niranjana Rajesh</p>
          <p className='text-gray-600 cursor-pointer'>Hanumanthu Jyothsna</p>
          <p className='text-gray-600 cursor-pointer'>Divya Ilangovan</p>
          <p className='text-gray-600 cursor-pointer'>Aishwarya Prakash</p>
        </div>

        {/* Policies */}
        <div className='flex flex-col gap-2'>
          <h2 className='text-lg font-semibold text-gray-800 mb-2'>Policies</h2>
          <p className='text-gray-600 cursor-pointer'>Privacy Policy</p>
          <p className='text-gray-600 cursor-pointer'>Refund Policy</p>
          <p className='text-gray-600 cursor-pointer'>Shipping Policy</p>
          <p className='text-gray-600 cursor-pointer'>Terms of Service</p>
        </div>
      </div>
    </div>
  )
}

export default Footer

