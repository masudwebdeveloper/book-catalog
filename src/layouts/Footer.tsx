import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 text-gray-900 sm:px-32">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <h2 className="text-lg font-semibold mb-4">About Us</h2>
            <p className="text-sm mb-4">
              "Book Catalog: A comprehensive collection of books, offering a
              diverse range of genres and subjects for avid readers."
            </p>
            <p className="text-sm">Natore, Bangladesh</p>
          </div>
          <div className="col-span-1">
            <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm hover:text-gray-400">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-gray-400">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-gray-400">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-gray-400">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="col-span-1">
            <h2 className="text-lg font-semibold mb-4">Follow Us</h2>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/masudwebdeveloper"
                className="text-gray-700 hover:text-gray-400"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="https://github.com/masudwebdeveloper"
                className="text-gray-700 hover:text-gray-400"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/mrmasudrana/"
                className="text-gray-700 hover:text-gray-400"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
          <div className="col-span-4">
            <hr className="border-gray-700 my-8" />
            <p className="text-sm text-center">
              &copy; {new Date().getFullYear()} Develop by Masud Rana. All
              rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
