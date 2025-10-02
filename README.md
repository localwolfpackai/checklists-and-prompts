# 🎨 AI Prompts for Everyone

A clean, minimal web application that makes AI prompts accessible to non-coders. Transform your ideas into beautiful websites and apps with simple, easy-to-understand prompts.

## ✨ Features

- **Non-Technical Explanations**: Every prompt includes clear explanations that anyone can understand
- **Category-Based Organization**: Organized into intuitive categories like "Making Things Look Beautiful" and "Making Things Easy to Use"
- **One-Click Copy**: Copy prompts directly to your clipboard for use with any AI assistant
- **Difficulty Levels**: Clear indicators for beginner, intermediate, and advanced prompts
- **Time Estimates**: Know how long each task will take before you start
- **Search Functionality**: Find the perfect prompt quickly
- **Mobile-Friendly**: Works great on all devices

## 🚀 Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/ai-prompts-webapp.git
cd ai-prompts-webapp
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:3000`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 🎯 How to Use

1. **Choose a Category**: Pick what you want to improve about your project
2. **Copy the Prompt**: Click the copy button to copy the prompt to your clipboard
3. **Use with AI**: Paste the prompt into ChatGPT, Claude, or any AI assistant
4. **Get Results**: Receive specific, actionable advice for your project

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Header.jsx      # Navigation header
│   ├── Hero.jsx        # Hero section with search
│   ├── CategoryGrid.jsx # Category selection grid
│   ├── PromptList.jsx  # Individual prompt cards
│   └── Footer.jsx      # Footer component
├── data/
│   └── prompts.js      # Prompt data and categories
├── App.jsx             # Main application component
├── main.jsx           # Application entry point
└── index.css          # Global styles
```

## 🎨 Design Philosophy

- **Clean & Minimal**: Focus on content, not distractions
- **Accessible**: Designed for users of all technical levels
- **Mobile-First**: Responsive design that works on all devices
- **Fast**: Optimized for quick loading and smooth interactions

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. **Add New Prompts**: Submit new prompts with clear explanations
2. **Improve Existing Prompts**: Make prompts clearer or more effective
3. **Fix Bugs**: Report and fix any issues you find
4. **Improve Design**: Enhance the user experience

### Adding New Prompts

To add a new prompt, edit `src/data/prompts.js` and add your prompt to the appropriate category:

```javascript
{
  id: 'unique-id',
  category: 'ui-design', // or 'user-experience', 'project-polish', 'github-workflow'
  title: 'Clear, Descriptive Title',
  prompt: 'The actual prompt text to copy',
  explanation: 'Simple explanation of what this does',
  difficulty: 'Beginner', // or 'Intermediate', 'Advanced'
  timeEstimate: '15-30 minutes'
}
```

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Inspired by the need to make AI tools accessible to everyone
- Built with React, Tailwind CSS, and Vite
- Icons by Lucide React

## 📞 Support

If you have questions or need help:

- Open an issue on GitHub
- Contact us at hello@example.com
- Follow us on Twitter [@localwolfpackai](https://twitter.com/localwolfpackai)

---

Made with ❤️ by [@localwolfpackai](https://github.com/localwolfpackai)