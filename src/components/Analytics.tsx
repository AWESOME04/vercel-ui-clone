import React from 'react';
import { motion } from 'framer-motion';

const Analytics: React.FC = () => {
  return (
    <section className="bg-black py-24 relative">
      <div className="container mx-auto px-4">
        {/* Text Content - Positioned to the left */}
        <motion.div
          className="max-w-lg mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center mb-4">
            <span className="text-gray-400 font-mono text-sm flex items-center">
              <img src="/analytics-icon.PNG" alt="Analytics Icon" className="w-8 h-8 mr-2" />
              Frontend Observability
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl text-white font-bold mb-6">
            Privacy-friendly, lightweight Analytics.
          </h2>
          <p className="text-gray-400 text-xl">
            Upgrade your post-launch workflow with actionable, real-time insights.
          </p>
        </motion.div>

        {/* Graph - Taking up more width */}
        <motion.div
          className="w-full"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="relative">
            {/* Tooltip overlay */}
            <div className="absolute right-32 top-1/4 bg-gray-900/80 backdrop-blur-sm p-4 rounded-lg border border-gray-800 z-10">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-400">Views</span>
                <span className="text-white font-bold">5,218</span>
                <span className="text-green-400 ml-2">+53%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Clicks</span>
                <span className="text-white font-bold">2,005</span>
                <span className="text-green-400 ml-2">+13%</span>
              </div>
            </div>
            
            {/* Graph image */}
            <img 
              src="/analytics.png" 
              alt="Analytics Dashboard" 
              className="w-full h-auto rounded-lg"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Analytics;