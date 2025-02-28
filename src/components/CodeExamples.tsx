import React from 'react';
import { motion } from 'framer-motion';

const CodeExamples: React.FC = () => {
  return (
    <section className="bg-black py-24 border-t border-gray-800">
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
              <span className="text-gray-400 font-mono text-sm flex items-center">
                <img src="/code-icon.PNG" alt="Code Icon" className="w-6 h-6 mr-2" />
                Git-connected Deploys
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl text-white font-bold mb-2">
              From localhost to https, in seconds.
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              Deploy from Git or your CLI.
            </p>
            
            {/* Using the actual image */}
            <div className="rounded-lg overflow-hidden border border-gray-800 shadow-lg">
              <img 
                src="/code-ex1.PNG" 
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
              <span className="text-gray-400 font-mono text-sm flex items-center">
                <img src="/chat-icon.PNG" alt="Chat Icon" className="w-6 h-6 mr-2" />
                Collaborative pre-production
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl text-white font-bold mb-2">
              Every deploy is remarkable.
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              Chat with your team on real, production-grade UI, not just designs.
            </p>
            
            {/* Using the actual image */}
            <div className="rounded-lg overflow-hidden border border-gray-800 shadow-lg">
              <img 
                src="/code-ex2.PNG" 
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
