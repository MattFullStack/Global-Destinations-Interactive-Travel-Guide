import React from 'react';
import Link from 'next/link'; // Make sure to import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4">
      <h1 className="text-xl font-bold pl-4">EcoPath</h1>
      <div className="hidden text-sm inter md:flex space-x-20">
        {/* Use Link with the legacyBehavior prop if you want to wrap an <a> tag */}
        <Link href="/" legacyBehavior><a className="hover:text-gray-500 transition duration-300">Home</a></Link>
        <Link href="/services" legacyBehavior><a className="hover:text-gray-500 transition duration-300">Services</a></Link>
        <Link href="/pricing" legacyBehavior><a className="hover:text-gray-500 transition duration-300">Pricing</a></Link>
        <Link href="/contact" legacyBehavior><a className="hover:text-gray-500 transition duration-300">Contact Us</a></Link>
      </div>
      <div className='px-4 py-4'>
      <button className="border-2 rounded-full px-4 py-2 bg-gray-100  hover:bg-gray-200 transition duration-300">
        <div className='inter text-sm'>Menu</div>
      </button>
      </div>
    </nav>
  );
};

export default Navbar;
