import { SocialIcons } from "../components";

const PastorCard = ({ name, title, image, description, socials }) => (
  <div className="group rounded-3xl bg-white p-6 shadow-xl transition hover:scale-[1.02] hover:shadow-2xl">
    <img src={image} alt={name} className="h-100 w-full rounded-2xl object-cover" />
    <h3 className="font-fira mt-4 text-lg font-bold text-blue-900">{name}</h3>
    <p className="text-sm text-gray-600">{title}</p>
    <p className="mt-2 text-sm text-gray-700">{description}</p>
    <div className="mt-4">
      <SocialIcons platforms={socials} size={20} color="black" className="gap-2 hover:scale-110" />
    </div>
  </div>
);

export default PastorCard;
