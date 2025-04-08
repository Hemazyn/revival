import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaXTwitter } from "react-icons/fa6";
import { cr1, cr2, cr3 } from "../assets";


const links = [
     {
          id: 1,
          text: "home",
          link: "home"
     },
     {
          id: 2,
          text: "about us",
          link: "about"
     },
     {
          id: 3,
          text: "upcoming programs",
          link: "programs"
     },
     {
          id: 4,
          text: "giving",
          link: "giving"
     },
     {
          id: 5,
          text: "gallery",
          link: "gallery"
     },
     {
          id: 6,
          text: "apostolic centers",
          link: "centers"
     },
     {
          id: 7,
          text: "contact us",
          link: "contact"
     },
];
const slides = [
     {
          id: 1,
          src: cr1,
          title: "everything by prayer!",
          text: "No one is worthy of doing anything in this kingdom, if he hasn't PRAYED."
     },
     {
          id: 2,
          src: cr2,
          title: "pray first, prayer works!",
          text: "There is something we know that works anyday, anytime, it is PRAYER."
     },
     {
          id: 3,
          src: cr3,
          title: "sons are birthed through the groan",
          text: "A man that is weak on his ALTAR is weak everywhere else."
     },
]
const programList = [
     {
          id: 1,
          title: 'Youth Leadership Summit',
          text: "For more enquiries reach out to the contact on the flier",
          image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=60',
     },
     {
          id: 2,
          title: 'Tech for Good Bootcamp',
          text: "For more enquiries reach out to the contact on the flier",
          image: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?auto=format&fit=crop&w=800&q=60',
     },
     {
          id: 3,
          title: 'Community Health Outreach',
          text: "For more enquiries reach out to the contact on the flier",
          image: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=800&q=60',
     },
     {
          id: 4,
          title: 'Environmental Awareness Walk',
          text: "For more enquiries reach out to the contact on the flier",
          image: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=800&q=60',
     },
     {
          id: 5,
          title: 'Digital Skills Workshop',
          text: "For more enquiries reach out to the contact on the flier",
          image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=60',
     },
     {
          id: 6,
          title: 'Creative Arts Session',
          text: "For more enquiries reach out to the contact on the flier",
          image: 'https://images.unsplash.com/photo-1497032205916-ac775f0649ae?auto=format&fit=crop&w=800&q=60',
     },
];


export { links, slides, programList };