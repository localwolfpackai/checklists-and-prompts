import React, { useState } from 'react';
import { Copy, Check, Clock, Star } from 'lucide-react';

const PromptList = ({ prompts, selectedCategory, categories, onBackToCategories }) => {
  const [copiedPrompt, setCopiedPrompt] = useState(null);
  const category = categories.find(cat => cat.id === selectedCategory);

  const copyToClipboard = async (text, promptId) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedPrompt(promptId);
      setTimeout(() => setCopiedPrompt(null), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-800';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'Advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <span className="text-4xl mr-3">{category.icon}</span>
            <h2 className="text-3xl font-bold text-gray-900">
              {category.name}
            </h2>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {category.description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {prompts.map((prompt) => (
            <div key={prompt.id} className="card">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold text-gray-900 pr-4">
                  {prompt.title}
                </h3>
                <div className="flex space-x-2">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(prompt.difficulty)}`}>
                    {prompt.difficulty}
                  </span>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Clock className="h-4 w-4 mr-1" />
                    {prompt.timeEstimate}
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <h4 className="font-medium text-gray-900 mb-2">What this does:</h4>
                <p className="text-gray-600 mb-4">{prompt.explanation}</p>
              </div>

              <div className="mb-4">
                <h4 className="font-medium text-gray-900 mb-2">The prompt:</h4>
                <div className="bg-gray-50 rounded-lg p-4 relative">
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {prompt.prompt}
                  </p>
                  <button
                    onClick={() => copyToClipboard(prompt.prompt, prompt.id)}
                    className="absolute top-2 right-2 p-2 text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    {copiedPrompt === prompt.id ? (
                      <Check className="h-4 w-4 text-green-600" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center text-sm text-gray-500">
                  <Star className="h-4 w-4 mr-1" />
                  <span>Copy and use with any AI assistant</span>
                </div>
                {copiedPrompt === prompt.id && (
                  <span className="text-green-600 text-sm font-medium">
                    Copied!
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {prompts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No prompts found matching your search.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default PromptList;