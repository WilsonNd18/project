import React, { useState } from "react";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">Furniture Store</h1>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white text-xl focus:outline-none" 
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
        
        {/* Navigation Links */}
        <ul className={`md:flex space-x-6 text-white absolute md:static bg-gray-800 md:bg-transparent w-full md:w-auto top-16 left-0 p-4 md:p-0 transition-transform duration-300 ${isOpen ? "block" : "hidden"}`}>
          <li><a href="#" className="hover:text-gray-300">Home</a></li>
          <li><a href="#" className="hover:text-gray-300">Products</a></li>
          <li><a href="#" className="hover:text-gray-300">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
