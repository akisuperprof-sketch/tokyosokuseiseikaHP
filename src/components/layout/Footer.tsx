import Link from "next/link";
import { locationsData } from "@/lib/content/repository";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const tsukiji = locationsData.find(loc => loc.id === "tsukiji");

  return (
    <footer className="bg-foreground text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Logo & Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-sm">
              <span className="text-2xl font-bold">
                東京促成青果<span className="text-sm font-normal ml-1">株式会社</span>
              </span>
            </Link>
            <p className="text-gray-300 text-sm mb-4 leading-relaxed">
              1948年の設立以来、青果物および加工品の流通に携わっています。
            </p>
            {tsukiji && (
              <div className="text-sm text-gray-300 font-inter">
                <p>〒{tsukiji.zip}</p>
                <p>{tsukiji.address}</p>
                {tsukiji.tel.status === "confirmed" && (
                  <p className="mt-2">TEL: {tsukiji.tel.value} (代表)</p>
                )}
              </div>
            )}
          </div>

          {/* Links 1 */}
          <div>
            <h3 className="font-bold text-lg mb-6 border-b border-gray-700 pb-2">企業情報</h3>
            <ul className="flex flex-col gap-3">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors text-sm">
                  東京促成青果について
                </Link>
              </li>
              <li>
                <Link href="/advantage" className="text-gray-300 hover:text-white transition-colors text-sm">
                  事業と特長
                </Link>
              </li>
              <li>
                <Link href="/locations" className="text-gray-300 hover:text-white transition-colors text-sm">
                  拠点情報
                </Link>
              </li>
            </ul>
          </div>

          {/* Links 2 */}
          <div>
            <h3 className="font-bold text-lg mb-6 border-b border-gray-700 pb-2">インフォメーション</h3>
            <ul className="flex flex-col gap-3">
              <li>
                <Link href="/news" className="text-gray-300 hover:text-white transition-colors text-sm">
                  ニュース＆トピックス
                </Link>
              </li>
              <li>
                <Link href="/recruit" className="text-gray-300 hover:text-white transition-colors text-sm">
                  採用情報
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors text-sm">
                  お問い合わせ
                </Link>
              </li>
            </ul>
          </div>

          {/* Links 3 */}
          <div>
            <h3 className="font-bold text-lg mb-6 border-b border-gray-700 pb-2">その他</h3>
            <ul className="flex flex-col gap-3">
              <li>
                <Link href="/privacy" className="text-gray-300 hover:text-white transition-colors text-sm">
                  プライバシーポリシー
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm font-inter">
            &copy; {currentYear} Tokyo Sokusei Seika Co., Ltd. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
