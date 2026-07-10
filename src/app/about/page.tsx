import { Building2, FileText, MapPin } from "lucide-react";
import { companyData, locationsData } from "@/lib/content/repository";
import Link from "next/link";

export const metadata = {
  title: "会社情報",
  description: "東京促成青果株式会社の会社概要、社長メッセージ、各拠点情報をご案内します。",
};

export default function AboutPage() {
  return (
    <div className="w-full">
      {/* Page Header */}
      <section className="bg-foreground text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">会社情報</h1>
          <p className="text-gray-300 text-lg font-inter">About Tokyo Sokusei Seika</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          
          {/* Company Overview Table */}
          <div className="mb-20">
            <div className="flex items-center gap-3 mb-8">
              <Building2 className="text-brand" size={28} />
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">会社概要</h2>
            </div>
            <div className="bg-white rounded-lg shadow-sm border border-border overflow-hidden">
              <table className="w-full text-left text-foreground">
                <tbody className="divide-y divide-border">
                  <tr className="flex flex-col md:table-row">
                    <th className="md:w-1/4 px-6 py-4 bg-surface font-bold align-top">会社名</th>
                    <td className="px-6 py-4">{companyData.name}</td>
                  </tr>
                  <tr className="flex flex-col md:table-row">
                    <th className="md:w-1/4 px-6 py-4 bg-surface font-bold align-top">代表者</th>
                    <td className="px-6 py-4">{companyData.ceo}</td>
                  </tr>
                  <tr className="flex flex-col md:table-row">
                    <th className="md:w-1/4 px-6 py-4 bg-surface font-bold align-top">設立年月</th>
                    <td className="px-6 py-4">{companyData.established}</td>
                  </tr>
                  <tr className="flex flex-col md:table-row">
                    <th className="md:w-1/4 px-6 py-4 bg-surface font-bold align-top">事業内容</th>
                    <td className="px-6 py-4">{companyData.description}</td>
                  </tr>
                  {companyData.employeeCount.status === "confirmed" && (
                    <tr className="flex flex-col md:table-row">
                      <th className="md:w-1/4 px-6 py-4 bg-surface font-bold align-top">従業員数</th>
                      <td className="px-6 py-4">{companyData.employeeCount.value}</td>
                    </tr>
                  )}
                  <tr className="flex flex-col md:table-row">
                    <th className="md:w-1/4 px-6 py-4 bg-surface font-bold align-top">公式URL</th>
                    <td className="px-6 py-4 font-inter">
                      <a href={companyData.url} className="text-brand hover:underline" target="_blank" rel="noopener noreferrer">
                        {companyData.url}
                      </a>
                    </td>
                  </tr>
                  {companyData.banks.status === "confirmed" && (
                    <tr className="flex flex-col md:table-row">
                      <th className="md:w-1/4 px-6 py-4 bg-surface font-bold align-top">取引銀行</th>
                      <td className="px-6 py-4">
                        {companyData.banks.value.map((bank, i) => (
                          <div key={i}>{bank}</div>
                        ))}
                      </td>
                    </tr>
                  )}
                  {companyData.clients.status === "confirmed" && (
                    <tr className="flex flex-col md:table-row">
                      <th className="md:w-1/4 px-6 py-4 bg-surface font-bold align-top">主な取引先</th>
                      <td className="px-6 py-4 leading-relaxed">
                        {companyData.clients.value.join("、")} ほか（五十音順）
                      </td>
                    </tr>
                  )}
                  {companyData.partners.status === "confirmed" && (
                    <tr className="flex flex-col md:table-row">
                      <th className="md:w-1/4 px-6 py-4 bg-surface font-bold align-top">産地及び提携認証団体</th>
                      <td className="px-6 py-4 leading-relaxed">
                        {companyData.partners.value.join("、")} ほか多数
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>

          {/* President Message */}
          {companyData.presidentMessage.status === "confirmed" && (
            <div className="mb-20">
              <div className="flex items-center gap-3 mb-8">
                <FileText className="text-brand" size={28} />
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">代表メッセージ</h2>
              </div>
              <div className="bg-surface p-8 md:p-12 rounded-lg border border-border">
                <div className="flex flex-col md:flex-row gap-10 items-start">
                  {companyData.presidentImage.status === "approved" && (
                    <div className="w-full md:w-1/3 shrink-0">
                      <div className="relative aspect-square w-full md:aspect-[3/4] rounded-lg overflow-hidden border-4 border-white shadow-md">
                        <img 
                          src={companyData.presidentImage.src} 
                          alt={companyData.presidentImage.alt} 
                          className="object-cover w-full h-full" 
                        />
                      </div>
                    </div>
                  )}
                  <div className={companyData.presidentImage.status === "approved" ? "w-full md:w-2/3" : "w-full"}>
                    <div className="prose prose-lg max-w-none text-foreground/90 whitespace-pre-line">
                      {companyData.presidentMessage.value}
                    </div>
                    <div className="mt-8 pt-8 border-t border-border">
                      <div className="text-right">
                        <p className="text-sm text-muted mb-1">{companyData.ceo.split(" ")[0]}</p>
                        <p className="text-2xl font-bold text-foreground">{companyData.ceo.split(" ")[1]}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Access Map List (Summary) */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <MapPin className="text-brand" size={28} />
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">各拠点情報</h2>
            </div>
            <p className="mb-6 text-foreground/80">詳細な地図やアクセス方法は<Link href="/locations" className="text-brand hover:underline">拠点情報ページ</Link>をご覧ください。</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {locationsData.map((loc) => (
                <div key={loc.id} className="bg-white p-6 rounded-lg border border-border shadow-sm">
                  <h3 className="text-xl font-bold mb-3 border-b border-border pb-2">{loc.name}</h3>
                  <p className="text-sm text-foreground/80 mb-3 leading-relaxed">
                    〒<span className="font-inter">{loc.zip}</span><br/>
                    {loc.address}
                  </p>
                  <div className="font-inter">
                    {loc.tel.status === "confirmed" && (
                      <p className="text-sm font-medium">TEL: {loc.tel.value}</p>
                    )}
                    {loc.fax.status === "confirmed" && (
                      <p className="text-sm font-medium">FAX: {loc.fax.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
