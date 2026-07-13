import { ContentStatus, VerifiedContent, ImageAsset } from "./types";

export type AdvantageCard = {
  id: string;
  number: string;
  title: string;
  description: VerifiedContent<string>;
  extraInfo?: VerifiedContent<string>;
  image?: ImageAsset;
  status: ContentStatus;
  layout: "large" | "medium" | "small";
};

export const advantageData = {
  hero: {
    title: "当社の強み",
    subtitle: "OUR ADVANTAGES",
    intro: "東京促成青果株式会社は、豊洲市場内での荷受業務、大田市場外および大阪市場での仲卸業務を行っています。",
    image: {
      src: "/images/ai/market/market-001.jpg",
      alt: "豊洲市場",
      status: "confirmed",
      permissionStatus: "not-required",
    } as ImageAsset,
  },
  overview: [
    "豊洲市場内荷受",
    "大田市場外での仲卸",
    "大阪市場での仲卸",
    "加工・商品供給",
    "集荷網",
    "商品開発",
  ],
  cards: [
    {
      id: "card-01",
      number: "01",
      title: "豊洲市場内での荷受",
      description: {
        value: "豊洲市場内で荷受業務を行っており、豊洲市場内外への広範囲な販路を確保しています。",
        status: "confirmed",
        source: "旧公式サイト",
      },
      status: "confirmed",
      layout: "large",
      image: {
        src: "/images/ai/market/market-002.jpg",
        alt: "豊洲市場内での荷受",
        status: "confirmed",
        permissionStatus: "not-required",
      },
    },
    {
      id: "card-02",
      number: "02",
      title: "需要に応じた加工・商品供給",
      description: {
        value: "大田市場内にて自社ピッキング、袋詰め加工場を確保しており、量販店並びに中食、外食向け需要に応じた商品供給が可能です。",
        status: "confirmed",
        source: "旧公式サイト",
      },
      extraInfo: {
        value: "（延べ900坪）",
        status: "pending",
        source: "旧公式サイト",
      },
      status: "confirmed",
      layout: "large",
      image: {
        src: "/images/ai/market/market-005.jpg",
        alt: "加工場イメージ",
        status: "confirmed",
        permissionStatus: "not-required",
      },
    },
    {
      id: "card-03",
      number: "03",
      title: "供給体制を支える連携",
      description: {
        value: "日本最大の青果卸会社である東京青果株式会社の筆頭株主であり、強力なパイプを活用した安定供給が可能です。",
        status: "pending",
        source: "旧公式サイト",
      },
      status: "pending",
      layout: "medium",
    },
    {
      id: "card-04",
      number: "04",
      title: "産地からの集荷網",
      description: {
        value: "全国に広がる自社契約産地からのこだわりの集荷網、荷受指定産地が多数あります。高知県、愛知県、静岡県を中心としています。",
        status: "confirmed",
        source: "旧公式サイト",
      },
      extraInfo: {
        value: "他15県以上",
        status: "pending",
        source: "旧公式サイト",
      },
      status: "confirmed",
      layout: "medium",
      image: {
        src: "/images/ai/vegetables/vegetables-005.jpg",
        alt: "産地からの集荷網",
        status: "confirmed",
        permissionStatus: "not-required",
      },
    },
  ] as AdvantageCard[],
  testKitchen: {
    status: "pending" as ContentStatus,
    title: "販路を見据えた商品開発",
    description: "東京促成青果は築地に自社テストキッチンを運営しており、地域の農産物を活用して、確保している販路を見据えた商品開発のための各種試作品づくりも展開しています。",
  },
  regionalSupport: {
    status: "pending" as ContentStatus,
    title: "6次産業化・地域ブランド開発支援",
    description: "産地や販路との連携による6次産業化や地域ブランド開発支援を強化しています。",
  },
  cta: {
    title: "商品・出荷・お取引について",
    description: "商品、出荷、お取引に関するお問い合わせは、専用フォームよりご連絡ください。",
    buttonText: "お問い合わせ",
    href: "/contact",
  }
};
