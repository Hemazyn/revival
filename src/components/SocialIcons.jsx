import { FiInstagram } from "react-icons/fi";
import { FaFacebookF, FaTiktok } from "react-icons/fa";
import { FaTelegram, FaXTwitter } from "react-icons/fa6";

const iconMap = {
  facebook: FaFacebookF,
  twitter: FaXTwitter,
  instagram: FiInstagram,
  tiktok: FaTiktok,
  telegram: FaTelegram,
};

const colorClasses = {
  facebook: "text-blue-600 hover:text-blue-800",
  twitter: "text-blue-400 hover:text-blue-600",
  instagram: "text-pink-500 hover:text-pink-700",
  tiktok: "text-black hover:text-gray-700",
  telegram: "text-blue-500 hover:text-blue-700",
};

const SocialIcons = ({ size = 24, className = "", platforms = ["facebook", "twitter", "instagram"] }) => {
  return (
    <div className="flex gap-4">
      {platforms.map((platform) => {
        const IconComponent = iconMap[platform];
        return (
          <a key={platform} href="#" className={`transition-transform duration-300 hover:scale-110 ${colorClasses[platform]}`}>
            <IconComponent size={size} className={className} />
          </a>
        );
      })}
    </div>
  );
};

export default SocialIcons;
