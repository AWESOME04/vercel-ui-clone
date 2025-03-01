import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import { NavLinkType } from '../../types/navbar';

interface MobileNavLinkProps {
  link: NavLinkType;
}

const MobileNavLink = ({ link }: MobileNavLinkProps) => {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="py-1">
      <button
        onClick={toggleDropdown}
        className={`flex justify-between items-center w-full py-3 text-sm font-medium ${
          isDark ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'
        }`}
      >
        {link.name}
        {link.hasDropdown && (
          <svg 
            className={`ml-2 w-5 h-5 transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''}`} 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        )}
      </button>
      
      <AnimatePresence>
        {link.hasDropdown && isOpen && link.dropdownColumns && (
          <motion.div
            className={`pl-4 mt-2 mb-2 space-y-3 border-l ${
              isDark ? 'border-gray-700' : 'border-gray-300'
            }`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {link.dropdownColumns.map((column, colIndex) => (
              <div key={colIndex} className="mb-4">
                <h3 className={`text-xs uppercase tracking-wider font-medium mb-2 ${
                  isDark ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {column.title}
                </h3>
                <div className="space-y-2">
                  {column.items.map((item, itemIndex) => (
                    <a
                      key={itemIndex}
                      href={item.url}
                      className="block py-2"
                    >
                      <p className={`text-sm font-medium ${
                        isDark ? 'text-white' : 'text-black'
                      }`}>
                        {item.name}
                      </p>
                      <p className={`text-xs ${
                        isDark ? 'text-gray-400' : 'text-gray-600'
                      }`}>
                        {item.description}
                      </p>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileNavLink;
