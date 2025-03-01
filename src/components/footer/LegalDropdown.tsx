import { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';

const LegalDropdown = () => {
  const [isLegalMenuOpen, setIsLegalMenuOpen] = useState<boolean>(false);
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';

  const toggleLegalMenu = (): void => {
    setIsLegalMenuOpen(!isLegalMenuOpen);
  };
  
  const legalLinks: string[] = [
    'Cookie Policy', 'Cookie Preferences', 'DMCA Policy', 'DORA Addendum',
    'DPA', 'DRA', 'Event Code of Conduct', 'Event Terms and Conditions',
    'Inactivity Policy', 'Job Applicant Privacy Notice', 'Privacy Policy',
    'SLA', 'Sub-processors', 'Support Terms', 'Terms of Service', 'Trademark Policy'
  ];

  return (
    <div className="relative">
      <button 
        onClick={toggleLegalMenu}
        className={`${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'} transition-colors text-sm flex items-center`}
      >
        Legal
        <svg 
          className={`ml-1 w-4 h-4 transition-transform ${isLegalMenuOpen ? 'rotate-180' : ''}`} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>
      
      {isLegalMenuOpen && (
        <div className={`absolute left-0 bottom-8 ${isDark ? 'bg-[#0A0A0A] border-gray-800' : 'bg-white border-gray-200'} border rounded-md shadow-lg py-2 z-10 w-64`}>
          {legalLinks.map((link, index) => (
            <a 
              key={index} 
              href="#" 
              className={`block px-4 py-2 text-sm ${isDark ? 'text-gray-400 hover:text-white hover:bg-[#181818]' : 'text-gray-600 hover:text-black hover:bg-gray-100'}`}
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default LegalDropdown;