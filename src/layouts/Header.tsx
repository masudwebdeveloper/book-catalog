import React, { useState } from "react";
import { FiHeart, FiUser } from "react-icons/fi";
import SearchBar from "../components/common/SearchBar";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import { signOut } from "firebase/auth";
import { auth } from "../lib/firebase";
import {
  setDisplayName,
  setPhotoUrl,
  setUser,
} from "../redux/features/user/userSlice";
import { setSearch } from "../redux/features/search/searchSlice";
import { setGenre, setPublication } from "../redux/features/filter/filterSlice";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const { user } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleUserMenu = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
  };

  const handleLogut = () => {
    signOut(auth).then(() => {
      dispatch(setUser(null));
      dispatch(setDisplayName(null));
      dispatch(setPhotoUrl(null));
    });
  };

  const handleAllBook = () => {
    dispatch(setSearch(""));
    dispatch(setGenre(""));
    dispatch(setPublication(""));
  };

  return (
    <header className="bg-[#FFFFFF] md:px-32">
      <div className="py-4 flex items-center justify-between">
        <h1 className="text-xl font-semibold">Book Catalog</h1>
        {/* this is desktop mode */}
        <nav className="md:flex md:items-center hidden space-x-4">
          <ul className="flex space-x-4">
            <li>
              <Link
                to="/"
                className="hover:text-gray-300 transition duration-200"
                onClick={handleAllBook}
              >
                All Books
              </Link>
            </li>
            <li>
              <Link
                to="/addbook"
                className="hover:text-gray-300 transition duration-200"
              >
                Add Book
              </Link>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-gray-300 transition duration-200"
              >
                Contact us
              </a>
            </li>
          </ul>
        </nav>

        {/* this is search bar */}
        <SearchBar />

        <div className="md:flex md:items-center hidden space-x-4">
          <button className="focus:outline-none">
            <FiHeart className="h-6 w-6" />
          </button>

          {/* this section is user menu */}
          <div className="relative">
            <button className="focus:outline-none" onClick={toggleUserMenu}>
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
                {!user.email && (
                  <>
                    <li>
                      <Link
                        to="/login"
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                      >
                        Login
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/signup"
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                      >
                        Signup
                      </Link>
                    </li>
                  </>
                )}
                {user.email && (
                  <li>
                    <button
                      onClick={handleLogut}
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-left"
                    >
                      Logout
                    </button>
                  </li>
                )}
              </ul>
            )}
          </div>
        </div>
        <button className="md:hidden focus:outline-none" onClick={toggleMenu}>
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
            className=" hover:text-gray-300 transition duration-200 py-2"
          >
            Home
          </a>
          <a
            href="#"
            className=" hover:text-gray-300 transition duration-200 py-2"
          >
            All Book
          </a>
          <a
            href="#"
            className="hover:text-gray-300 transition duration-200 py-2"
          >
            Add Book
          </a>
          <a
            href="#"
            className="hover:text-gray-300 transition duration-200 py-2"
          >
            Contact us
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
