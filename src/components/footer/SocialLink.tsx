import { SocialLinkProps } from "../../types/footer";

const SocialLink = ({ name, icon }: SocialLinkProps) => {
  return (
    <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm flex items-center">
      {icon}
      {name}
    </a>
  );
};

export default SocialLink;