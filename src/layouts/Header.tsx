import React, { useState } from "react";
import { FiHeart, FiShoppingCart, FiUser } from "react-icons/fi";
import SearchBar from "../components/common/SearchBar";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleUserMenu = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <header className="bg-gray-900 container md:px-32">
      <div className="py-4 flex items-center justify-between">
        <h1 className="text-white text-xl font-semibold">Book Catalog</h1>
        {/* this is desktop mode */}
        <nav className="md:flex md:items-center hidden space-x-4">
          <ul className="flex space-x-4">
            <li>
              <a
                href="#"
                className="text-white hover:text-gray-300 transition duration-200"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white hover:text-gray-300 transition duration-200"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white hover:text-gray-300 transition duration-200"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>

        {/* this is search bar */}
        <SearchBar />

        <div className="md:flex md:items-center hidden space-x-4">
          <button className="text-white focus:outline-none">
            <FiHeart className="h-6 w-6" />
          </button>
          <button
            className="text-white focus:outline-none"
            onClick={toggleCart}
          >
            <FiShoppingCart className="h-6 w-6" />
          </button>
          {isCartOpen && (
            <div className="absolute right-0 mt-12 w-64 bg-white rounded-md shadow-lg">
              <p className="px-4 py-2 text-gray-800">Cart Items</p>
              <ul>{/* Render your cart items here */}</ul>
            </div>
          )}
          {/* this section is user menu */}
          <div className="relative">
            <button
              className="text-white focus:outline-none"
              onClick={toggleUserMenu}
            >
              <FiUser className="h-6 w-6" />
            </button>
            {isUserMenuOpen && (
              <ul className="absolute right-0 mt-2 py-2 bg-white rounded-md shadow-lg w-[150px]">
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                  >
                    My Account
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                  >
                    Login
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                  >
                    Signup
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                  >
                    Add Book
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                  >
                    Logout
                  </a>
                </li>
              </ul>
            )}
          </div>
        </div>
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="h-6 w-6 fill-current"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMenuOpen ? (
              <path
                d="M6 18L18 6M6 6l12 12"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            ) : (
              <path
                d="M4 6h16M4 12h16M4 18h16"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            )}
          </svg>
        </button>
        {/* this is mobile menu */}
        <nav
          className={`md:hidden ${
            isMenuOpen ? "flex" : "hidden"
          } flex-col mt-4`}
        >
          <a
            href="#"
            className="text-white hover:text-gray-300 transition duration-200 py-2"
          >
            Home
          </a>
          <a
            href="#"
            className="text-white hover:text-gray-300 transition duration-200 py-2"
          >
            All Book
          </a>
          <a
            href="#"
            className="text-white hover:text-gray-300 transition duration-200 py-2"
          >
            Add Book
          </a>
          <a
            href="#"
            className="text-white hover:text-gray-300 transition duration-200 py-2"
          >
            Contact us
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
