import { BackgroundGridProps } from "../../types/hero";

const BackgroundGrid = ({ className = '' }: BackgroundGridProps) => {
  return (
    <div className={`absolute inset-0 z-0 opacity-5 ${className}`}>
      <div className="absolute inset-0">
        {/* Vertical lines */}
        <div className="h-full w-full" style={{ 
          backgroundImage: 'linear-gradient(to right, rgba(255, 255, 255, 0.3) 1px, transparent 1px)',
          backgroundSize: 'calc(100% / 24) 100%' 
        }}></div>
        
        {/* Horizontal lines */}
        <div className="h-full w-full" style={{ 
          backgroundImage: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.3) 1px, transparent 1px)',
          backgroundSize: '100% calc(100% / 24)' 
        }}></div>
      </div>
    </div>
  );
};

export default BackgroundGrid;
