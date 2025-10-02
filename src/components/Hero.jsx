import React from 'react';
import { Search, ArrowRight } from 'lucide-react';

const Hero = ({ searchTerm, setSearchTerm, selectedCategory, setSelectedCategory }) => {
  return (
    <section className="bg-gradient-to-br from-primary-50 to-blue-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            AI Prompts for
            <span className="text-primary-600 block">Everyone</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Transform your ideas into beautiful websites and apps with simple, 
            easy-to-understand AI prompts. No coding experience required.
          </p>
          
          <div className="max-w-2xl mx-auto relative">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search for prompts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 text-lg border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>

        {selectedCategory && (
          <div className="text-center">
            <button
              onClick={() => setSelectedCategory(null)}
              className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
            >
              <ArrowRight className="h-4 w-4 mr-2 rotate-180" />
              Back to all categories
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;