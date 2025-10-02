import React from 'react';
import { ArrowRight } from 'lucide-react';

const CategoryGrid = ({ categories, onCategorySelect }) => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Choose What You Want to Improve
          </h2>
          <p className="text-lg text-gray-600">
            Pick a category that matches what you want to work on
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <div
              key={category.id}
              onClick={() => onCategorySelect(category.id)}
              className="card cursor-pointer hover:shadow-lg transition-all duration-200 group"
            >
              <div className="text-center">
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {category.name}
                </h3>
                <p className="text-gray-600 mb-4">
                  {category.description}
                </p>
                <div className="flex items-center justify-center text-primary-600 group-hover:text-primary-700">
                  <span className="font-medium">Get Started</span>
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              How It Works
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-primary-100 text-primary-600 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  1
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Choose a Category</h4>
                <p className="text-gray-600">Pick what you want to improve about your project</p>
              </div>
              <div className="text-center">
                <div className="bg-primary-100 text-primary-600 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  2
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Copy the Prompt</h4>
                <p className="text-gray-600">Use the prompt with any AI assistant like ChatGPT or Claude</p>
              </div>
              <div className="text-center">
                <div className="bg-primary-100 text-primary-600 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  3
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Get Results</h4>
                <p className="text-gray-600">Receive specific, actionable advice for your project</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;