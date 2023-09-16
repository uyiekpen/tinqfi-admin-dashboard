import { iconsImgs } from "../utils/images";

// Define the type for your navigation link data.
type NavigationLink = {
  id: number;
  title: string;
  image: string;
};

// Navigation links data
export const navigationLinks: NavigationLink[] = [
  { id: 1, title: "overview", image: iconsImgs.dashboard },
  { id: 2, title: "users", image: iconsImgs.users },
  { id: 3, title: "deposit", image: iconsImgs.deposit },
  { id: 4, title: "withdrawal", image: iconsImgs.withdrawal },
  { id: 5, title: "transfer", image: iconsImgs.deposit },
  { id: 6, title: "earn", image: iconsImgs.earn },
  { id: 7, title: "exchange", image: iconsImgs.exchange },
  { id: 8, title: "loans", image: iconsImgs.schedule },
  { id: 9, title: "launchpad", image: iconsImgs.launchpad },
];

export const navigationdown: NavigationLink[] = [
  { id: 1, title: "notification", image: iconsImgs.notifications },
  { id: 2, title: "settings", image: iconsImgs.settings },
  { id: 3, title: "Sign out", image: iconsImgs.signout },
];

//notification json
export const Message = [
  {
    id: 1,
    title: "Elle joined Tinqfi pool",
    image: iconsImgs.avatar0,
    date: "03 Sept 2023",
    time: "4:30PM",
  },
  {
    id: 2,
    title: "jenny Joined fixed plan",
    image: iconsImgs.avatar1,
    date: "03 Sept 2023",
    time: "4:30PM",
  },
  {
    id: 1,
    title: "Adam Joined fixed earn plan",
    image: iconsImgs.avatar4,
    date: "03 Sept 2023",
    time: "4:30PM",
  },
  {
    id: 1,
    title: "Robern joined a fixed earn pool",
    image: iconsImgs.avatar2,
    date: "03 Sept 2023",
    time: "4:30PM",
  },
  {
    id: 1,
    title: "Jack made a huge withdrawal",
    image: iconsImgs.avatar3,
    date: "03 Sept 2023",
    time: "4:30PM",
  },
];

//transaction
export const Transaction = [
  {
    id: 1,
    title: "From Debby",
    image: iconsImgs.avatar5,
    date: "03 Sept 2023",
    time: "4:30PM",
    transaction: "Deposit",
    amount: "+$4000",
  },
  {
    id: 2,
    title: "From Style",
    image: iconsImgs.avatar6,
    date: "03 Sept 2023",
    time: "4:30PM",
    transaction: "Deposit",
    amount: "+$4000",
  },
  {
    id: 3,
    title: "From Justin",
    image: iconsImgs.avatar7,
    date: "03 Sept 2023",
    time: "4:30PM",
    transaction: "Exchange",
    amount: "+$4000",
  },
  {
    id: 4,
    title: "from jack",
    image: iconsImgs.avatar8,
    date: "03 Sept 2023",
    time: "4:30PM",
    transaction: "Exchange",
    amount: "+$900",
  },
  {
    id: 5,
    title: "from Stoneboy",
    image: iconsImgs.avatar9,
    date: "03 Sept 2023",
    time: "4:30PM",
    transaction: "withdrawal",
    amount: "-$4000",
  },
  {
    id: 6,
    title: "from Debby",
    image: iconsImgs.avatar3,
    date: "03 Sept 2023",
    time: "4:30PM",
    transaction: "withdrawal",
    amount: "-$4000",
  },
];
