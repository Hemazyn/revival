import { FiInstagram } from "react-icons/fi";
import { FaFacebookF, FaTiktok } from "react-icons/fa";
import { FaTelegram, FaXTwitter } from "react-icons/fa6";


const SocialIcons = ({ color, size, className, platforms = ['facebook', 'twitter', 'instagram'] }) => {
     return (
          <div className="flex gap-2">
               {platforms.includes('facebook') && (
                    <a href="#">
                         <FaFacebookF color={color} size={size} className={className} />
                    </a>
               )}
               {platforms.includes('twitter') && (
                    <a href="#">
                         <FaXTwitter color={color} size={size} className={className} />
                    </a>
               )}
               {platforms.includes('instagram') && (
                    <a href="#">
                         <FiInstagram color={color} size={size} className={className} />
                    </a>
               )}
               {platforms.includes('tiktok') && (
                    <a href="#">
                         <FaTiktok color={color} size={size} className={className} />
                    </a>
               )}
               {platforms.includes('telegram') && (
                    <a href="#">
                         <FaTelegram color={color} size={size} className={className} />
                    </a>
               )}
          </div>
     );
};

export default SocialIcons;