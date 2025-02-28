import { motion } from 'framer-motion';
import { DropdownColumn } from '../../types/navbar';
import DropdownItem from './DropdownItem';

interface NavbarDropdownProps {
  columns: DropdownColumn[];
  isOpen: boolean;
}

const NavbarDropdown = ({ columns, isOpen }: NavbarDropdownProps) => {
  if (!isOpen) return null;

  return (
    <motion.div
      className="absolute left-0 mt-2 w-[630px] rounded-md shadow-lg bg-black border border-vercel-gray-700 z-20"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.2 }}
    >
      <div className="py-4 px-4 grid grid-cols-3 gap-6">
        {columns.map((column, colIndex) => (
          <div key={colIndex} className="space-y-4">
            <h3 className="text-xs uppercase tracking-wider text-gray-400 font-medium">{column.title}</h3>
            <div className="space-y-1">
              {column.items.map((item, itemIndex) => (
                <DropdownItem 
                  key={itemIndex} 
                  item={item} 
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default NavbarDropdown;
