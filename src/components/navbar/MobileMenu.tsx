import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import { NavLinkType } from '../../types/navbar';
import MobileNavLink from './MobileNavLink';

interface MobileMenuProps {
  links: NavLinkType[];
}

const MobileMenu = ({ links }: MobileMenuProps) => {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';

  return (
    <motion.div
      className={`lg:hidden absolute w-full border-t ${
        isDark 
          ? 'bg-black border-gray-800' 
          : 'bg-white border-gray-200'
      }`}
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: 'auto', opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className={`container mx-auto px-4 py-4 divide-y ${
        isDark ? 'divide-gray-800' : 'divide-gray-200'
      }`}>
        <div className="pb-4">
          <div className="relative mb-4">
            <input 
              type="text" 
              placeholder="Search..." 
              className={`border rounded-md py-2 pl-9 pr-3 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 w-full ${
                isDark 
                  ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-400' 
                  : 'bg-gray-100 border-gray-300 text-black placeholder-gray-500'
              }`}
            />
            <svg 
              className={`absolute left-3 top-2.5 h-4 w-4 ${isDark ? 'text-gray-400' : 'text-gray-500'}`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </div>

          {links.map((link) => (
            <MobileNavLink 
              key={link.name}
              link={link}
            />
          ))}
        </div>

        <div className="pt-4 flex flex-col space-y-4">
          <a 
            href="#login" 
            className={`block py-2 text-sm font-medium ${
              isDark ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'
            }`}
          >
            Log In
          </a>
          <a 
            href="#contact" 
            className={`block py-2 text-sm font-medium ${
              isDark ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'
            }`}
          >
            Contact
          </a>
          <a
            href="#signup"
            className={`block py-2 text-sm font-medium ${
              isDark ? 'text-white hover:text-gray-300' : 'text-black hover:text-gray-700'
            }`}
          >
            Sign Up
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default MobileMenu;
