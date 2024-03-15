import dota2 from "../dummy-api-data/dota-2-bg.jpg";
import lol from "../dummy-api-data/lol-bg.jpeg";
import mario from "../dummy-api-data/mario-bg.jpeg";
import kingOfFightersXV from "../dummy-api-data/king-of-fighters-xv.jpeg";
import Forza from "../dummy-api-data/forza-horizon-5-bg.jpeg";
import Halo from "../dummy-api-data/halo-infinite-bg.jpeg";
import FortniteSpiderMan from "../dummy-api-data/fortnite-bg.jpeg";
import Diablo3 from "../dummy-api-data/diablo-3-bg.jpeg";

export const navListItems = [
  { _id: 1, target: "home", name: "Home", icon: "bi-house-door", active: true },
  {
    _id: 2,
    target: "games",
    name: "Games",
    icon: "bi-window-stack",
    active: false,
  },

  {
    _id: 5,
    target: "myLibrary",
    name: "My Library",
    icon: "bi-heart",
    active: false,
  },
  { _id: 6, target: "myBag", name: "My Bag", icon: "bi-bag", active: false },
];
export const socialListItems = [
  { id: 1, icon: "bi-meta" },
  { id: 1, icon: "bi-twitter-x" },
  { id: 1, icon: "bi-youtube" },
  { id: 1, icon: "bi-share" },
];
export const gamesData = [
  {
    _id: 1,
    title: "League of Legends",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio non nobis, molestiae eum quod qui",
    level: "Median",
    category: "MOBA",
    rating: 3,
    discount: 0.5,
    price: 79.0,
    img: lol,
    trailer: "https://www.youtube.com/embed/vzHrjOMfHPY",
    active: true,
  },
  {
    _id: 2,
    title: "Mario Kart 8 Deluxe",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio non nobis, molestiae eum quod qui",
    level: "Entry",
    category: "Racing",
    rating: 3,
    discount: 0.3,
    price: 52.56,
    img: mario,
    trailer: "https://www.youtube.com/embed/tKlRN2YpxRE",
    active: false,
  },

  {
    _id: 3,
    title: "Dota II",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio non nobis, molestiae eum quod qui",
    level: "Median",
    category: "MOBA",
    rating: 4,
    discount: 0.3,
    price: 85.0,
    img: dota2,
    trailer: "https://www.youtube.com/embed/-cSFPIwMEq4",
    active: false,
  },
  {
    _id: 4,
    title: "King of Fighters XV",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio non nobis, molestiae eum quod qui",
    level: "Entry",
    category: "Fighting",
    rating: 3,
    discount: 0.2,
    price: 65.6,
    img: kingOfFightersXV,
    trailer: "https://www.youtube.com/embed/_o7Ip64-Sio",
    active: false,
  },

  {
    _id: 5,
    title: "Forza Horizon 5",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio non nobis, molestiae eum quod qui",
    level: "High",
    category: "Racing",
    rating: 4,
    discount: 0,
    price: 129.0,
    img: Forza,
    trailer: "https://www.youtube.com/embed/FYH9n37B7Yw",
    active: false,
  },
  {
    _id: 6,
    title: "Halo Infinite",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio non nobis, molestiae eum quod qui",
    level: "Median",
    category: "Battle",
    rating: 4,
    discount: 0,
    price: 85.8,
    img: Halo,
    trailer: "https://www.youtube.com/embed/PyMlV5_HRWk",
    active: false,
  },
  {
    _id: 7,
    title: "Fortnite Spider-Man",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio non nobis, molestiae eum quod qui",
    level: "Entry",
    category: "Battle",
    rating: 3,
    discount: 0.6,
    price: 69.0,
    img: FortniteSpiderMan,
    trailer: "https://www.youtube.com/embed/7bq0Boq2B3Y",
    active: false,
  },
  {
    _id: 8,
    title: "Diablo III",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio non nobis, molestiae eum quod qui",
    level: "High",
    category: "RPG",
    rating: 5,
    discount: 0.5,
    price: 99.0,
    img: Diablo3,
    trailer: "https://www.youtube.com/embed/M2TpNQhfkp4",
    active: false,
  },
];
export const categoryListData = [
  {
    _id: 1,
    name: "All",
    active: true,
  },
  {
    _id: 2,
    name: "RPG",
    active: false,
  },
  {
    _id: 3,
    name: "MOBA",
    active: false,
  },
  {
    _id: 4,
    name: "Battle",
    active: false,
  },
  {
    _id: 5,
    name: "Racing",
    active: false,
  },
  {
    _id: 6,
    name: "Fighting",
    active: false,
  },
];
