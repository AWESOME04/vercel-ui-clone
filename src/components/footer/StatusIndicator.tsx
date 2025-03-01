import { StatusIndicatorProps } from "../../types/footer";
  
  const StatusIndicator = ({
    isOnline = true,
    statusText = 'All systems normal'
  }: StatusIndicatorProps) => {
    return (
      <div className="flex items-center">
        <span className="flex items-center text-blue-500 text-sm">
          <span className={isOnline ? 'w-2 h-2 bg-blue-500 rounded-full mr-2' : 'w-2 h-2 bg-red-500 rounded-full mr-2'}></span>
          {statusText}
        </span>
      </div>
    );
  };
  
  export default StatusIndicator;