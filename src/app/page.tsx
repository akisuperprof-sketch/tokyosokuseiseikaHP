import Link from "next/link";
import { ArrowRight, MapPin, Package, Sprout, Handshake, ChevronRight } from "lucide-react";
import { locationsData } from "@/lib/content/repository";
import { newsData, type NewsArticle } from "@/lib/content/news";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { BentoCard } from "@/components/ui/BentoCard";

export default function Home() {
  const recentNews = newsData
    .filter(news => news.status === "published" && new Date(news.publishedAt) <= new Date())
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, 3);
  const tsukiji = locationsData.find(loc => loc.id === "tsukiji");

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative w-full min-h-[75vh] md:min-h-[85vh] bg-foreground text-white flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-brand/30 z-10 mix-blend-multiply"></div>
        {/* We will use a safe verified placeholder or a generic image that represents fresh produce without being a specific fake farm */}
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-10000 hover:scale-105" 
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1601053457187-21447d27e1f5?auto=format&fit=crop&q=80')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/40 to-transparent z-10" />
        
        <Container className="relative z-20 pt-20">
          <div className="max-w-3xl animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight font-serif tracking-wide drop-shadow-lg">
              おいしい日本の食を<br className="hidden md:block"/>応援する。
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl leading-relaxed font-medium drop-shadow-md">
              東京促成青果株式会社は、1948年10月に設立されました。青果物および加工品の受託販売・購入販売を通じて、生産者と消費者をつなぎます。
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                href="/about" 
                className="bg-accent hover:bg-[#a6842f] text-white px-8 py-4 rounded-sm font-bold transition-all hover:-translate-y-1 inline-flex items-center gap-2 shadow-lg"
              >
                会社情報を見る
                <ArrowRight size={18} />
              </Link>
              <Link 
                href="/advantage" 
                className="bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/30 px-8 py-4 rounded-sm font-bold transition-all hover:-translate-y-1"
              >
                事業・特長
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Intro Section */}
      <section className="py-24 bg-background">
        <Container className="text-center max-w-4xl">
          <Reveal>
            <h2 className="text-2xl md:text-4xl font-bold mb-8 text-foreground font-serif leading-relaxed">
              1948年の設立以来、青果物および<br className="hidden md:block"/>加工品の流通に携わっています。
            </h2>
            <p className="text-foreground-muted leading-relaxed mb-12 text-base md:text-lg">
              全国の農協や経済連からの青果物の「荷受け」と、市場内で需要に応じて販売する「仲卸」の機能を持ち、加工場を通じて量販店・中食・外食向けの安定供給を行っています。
            </p>
          </Reveal>
          
          <Reveal delay={200}>
            <div className="flex justify-center gap-12 md:gap-32 border-t border-border pt-12">
              <div className="text-center">
                <p className="text-5xl font-bold font-serif text-brand mb-3">
                  1948<span className="text-2xl font-sans ml-1 text-accent">年</span>
                </p>
                <p className="text-sm font-bold text-foreground-muted tracking-widest">設立</p>
              </div>
              <div className="text-center">
                <p className="text-5xl font-bold font-serif text-brand mb-3">
                  4<span className="text-2xl font-sans ml-1 text-accent">拠点</span>
                </p>
                <p className="text-sm font-bold text-foreground-muted tracking-widest">築地・大田・大阪・豊洲</p>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Services Section (Bento Grid) */}
      <section className="py-24 bg-surface border-y border-border">
        <Container>
          <SectionHeader 
            title="事業・特長" 
            subtitle="Advantage" 
            align="left"
            description="生産者と消費者をつなぐ青果流通のプロフェッショナルとして、多様な機能を提供しています。"
          />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* 荷受け - Large */}
            <BentoCard size="large" className="p-8 md:p-10 bg-brand text-white" delay={100}>
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <Handshake size={120} />
              </div>
              <div className="relative z-10 h-full flex flex-col justify-end">
                <div className="w-14 h-14 bg-white/10 rounded-md flex items-center justify-center mb-8 backdrop-blur-sm">
                  <Handshake size={28} className="text-accent" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 font-serif">荷受け機能</h3>
                <p className="text-white/80 leading-relaxed max-w-md">
                  全国の農協や経済連などから青果物を受け入れ、広範囲な販売網へとつなげる役割を担っています。
                </p>
              </div>
            </BentoCard>

            {/* 仲卸 - Small */}
            <BentoCard size="small" className="p-8 md:p-10" delay={200}>
              <div className="w-12 h-12 bg-surface-strong rounded-md flex items-center justify-center text-brand mb-6">
                <Package size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3 font-serif">仲卸機能</h3>
              <p className="text-foreground-muted text-sm leading-relaxed">
                市場内で青果物を仕入れ、小売、外食、中食などの多様な需要に合わせた柔軟な販売を行っています。
              </p>
            </BentoCard>

            {/* 加工 - Small */}
            <BentoCard size="small" className="p-8 md:p-10" delay={300}>
              <div className="w-12 h-12 bg-surface-strong rounded-md flex items-center justify-center text-brand mb-6">
                <Sprout size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3 font-serif">加工・パッケージ</h3>
              <p className="text-foreground-muted text-sm leading-relaxed">
                市場内に自社加工場を保有し、顧客の用途に合わせた出荷荷姿の調整を行います。
              </p>
            </BentoCard>

            {/* 商品開発 - Large */}
            <BentoCard size="large" className="p-8 md:p-10 bg-surface-muted" delay={400}>
              <div className="w-12 h-12 bg-white rounded-md flex items-center justify-center text-brand mb-6 shadow-sm">
                <MapPin size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-4 font-serif">商品開発</h3>
              <p className="text-foreground-muted leading-relaxed max-w-lg">
                テストキッチンを活用した商品開発の提案や、無駄なく使い切るための用途開発を推進しています。
              </p>
            </BentoCard>
          </div>

          <Reveal delay={500} className="mt-12 text-center md:text-right">
            <Link href="/advantage" className="inline-flex items-center gap-2 text-brand font-bold hover:text-brand-hover transition-colors group">
              事業・特長を詳しく見る
              <span className="bg-brand-soft p-1 rounded-full group-hover:bg-brand group-hover:text-white transition-colors">
                <ChevronRight size={16} />
              </span>
            </Link>
          </Reveal>
        </Container>
      </section>

      {/* News Section */}
      <section className="py-24 bg-background">
        <Container>
          <SectionHeader title="ニュース" subtitle="News" />
          
          <div className="max-w-4xl mx-auto flex flex-col gap-4 mb-12">
            {recentNews.length > 0 ? (
              recentNews.map((item: NewsArticle, index: number) => (
                <Reveal key={item.id} delay={index * 100}>
                  <Link href={`/news/${item.slug}`} className="group block bg-surface hover:bg-surface-muted p-6 rounded-lg border border-border transition-all">
                    <div className="flex flex-col md:flex-row md:items-center gap-4">
                      <time className="text-sm font-inter text-foreground-muted w-32 shrink-0">{item.publishedAt.replace(/-/g, '.')}</time>
                      <span className="bg-brand-soft text-brand text-xs font-bold px-3 py-1 rounded-full w-fit">
                        {item.category}
                      </span>
                      <h3 className="font-bold text-foreground group-hover:text-brand transition-colors line-clamp-2 md:line-clamp-1">
                        {item.title}
                      </h3>
                    </div>
                  </Link>
                </Reveal>
              ))
            ) : (
              <div className="text-center py-12 bg-surface rounded-lg border border-border">
                <p className="text-foreground-muted">現在、新しいお知らせはありません。</p>
              </div>
            )}
          </div>
          
          <div className="text-center">
            <Link href="/news" className="inline-flex items-center gap-2 text-brand font-bold hover:text-brand-hover transition-colors group">
              ニュース一覧へ
              <span className="bg-brand-soft p-1 rounded-full group-hover:bg-brand group-hover:text-white transition-colors">
                <ChevronRight size={16} />
              </span>
            </Link>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-brand text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550989460-0adf9ea622e2?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
        <Container className="text-center relative z-10">
          <SectionHeader 
            title="お問い合わせ" 
            subtitle="Contact" 
            description="商品に関するお問い合わせ、出荷・お取引のご希望、採用に関するご質問など、お気軽にご連絡ください。"
          />
          <div className="flex flex-col sm:flex-row gap-6 justify-center mt-12">
            <Link 
              href="/contact" 
              className="bg-accent hover:bg-[#a6842f] text-white px-10 py-4 rounded-sm font-bold transition-all hover:-translate-y-1 shadow-lg"
            >
              お問い合わせフォーム
            </Link>
            {tsukiji && tsukiji.tel.status === "confirmed" && (
              <div className="bg-white/10 px-10 py-4 rounded-sm border border-white/20 backdrop-blur-sm">
                <span className="block text-xs text-brand-soft mb-1">お電話 (築地本社)</span>
                <span className="font-bold text-xl font-inter tracking-wider">{tsukiji.tel.value}</span>
              </div>
            )}
          </div>
        </Container>
      </section>
    </div>
  );
}
