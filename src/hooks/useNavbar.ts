import * as React from 'react';
import { useState, useEffect, useRef } from 'react';
import { NavLinkType } from '../types/navbar';

export const useNavbar = (navLinks: NavLinkType[]) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  
  // Update the type to correctly reflect that the current property of RefObject may be null
  const dropdownRefs = useRef<Record<string, React.RefObject<HTMLDivElement | null>>>({});

  // Initialize refs for each dropdown
  useEffect(() => {
    navLinks.forEach(link => {
      if (link.hasDropdown && !dropdownRefs.current[link.name]) {
        dropdownRefs.current[link.name] = React.createRef<HTMLDivElement>();
      }
    });
  }, [navLinks]);

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle click outside to close dropdowns
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (openDropdown) {
        const currentRef = dropdownRefs.current[openDropdown];
        if (currentRef?.current && !currentRef.current.contains(event.target as Node)) {
          setOpenDropdown(null);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [openDropdown]);

  const handleMouseEnter = (name: string) => {
    if (window.innerWidth >= 1024) {
      setOpenDropdown(name);
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth >= 1024) {
      setOpenDropdown(null);
    }
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    if (openDropdown) {
      setOpenDropdown(null);
    }
  };

  const toggleDropdown = (name: string) => {
    if (openDropdown === name) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(name);
    }
  };

  return {
    scrolled,
    mobileMenuOpen,
    openDropdown,
    dropdownRefs,
    handleMouseEnter,
    handleMouseLeave,
    toggleMobileMenu,
    toggleDropdown
  };
};