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
