import { ImageAsset } from "./types";

export type NewsArticle = {
  id: string;
  slug: string;
  title: string;
  excerpt?: string;
  body: string;
  category: string;
  publishedAt: string;
  updatedAt?: string;
  image?: ImageAsset;
  status: "published" | "draft" | "hidden";
};

// 仮のデータ構造
// 実運用ではCMSから取得するか、公式発表されたニュースのみをここに記載します。
export const newsData: NewsArticle[] = [
  {
    id: "news-1",
    slug: "website-renewal-2026",
    title: "コーポレートサイトをリニューアルしました",
    excerpt: "東京促成青果株式会社のコーポレートサイトを全面リニューアルいたしました。",
    body: "平素は格別のお引き立てを賜り、誠にありがとうございます。\n\nこの度、東京促成青果株式会社のコーポレートサイトを全面リニューアルいたしました。\n今回のリニューアルでは、皆様により分かりやすく情報をお伝えできるサイトとなるよう、デザインや構成を改善いたしました。\n\n今後とも内容の充実を図り、皆様のお役に立つ情報を発信してまいりますので、何卒よろしくお願い申し上げます。",
    category: "お知らせ",
    publishedAt: "2026-07-10",
    status: "published"
  }
];
