import Link from "next/link";
import { locationsData } from "@/lib/content/repository";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const tsukiji = locationsData.find(loc => loc.id === "tsukiji");

  return (
    <footer className="bg-brand text-white pt-20 pb-10">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Logo & Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-sm">
              <Logo className="h-10 w-auto text-white" />
            </Link>
            <p className="text-brand-soft text-sm mb-6 leading-relaxed">
              1948年の設立以来、青果物および加工品の流通に携わっています。
            </p>
            {tsukiji && (
              <div className="text-sm text-brand-soft font-inter space-y-1">
                <p>〒{tsukiji.zip}</p>
                <p>{tsukiji.address}</p>
                {tsukiji.tel.status === "confirmed" && (
                  <p className="mt-2 text-white/90">TEL: {tsukiji.tel.value} (代表)</p>
                )}
              </div>
            )}
          </div>

          {/* Links 1 */}
          <div>
            <h3 className="font-bold text-lg mb-6 border-b border-white/20 pb-2 font-serif tracking-widest">企業情報</h3>
            <ul className="flex flex-col gap-3">
              <li>
                <Link href="/about" className="text-brand-soft hover:text-white transition-colors text-sm font-medium">
                  東京促成青果について
                </Link>
              </li>
              <li>
                <Link href="/advantage" className="text-brand-soft hover:text-white transition-colors text-sm font-medium">
                  事業・特長
                </Link>
              </li>
              <li>
                <Link href="/locations" className="text-brand-soft hover:text-white transition-colors text-sm font-medium">
                  拠点情報
                </Link>
              </li>
            </ul>
          </div>

          {/* Links 2 */}
          <div>
            <h3 className="font-bold text-lg mb-6 border-b border-white/20 pb-2 font-serif tracking-widest">インフォメーション</h3>
            <ul className="flex flex-col gap-3">
              <li>
                <Link href="/news" className="text-brand-soft hover:text-white transition-colors text-sm font-medium">
                  ニュース＆トピックス
                </Link>
              </li>
              <li>
                <Link href="/recruit" className="text-brand-soft hover:text-white transition-colors text-sm font-medium">
                  採用情報
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-brand-soft hover:text-white transition-colors text-sm font-medium">
                  お問い合わせ
                </Link>
              </li>
            </ul>
          </div>

          {/* Links 3 */}
          <div>
            <h3 className="font-bold text-lg mb-6 border-b border-white/20 pb-2 font-serif tracking-widest">その他</h3>
            <ul className="flex flex-col gap-3">
              <li>
                <Link href="/privacy" className="text-brand-soft hover:text-white transition-colors text-sm font-medium">
                  プライバシーポリシー
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col items-center justify-center gap-4">
          <p className="text-brand-soft/70 text-sm font-inter tracking-wider">
            &copy; {currentYear} Tokyo Sokusei Seika Co., Ltd. All Rights Reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
