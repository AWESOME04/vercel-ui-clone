import { FooterColumnProps } from '../../types/footer';
import { useTheme } from '../../context/ThemeContext';

const FooterColumn = ({ title, links }: FooterColumnProps) => {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';

  return (
    <div>
      <h3 className={`${isDark ? 'text-white' : 'text-gray-900'} font-medium mb-4`}>{title}</h3>
      <ul className="space-y-2">
        {links.map((link, index) => (
          <li key={index}>
            {typeof link === 'string' ? (
              <a
                href="#"
                className={`${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'} transition-colors text-sm`}
              >
                {link}
              </a>
            ) : (
              link
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterColumn;