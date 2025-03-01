import { ThemeToggleProps } from "../../types/footer";
import { ThemeType } from "../../types/footer";

const ThemeToggle = ({ 
  onThemeChange,
  currentTheme = 'system'
}: ThemeToggleProps) => {
  const handleThemeChange = (theme: ThemeType): void => {
    if (onThemeChange) {
      onThemeChange(theme);
    }
  };

  return (
    <div className="flex space-x-2 mt-4 md:mt-0">
      <button 
        className={`p-2 rounded-full hover:bg-gray-900 transition-colors ${currentTheme === 'system' ? 'bg-gray-800' : ''}`}
        onClick={() => handleThemeChange('system')}
      >
        <img src="/system-icon.svg" alt="System" className="w-5 h-5" />
      </button>
      <button 
        className={`p-2 rounded-full hover:bg-gray-900 transition-colors ${currentTheme === 'light' ? 'bg-gray-800' : ''}`}
        onClick={() => handleThemeChange('light')}
      >
        <img src="/light-mode-icon.svg" alt="Light mode" className="w-5 h-5" />
      </button>
      <button 
        className={`p-2 rounded-full hover:bg-gray-900 transition-colors ${currentTheme === 'dark' ? 'bg-gray-800' : ''}`}
        onClick={() => handleThemeChange('dark')}
      >
        <img src="/dark-mode-icon.svg" alt="Dark mode" className="w-5 h-5" />
      </button>
    </div>
  );
};

export default ThemeToggle;
