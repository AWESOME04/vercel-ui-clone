import React from 'react';
import { useTheme } from '../../context/ThemeContext';

const StatusIndicator: React.FC = () => {
  const { resolvedTheme } = useTheme();
  const isOnline = true;
  const statusText = 'All systems normal';
  const isDark = resolvedTheme === 'dark';

  return (
    <div className="flex items-center mb-4 md:mb-0">
      <span className={`flex items-center ${isDark ? 'text-blue-400' : 'text-blue-600'} text-sm`}>
        <span className={`w-2 h-2 ${isOnline ? (isDark ? 'bg-blue-400' : 'bg-blue-600') : 'bg-red-500'} rounded-full mr-2`}></span>
        {statusText}
      </span>
    </div>
  );
};

export default StatusIndicator;