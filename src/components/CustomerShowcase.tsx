import React from 'react';
import { motion } from 'framer-motion';

const CustomerShowcase: React.FC = () => {
  return (
    <section className="bg-black py-24 border-t border-gray-800">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - Instant Rollbacks */}
          <motion.div 
            className="flex flex-col"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-4">
              <span className="text-gray-400 font-mono text-sm flex items-center">
                <img src="/rollback-icon.PNG" alt="Rollback Icon" className="w-8 h-8 mr-2" />
                Instant Rollbacks
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl text-white font-bold mb-2">
              Go ahead, deploy on Friday.
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              Instantly rollback to a working deployment.
            </p>
            
            <div className="rounded-lg overflow-hidden border border-gray-800 shadow-lg">
              <img 
                src="/rollback.PNG" 
                alt="Rollback Example" 
                className="w-full h-auto"
              />
            </div>
          </motion.div>
          
          {/* Right Column - Conformance */}
          <motion.div 
            className="flex flex-col"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-4">
              <span className="text-gray-400 font-mono text-sm flex items-center">
                <img src="/conformance-icon.PNG" alt="Conformance Icon" className="w-8 h-8 mr-2" />
                Move fast, don't break things
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl text-white font-bold mb-2">
              Keep quality high while maintaining velocity.
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              Enterprise Monorepos.
            </p>
            
            <div className="rounded-lg overflow-hidden border border-gray-800 shadow-lg">
              <img 
                src="/conformance.PNG" 
                alt="Conformance Example" 
                className="w-full h-auto"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CustomerShowcase;
