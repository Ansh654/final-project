import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, MapPin, User } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { user, logout } = useAuth();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Explore', path: '/explore' },
    { name: 'Festivals', path: '/festivals' },
    { name: 'Quiz', path: '/quiz' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-orange-200 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <MapPin className="h-8 w-8 text-orange-600 group-hover:text-orange-700 transition-colors" />
            <span className="text-xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              Incredible India
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  isActive(item.path)
                    ? 'bg-orange-100 text-orange-600 shadow-md'
                    : 'text-gray-700 hover:text-orange-600 hover:bg-orange-50'
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            {user ? (
              <div className="flex items-center space-x-4">
                <Link
                  to="/profile"
                  className="flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-orange-600 hover:bg-orange-50 transition-all duration-200"
                >
                  <User className="h-4 w-4" />
                  <span>{user.name}</span>
                </Link>
                <button
                  onClick={logout}
                  className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors text-sm font-medium"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link
                to="/login"
                className="px-4 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700 transition-colors text-sm font-medium"
              >
                Login
              </Link>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-orange-600 transition-colors"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-orange-200">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                    isActive(item.path)
                      ? 'bg-orange-100 text-orange-600'
                      : 'text-gray-700 hover:text-orange-600 hover:bg-orange-50'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              
              {user ? (
                <div className="flex flex-col space-y-2 pt-2 border-t border-orange-200">
                  <Link
                    to="/profile"
                    onClick={() => setIsMenuOpen(false)}
                    className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-orange-600 hover:bg-orange-50 transition-all duration-200"
                  >
                    Profile ({user.name})
                  </Link>
                  <button
                    onClick={() => {
                      logout();
                      setIsMenuOpen(false);
                    }}
                    className="px-3 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors text-sm font-medium text-left"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <Link
                  to="/login"
                  onClick={() => setIsMenuOpen(false)}
                  className="px-3 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700 transition-colors text-sm font-medium text-center"
                >
                  Login
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;