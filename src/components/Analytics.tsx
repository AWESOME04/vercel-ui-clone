import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const Analytics: React.FC = () => {
  const { resolvedTheme } = useTheme();

  const isDark = resolvedTheme === 'dark';

  return (
    <section className={`py-24 relative ${isDark ? 'bg-black' : 'bg-white'}`}>
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
              <img
                src={isDark ? "/analytics-icon.PNG" : "/analytics-icon-light.PNG"}
                alt="Analytics Icon"
                className="w-8 h-8 mr-2"
              />
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
            <img 
              src={isDark ? "/analytics.png" : "/analytics-light.svg"}
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