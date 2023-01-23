import item1 from "./assets/Item1.png";
import item2 from "./assets/Item2.png";
import item3 from "./assets/Item3.png";
import item4 from "./assets/Item4.png";
import item5 from "./assets/Item5.png";
import item6 from "./assets/Item6.png";
import chef1 from "../Chef/Assets/chf1.png";
import chef2 from "../Chef/Assets/chf2.png";
import chef3 from "../Chef/Assets/chf3.png";
import chef4 from "../Chef/Assets/chf4.png";
import chef5 from "../Chef/Assets/chf5.png";
import chef6 from "../Chef/Assets/chf6.png";
import chef7 from "../Chef/Assets/chf7.png";
import chef8 from "../Chef/Assets/chf8.png";

export const ItemMenu = [
  {
    id: 1,
    thumbImg: item1,
    listImg: [item1, item3, item4, item5],
    category: ["burger", "break fast", "fast food", "junk food"],
    rating: 5,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.",
    name: "Burger",
    price: "10000",
  },
  {
    id: 2,
    thumbImg: item2,
    listImg: [item2, item3, item4, item5],
    category: ["burger", "breakfast", "fastfood", "junkfood"],
    rating: 5,
    desc: "Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.",
    name: "Chicken Chup",
    price: "20000",
  },
  {
    id: 3,
    thumbImg: item3,
    listImg: [item3, item1, item4, item5],
    category: ["burger", "breakfast", "fastfood", "junkfood"],
    rating: 5,
    desc: "consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.",
    name: "Pizza",
    price: "15000",
  },
  {
    id: 4,
    thumbImg: item4,
    listImg: [item4, item3, item6, item5],
    category: ["burger", "breakfast", "fastfood", "junkfood"],
    rating: 5,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.",
    name: "Chocolate Muffin",
    price: "21000",
  },
];

export const Chefs = [
  {
    id: 1,
    img: chef1,
    name: "Tahmina Rumi",
    title: "Chef",
  },
  {
    id: 2,
    img: chef2,
    name: "Mahmud kholil",
    title: "Chef",
  },
  {
    id: 3,
    img: chef3,
    name: "William Rumi",
    title: "Chef",
  },
  {
    id: 4,
    img: chef4,
    name: "Motin Molladsf",
    title: "Chef",
  },
  {
    id: 5,
    img: chef5,
    name: "Bisnu devgon",
    title: "Chef",
  },
  {
    id: 6,
    img: chef6,
    name: "Munna Kathy",
    title: "Chef",
  },
  {
    id: 7,
    img: chef7,
    name: "M.Mohammad",
    title: "Chef",
  },
  {
    id: 8,
    img: chef8,
    name: "Jorina Begum",
    title: "Chef",
  },
];
