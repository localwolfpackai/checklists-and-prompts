import React from 'react';
import { Sparkles } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Sparkles className="h-8 w-8 text-primary-600" />
            <h1 className="text-xl font-bold text-gray-900">AI Prompts</h1>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#about" className="text-gray-600 hover:text-gray-900">About</a>
            <a href="#how-it-works" className="text-gray-600 hover:text-gray-900">How It Works</a>
            <a href="#contact" className="text-gray-600 hover:text-gray-900">Contact</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;