import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const CodeExamples: React.FC = () => {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';

  return (
    <section className={`${isDark ? 'bg-black border-gray-800' : 'bg-white border-gray-200'} py-24 border-t`}>
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - Git-connected Deploys */}
          <motion.div 
            className="flex flex-col"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-4">
              <span className={`${isDark ? 'text-gray-400' : 'text-gray-600'} font-mono text-sm flex items-center`}>
                <img src={isDark ? "/code-icon.PNG" : "/code-icon-light.PNG"} alt="Code Icon" className="w-6 h-6 mr-2" />
                Git-connected Deploys
              </span>
            </div>
            <h2 className={`text-2xl md:text-3xl lg:text-4xl ${isDark ? 'text-white' : 'text-black'} font-bold mb-2`}>
              From localhost to https, in seconds.
            </h2>
            <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} text-lg mb-8`}>
              Deploy from Git or your CLI.
            </p>
            
            <div className={`rounded-lg overflow-hidden border ${isDark ? 'border-gray-800' : 'border-gray-200'} shadow-lg`}>
              <img 
                src={isDark ? "/code-ex1.PNG" : "/code-ex1-light.PNG"} 
                alt="Git Deploy Example" 
                className="w-full h-auto"
              />
            </div>
          </motion.div>
          
          {/* Right Column - Collaborative pre-production */}
          <motion.div 
            className="flex flex-col"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-4">
              <span className={`${isDark ? 'text-gray-400' : 'text-gray-600'} font-mono text-sm flex items-center`}>
                <img src={isDark ? "/chat-icon.PNG" : "/chat-icon-light.PNG"} alt="Chat Icon" className="w-6 h-6 mr-2" />
                Collaborative pre-production
              </span>
            </div>
            <h2 className={`text-2xl md:text-3xl lg:text-4xl ${isDark ? 'text-white' : 'text-black'} font-bold mb-2`}>
              Every deploy is remarkable.
            </h2>
            <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} text-lg mb-8`}>
              Chat with your team on real, production-grade UI, not just designs.
            </p>
            
            <div className={`rounded-lg overflow-hidden border ${isDark ? 'border-gray-800' : 'border-gray-200'} shadow-lg`}>
              <img 
                src={isDark ? "/code-ex2.PNG" : "/code-ex2-light.PNG"} 
                alt="Collaborative UI Example" 
                className="w-full h-auto"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CodeExamples;
