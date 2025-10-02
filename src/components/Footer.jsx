import React from 'react';
import { Github, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">About This Project</h3>
            <p className="text-gray-600 mb-4">
              A collection of AI prompts designed to help everyone create better websites and apps, 
              regardless of technical experience.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/localwolfpackai" className="text-gray-400 hover:text-gray-600">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://twitter.com/localwolfpackai" className="text-gray-400 hover:text-gray-600">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="mailto:hello@example.com" className="text-gray-400 hover:text-gray-600">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#ui-design" className="text-gray-600 hover:text-gray-900">UI Design Prompts</a></li>
              <li><a href="#user-experience" className="text-gray-600 hover:text-gray-900">UX Prompts</a></li>
              <li><a href="#project-polish" className="text-gray-600 hover:text-gray-900">Project Polish</a></li>
              <li><a href="#github-workflow" className="text-gray-600 hover:text-gray-900">Workflow Prompts</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Get Started</h3>
            <p className="text-gray-600 mb-4">
              New to AI prompts? Start with our beginner-friendly categories and work your way up.
            </p>
            <a href="#" className="btn-primary">
              View All Prompts
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-8 text-center">
          <p className="text-gray-500">
            Made with ❤️ by <a href="https://github.com/localwolfpackai" className="text-primary-600 hover:text-primary-700">@localwolfpackai</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;