import React, { useState } from 'react';
import FooterColumn from './footer/FooterColumn';
import FooterSocial from './footer/FooterSocial';
import LegalDropdown from './footer/LegalDropdown';
import ScrollToTopButton from './footer/ScrollToTopButton';
import StatusIndicator from './footer/StatusIndicator';
import ThemeToggle from './footer/ThemeToggle';
import { ThemeType } from '../types/footer';
import { productLinks, resourceLinks, companyLinks } from '../data/footerData';


const Footer = () => {
  const [currentTheme, setCurrentTheme] = useState<ThemeType>('system');

  const handleThemeChange = (theme: ThemeType): void => {
    setCurrentTheme(theme);
    /* 
      TODO: add theme logic here
    */
  };

  const companyLinksWithLegal: (string | React.ReactNode)[] = [
    ...companyLinks.filter(link => link !== 'Legal'),
    <LegalDropdown key="legal" />
  ];

  return (
    <footer className="bg-black py-16 border-t border-gray-800 relative">
      <div className="container mx-auto px-4 max-w-6xl">
        <ScrollToTopButton />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Column 1 - Products */}
          <FooterColumn title="Products" links={productLinks} />

          {/* Column 2 - Resources */}
          <FooterColumn title="Resources" links={resourceLinks} />

          {/* Column 3 - Company */}
          <FooterColumn title="Company" links={companyLinksWithLegal} />

          {/* Column 4 - Social */}
          <FooterSocial />
        </div>

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-800">
          <StatusIndicator />
          <ThemeToggle 
            currentTheme={currentTheme}
            onThemeChange={handleThemeChange}
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;