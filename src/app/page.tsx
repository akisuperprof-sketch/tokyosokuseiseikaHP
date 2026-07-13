import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MapPin, Package, Sprout, Handshake, ChevronRight, ExternalLink } from "lucide-react";
import { locationsData } from "@/lib/content/repository";
import { newsData, type NewsArticle } from "@/lib/content/news";
import { pickupItems } from "@/lib/content/pickups";
import { canDisplayImage } from "@/lib/content/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { BentoCard } from "@/components/ui/BentoCard";
import { HeroVideo } from "@/components/ui/HeroVideo";

export default function Home() {
  const recentNews = newsData
    .filter(news => news.status === "published" && new Date(news.publishedAt) <= new Date())
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, 3);
  const tsukiji = locationsData.find(loc => loc.id === "tsukiji");

  return (
    <div className="w-full">
      {/* Hero Section */}
      <HeroVideo
        mp4Src="/videos/hero/hero-video-001.mp4"
        posterSrc="/images/ai/hero/hero-001.jpg"
      >
        <Container className="pt-20">
          <div className="max-w-3xl animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight font-serif tracking-wide drop-shadow-lg text-white">
              おいしい日本の食を<br className="hidden md:block"/>応援する。
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl leading-relaxed font-medium drop-shadow-md">
              東京促成青果株式会社は、1948年10月に設立されました。青果物および加工品の受託販売・購入販売を通じて、生産者と消費者をつなぎます。
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                href="/about" 
                className="btn-accent group"
              >
                会社情報を見る
                <ArrowRight size={18} className="hover-arrow" />
              </Link>
              <Link 
                href="/advantage" 
                className="bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/30 px-8 py-4 rounded-sm font-bold transition-all hover:-translate-y-0.5 shadow-sm hover:shadow-md"
              >
                当社の強み
              </Link>
            </div>
          </div>
        </Container>
      </HeroVideo>

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
      <section className="py-24 bg-surface border-y border-border overflow-hidden">
        <Container>
          <Reveal>
            <SectionHeader 
              title="当社の強み" 
              subtitle="Our Advantages" 
              align="left"
              description="生産者と消費者をつなぐ青果流通のプロフェッショナルとして、多様な機能を提供しています。"
            />
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[300px]">
            {/* 荷受け - Large */}
            <Reveal delay={100} direction="up" className="md:col-span-8 md:row-span-2 h-full">
              <BentoCard size="large" className="relative p-8 md:p-10 bg-brand text-white hover-card overflow-hidden h-full group">
                <video
                  src="/videos/ai/market/market-001.mp4"
                  poster="/images/ai/market/market-001.jpg"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-overlay group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute top-0 right-0 p-8 opacity-10">
                  <Handshake size={120} />
                </div>
                <div className="relative z-10 h-full flex flex-col justify-end">
                  <div className="w-14 h-14 bg-white/10 rounded-md flex items-center justify-center mb-8 backdrop-blur-sm shadow-sm">
                    <Handshake size={28} className="text-white" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 font-serif drop-shadow-md">荷受け機能</h3>
                  <p className="text-white/90 leading-relaxed max-w-md drop-shadow-sm font-medium">
                    全国の農協や経済連などから青果物を受け入れ、広範囲な販売網へとつなげる役割を担っています。
                  </p>
                </div>
              </BentoCard>
            </Reveal>

            {/* 仲卸 - Small */}
            <Reveal delay={200} direction="up" className="md:col-span-4 h-full">
              <BentoCard size="small" className="relative p-8 md:p-10 hover-card overflow-hidden h-full group">
                <Image src="/images/ai/vegetables/vegetables-001.jpg" alt="仲卸機能" fill className="object-cover opacity-20 mix-blend-multiply group-hover:scale-105 transition-transform duration-1000" sizes="(max-width: 768px) 100vw, 33vw" />
                <div className="relative z-10 h-full flex flex-col">
                  <div className="w-12 h-12 bg-white/80 backdrop-blur-sm rounded-md flex items-center justify-center text-brand mb-6 shadow-sm">
                    <Package size={24} />
                  </div>
                  <div className="mt-auto">
                    <h3 className="text-xl font-bold mb-3 font-serif drop-shadow-sm">仲卸機能</h3>
                    <p className="text-foreground-muted text-sm leading-relaxed font-medium bg-white/50 p-2 rounded-md backdrop-blur-sm">
                      市場内で青果物を仕入れ、小売、外食、中食などの多様な需要に合わせた柔軟な販売を行っています。
                    </p>
                  </div>
                </div>
              </BentoCard>
            </Reveal>

            {/* 加工 - Small */}
            <Reveal delay={300} direction="up" className="md:col-span-4 h-full">
              <BentoCard size="small" className="relative p-8 md:p-10 hover-card overflow-hidden h-full group text-white">
                <Image src="/images/ai/vegetables/vegetables-004.jpg" alt="加工・パッケージ" fill className="object-cover brightness-[0.4] group-hover:scale-105 transition-transform duration-1000" sizes="(max-width: 768px) 100vw, 33vw" />
                <div className="relative z-10 h-full flex flex-col">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-md flex items-center justify-center text-white mb-6 shadow-sm">
                    <Sprout size={24} />
                  </div>
                  <div className="mt-auto">
                    <h3 className="text-xl font-bold mb-3 font-serif drop-shadow-sm">加工・パッケージ</h3>
                    <p className="text-white/80 text-sm leading-relaxed font-medium">
                      市場内に自社加工場を保有し、顧客の用途に合わせた出荷荷姿の調整を行います。
                    </p>
                  </div>
                </div>
              </BentoCard>
            </Reveal>

            {/* 商品開発 - Large */}
            <Reveal delay={400} direction="up" className="md:col-span-8 h-full">
              <BentoCard size="large" className="relative p-8 md:p-10 hover-card overflow-hidden h-full group text-white">
                <Image src="/images/ai/market/market-002.jpg" alt="商品開発" fill className="object-cover brightness-[0.4] group-hover:scale-105 transition-transform duration-1000" sizes="(max-width: 768px) 100vw, 66vw" />
                <div className="relative z-10 h-full flex flex-col justify-end">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-md flex items-center justify-center text-white mb-6 shadow-sm">
                    <MapPin size={24} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 font-serif">商品開発</h3>
                  <p className="text-white/90 leading-relaxed max-w-lg font-medium">
                    テストキッチンを活用した商品開発の提案や、無駄なく使い切るための用途開発を推進しています。
                  </p>
                </div>
              </BentoCard>
            </Reveal>
          </div>

          <Reveal delay={500} className="mt-12 text-center md:text-right">
            <Link href="/advantage" className="inline-flex items-center gap-2 text-brand font-bold hover-text-link transition-colors group">
              当社の強みを詳しく見る
              <span className="bg-brand-soft p-1 rounded-full group-hover:bg-brand group-hover:text-white transition-colors">
                <ChevronRight size={16} className="hover-arrow" />
              </span>
            </Link>
          </Reveal>
        </Container>
      </section>

      {/* Pickup Section */}
      <section className="py-24 bg-surface border-b border-border overflow-hidden">
        <Container>
          <Reveal>
            <SectionHeader title="Pickup" subtitle="注目の取り組み" />
          </Reveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
            {pickupItems.sort((a, b) => a.displayOrder - b.displayOrder).map((item, index) => {
              const isExternal = item.linkType === "external";
              return (
                <Reveal key={item.id} delay={index * 100}>
                  <Link 
                    href={item.href}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                    className="flex flex-col bg-background border border-border rounded-xl p-8 hover-card group transition-all duration-300 h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
                    aria-label={`${item.title}${isExternal ? "（新しいタブで開く）" : ""}`}
                  >
                    <div className="mb-8 flex items-center justify-center min-h-[80px]">
                      {canDisplayImage(item.image) ? (
                        <img 
                          src={item.image.src} 
                          alt={item.image.alt || ""} 
                          className="max-h-20 max-w-full object-contain transition-transform duration-500 group-hover:scale-[1.02]" 
                        />
                      ) : (
                        <h3 className="text-2xl font-bold font-serif text-brand">{item.title}</h3>
                      )}
                    </div>
                    
                    <div className="mt-auto flex items-end justify-between border-t border-border/60 pt-4 group-hover:border-brand/40 transition-colors">
                      <div>
                        {canDisplayImage(item.image) && (
                          <h3 className="font-bold text-foreground mb-1">{item.title}</h3>
                        )}
                        {item.subtitle && (
                          <p className="text-sm text-foreground-muted">{item.subtitle}</p>
                        )}
                      </div>
                      <div className="flex items-center text-brand shrink-0">
                        {isExternal && <span className="text-xs mr-2 font-bold tracking-widest text-brand bg-brand-soft px-2 py-1 rounded-sm">外部サイト</span>}
                        {isExternal ? (
                          <ExternalLink size={20} className="hover-arrow" />
                        ) : (
                          <ArrowRight size={20} className="hover-arrow" />
                        )}
                      </div>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* News Section */}
      <section className="py-24 bg-background">
        <Container>
          <Reveal>
            <SectionHeader title="ニュース" subtitle="News" />
          </Reveal>
          
          <div className="max-w-4xl mx-auto flex flex-col gap-4 mb-12">
            {recentNews.length > 0 ? (
              recentNews.map((item: NewsArticle, index: number) => (
                <Reveal key={item.id} delay={index * 100}>
                  <Link href={`/news/${item.slug}`} className="group block bg-surface hover:bg-surface-muted p-6 rounded-lg border border-border transition-all hover-card">
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
              <Reveal>
                <div className="text-center py-12 bg-surface rounded-lg border border-border">
                  <p className="text-foreground-muted">現在、新しいお知らせはありません。</p>
                </div>
              </Reveal>
            )}
          </div>
          
          <Reveal delay={300}>
            <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-6 border-t border-border pt-12">
              <Link href="/news" className="inline-flex items-center gap-2 text-brand font-bold hover-text-link transition-colors group">
                新着ニュース一覧へ
                <span className="bg-brand-soft p-1 rounded-full group-hover:bg-brand group-hover:text-white transition-colors">
                  <ChevronRight size={16} className="hover-arrow" />
                </span>
              </Link>
              <Link 
                href="https://www.tokyo-sokusei-seika.co.jp/infomation/index.html" 
                className="inline-flex items-center gap-2 text-foreground-muted hover:text-brand hover-text-link transition-colors group text-sm font-medium"
              >
                過去のニュース＆トピックスを見る
                <ExternalLink size={14} className="hover-arrow" />
              </Link>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-brand text-white relative overflow-hidden">
        <Image
          src="/images/ai/market/market-004.jpg"
          alt="お問い合わせ背景"
          fill
          className="object-cover opacity-10 mix-blend-overlay"
        />
        <Container className="text-center relative z-10">
          <Reveal>
            <SectionHeader 
              title="お問い合わせ" 
              subtitle="Contact" 
              description="商品に関するお問い合わせ、出荷・お取引のご希望、採用に関するご質問など、お気軽にご連絡ください。"
            />
          </Reveal>
          <Reveal delay={200}>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mt-12">
              <Link 
                href="/contact" 
                className="btn-accent group"
              >
                お問い合わせフォーム
                <ArrowRight size={18} className="hover-arrow" />
              </Link>
              {tsukiji && tsukiji.tel.status === "confirmed" && (
                <div className="bg-white/10 px-10 py-4 rounded-sm border border-white/20 backdrop-blur-sm transition-all hover:bg-white/20">
                  <span className="block text-xs text-brand-soft mb-1">お電話 (築地本社)</span>
                  <span className="font-bold text-xl font-inter tracking-wider">{tsukiji.tel.value}</span>
                </div>
              )}
            </div>
          </Reveal>
        </Container>
      </section>
    </div>
  );
}
