// Import images and icons
import {
  NewspaperIcon,
  GlobeEuropeAfricaIcon,
  BuildingOfficeIcon,
  ComputerDesktopIcon,
  FilmIcon,
  TrophyIcon,
  BeakerIcon,
  HeartIcon,
  FlagIcon,
} from "@heroicons/react/24/outline";

import defaultImg from "./assets/images/no-img.png";
import worldImg from "./assets/images/world.jpg";
import techImg from "./assets/images/tech.jpg";
import entertainmentImg from "./assets/images/entertainment.jpg";
import sportsImg from "./assets/images/sports.jpg";
import scienceImg from "./assets/images/science.jpg";
import healthImg from "./assets/images/health.jpg";
import nationImg from "./assets/images/nation.jpg";

// Nav Menu data
const menuData = [
  {
    id: 1,
    category: "General",
    image: defaultImg,
    icon: NewspaperIcon,
  },
  {
    id: 2,
    category: "World",
    image: worldImg,
    icon: GlobeEuropeAfricaIcon,
  },
  {
    id: 3,
    category: "Business",
    image: defaultImg,
    icon: BuildingOfficeIcon,
  },
  {
    id: 4,
    category: "Technology",
    image: techImg,
    icon: ComputerDesktopIcon,
  },
  {
    id: 5,
    category: "Entertainment",
    image: entertainmentImg,
    icon: FilmIcon,
  },
  {
    id: 6,
    category: "Sports",
    image: sportsImg,
    icon: TrophyIcon,
  },
  {
    id: 7,
    category: "Science",
    image: scienceImg,
    icon: BeakerIcon,
  },
  {
    id: 8,
    category: "Health",
    image: healthImg,
    icon: HeartIcon,
  },
  {
    id: 9,
    category: "Nation",
    image: nationImg,
    icon: FlagIcon,
  },
];

export default menuData;

// Dummy news data for testing grid items

export const dummyNewsData = [
  {
    id: 1,
    category: "Technology",
    title: "New breakthrough in quantum computing shows promising results",
  },
  {
    id: 2,
    category: "Sports",
    title: "Local team makes historic comeback in championship game",
  },
  {
    id: 3,
    category: "Entertainment",
    title: "Anticipated blockbuster breaks box office records",
  },
  {
    id: 4,
    category: "Science",
    title: "Scientists discover new species in deep ocean expedition",
  },
  {
    id: 5,
    category: "Health",
    title: "Study reveals new benefits of mediterranean diet",
  },
  {
    id: 6,
    category: "Business",
    title: "Tech startup receives record-breaking investment",
  },
];
