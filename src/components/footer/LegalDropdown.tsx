import { useState } from 'react';

const LegalDropdown = () => {
  const [isLegalMenuOpen, setIsLegalMenuOpen] = useState<boolean>(false);

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
        className="text-gray-400 hover:text-white transition-colors text-sm flex items-center"
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
        <div className="absolute left-0 bottom-8 bg-[#0A0A0A] border border-gray-800 rounded-md shadow-lg py-2 z-10 w-64">
          {legalLinks.map((link, index) => (
            <a 
              key={index} 
              href="#" 
              className="block px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-[#181818]"
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