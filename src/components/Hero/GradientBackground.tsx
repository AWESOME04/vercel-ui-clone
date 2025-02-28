import React from 'react';

interface GradientBackgroundProps {
  className?: string;
}

const GradientBackground: React.FC<GradientBackgroundProps> = ({ className = '' }) => {
  return (
    <div className={`absolute inset-0 z-0 ${className}`}>
      {/* Main gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-vercel-blue-500/20 via-transparent to-vercel-purple-500/20 opacity-70"></div>
      
      {/* Left blue glow */}
      <div className="absolute -left-40 top-1/3 w-80 h-80 bg-vercel-blue-500 rounded-full filter blur-[120px] opacity-20"></div>
      
      {/* Right purple glow */}
      <div className="absolute -right-40 top-1/2 w-80 h-80 bg-vercel-purple-500 rounded-full filter blur-[120px] opacity-20"></div>
      
      {/* Bottom center glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-40 bg-vercel-blue-500 rounded-full filter blur-[100px] opacity-10"></div>
    </div>
  );
};

export default GradientBackground;
