import { NavItem } from '../../types/navbar';
import { getIconForItem } from '../../utils/navIcons';

interface DropdownItemProps {
  item: NavItem;
}

const DropdownItem = ({ item }: DropdownItemProps) => {
  const Icon = getIconForItem(item.name);
  
  return (
    <a
      href={item.url}
      className="block px-3 py-2 rounded-md hover:bg-vercel-gray-800 transition-colors"
    >
      <div className="flex items-start">
        <div className="mr-3 mt-1 text-gray-400">
          <Icon className="w-5 h-5" />
        </div>
        <div>
          <p className="text-sm font-medium text-white">{item.name}</p>
          <p className="text-xs text-gray-400 mt-0.5">{item.description}</p>
        </div>
      </div>
    </a>
  );
};

export default DropdownItem;
