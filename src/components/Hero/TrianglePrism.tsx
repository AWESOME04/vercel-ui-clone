import { TrianglePrismProps } from "../../types/hero";

const TrianglePrism = ({ className = '' }: TrianglePrismProps) => {
  return (
    <svg 
      viewBox="0 0 800 600" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Base triangle with gradient */}
      <path d="M400 50L700 500H100L400 50Z" fill="url(#base-gradient)" />
      
      {/* Left face with blue gradient */}
      <path d="M400 50L100 500L400 500L400 50Z" fill="url(#blue-gradient)" opacity="0.85" />
      
      {/* Right face with red/orange gradient */}
      <path d="M400 50L700 500L400 500L400 50Z" fill="url(#red-gradient)" opacity="0.85" />
      
      {/* Highlight lines */}
      <path d="M400 50L100 500" stroke="white" strokeWidth="1" strokeOpacity="0.3" />
      <path d="M400 50L700 500" stroke="white" strokeWidth="1" strokeOpacity="0.3" />
      <path d="M100 500L700 500" stroke="white" strokeWidth="1" strokeOpacity="0.3" />
      
      <defs>
        {/* Base gradient */}
        <linearGradient id="base-gradient" x1="400" y1="50" x2="400" y2="500" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#FFFFFF" />
          <stop offset="1" stopColor="#000000" />
        </linearGradient>
        
        {/* Blue gradient for left face */}
        <linearGradient id="blue-gradient" x1="100" y1="275" x2="400" y2="275" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#0070F3" />
          <stop offset="1" stopColor="#000000" stopOpacity="0.5" />
        </linearGradient>
        
        {/* Red/orange gradient for right face */}
        <linearGradient id="red-gradient" x1="700" y1="275" x2="400" y2="275" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#FF4D4D" />
          <stop offset="1" stopColor="#000000" stopOpacity="0.5" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default TrianglePrism;
