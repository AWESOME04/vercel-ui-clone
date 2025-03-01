import { NavItem } from '../../types/navbar';
import { getIconForItem } from '../../utils/navIcons';
import { useTheme } from '../../context/ThemeContext';

interface DropdownItemProps {
  item: NavItem;
}

const DropdownItem = ({ item }: DropdownItemProps) => {
  const Icon = getIconForItem(item.name);
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';
  
  return (
    <a
      href={item.url}
      className={`block px-3 py-2 rounded-md transition-colors ${
        isDark 
          ? 'hover:bg-vercel-gray-800' 
          : 'hover:bg-gray-100'
      }`}
    >
      <div className="flex items-start">
        <div className={`mr-3 mt-1 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
          <Icon className="w-5 h-5" />
        </div>
        <div>
          <p className={`text-sm font-medium ${isDark ? 'text-white' : 'text-black'}`}>{item.name}</p>
          <p className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-600'} mt-0.5`}>{item.description}</p>
        </div>
      </div>
    </a>
  );
};

export default DropdownItem;
