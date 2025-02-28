import { FooterColumnProps } from '../../types/footer';

const FooterColumn = ({ title, links }: FooterColumnProps) => {
  return (
    <div>
      <h3 className="text-white font-medium mb-4">{title}</h3>
      <ul className="space-y-2">
        {links.map((link, index) => (
          <li key={index}>
            {typeof link === 'string' ? (
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors text-sm"
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