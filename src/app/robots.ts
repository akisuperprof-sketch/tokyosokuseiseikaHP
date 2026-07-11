import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  // 開発環境やプレビュー環境ではインデックスを拒否
  const isProduction = process.env.NODE_ENV === "production" && process.env.VERCEL_ENV === "production";

  return {
    rules: {
      userAgent: "*",
      allow: isProduction ? "/" : undefined,
      disallow: isProduction ? ["/dev/"] : "/",
    },
    sitemap: `${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"}/sitemap.xml`,
  };
}
