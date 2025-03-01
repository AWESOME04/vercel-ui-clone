import { RefObject } from 'react';
import { AnimatePresence } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import { NavLinkType } from '../../types/navbar';
import NavbarDropdown from './NavbarDropdown';

interface NavLinkProps {
  link: NavLinkType;
  isOpen: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  onClick: () => void;
  dropdownRef: RefObject<HTMLDivElement | null> | undefined;
}

const NavLink = ({ 
  link, 
  isOpen, 
  onMouseEnter, 
  onMouseLeave, 
  onClick, 
  dropdownRef 
}: NavLinkProps) => {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';

  return (
    <div 
      className="relative"
      ref={dropdownRef as RefObject<HTMLDivElement>}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <button 
        onClick={onClick}
        className={`px-3 py-2 rounded-md text-sm font-medium transition-colors nav-link-hover ${
          isOpen 
            ? isDark ? 'text-white' : 'text-black'
            : isDark 
              ? 'text-gray-300 hover:text-white' 
              : 'text-gray-700 hover:text-black'
        }`}
      >
        <span>{link.name}</span>
        {link.hasDropdown && (
          <svg 
            className="ml-1 w-4 h-4 inline-block transition-transform duration-200" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
            style={{ transform: isOpen ? 'rotate(180deg)' : 'none' }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        )}
      </button>
      
      <AnimatePresence>
        {link.hasDropdown && isOpen && link.dropdownColumns && (
          <NavbarDropdown 
            columns={link.dropdownColumns} 
            isOpen={isOpen} 
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default NavLink;