import { ArrowLeft, Calendar } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { newsData } from "@/lib/content/news";
import { canDisplayImage } from "@/lib/content/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

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
      <section className="bg-surface border-b border-border py-16 md:py-24 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand/5 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl pointer-events-none" />
        <Container className="max-w-3xl relative z-10">
          <Reveal>
            <Link 
              href="/news" 
              className="inline-flex items-center gap-2 text-foreground-muted hover:text-brand mb-10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand rounded-sm font-medium tracking-widest text-sm"
            >
              <ArrowLeft size={18} /> ニュース一覧へ戻る
            </Link>
            
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="flex items-center gap-2 text-sm text-foreground-muted font-inter tracking-widest">
                <Calendar size={16} />
                {news.publishedAt.replace(/-/g, '.')}
              </span>
              <span className="px-4 py-1.5 bg-brand/10 text-brand text-xs font-bold rounded-sm tracking-widest border border-brand/20">
                {news.category}
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight text-foreground font-serif">
              {news.title}
            </h1>
          </Reveal>
        </Container>
      </section>

      <section className="py-16 md:py-32 bg-background">
        <Container className="max-w-3xl">
          <Reveal delay={100}>
            <div className="bg-white p-8 md:p-16 rounded-2xl border border-border shadow-lg relative overflow-hidden">
              
              <div className="relative z-10">
                {canDisplayImage(news.image) && (
                  <div className="mb-12 rounded-xl overflow-hidden shadow-md">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img 
                      src={news.image.src} 
                      alt={news.image.alt || news.title} 
                      className="w-full object-cover max-h-[500px]"
                    />
                  </div>
                )}
                <div className="prose prose-lg md:prose-xl max-w-none text-foreground/90 whitespace-pre-line leading-relaxed font-serif marker:text-brand prose-a:text-brand hover:prose-a:text-brand-dark prose-headings:text-foreground prose-headings:font-serif">
                  {news.body}
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </div>
  );
}
