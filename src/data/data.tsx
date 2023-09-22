import { iconsImgs } from "../utils/images";

// Define the type for your navigation link data.
type NavigationLink = {
  id: number;
  title: string;
  image: string;
  link?: string;
};

// Navigation links data
export const navigationLinks: NavigationLink[] = [
  { id: 1, title: "overview", image: iconsImgs.dashboard, link: "/dashboard" },
  { id: 2, title: "users", image: iconsImgs.users, link: "/dashboard/user" },
  {
    id: 3,
    title: "deposit",
    image: iconsImgs.deposit,
    link: "/dashboard/deposit",
  },
  {
    id: 4,
    title: "withdrawal",
    image: iconsImgs.withdrawal,
    link: "/dashboard/withdrawal",
  },
  {
    id: 5,
    title: "transfer",
    image: iconsImgs.transfer,
    link: "/dashboard/transfer",
  },
  { id: 6, title: "earn", image: iconsImgs.earn, link: "/dashboard/earn" },
  {
    id: 7,
    title: "exchange",
    image: iconsImgs.exchange,
    link: "/dashboard/exchange",
  },
  {
    id: 8,
    title: "loans",
    image: iconsImgs.schedule,
    link: "/dashboard/loans",
  },
  {
    id: 9,
    title: "launchpad",
    image: iconsImgs.launchpad,
    link: "/dashboard/launchpad",
  },
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

//Btc
export const Tokens = [
  {
    id: 1,
    title: "BTC",
    details: "(Bitcoin)",
    image: iconsImgs.bitcoin,
    amount: "$2033",
  },
  {
    id: 2,
    title: "BTC",
    details: "(Bitcoin)",
    image: iconsImgs.bitcoin,
    amount: "$2033",
  },
  {
    id: 1,
    title: "BTC",
    details: "(Bitcoin)",
    image: iconsImgs.bitcoin,
    amount: "$2033",
  },
  {
    id: 1,
    title: "BTC",
    details: "(Bitcoin)",
    image: iconsImgs.bitcoin,
    amount: "$2033",
  },
  {
    id: 1,
    title: "BTC",
    details: "(Bitcoin)",
    image: iconsImgs.bitcoin,
    amount: "$2033",
  },
];

//statistics

export const salesStatistics = [
  {
    id: 0,
    title: "New Users",
    amount: "721K",
    date: "07 Jan",
    percentage: "11.01%",
    status: "profit",
  },
  {
    id: 1,
    title: "inflows",
    amount: "$721K",
    date: "07 Jan",
    percentage: "-3.2%",
    status: "lost",
  },
  {
    id: 0,
    title: "Active Users",
    amount: "$7,249.31    ",
    date: "07 Jan",
    percentage: "11.01%",
    status: "profit",
  },
];

function getDate(dayString: any) {
  const today = new Date();
  const year = today.getFullYear().toString();
  let month = (today.getMonth() + 1).toString();

  if (month.length === 1) {
    month = "0" + month;
  }

  return dayString.replace("YEAR", year).replace("MONTH", month);
}

export const usertoken = {
  onRegistrationLedgerAccnts: [
    {
      tokenAccountId: "632cee80df5f37ccc6f45c23",
      tokenAccountcurrency: "DOGE",
      createdAt: 1663889025022,
      fullname: "Jerry Ifeanyi",
      nickname: "Jerrie",
      phone: "0",
      status: "active",
      email: "jerrycifeanyi@gmail.com",
    },
    {
      tokenAccountId: "632cee80549914722e27dad0",
      tokenAccountcurrency: "BTC",
      createdAt: 1663889025449,
      fullname: "Jerry Ifeanyi",
      nickname: "Jerrie",
      phone: "0",
      status: "active",

      email: "jerrycifeanyi@gmail.com",
    },
    {
      tokenAccountId: "632cee805dcdf68ce45bd663",
      tokenAccountcurrency: "BSC",
      createdAt: 1663889025482,
      fullname: "Jerry Ifeanyi",
      nickname: "Jerrie",
      status: "active",

      phone: "0",
      email: "jerrycifeanyi@gmail.com",
    },
    {
      tokenAccountId: "632cee80b128a172744286f2",
      tokenAccountcurrency: "ETH",
      createdAt: 1663889027545,
      fullname: "Jerry Ifeanyi",
      nickname: "Jerrie",
      phone: "0",
      status: "active",

      email: "jerrycifeanyi@gmail.com",
    },
  ],

  fullname: "Jerry Ifeanyi",
  nickname: "Jerrie",
  phone: "0",
  email: "jerrycifeanyi@gmail.com",
  dateJoined: "2022-09-22T23:22:43.007Z",
  __v: 0,
};
