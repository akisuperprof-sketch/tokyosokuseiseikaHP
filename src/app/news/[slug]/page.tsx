import { ArrowLeft, Calendar } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { newsData } from "@/lib/content/news";

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const news = newsData.find((n) => n.slug === params.slug && n.status === "published" && new Date(n.publishedAt) <= new Date());
  if (!news) return { title: "記事が見つかりません" };
  return {
    title: `${news.title} | ニュース＆トピックス`,
    description: news.excerpt || news.title,
  };
}

export function generateStaticParams() {
  return newsData
    .filter(news => news.status === "published" && new Date(news.publishedAt) <= new Date())
    .map(news => ({
      slug: news.slug
    }));
}

export default function NewsDetailPage({ params }: { params: { slug: string } }) {
  const news = newsData.find((n) => n.slug === params.slug && n.status === "published");

  if (!news || new Date(news.publishedAt) > new Date()) {
    notFound();
  }

  return (
    <div className="w-full">
      <section className="bg-surface border-b border-border py-8 md:py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          <Link 
            href="/news" 
            className="inline-flex items-center gap-2 text-muted hover:text-brand mb-8 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand rounded-sm"
          >
            <ArrowLeft size={16} /> ニュース一覧へ戻る
          </Link>
          
          <div className="flex items-center gap-4 mb-4">
            <span className="flex items-center gap-1 text-sm text-muted font-inter">
              <Calendar size={16} />
              {news.publishedAt.replace(/-/g, '.')}
            </span>
            <span className="px-3 py-1 bg-surface-accent text-brand text-xs font-bold rounded-sm">
              {news.category}
            </span>
          </div>
          <h1 className="text-2xl md:text-4xl font-bold leading-tight text-foreground">
            {news.title}
          </h1>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="bg-white p-8 md:p-12 rounded-lg border border-border shadow-sm">
            {news.image && news.image.status === "approved" && (
              <div className="mb-10">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={news.image.src} 
                  alt={news.image.alt || news.title} 
                  className="w-full rounded-md object-cover"
                />
              </div>
            )}
            <div className="prose prose-lg max-w-none text-foreground/90 whitespace-pre-line leading-relaxed">
              {news.body}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
