import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import { newsData } from "@/lib/content/news";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";

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
      <PageHero
        title="ニュース＆トピックス"
        subtitle="News & Topics"
        description="東京促成青果株式会社からのお知らせや最新情報をお届けします。"
        backgroundImage="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80"
      />

      <section className="py-24 bg-background min-h-[50vh]">
        <Container className="max-w-4xl">
          
          {publishedNews.length === 0 ? (
            <Reveal>
              <div className="bg-white p-12 text-center rounded-2xl border border-border shadow-sm">
                <p className="text-foreground-muted text-lg">現在、お知らせはありません。</p>
              </div>
            </Reveal>
          ) : (
            <div className="space-y-6">
              {publishedNews.map((news, index) => (
                <Reveal key={news.id} delay={index * 50}>
                  <Link 
                    href={`/news/${news.slug}`}
                    className="group flex flex-col md:flex-row gap-6 md:items-center p-8 bg-white border border-border rounded-xl hover:border-brand/50 hover:shadow-lg transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 hover:-translate-y-1"
                  >
                    <div className="md:w-48 shrink-0 flex flex-col gap-3">
                      <span className="flex items-center gap-2 text-sm text-foreground-muted font-inter tracking-widest">
                        <Calendar size={16} />
                        {news.publishedAt.replace(/-/g, '.')}
                      </span>
                      <span className="inline-block px-3 py-1 bg-surface-strong text-brand text-xs font-bold rounded-sm w-fit tracking-widest">
                        {news.category}
                      </span>
                    </div>
                    <div className="flex-grow">
                      <h2 className="text-xl font-bold text-foreground group-hover:text-brand transition-colors duration-300 mb-3 font-serif leading-relaxed">
                        {news.title}
                      </h2>
                      {news.excerpt && (
                        <p className="text-foreground-muted text-sm leading-relaxed line-clamp-2">
                          {news.excerpt}
                        </p>
                      )}
                    </div>
                    <div className="shrink-0 text-brand hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-surface-strong group-hover:bg-brand group-hover:text-white transition-all duration-300">
                      <ArrowRight size={20} className="transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          )}

          {/* Pagination (Placeholder for future) */}
          {publishedNews.length > 0 && (
            <Reveal delay={200}>
              <div className="mt-16 flex justify-center">
                <div className="flex gap-3">
                  <span className="w-12 h-12 flex items-center justify-center bg-brand text-white font-bold rounded-sm shadow-md">1</span>
                </div>
              </div>
            </Reveal>
          )}

        </Container>
      </section>
    </div>
  );
}
