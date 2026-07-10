import { Handshake, Package, Sprout, TestTube, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "事業と特長",
  description: "東京促成青果株式会社の事業機能（荷受け、仲卸、加工・パッケージ）と強みについてご紹介します。",
};

export default function AdvantagePage() {
  return (
    <div className="w-full">
      {/* Page Header */}
      <section className="bg-foreground text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">当社の事業と特長</h1>
          <p className="text-gray-300 text-lg font-inter">Business & Advantage</p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <p className="text-lg md:text-xl leading-relaxed text-foreground/80">
            東京促成青果は、全国の青果物を集め、多彩な需要に応える流通の要として機能しています。
            生産者から直接青果物を受け入れる「荷受け機能」と、市場で仕入れた青果物を販売する「仲卸機能」を兼ね備え、
            さらに自社での「ピッキング・袋詰め加工」を通じて、お客様に最適な形で青果物をお届けします。
          </p>
        </div>
      </section>

      {/* Services Breakdown */}
      <section className="py-16 md:py-24 bg-surface border-t border-border">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="space-y-24">
            
            {/* Service 1: 荷受け */}
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="md:w-1/3 shrink-0 flex flex-col items-center md:items-start text-center md:text-left">
                <div className="w-20 h-20 bg-brand text-white rounded-2xl flex items-center justify-center mb-6 shadow-md">
                  <Handshake size={40} />
                </div>
                <h2 className="text-2xl font-bold mb-4">荷受け機能<br/><span className="text-sm text-muted font-normal">集荷・産地連携</span></h2>
              </div>
              <div className="md:w-2/3">
                <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                  全国の農協や経済連などから青果物の販売指定を受け、直接青果物を受け入れています。
                  広範囲な販売網へとつなげる「市場の玄関口」としての役割を担い、生産者の想いと青果物を消費地へ確実に届けます。
                </p>
                {/* 提携県数などの未確認情報は非表示 */}
              </div>
            </div>

            {/* Service 2: 仲卸 */}
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="md:w-1/3 shrink-0 flex flex-col items-center md:items-start text-center md:text-left">
                <div className="w-20 h-20 bg-brand text-white rounded-2xl flex items-center justify-center mb-6 shadow-md">
                  <Package size={40} />
                </div>
                <h2 className="text-2xl font-bold mb-4">仲卸機能<br/><span className="text-sm text-muted font-normal">仕入・販売</span></h2>
              </div>
              <div className="md:w-2/3">
                <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                  市場内で青果物を仕入れ、小売店（量販店）、外食産業、中食（お惣菜・お弁当）などの多様な需要に合わせた柔軟な販売を行っています。
                  顧客の細かなニーズを汲み取り、必要な時に必要な量を提供する、流通の潤滑油として機能しています。
                </p>
              </div>
            </div>

            {/* Service 3: 加工 */}
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="md:w-1/3 shrink-0 flex flex-col items-center md:items-start text-center md:text-left">
                <div className="w-20 h-20 bg-brand text-white rounded-2xl flex items-center justify-center mb-6 shadow-md">
                  <Sprout size={40} />
                </div>
                <h2 className="text-2xl font-bold mb-4">ピッキング・袋詰め<br/><span className="text-sm text-muted font-normal">加工パッケージ</span></h2>
              </div>
              <div className="md:w-2/3">
                <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                  大田市場内に自社のピッキング・袋詰め加工場を保有しています。
                  仕入れた青果物をそのまま販売するだけでなく、顧客の用途や販売形態に合わせた出荷荷姿の調整、小分けパッケージングを行うことで、付加価値を高めた安定供給を実現しています。
                </p>
                {/* 加工場の坪数などの未確認情報は非表示 */}
              </div>
            </div>

            {/* Service 4: 開発 */}
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="md:w-1/3 shrink-0 flex flex-col items-center md:items-start text-center md:text-left">
                <div className="w-20 h-20 bg-brand text-white rounded-2xl flex items-center justify-center mb-6 shadow-md">
                  <TestTube size={40} />
                </div>
                <h2 className="text-2xl font-bold mb-4">商品開発<br/><span className="text-sm text-muted font-normal">用途開発・テストキッチン</span></h2>
              </div>
              <div className="md:w-2/3">
                <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                  食料自給率の向上やフードロス削減に向け、規格外で廃棄される食材などを無駄なく使い切るための商品開発・用途開発を提案しています。
                  需要と供給の価値観の相違を埋めるための新しい社会システムの創出を目指しています。
                </p>
                {/* テストキッチンの現在の状況などは確認待ちのため事実説明にとどめる */}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">お取引をご希望の方へ</h2>
          <p className="text-foreground/80 mb-8 max-w-2xl mx-auto">
            青果物の出荷をご希望の生産者様、仕入れ・加工パッケージをご希望の企業様は、お問い合わせフォームよりお気軽にご相談ください。
          </p>
          <Link 
            href="/contact" 
            className="bg-brand hover:bg-brand-dark text-white px-8 py-3.5 rounded-md font-medium transition-colors inline-flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand"
          >
            お問い合わせフォームへ
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

    </div>
  );
}
