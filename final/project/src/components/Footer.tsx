import React from 'react';
import { Heart, Github, Twitter, Instagram, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
              Incredible India
            </h3>
            <p className="text-gray-300 mb-4">
              Explore the rich heritage, vibrant culture, and incredible diversity of India through our interactive platform.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-orange-400">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
              <li><a href="/explore" className="text-gray-300 hover:text-white transition-colors">Explore States</a></li>
              <li><a href="/festivals" className="text-gray-300 hover:text-white transition-colors">Festivals</a></li>
              <li><a href="/quiz" className="text-gray-300 hover:text-white transition-colors">Take Quiz</a></li>
            </ul>
          </div>

          {/* Features */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-orange-400">Features</h4>
            <ul className="space-y-2">
              <li><span className="text-gray-300">Interactive Map</span></li>
              <li><span className="text-gray-300">Cultural Information</span></li>
              <li><span className="text-gray-300">Festival Calendar</span></li>
              <li><span className="text-gray-300">Knowledge Quizzes</span></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-orange-400">Contact</h4>
            <ul className="space-y-2">
              <li className="text-gray-300">Email: info@incredibleindia.com</li>
              <li className="text-gray-300">Phone: +91 12345 67890</li>
              <li className="text-gray-300">Address: New Delhi, India</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-400 text-sm">
                © 2024 Incredible India - Heritage & Culture. All rights reserved.
              </p>
            </div>
            
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-500" />
              <span>for exploring Indian culture</span>
            </div>
          </div>
          
          <div className="mt-4 text-center">
            <p className="text-gray-500 text-xs">
              Images from Pexels | Educational content for cultural learning
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;