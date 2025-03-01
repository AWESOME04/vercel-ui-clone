import { useTheme } from '../../context/ThemeContext';

const ScrollToTopButton = () => {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';

  const scrollToTop = (): void => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="absolute right-8 top-8">
      <button 
        onClick={scrollToTop}
        className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
        aria-label="Scroll to top"
      >
        <svg 
          className={`w-6 h-6 ${isDark ? 'text-white' : 'text-black'}`}
          fill="currentColor" 
          viewBox="0 0 75 65"
        >
          <path d="M37.59.25l36.95 64H.64l36.95-64z"></path>
        </svg>
      </button>
    </div>
  );
};
  
export default ScrollToTopButton;