import React from 'react';
import { useTheme } from '../../context/ThemeContext';

const ThemeToggle: React.FC = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex items-center rounded-full p-1" style={{ backgroundColor: 'rgb(var(--muted))' }}>
      {/* System Theme */}
      <button 
        className="p-2 rounded-full transition-colors"
        style={{
          backgroundColor: theme === 'system' ? 'rgb(var(--background))' : 'transparent',
        }}
        onClick={() => setTheme('system')}
        aria-label="Use system theme"
        title="Use system theme"
        onMouseEnter={(e) => {
          if (theme !== 'system') {
            e.currentTarget.style.backgroundColor = 'rgb(var(--hover-bg))';
          }
        }}
        onMouseLeave={(e) => {
          if (theme !== 'system') {
            e.currentTarget.style.backgroundColor = 'transparent';
          }
        }}
      >
        <img 
          src="/system-icon.svg" 
          alt="System theme"
          className="w-5 h-5" 
        />
      </button>

      {/* Light Theme */}
      <button 
        className="p-2 rounded-full transition-colors"
        style={{
          backgroundColor: theme === 'light' ? 'rgb(var(--background))' : 'transparent',
        }}
        onClick={() => setTheme('light')}
        aria-label="Use light theme"
        title="Use light theme"
        onMouseEnter={(e) => {
          if (theme !== 'light') {
            e.currentTarget.style.backgroundColor = 'rgb(var(--hover-bg))';
          }
        }}
        onMouseLeave={(e) => {
          if (theme !== 'light') {
            e.currentTarget.style.backgroundColor = 'transparent';
          }
        }}
      >
        <img 
          src="/light-icon.svg" 
          alt="Light theme"
          className="w-5 h-5" 
        />
      </button>

      {/* Dark Theme */}
      <button 
        className="p-2 rounded-full transition-colors"
        style={{
          backgroundColor: theme === 'dark' ? 'rgb(var(--background))' : 'transparent',
        }}
        onClick={() => setTheme('dark')}
        aria-label="Use dark theme"
        title="Use dark theme"
        onMouseEnter={(e) => {
          if (theme !== 'dark') {
            e.currentTarget.style.backgroundColor = 'rgb(var(--hover-bg))';
          }
        }}
        onMouseLeave={(e) => {
          if (theme !== 'dark') {
            e.currentTarget.style.backgroundColor = 'transparent';
          }
        }}
      >
        <img 
          src="/dark-icon.svg" 
          alt="Dark theme"
          className="w-5 h-5" 
        />
      </button>
    </div>
  );
};

export default ThemeToggle;