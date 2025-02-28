import { motion } from 'framer-motion';
import { NavLinkType } from '../../types/navbar';
import MobileNavLink from './MobileNavLink';

interface MobileMenuProps {
  isOpen: boolean;
  navLinks: NavLinkType[];
  openDropdown: string | null;
  toggleDropdown: (name: string) => void;
}

const MobileMenu = ({ isOpen, navLinks, openDropdown, toggleDropdown }: MobileMenuProps) => {
  if (!isOpen) return null;

  return (
    <motion.div
      className="lg:hidden bg-black absolute w-full border-t border-vercel-gray-800"
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: 'auto', opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="container mx-auto px-4 py-4 divide-y divide-vercel-gray-800">
        <div className="pb-4">
          <div className="relative mb-4">
            <input 
              type="text" 
              placeholder="Search..." 
              className="bg-vercel-gray-700 border border-vercel-gray-600 rounded-md py-2 pl-9 pr-3 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-vercel-blue-500 focus:border-vercel-blue-500 w-full"
            />
            <svg className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </div>

          {navLinks.map((link) => (
            <MobileNavLink 
              key={link.name}
              link={link}
              isOpen={openDropdown === link.name}
              toggleDropdown={() => toggleDropdown(link.name)}
            />
          ))}
        </div>

        <div className="pt-4 flex flex-col space-y-4">
          <a href="#login" className="block py-2 text-sm font-medium text-gray-300 hover:text-white">
            Log In
          </a>
          <a href="#contact" className="block py-2 text-sm font-medium text-gray-300 hover:text-white">
            Contact
          </a>
          <a
            href="#signup"
            className="block py-2 text-sm font-medium text-white hover:text-gray-300"
          >
            Sign Up
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default MobileMenu;
