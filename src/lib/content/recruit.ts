import { VerifiedContent } from "./types";

export type JobPosting = {
  id: string;
  title: string;
  locationId: string;
  employmentType: VerifiedContent<string>;
  description: VerifiedContent<string>;
  requirements?: VerifiedContent<string[]>;
  salary?: VerifiedContent<string>;
  workingHours?: VerifiedContent<string>;
  holidays?: VerifiedContent<string>;
  benefits?: VerifiedContent<string[]>;
  status: "open" | "closed" | "draft";
  publishedAt?: string;
  updatedAt?: string;
};

export const jobsData: JobPosting[] = [
  {
    id: "ota-sales",
    title: "営業職",
    locationId: "ota",
    employmentType: { value: "正社員", status: "confirmed" },
    description: { 
      value: "大田市場内での青果物の仕入れ・販売業務。", 
      status: "confirmed",
      source: "公式採用情報"
    },
    status: "open"
  },
  {
    id: "ota-logistics",
    title: "物流作業職",
    locationId: "ota",
    employmentType: { value: "正社員", status: "confirmed" },
    description: { 
      value: "大田市場内の自社加工場でのピッキング・袋詰め、および市場内での配送業務。", 
      status: "confirmed",
      source: "公式採用情報"
    },
    status: "open"
  },
  {
    id: "ota-office",
    title: "事務職",
    locationId: "ota",
    employmentType: { value: "正社員", status: "confirmed" },
    description: { 
      value: "大田営業部での伝票処理、電話応対、データ入力などの一般事務・営業サポート業務。", 
      status: "confirmed",
      source: "公式採用情報"
    },
    status: "open"
  },
  {
    id: "osaka-logistics",
    title: "物流作業職",
    locationId: "osaka",
    employmentType: { value: "正社員", status: "confirmed" },
    description: { 
      value: "大阪営業部での青果物の仕分け・配送等の物流業務。", 
      status: "confirmed",
      source: "公式採用情報"
    },
    status: "open"
  }
];
