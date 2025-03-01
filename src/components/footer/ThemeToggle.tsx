import React from 'react';
import { useTheme } from '../../context/ThemeContext';

const ThemeToggle: React.FC = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex items-center space-x-2">
      {/* System Theme */}
      <button 
        className={`p-2 rounded-full transition-colors ${theme === 'system' ? 'bg-gray-200 dark:bg-gray-800' : 'hover:bg-gray-200 dark:hover:bg-gray-800'}`}
        onClick={() => setTheme('system')}
        aria-label="Use system theme"
        title="Use system theme"
      >
        <svg className="w-5 h-5 text-gray-700 dark:text-gray-400" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 100-16 8 8 0 000 16zM12 6a1 1 0 110-2 1 1 0 010 2zm-1 3v8h2V9h-2z"></path>
        </svg>
      </button>

      {/* Light Theme */}
      <button 
        className={`p-2 rounded-full transition-colors ${theme === 'light' ? 'bg-gray-200 dark:bg-gray-800' : 'hover:bg-gray-200 dark:hover:bg-gray-800'}`}
        onClick={() => setTheme('light')}
        aria-label="Use light theme"
        title="Use light theme"
      >
        <svg className="w-5 h-5 text-gray-700 dark:text-gray-400" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 18a6 6 0 110-12 6 6 0 010 12zm0-2a4 4 0 100-8 4 4 0 000 8zM11 1h2v3h-2V1zm0 19h2v3h-2v-3zM3.515 4.929l1.414-1.414L7.05 5.636 5.636 7.05 3.515 4.93zM16.95 18.364l1.414-1.414 2.121 2.121-1.414 1.414-2.121-2.121zm2.121-14.85l1.414 1.415-2.121 2.121-1.414-1.414 2.121-2.121zM5.636 16.95l1.414 1.414-2.121 2.121-1.414-1.414 2.121-2.121zM23 11v2h-3v-2h3zM4 11v2H1v-2h3z"></path>
        </svg>
      </button>

      {/* Dark Theme */}
      <button 
        className={`p-2 rounded-full transition-colors ${theme === 'dark' ? 'bg-gray-200 dark:bg-gray-800' : 'hover:bg-gray-200 dark:hover:bg-gray-800'}`}
        onClick={() => setTheme('dark')}
        aria-label="Use dark theme"
        title="Use dark theme"
      >
        <svg className="w-5 h-5 text-gray-700 dark:text-gray-400" fill="currentColor" viewBox="0 0 24 24">
          <path d="M10 6a8 8 0 0011.955 6.956C21.474 18.03 17.2 22 12 22 6.477 22 2 17.523 2 12c0-5.2 3.97-9.474 9.044-9.955A7.963 7.963 0 0010 6zm-6 6a8 8 0 008 8 8.006 8.006 0 006.957-4.045c-.316.03-.636.045-.957.045-5.523 0-10-4.477-10-10 0-.321.015-.64.045-.957A8.006 8.006 0 004 12z"></path>
        </svg>
      </button>
    </div>
  );
};

export default ThemeToggle;
