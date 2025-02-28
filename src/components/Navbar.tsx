import { AnimatePresence } from 'framer-motion';
import NavLink from './navbar/NavLink';
import MobileMenu from './navbar/MobileMenu';
import { navLinks } from '../data/navLinks';
import { useNavbar } from '../hooks/useNavbar';

const Navbar = () => {
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

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-black shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4 lg:py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <img src="/vercel-logo-white.svg" alt="Vercel Logo" className="h-6" />
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
            <a href="#login" className="text-sm font-medium text-gray-300 hover:text-white">
              Log In
            </a>
            <a href="#contact" className="text-sm font-medium text-gray-300 hover:text-white">
              Contact
            </a>
            <a
              href="#signup"
              className="bg-white text-black px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-200 transition-colors"
            >
              Sign Up
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              {mobileMenuOpen ? (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <MobileMenu 
            isOpen={mobileMenuOpen}
            navLinks={navLinks}
            openDropdown={openDropdown}
            toggleDropdown={toggleDropdown}
          />
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
