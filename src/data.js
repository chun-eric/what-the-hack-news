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
import police from "./assets/images/police.jpg";

// Nav Menu data
const menuData = [
  {
    id: 1,
    category: "Top Stories",
    image: defaultImg,
    icon: NewspaperIcon,
  },
  {
    id: 2,
    category: "Trending",
    image: worldImg,
    icon: GlobeEuropeAfricaIcon,
  },
  {
    id: 3,
    category: "World",
    image: defaultImg,
    icon: BuildingOfficeIcon,
  },
  {
    id: 4,
    category: "Markets",
    image: techImg,
    icon: ComputerDesktopIcon,
  },
  {
    id: 5,
    category: "Opinion",
    image: entertainmentImg,
    icon: FilmIcon,
  },
  {
    id: 6,
    category: "Lifestyle",
    image: sportsImg,
    icon: TrophyIcon,
  },
  {
    id: 7,
    category: "Health",
    image: scienceImg,
    icon: BeakerIcon,
  },
  {
    id: 8,
    category: "Games",
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
    category: "Lifestyle",
    title: "Anticipated blockbuster breaks box office records",
  },
  {
    id: 4,
    category: "Audio",
    title: "Scientists discover new species in deep ocean expedition",
  },
  {
    id: 5,
    category: "Health",
    title: "Study reveals new benefits of mediterranean diet",
  },
  {
    id: 6,
    category: "Markets",
    title: "Tech startup receives record-breaking investment",
  },
];

export const businessNewsData = [
  {
    id: 1,
    category: "Business",
    title: "Major corporation announces new sustainability initiative",
    image: police,
    author: "J Dilla",
    dateAdded: "2024-12-01",
    snippet:
      "A major corporation has announced a new initiative to enhance sustainability efforts across all of its global operations.",
  },
  {
    id: 2,
    category: "Business",
    title: "Local startup launches innovative financial product",
    image: police,
    author: "Jay Shakur",
    dateAdded: "2024-12-02",
    snippet:
      "A local startup has introduced an innovative financial product aimed at helping consumers manage their expenses more efficiently.",
  },
  {
    id: 3,
    category: "Business",
    title: "New partnership announced between two industry leaders",
    image: police,
    author: "Dru Cole",
    dateAdded: "2024-12-03",
    snippet:
      "Two major industry leaders have announced a strategic partnership aimed at expanding their market reach and fostering innovation.",
  },
  {
    id: 4,
    category: "Business",
    title: "Small businesses adapt to changing market trends",
    image: police,
    author: "Michael Jackson",
    dateAdded: "2024-12-04",
    snippet:
      "Small businesses are finding new ways to adapt to the rapidly changing market trends, focusing on digital transformation and customer engagement.",
  },
  // {
  //   id: 5,
  //   category: "Business",
  //   title: "Economic outlook report highlights growth opportunities",
  //   image: police,
  //   author: "Emily Davis",
  //   dateAdded: "2024-12-05",
  //   snippet:
  //     "The latest economic outlook report highlights key growth opportunities for businesses in the coming year, emphasizing technology and sustainability.",
  // },
];
