import React from 'react';
import { motion } from 'framer-motion';
import BackgroundGrid from './Hero/BackgroundGrid';
import GradientBackground from './Hero/GradientBackground';

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-black">
      {/* Background elements */}
      <BackgroundGrid />
      <GradientBackground />
      
      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 pt-32 pb-0 md:pt-40 lg:pt-48 max-w-6xl">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Your complete platform for the web.
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Vercel provides the developer tools and cloud infrastructure 
            to build, scale, and secure a faster, more personalized web.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-4 mb-20 md:mb-24"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <a 
              href="#deploy" 
              className="bg-white text-black font-medium px-6 py-3 rounded-md flex items-center justify-center hover:bg-gray-100 transition-colors"
            >
              <img 
                src="/deploy-button.svg" 
                alt="Deploy" 
                className="w-4 h-4 mr-2" 
              />
              Start Deploying
            </a>
            <a 
              href="#demo" 
              className="border border-gray-700 text-white font-medium px-6 py-3 rounded-md hover:bg-white/10 transition-colors"
            >
              Get a Demo
            </a>
          </motion.div>
        </div>
      </div>
      
      {/* Triangle image */}
      <div className="relative w-full max-w-5xl mx-auto mt-[-50px]">
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black to-transparent z-10"></div>
        <div className="px-4 md:px-8">
          <img 
            src="/triangle.png" 
            alt="Vercel Triangle Gradient" 
            className="w-full h-auto object-cover relative z-0"
          />
        </div>
      </div>
      
      {/* Bottom section with taglines */}
      <div className="relative z-10 bg-black py-16">
        <div className="container mx-auto text-center">
          <div className="flex flex-col items-center justify-center space-y-4">
            <h2 className="text-2xl md:text-4xl text-white font-medium">
              Develop with your favorite tools
              <img 
                src="/code-icon.PNG" 
                alt="Code Button" 
                className="w-8 h-8 inline-block mr-2 mx-4"
              />
            </h2>
            <h2 className="text-2xl md:text-4xl text-white font-medium">
              Launch globally, instantly
              <img 
                src="/web-icon.PNG" 
                alt="Code Button" 
                className="w-8 h-8 inline-block mr-2 mx-4"
              />
              
              Keep pushing 
              <img 
                src="/git-icon.PNG" 
                alt="Code Button" 
                className="w-8 h-8 inline-block mr-2 mx-4"
              />
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
