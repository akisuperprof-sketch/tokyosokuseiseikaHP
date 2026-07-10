import { VerifiedContent, ImageAsset } from "./types";

// --- Company Information ---

export const companyData = {
  name: "東京促成青果株式会社",
  established: "1948年10月", // No relative expressions like 70年以上
  ceo: "代表取締役 大竹康弘",
  description: "青果物および加工品の受託販売並びに購入販売",
  url: "https://www.tokyo-sokusei-seika.co.jp",
  
  employeeCount: {
    value: "163名",
    status: "pending",
    source: "現行サイト",
    sourceDate: "2023年2月末",
    note: "最新の従業員数および基準年月",
  } as VerifiedContent<string>,
  
  mottoUniqueCopy: {
    value: "開設地から販売の認可を受けている、「仲卸」を兼業できる唯一の企業",
    status: "pending",
    source: "現行サイト",
    note: "現在も「唯一」の企業であるか",
  } as VerifiedContent<string>,

  banks: {
    value: ["みずほ銀行 築地支店", "三菱UFJ銀行 築地支店", "農林中央金庫 本店"],
    status: "pending",
    note: "掲載の継続可否",
  } as VerifiedContent<string[]>,

  clients: {
    value: [
      "イオンフードサプライ株式会社", "株式会社九州屋", "株式会社京橋千疋屋", 
      "株式会社シェルガーデン", "株式会社西友", "株式会社ダイナック", 
      "東京青果株式会社", "東京シティ青果株式会社", "トオカツフーズ株式会社", 
      "株式会社日本アクセス", "株式会社ファミリーマート", "株式会社ユナイテッドベジーズ", 
      "株式会社ライフコーポレーション"
    ],
    status: "pending",
    note: "現在も取引があり、掲載許可が継続しているか",
  } as VerifiedContent<string[]>,

  partners: {
    value: [
      "高知県園芸農業協同組合連合会", "愛知県経済農業協同組合連合会", "静岡県経済農業協同組合連合会",
      "全国農業協同組合連合会 長野県本部", "静岡県温室農業協同組合", "熊本宇城農業協同組合",
      "全国農業協同組合連合会 徳島県本部", "沖縄県農業協同組合", "全国農業協同組合連合会 千葉県本部",
      "全国農業協同組合連合会 茨城県本部", "北海道JGAP協議会", "新潟県津南町 株式会社大阪屋商店"
    ],
    status: "pending",
    note: "現在も提携があり、掲載許可が継続しているか",
  } as VerifiedContent<string[]>,

  presidentMessage: {
    value: "農家の減少、生産者の高齢化、輸入品・・・ 青果市場は大きく変化してきています。\n青果市場の取引高は、ここ十年で大きな変化はありません。 しかしながら、重要産地農家は高齢化の影響もあり減少傾向にあります。生産者を守るためには、消費者を巻き込んだ活動により理解を深め、国産青果物の正しい情報や生産者の現状を発信し考える場を提供する必要があると考えます。国産農産物の流通・利用促進・消費拡大を仕掛けて行きます。\n\nまた、食料自給率の低下やフードロスなどは、需要（つかう側）と供給（つくる側）の価値観の相違がひき起こした証しであり、日本の未来に関わる大きな課題です。\nその改善に向けた動きのひとつとして、規格外で廃棄されている食材などを無駄なく使い切るための商品開発・用途開発を提案し普及して行きます。\n\n私たち東京促成青果は、需要（つかう側）と供給（つくる側）の両面から既存のシステムの改善を通じた新しい「社会システム」の創出を目指します。この時代の変化に柔軟に対応し、お客様に今まで以上に喜んでいただける青果物を提供するために、付加価値の高い企画提案を行うとともに、より一層信頼していただける活動を積極的に実施して参ります。",
    status: "pending",
    source: "現行サイト",
    note: "原文のまま掲載するか、新規取材メッセージに差し替えるか",
  } as VerifiedContent<string>,

  presidentImage: {
    src: "/images/approved/president.jpg",
    alt: "東京促成青果株式会社 代表取締役 大竹康弘",
    status: "placeholder",
    credit: "ユーザー提供画像。本人確認・掲載許可確認待ち",
  } as ImageAsset,
};

// --- Locations ---

export const locationsData = [
  {
    id: "tsukiji",
    name: "築地本社",
    zip: "104-0045",
    address: "東京都中央区築地6-23-7",
    tel: { value: "03-3542-7413", status: "confirmed" } as VerifiedContent<string>,
    fax: { value: "03-3541-9002", status: "confirmed" } as VerifiedContent<string>,
    access: ["都営大江戸線「築地市場駅」A1出口より徒歩6分", "東京メトロ日比谷線「築地駅」1番、2番出口より徒歩6分", "東京メトロ日比谷線、都営浅草線「東銀座駅」5番、6番出口より徒歩12分"]
  },
  {
    id: "ota",
    name: "大田営業部",
    zip: "143-0001",
    address: "東京都大田区東海3-8-2 TSKビル4階",
    tel: { value: "03-5492-4763", status: "confirmed" } as VerifiedContent<string>,
    fax: { value: "03-5492-4919", status: "confirmed" } as VerifiedContent<string>,
    access: ["東京モノレール「流通センター駅」より徒歩15分", "JR「大森駅」東口より京浜急行バス15分、最寄のバス停から会社まで徒歩2分", "京浜急行線「平和島駅」より京浜急行バス10分、最寄のバス停から会社まで徒歩2～3分"]
  },
  {
    id: "osaka",
    name: "大阪営業部",
    zip: "553-0005",
    address: "大阪府大阪市福島区野田4-2-46",
    tel: { value: "06-6461-2600", status: "confirmed" } as VerifiedContent<string>,
    fax: { value: "06-6461-2605", status: "confirmed" } as VerifiedContent<string>,
    access: ["JR環状線「西九条駅」より徒歩12分「野田駅」より徒歩15分", "大阪メトロ千日前線「玉川駅」より徒歩16分"]
  },
  {
    id: "toyosu",
    name: "豊洲営業部",
    zip: "135-0061",
    address: "東京都江東区豊洲6-3-1 豊洲市場5街区 青果棟2階 B-33",
    tel: { value: "03-6633-8044", status: "pending", note: "正式な番号として使用可能か" } as VerifiedContent<string>,
    fax: { value: "03-6633-8046", status: "pending", note: "正式な番号として使用可能か" } as VerifiedContent<string>,
    access: ["東京臨海新交通臨海線（ゆりかもめ）「市場前駅」より徒歩1分"]
  }
];

// --- Advantages ---
export const advantageData = {
  otaProcessingArea: {
    value: "900坪",
    status: "pending",
    note: "現在の正確な坪数（規模）",
  } as VerifiedContent<string>,
  
  partnerRegionsCount: {
    value: "15県以上",
    status: "pending",
    note: "現在の正確な提携産地数",
  } as VerifiedContent<string>,
  
  shareholderStatus: {
    value: "東京青果株式会社の筆頭株主",
    status: "pending",
    note: "現在も筆頭株主であるか",
  } as VerifiedContent<string>,

  testKitchenStatus: {
    value: "活用した商品開発",
    status: "pending",
    note: "テストキッチンの現在の稼働状況",
  } as VerifiedContent<string>,

  brandSupportStatus: {
    value: "地域ブランド開発の支援",
    status: "pending",
    note: "現在の主な活動実績",
  } as VerifiedContent<string>,
};
