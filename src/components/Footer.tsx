import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import HinduraLogo from '../assets/HinduraLogo.png';

const Footer = () => {
  return (
    <footer className="bg-construction-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              {/* <Building2 className="h-8 w-8 text-primary-500" /> */}
              <img
                src={HinduraLogo}
                alt="Hindura Logo"
                className="h-14 w-auto object-contain"
                style={{ filter: 'brightness(0) invert(1)' }}
              />
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Revolutionizing construction through speed, precision, and sustainability.
              Building the future with prefabricated excellence.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-gray-400 hover:text-primary-500 cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-gray-400 hover:text-primary-500 cursor-pointer transition-colors" />
              <Linkedin className="h-5 w-5 text-gray-400 hover:text-primary-500 cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-gray-400 hover:text-primary-500 cursor-pointer transition-colors" />
            </div>
          </div>
          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-primary-500 transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-primary-500 transition-colors">About Us</Link></li>
              <li><Link to="/products" className="text-gray-300 hover:text-primary-500 transition-colors">Products</Link></li>
              <li><Link to="/process" className="text-gray-300 hover:text-primary-500 transition-colors">Our Process</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-primary-500 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Prefabricated Buildings</li>
              <li>Precast Concrete</li>
              <li>EPS Paneling</li>
              <li>Modular Homes</li>
              <li>Turnkey Solutions</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary-500" />
                <span className="text-gray-300">+91 98937-01528</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary-500" />
                <span className="text-gray-300">info@hinduraconstruction.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary-500 mt-1" />
                <span className="text-gray-300">123 Vijay Nagar<br />Indore, 452010</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Hindura Construction. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;