import { socialIcons } from "../constants/constant";

const SocialIcons = ({ isDark = true }) => {
  return (
    <div className="flex items-center justify-center">
      <ul className="flex gap-5 text-primary text-xl">
        {socialIcons.map((item) => (
          <li
            className={`hover:scale-110 transition-all ${isDark ? 'hover:text-normal' : 'hover:text-primary-dark'}`}
            key={item.id}
          >
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex"
              aria-label="Social profile"
            >
              {item.icon}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialIcons;