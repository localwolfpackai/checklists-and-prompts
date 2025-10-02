export const promptCategories = [
  {
    id: 'ui-design',
    name: 'Making Things Look Beautiful',
    description: 'Prompts to help you create stunning, professional-looking websites and apps',
    icon: '🎨',
    color: 'bg-pink-100 text-pink-700'
  },
  {
    id: 'user-experience',
    name: 'Making Things Easy to Use',
    description: 'Prompts to improve how people interact with your website or app',
    icon: '✨',
    color: 'bg-blue-100 text-blue-700'
  },
  {
    id: 'project-polish',
    name: 'Making Things Professional',
    description: 'Prompts to add finishing touches and make your project shine',
    icon: '💎',
    color: 'bg-green-100 text-green-700'
  },
  {
    id: 'github-workflow',
    name: 'Managing Your Project',
    description: 'Prompts to help organize and improve your development process',
    icon: '⚙️',
    color: 'bg-purple-100 text-purple-700'
  }
];

export const prompts = [
  // UI Design Prompts
  {
    id: 'ui-hero-section',
    category: 'ui-design',
    title: 'Create an Eye-Catching Homepage',
    prompt: 'Create a bold, attention-grabbing homepage that instantly shows what your website is about. Include a powerful headline, beautiful visuals, and clear call-to-action buttons.',
    explanation: 'This helps you create a homepage that makes visitors want to stay and explore. Think of it like creating a great first impression.',
    difficulty: 'Beginner',
    timeEstimate: '15-30 minutes'
  },
  {
    id: 'ui-color-scheme',
    category: 'ui-design',
    title: 'Choose Perfect Colors',
    prompt: 'Suggest a color palette that matches my brand and creates the right mood. Include primary colors, accent colors, and explain how to use them effectively.',
    explanation: 'Colors affect how people feel about your website. This helps you pick colors that match your brand and create the right atmosphere.',
    difficulty: 'Beginner',
    timeEstimate: '10-20 minutes'
  },
  {
    id: 'ui-responsive-design',
    category: 'ui-design',
    title: 'Make It Work on All Devices',
    prompt: 'Review my website and suggest improvements to make it look great on phones, tablets, and computers. Focus on easy navigation and readable text.',
    explanation: 'People use different devices to visit websites. This ensures your site looks great whether someone is on their phone or computer.',
    difficulty: 'Intermediate',
    timeEstimate: '30-45 minutes'
  },

  // User Experience Prompts
  {
    id: 'ux-navigation',
    category: 'user-experience',
    title: 'Improve Website Navigation',
    prompt: 'Analyze my website navigation and suggest ways to make it more intuitive. Help users find what they need quickly and easily.',
    explanation: 'Good navigation is like having clear signs in a store - it helps people find what they want without getting lost.',
    difficulty: 'Beginner',
    timeEstimate: '20-30 minutes'
  },
  {
    id: 'ux-mobile-friendly',
    category: 'user-experience',
    title: 'Optimize for Mobile Users',
    prompt: 'Check how my website works on mobile devices and suggest improvements for touch-friendly buttons, readable text, and easy scrolling.',
    explanation: 'Most people browse websites on their phones. This makes sure your site is easy to use with fingers instead of a mouse.',
    difficulty: 'Intermediate',
    timeEstimate: '25-40 minutes'
  },
  {
    id: 'ux-loading-speed',
    category: 'user-experience',
    title: 'Make Your Site Load Faster',
    prompt: 'Identify what might be slowing down my website and suggest ways to make it load faster. Focus on images, code, and overall performance.',
    explanation: 'Fast-loading websites keep visitors happy. This helps you identify and fix things that make your site slow.',
    difficulty: 'Advanced',
    timeEstimate: '45-60 minutes'
  },

  // Project Polish Prompts
  {
    id: 'polish-professional-look',
    category: 'project-polish',
    title: 'Add Professional Touches',
    prompt: 'Review my project and suggest small details that will make it look more professional and polished. Think about spacing, fonts, and visual consistency.',
    explanation: 'Small details make a big difference in how professional your project looks. This helps you add those finishing touches.',
    difficulty: 'Beginner',
    timeEstimate: '20-30 minutes'
  },
  {
    id: 'polish-accessibility',
    category: 'project-polish',
    title: 'Make It Accessible to Everyone',
    prompt: 'Check my website for accessibility issues and suggest improvements. Focus on making it usable for people with disabilities and different needs.',
    explanation: 'Everyone should be able to use your website. This helps you make sure your site works for people with different abilities.',
    difficulty: 'Intermediate',
    timeEstimate: '30-45 minutes'
  },
  {
    id: 'polish-content-quality',
    category: 'project-polish',
    title: 'Improve Your Content',
    prompt: 'Review the text and images on my website and suggest improvements for clarity, engagement, and professional presentation.',
    explanation: 'Good content keeps visitors interested. This helps you write better text and choose better images.',
    difficulty: 'Beginner',
    timeEstimate: '25-35 minutes'
  },

  // GitHub Workflow Prompts
  {
    id: 'github-project-setup',
    category: 'github-workflow',
    title: 'Organize Your Project Files',
    prompt: 'Help me organize my project files in a logical way. Suggest folder structure and file naming conventions that make sense.',
    explanation: 'Well-organized projects are easier to work with and share. This helps you structure your files professionally.',
    difficulty: 'Beginner',
    timeEstimate: '15-25 minutes'
  },
  {
    id: 'github-documentation',
    category: 'github-workflow',
    title: 'Create Clear Documentation',
    prompt: 'Help me write clear instructions for my project. Create a README file that explains what the project does and how to use it.',
    explanation: 'Good documentation helps others understand and use your project. This creates clear instructions for anyone who finds your work.',
    difficulty: 'Beginner',
    timeEstimate: '20-30 minutes'
  },
  {
    id: 'github-version-control',
    category: 'github-workflow',
    title: 'Track Changes to Your Project',
    prompt: 'Help me set up a system to track changes to my project. Suggest a workflow for saving different versions and collaborating with others.',
    explanation: 'Version control is like saving different drafts of your work. This helps you keep track of changes and work with others safely.',
    difficulty: 'Intermediate',
    timeEstimate: '30-45 minutes'
  }
];