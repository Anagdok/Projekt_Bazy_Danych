import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Twitch } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <img src="/crackgrilla-logo.png" alt="Crackgrilla" className="h-8 w-8 mr-2" />
              <h3 className="text-xl font-bold text-white">Crackgrilla</h3>
            </div>
            <p className="mb-4 text-sm leading-relaxed">
              Your ultimate destination for discovering and purchasing the latest and greatest video games across all platforms.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-purple-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-purple-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-purple-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-purple-400 transition-colors">
                <Twitch size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-purple-400 transition-colors">About Us</a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400 transition-colors">Games</a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400 transition-colors">Deals</a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400 transition-colors">Support</a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400 transition-colors">Blog</a>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Categories</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-purple-400 transition-colors">Action</a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400 transition-colors">Adventure</a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400 transition-colors">RPG</a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400 transition-colors">Strategy</a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400 transition-colors">Simulation</a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 flex-shrink-0" />
                <span>Morska 106, Gdynia, PL 81-209 </span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 flex-shrink-0" />
                <span>(+48) 881 969 351</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 flex-shrink-0" />
                <span>contact@crackgrilla.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} Crackgrilla. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <a href="#" className="hover:text-purple-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-purple-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-purple-400 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;