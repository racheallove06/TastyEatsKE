import images from "./images";

const dishes = [
  {
    title: "Nyama Choma",
    price: "Ksh 2500",
    tags: "Grilled meat | Served with side dishes",
  },
  {
    title: "Ugali and Sukuma Wiki",
    price: "Ksh 2600",
    tags: "Maize porridge | Collard greens",
  },
  {
    title: "Pilau",
    price: "Ksh 2000",
    tags: "Spiced rice | Meat | Vegetables",
  },
  {
    title: "Chicken Biriyani",
    price: "Ksh 1375",
    tags: "Spiced rice | Chicken | Vegetables",
  },
  {
    title: "Nyama Fry",
    price: "Ksh 1430",
    tags: "Fried meat | Served with accompaniments",
  },
];

const cocktails = [
  {
    title: "Dawa Cocktail",
    price: "Ksh 1200 ",
    tags: "Vodka | Honey | Lime | Crushed ice",
  },
  {
    title: "Tusker Twist",
    price: "Ksh 950",
    tags: "Tusker Lager | Mango Juice | Mint",
  },
  {
    title: "Mzinga Mojito",
    price: "Ksh 800 ",
    tags: "White Rum | Sugar | Lime | Soda | Mint",
  },
  {
    title: "Safari Sunset",
    price: "Ksh 1500",
    tags: "Amarula | Orange Juice | Grenadine",
  },
  {
    title: "Nairobi Nightcap",
    price: "Ksh 1100 ",
    tags: "Gin | Passion Fruit | Elderflower Syrup | Prosecco",
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: "Bib Gourmond",
    subtitle: "Lorem ipsum dolor sit amet, consectetur.",
  },
  {
    imgUrl: images.award01,
    title: "Rising Star",
    subtitle: "Lorem ipsum dolor sit amet, consectetur.",
  },
  {
    imgUrl: images.award05,
    title: "AA Hospitality",
    subtitle: "Lorem ipsum dolor sit amet, consectetur.",
  },
  {
    imgUrl: images.award03,
    title: "Outstanding Chef",
    subtitle: "Lorem ipsum dolor sit amet, consectetur.",
  },
];

export default { cocktails, dishes, awards };
