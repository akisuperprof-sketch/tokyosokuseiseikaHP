import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import { newsData } from "@/lib/content/news";

export const metadata = {
  title: "ニュース＆トピックス",
  description: "東京促成青果株式会社からのお知らせや最新情報をお届けします。",
};

export default function NewsPage() {
  const publishedNews = newsData
    .filter(news => news.status === "published")
    .filter(news => new Date(news.publishedAt) <= new Date())
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());

  return (
    <div className="w-full">
      <section className="bg-foreground text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">ニュース＆トピックス</h1>
          <p className="text-gray-300 text-lg font-inter">News & Topics</p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background min-h-[50vh]">
        <div className="container mx-auto px-4 max-w-4xl">
          
          {publishedNews.length === 0 ? (
            <div className="bg-white p-12 text-center rounded-lg border border-border shadow-sm">
              <p className="text-foreground/70 text-lg">現在、お知らせはありません。</p>
            </div>
          ) : (
            <div className="space-y-4">
              {publishedNews.map(news => (
                <Link 
                  key={news.id} 
                  href={`/news/${news.slug}`}
                  className="group flex flex-col md:flex-row gap-4 md:items-center p-6 bg-white border border-border rounded-lg hover:border-brand hover:shadow-md transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
                >
                  <div className="md:w-48 shrink-0 flex flex-col gap-2">
                    <span className="flex items-center gap-1 text-sm text-muted font-inter">
                      <Calendar size={14} />
                      {news.publishedAt.replace(/-/g, '.')}
                    </span>
                    <span className="inline-block px-3 py-1 bg-surface-accent text-brand text-xs font-bold rounded-sm w-fit">
                      {news.category}
                    </span>
                  </div>
                  <div className="flex-grow">
                    <h2 className="text-lg font-bold text-foreground group-hover:text-brand transition-colors mb-2">
                      {news.title}
                    </h2>
                    {news.excerpt && (
                      <p className="text-foreground/80 text-sm line-clamp-2">
                        {news.excerpt}
                      </p>
                    )}
                  </div>
                  <div className="shrink-0 text-brand hidden md:block">
                    <ArrowRight size={20} className="transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          )}

          {/* Pagination (Placeholder for future) */}
          {publishedNews.length > 0 && (
            <div className="mt-12 flex justify-center">
              <div className="flex gap-2">
                <span className="w-10 h-10 flex items-center justify-center bg-brand text-white font-bold rounded-md">1</span>
              </div>
            </div>
          )}

        </div>
      </section>
    </div>
  );
}
