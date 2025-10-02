import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CategoryGrid from './components/CategoryGrid';
import PromptList from './components/PromptList';
import Footer from './components/Footer';
import { promptCategories, prompts } from './data/prompts';

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPrompts = prompts.filter(prompt => {
    const matchesCategory = !selectedCategory || prompt.category === selectedCategory;
    const matchesSearch = prompt.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         prompt.explanation.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <Hero 
          searchTerm={searchTerm} 
          setSearchTerm={setSearchTerm}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        
        {!selectedCategory ? (
          <CategoryGrid 
            categories={promptCategories}
            onCategorySelect={setSelectedCategory}
          />
        ) : (
          <PromptList 
            prompts={filteredPrompts}
            selectedCategory={selectedCategory}
            categories={promptCategories}
            onBackToCategories={() => setSelectedCategory(null)}
          />
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;