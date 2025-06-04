import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Twitch } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Footer: React.FC = () => {
  const navigate = useNavigate();

  const navigateToGamesWithFilter = (genre: string) => {
    navigate(`/games?genre=${encodeURIComponent(genre)}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <img src="/logo crackgrilla.png" alt="CrackGrilla" className="h-8 w-8 mr-2" />
              <h3 className="text-xl font-bold text-white">CrackGrilla</h3>
            </div>
            <p className="mb-4 text-sm leading-relaxed">
              Your ultimate destination for discovering and purchasing the latest and greatest video games across all platforms.
            </p>
            <div className="flex space-x-4">
              <Link to="#" className="hover:text-purple-400 transition-colors">
                <Facebook size={20} />
              </Link>
              <Link to="#" className="hover:text-purple-400 transition-colors">
                <Twitter size={20} />
              </Link>
              <Link to="#" className="hover:text-purple-400 transition-colors">
                <Instagram size={20} />
              </Link>
              <Link to="#" className="hover:text-purple-400 transition-colors">
                <Twitch size={20} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-purple-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/games" className="hover:text-purple-400 transition-colors">
                  All Games
                </Link>
              </li>
              <li>
                <button 
                  onClick={() => {
                    navigate('/');
                    setTimeout(() => {
                      const dealsSection = document.querySelector('.special-deal-section');
                      if (dealsSection) {
                        dealsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      }
                    }, 100);
                  }}
                  className="hover:text-purple-400 transition-colors text-left w-full"
                >
                  Deals
                </button>
              </li>
              <li>
                <Link to="/login" className="hover:text-purple-400 transition-colors">
                  Account
                </Link>
              </li>
              <li>
                <button 
                  onClick={() => {
                    navigate('/');
                    setTimeout(() => {
                      const newsletterSection = document.querySelector('form');
                      if (newsletterSection) {
                        newsletterSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      }
                    }, 100);
                  }}
                  className="hover:text-purple-400 transition-colors text-left w-full"
                >
                  Newsletter
                </button>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Categories</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => navigateToGamesWithFilter('Action')}
                  className="hover:text-purple-400 transition-colors text-left w-full"
                >
                  Action
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigateToGamesWithFilter('Adventure')}
                  className="hover:text-purple-400 transition-colors text-left w-full"
                >
                  Adventure
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigateToGamesWithFilter('RPG')}
                  className="hover:text-purple-400 transition-colors text-left w-full"
                >
                  RPG
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigateToGamesWithFilter('Strategy')}
                  className="hover:text-purple-400 transition-colors text-left w-full"
                >
                  Strategy
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigateToGamesWithFilter('Simulation')}
                  className="hover:text-purple-400 transition-colors text-left w-full"
                >
                  Simulation
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 flex-shrink-0" />
                <span>Morska 106, Gdynia</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 flex-shrink-0" />
                <span>+48 513 384 335</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 flex-shrink-0" />
                <span>contact@crackgrilla.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} CrackGrilla. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <Link to="#" className="hover:text-purple-400 transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-purple-400 transition-colors">Terms of Service</Link>
            <Link to="#" className="hover:text-purple-400 transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;