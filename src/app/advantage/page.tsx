import { Handshake, Package, Sprout, TestTube, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { BentoCard } from "@/components/ui/BentoCard";

export const metadata = {
  title: "事業・特長",
  description: "東京促成青果株式会社の事業機能（荷受け、仲卸、加工・パッケージ）と強みについてご紹介します。",
};

export default function AdvantagePage() {
  return (
    <div className="w-full">
      <PageHero
        title="事業・特長"
        subtitle="Business & Advantage"
        description="生産者と消費者をつなぐ青果流通のプロフェッショナルとして、荷受け・仲卸・加工の各機能をシームレスに連携させています。"
        backgroundImage="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80"
      />

      {/* Intro */}
      <section className="py-24 bg-background">
        <Container className="max-w-4xl text-center">
          <Reveal>
            <h2 className="text-2xl md:text-4xl font-bold mb-8 text-foreground font-serif leading-relaxed">
              多彩な需要に応える<br className="hidden md:block"/>流通の要として
            </h2>
            <p className="text-lg md:text-xl leading-relaxed text-foreground-muted">
              東京促成青果は、全国の青果物を集め、多彩な需要に応える流通の要として機能しています。
              生産者から直接青果物を受け入れる「荷受け機能」と、市場で仕入れた青果物を販売する「仲卸機能」を兼ね備え、
              さらに自社での「ピッキング・袋詰め加工」を通じて、お客様に最適な形で青果物をお届けします。
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Services Breakdown (Bento Grid) */}
      <section className="py-24 bg-surface border-t border-border">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            
            {/* Service 1: 荷受け */}
            <BentoCard size="large" className="p-8 md:p-12 bg-brand text-white overflow-hidden" delay={100}>
              <div className="absolute -right-10 -bottom-10 opacity-10 pointer-events-none">
                <Handshake size={240} />
              </div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center text-accent mb-8">
                  <Handshake size={32} />
                </div>
                <h2 className="text-3xl font-bold mb-2 font-serif">荷受け機能</h2>
                <span className="inline-block text-sm font-bold tracking-widest text-white/70 mb-6 bg-white/10 px-3 py-1 rounded-full">集荷・産地連携</span>
                <p className="text-lg text-white/90 leading-relaxed max-w-2xl">
                  全国の農協や経済連などから青果物の販売指定を受け、直接青果物を受け入れています。
                  広範囲な販売網へとつなげる「市場の玄関口」としての役割を担い、生産者の想いと青果物を消費地へ確実に届けます。
                </p>
              </div>
            </BentoCard>

            {/* Service 2: 仲卸 */}
            <BentoCard size="small" className="p-8 md:p-10" delay={200}>
              <div className="w-14 h-14 bg-brand-soft rounded-xl flex items-center justify-center text-brand mb-8">
                <Package size={28} />
              </div>
              <h2 className="text-2xl font-bold mb-2 font-serif">仲卸機能</h2>
              <span className="inline-block text-sm font-bold tracking-widest text-foreground-muted mb-6 bg-surface-strong px-3 py-1 rounded-full">仕入・販売</span>
              <p className="text-foreground-muted leading-relaxed">
                市場内で青果物を仕入れ、小売店（量販店）、外食産業、中食（お惣菜・お弁当）などの多様な需要に合わせた柔軟な販売を行っています。
                顧客の細かなニーズを汲み取り、必要な時に必要な量を提供する、流通の潤滑油として機能しています。
              </p>
            </BentoCard>

            {/* Service 3: 加工 */}
            <BentoCard size="medium" className="p-8 md:p-10" delay={300}>
              <div className="w-14 h-14 bg-brand-soft rounded-xl flex items-center justify-center text-brand mb-8">
                <Sprout size={28} />
              </div>
              <h2 className="text-2xl font-bold mb-2 font-serif">ピッキング・袋詰め</h2>
              <span className="inline-block text-sm font-bold tracking-widest text-foreground-muted mb-6 bg-surface-strong px-3 py-1 rounded-full">加工パッケージ</span>
              <p className="text-foreground-muted leading-relaxed max-w-xl">
                大田市場内に自社のピッキング・袋詰め加工場を保有しています。
                仕入れた青果物をそのまま販売するだけでなく、顧客の用途や販売形態に合わせた出荷荷姿の調整、小分けパッケージングを行うことで、付加価値を高めた安定供給を実現しています。
              </p>
            </BentoCard>

            {/* Service 4: 開発 */}
            <BentoCard size="medium" className="p-8 md:p-10 bg-surface-muted" delay={400}>
              <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center text-brand mb-8">
                <TestTube size={28} />
              </div>
              <h2 className="text-2xl font-bold mb-2 font-serif">商品開発</h2>
              <span className="inline-block text-sm font-bold tracking-widest text-foreground-muted mb-6 bg-surface-strong px-3 py-1 rounded-full">用途開発・テストキッチン</span>
              <p className="text-foreground-muted leading-relaxed max-w-xl">
                食料自給率の向上やフードロス削減に向け、規格外で廃棄される食材などを無駄なく使い切るための商品開発・用途開発を提案しています。
                需要と供給の価値観の相違を埋めるための新しい社会システムの創出を目指しています。
              </p>
            </BentoCard>
            
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-brand text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10 z-10 mix-blend-multiply"></div>
        <Container className="text-center relative z-20">
          <Reveal>
            <h2 className="text-3xl font-bold mb-6 font-serif">お取引をご希望の方へ</h2>
            <p className="text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
              青果物の出荷をご希望の生産者様、仕入れ・加工パッケージをご希望の企業様は、お問い合わせフォームよりお気軽にご相談ください。
            </p>
            <Link 
              href="/contact" 
              className="bg-accent hover:bg-[#a6842f] text-white px-10 py-4 rounded-sm font-bold transition-all hover:-translate-y-1 inline-flex items-center gap-2 shadow-lg"
            >
              お問い合わせフォームへ
              <ArrowRight size={18} />
            </Link>
          </Reveal>
        </Container>
      </section>
    </div>
  );
}
