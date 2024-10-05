import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'
import logo from './../photo/logo.svg';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Xpense</h3>
            <p className="text-gray-400 mb-4">
              Hum aapke financial management ko aasan banate hain. Hamari services se apne expenses track karein aur paise bachayein.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white"><FaFacebook size={24} /></a>
              <a href="#" className="text-gray-400 hover:text-white"><FaTwitter size={24} /></a>
              <a href="#" className="text-gray-400 hover:text-white"><FaInstagram size={24} /></a>
              <a href="#" className="text-gray-400 hover:text-white"><FaLinkedin size={24} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Services</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Expense Tracking</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Budget Planning</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Financial Reports</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Savings Goals</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <p className="text-gray-400 mb-2">123 Finance Street, Mumbai, India</p>
            <p className="text-gray-400 mb-2">Phone: +91 123 456 7890</p>
            <p className="text-gray-400 mb-2">Email: info@company.com</p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Xpense. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;