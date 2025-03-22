import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-[#102A43] text-white py-10 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Top Section: Social Media & Contact */}
        <div className="flex flex-col  items-center justify-between border-b border-gray-600 pb-6">
          {/* Social Icons */}
          <div className="flex space-x-4 text-xl mb-6">
            <FaYoutube className="cursor-pointer hover:text-gray-400" />
            <FaFacebookF className="cursor-pointer hover:text-gray-400" />
            <FaInstagram className="cursor-pointer hover:text-gray-400" />
            <FaLinkedinIn className="cursor-pointer hover:text-gray-400" />
            <FaWhatsapp className="cursor-pointer hover:text-gray-400" />
          </div>

          {/* Contact Info */}
          <div className="flex items-center space-x-6 mt-4 md:mt-0 text-sm">
            <div className="flex items-center space-x-2">
              <FiPhone />
              <span>+91 9031215222</span>
            </div>
            <div className="flex items-center space-x-2">
              <MdEmail />
              <span>info@digitalwiseon.com</span>
            </div>
          </div>
        </div>

        <div>
          <div className="flex flex-col md:flex-row justify-between mt-6">
          {/* Left: Newsletter Input */}
          <div className="w-full md:w-1/3">
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your Email"
                className="p-2 border bg-[#102A43] border-gray-300 text-white rounded-l-md w-full"
              />
              <button className="bg-white text-black px-4 py-2 rounded-r-md hover:bg-gray-200">
                Subscribe
              </button>
            </div>
            <p className="text-gray-300 text-sm mt-2">
              Stay Updated! Enter your Email to subscribe.
            </p>
          </div>

          {/* Center: Address */}
          <div className="text-sm text-gray-300 mt-6 md:mt-0 md:w-1/3">
            <p>4th floor, Govind Bhawan,</p>
            <p>New Dark Banglow Road,</p>
            <p>Patna-800001, Bihar, India</p>
          </div>
        </div>
        </div>

        {/* Middle Section: Newsletter & Address */}
        

        {/* Bottom Section: Links */}
        <div className="flex flex-col md:flex-row justify-between mt-6 text-sm text-gray-300">
          {/* Left: Quick Links */}
          <div className="w-1/3">
            <h3 className="font-semibold text-white">QUICK LINKS</h3>
            <ul className="mt-2 space-y-1">
              <li className="hover:text-gray-400 cursor-pointer">HOME</li>
              <li className="hover:text-gray-400 cursor-pointer">WE DESIGN</li>
              <li className="hover:text-gray-400 cursor-pointer">INSIGHTS</li>
            </ul>
          </div>

          {/* Right: About Us */}
          <div className="w-1/3">
            <h3 className="font-semibold text-white">ABOUT US</h3>
            <ul className="mt-2 space-y-1">
              <li className="hover:text-gray-400 cursor-pointer">ABOUT</li>
              <li className="hover:text-gray-400 cursor-pointer">BLOGS</li>
            </ul>
          </div>
        </div>

        {/* Privacy & Terms */}
        <div className="mt-6 text-sm text-gray-400 text-center">
          <p>
            <span className="hover:text-gray-300 cursor-pointer">Privacy Policy</span> | 
            <span className="hover:text-gray-300 cursor-pointer"> Terms & Conditions</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
