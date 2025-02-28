import { motion, AnimatePresence } from 'framer-motion';
import { NavLinkType } from '../../types/navbar';

interface MobileNavLinkProps {
  link: NavLinkType;
  isOpen: boolean;
  toggleDropdown: () => void;
}

const MobileNavLink = ({ link, isOpen, toggleDropdown }: MobileNavLinkProps) => {
  return (
    <div className="py-1">
      <button
        onClick={toggleDropdown}
        className="flex justify-between items-center w-full py-3 text-sm font-medium text-gray-300 hover:text-white"
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
            className="pl-4 mt-2 mb-2 border-l border-vercel-gray-700 space-y-3"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {link.dropdownColumns.map((column, colIndex) => (
              <div key={colIndex} className="mb-4">
                <h3 className="text-xs uppercase tracking-wider text-gray-400 font-medium mb-2">{column.title}</h3>
                <div className="space-y-2">
                  {column.items.map((item, itemIndex) => (
                    <a
                      key={itemIndex}
                      href={item.url}
                      className="block py-2"
                    >
                      <p className="text-sm font-medium text-white">{item.name}</p>
                      <p className="text-xs text-gray-400">{item.description}</p>
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
