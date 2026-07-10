import Link from "next/link";
import { ArrowRight, MapPin, Package, Sprout, Handshake } from "lucide-react";

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative w-full h-[600px] bg-foreground text-white flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        {/* Placeholder for real hero image */}
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1601053457187-21447d27e1f5?auto=format&fit=crop&q=80')" }}
        />
        
        <div className="container relative z-20 mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              おいしい日本の食を<br className="hidden md:block"/>応援する。
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl leading-relaxed">
              東京促成青果株式会社は、1948年10月に設立されました。青果物および加工品の受託販売・購入販売を通じて、生産者と消費者をつなぎます。
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                href="/about" 
                className="bg-brand hover:bg-brand-dark text-white px-8 py-3.5 rounded-md font-medium transition-colors inline-flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand focus-visible:ring-offset-foreground"
              >
                会社情報を見る
                <ArrowRight size={18} />
              </Link>
              <Link 
                href="/advantage" 
                className="bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm border border-white/30 px-8 py-3.5 rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand focus-visible:ring-offset-foreground"
              >
                事業と特長
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-3xl font-bold mb-6 text-foreground">1948年の設立以来、青果物および加工品の流通に携わっています。</h2>
          <p className="text-foreground/80 leading-relaxed mb-10 text-lg">
            全国の農協や経済連からの青果物の「荷受け」と、市場内で需要に応じて販売する「仲卸」の機能を持ち、加工場を通じて量販店・中食・外食向けの安定供給を行っています。
          </p>
          <div className="flex justify-center gap-12 md:gap-24 border-t border-border pt-10">
            <div className="text-center">
              <p className="text-4xl font-bold font-inter text-brand mb-2">1948<span className="text-xl font-sans ml-1">年</span></p>
              <p className="text-sm font-medium text-muted">設立</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold font-inter text-brand mb-2">4<span className="text-xl font-sans ml-1">拠点</span></p>
              <p className="text-sm font-medium text-muted">築地・大田・大阪・豊洲</p>
            </div>
            {/* 従業員数や延べ坪数などの未確認情報は、確認が完了するまで非表示とします */}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-surface border-y border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <span className="text-brand font-bold tracking-wider font-inter text-sm mb-2 block">SERVICES</span>
              <h2 className="text-3xl font-bold text-foreground">事業と機能</h2>
            </div>
            <Link href="/advantage" className="text-brand hover:text-brand-dark font-medium inline-flex items-center gap-1 mt-4 md:mt-0 transition-colors">
              詳しく見る <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-border hover:shadow-md transition-shadow group">
              <div className="w-12 h-12 bg-surface-accent rounded-md flex items-center justify-center text-brand mb-6 group-hover:scale-110 transition-transform">
                <Handshake size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">荷受け機能</h3>
              <p className="text-muted text-sm leading-relaxed">
                全国の農協や経済連などから青果物を受け入れ、広範囲な販売網へとつなげる役割を担っています。
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm border border-border hover:shadow-md transition-shadow group">
              <div className="w-12 h-12 bg-surface-accent rounded-md flex items-center justify-center text-brand mb-6 group-hover:scale-110 transition-transform">
                <Package size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">仲卸機能</h3>
              <p className="text-muted text-sm leading-relaxed">
                市場内で青果物を仕入れ、小売、外食、中食などの多様な需要に合わせた柔軟な販売を行っています。
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm border border-border hover:shadow-md transition-shadow group">
              <div className="w-12 h-12 bg-surface-accent rounded-md flex items-center justify-center text-brand mb-6 group-hover:scale-110 transition-transform">
                <Sprout size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">加工・パッケージ</h3>
              <p className="text-muted text-sm leading-relaxed">
                市場内に自社ピッキング・袋詰め加工場を保有し、顧客の用途に合わせた出荷荷姿の調整を行います。
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm border border-border hover:shadow-md transition-shadow group">
              <div className="w-12 h-12 bg-surface-accent rounded-md flex items-center justify-center text-brand mb-6 group-hover:scale-110 transition-transform">
                <MapPin size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">商品開発</h3>
              <p className="text-muted text-sm leading-relaxed">
                テストキッチンを活用した商品開発の提案や、無駄なく使い切るための用途開発を推進しています。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-foreground text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">お問い合わせ</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            商品に関するお問い合わせ、出荷・お取引のご希望、採用に関するご質問など、お気軽にご連絡ください。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-brand hover:bg-brand-dark text-white px-8 py-3.5 rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-foreground"
            >
              お問い合わせフォームへ
            </Link>
            <div className="bg-white/5 px-8 py-3.5 rounded-md border border-white/10">
              <span className="block text-xs text-gray-400 mb-1">お電話でのお問い合わせ (築地本社)</span>
              <span className="font-bold text-lg font-inter">03-3542-7413</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
