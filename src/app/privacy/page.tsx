import { Metadata } from "next";

export const metadata: Metadata = {
  title: "個人情報保護方針（プライバシーポリシー）",
  description: "東京促成青果株式会社の個人情報保護方針について掲載しています。",
};

export default function PrivacyPage() {
  return (
    <div className="w-full">
      <section className="bg-foreground text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">個人情報保護方針</h1>
          <p className="text-gray-300 text-lg font-inter">Privacy Policy</p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-3xl min-h-[40vh]">
          <div className="bg-white p-8 md:p-12 rounded-lg shadow-sm border border-border">
            <h2 className="text-2xl font-bold text-foreground mb-6 pb-4 border-b border-border">
              個人情報の取り扱いについて
            </h2>
            <div className="prose prose-lg max-w-none text-foreground/80">
              <p className="mb-6">
                東京促成青果株式会社（以下「当社」）は、現在個人情報保護方針の策定および内容の確認を行っております。
              </p>
              <p className="mb-6">
                方針が確定次第、本ページにて詳細な内容を公開いたします。
                公開までは、お預かりした個人情報は関係法令を遵守し、お問い合わせへの対応等、必要な範囲内でのみ適切に取り扱い、厳重に管理いたします。
              </p>
              <p>
                ご不便をおかけいたしますが、何卒ご理解賜りますようお願い申し上げます。
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
