import { SocialLinkProps } from "../../types/footer";
import { useTheme } from "../../context/ThemeContext";

const SocialLink = ({ name, icon }: SocialLinkProps) => {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';

  return (
    <a 
      href="#" 
      className={`${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'} transition-colors text-sm flex items-center`}
    >
      {icon}
      {name}
    </a>
  );
};

export default SocialLink;