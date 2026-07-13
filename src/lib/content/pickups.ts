import { ContentStatus, ImageAsset } from "./types";

export type PickupItem = {
  id: string;
  title: string;
  subtitle?: string;
  href: string;
  image?: ImageAsset;
  linkType: "internal" | "legacy" | "external";
  status: ContentStatus;
  displayOrder: number;
};

export const pickupItems: PickupItem[] = [
  {
    id: "mitaaji",
    title: "Mitaaji",
    subtitle: "新潟県津南町産シルクスイート",
    href: "https://www.tokyo-sokusei-seika.co.jp/silksweet/index.html",
    linkType: "legacy",
    status: "confirmed",
    displayOrder: 1,
    image: {
      src: "/images/approved/pickup/mitaaji-logo.png",
      alt: "Mitaaji みためとあじはちがう店",
      status: "placeholder",
      permissionStatus: "pending",
      permissionNote: "正式画像の提供待ち",
    },
  },
  {
    id: "chefoodo",
    title: "一般社団法人ChefooDo",
    subtitle: "食育推進・地域応援・被災地支援",
    href: "https://www.chefoodo.jp/",
    linkType: "external",
    status: "confirmed",
    displayOrder: 2,
    image: {
      src: "/images/approved/pickup/chefoodo-banner.jpg",
      alt: "",
      status: "confirmed",
      permissionStatus: "pending",
      source: "提供元を記載",
    },
  },
];
