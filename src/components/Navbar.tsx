import { AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import NavLink from './navbar/NavLink';
import MobileMenu from './navbar/MobileMenu';
import { navLinks } from '../data/navLinks';
import { useNavbar } from '../hooks/useNavbar';

const Navbar = () => {
  const { resolvedTheme } = useTheme();
  const {
    scrolled,
    mobileMenuOpen,
    openDropdown,
    dropdownRefs,
    handleMouseEnter,
    handleMouseLeave,
    toggleMobileMenu,
    toggleDropdown
  } = useNavbar(navLinks);

  const isDark = resolvedTheme === 'dark';

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? isDark ? 'bg-black shadow-lg' : 'bg-white shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4 lg:py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <img 
                src={isDark ? "/vercel-logo-white.svg" : "/vercel-logo-black.svg"} 
                alt="Vercel Logo" 
                className="h-6" 
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                link={link}
                isOpen={openDropdown === link.name}
                onMouseEnter={() => handleMouseEnter(link.name)}
                onMouseLeave={handleMouseLeave}
                onClick={() => toggleDropdown(link.name)}
                dropdownRef={dropdownRefs.current[link.name]}
              />
            ))}
          </div>

          {/* Desktop Right Navigation */}
          <div className="hidden lg:flex items-center space-x-4">
            <a 
              href="#login" 
              className={`text-sm font-medium px-4 py-2 rounded-md border transition-colors ${
                isDark 
                  ? 'text-gray-300 hover:text-white border-gray-700 hover:border-gray-600' 
                  : 'text-gray-700 hover:text-black border-gray-300 hover:border-gray-400'
              }`}
            >
              Log In
            </a>
            <a 
              href="#contact" 
              className={`text-sm font-medium px-4 py-2 rounded-md border transition-colors ${
                isDark 
                  ? 'text-gray-300 hover:text-white border-gray-700 hover:border-gray-600' 
                  : 'text-gray-700 hover:text-black border-gray-300 hover:border-gray-400'
              }`}
            >
              Contact
            </a>
            <a
              href="#signup"
              className={`text-sm font-medium px-4 py-2 rounded-md transition-colors ${
                isDark 
                  ? 'bg-white text-black hover:bg-gray-200' 
                  : '!bg-black !text-white hover:bg-gray-800'
              }`}
            >
              Sign Up
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMobileMenu}
              className={`p-2 rounded-md ${isDark ? 'text-gray-400 hover:text-white hover:bg-gray-800' : 'text-gray-600 hover:text-black hover:bg-gray-200'}`}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && <MobileMenu links={navLinks} />}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
