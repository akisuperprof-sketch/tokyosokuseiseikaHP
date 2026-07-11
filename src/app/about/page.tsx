import { MapPin } from "lucide-react";
import { companyData, locationsData } from "@/lib/content/repository";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";

export const metadata = {
  title: "会社情報",
  description: "東京促成青果株式会社の会社概要、社長メッセージ、各拠点情報をご案内します。",
};

export default function AboutPage() {
  return (
    <div className="w-full">
      <PageHero
        title="会社情報"
        subtitle="About Us"
        description="生産者と消費者を結ぶ青果流通の架け橋として、1948年から日本の食を支え続けています。"
        backgroundImage="https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&q=80"
      />

      <section className="py-24 bg-background">
        <Container className="max-w-5xl">
          
          {/* President Message */}
          {companyData.presidentMessage.status === "confirmed" && (
            <div className="mb-32">
              <SectionHeader 
                title="代表メッセージ" 
                subtitle="Message" 
                align="center" 
              />
              <Reveal delay={100}>
                <div className="bg-surface p-8 md:p-16 rounded-xl border border-border relative overflow-hidden shadow-sm">
                  {/* Decorative background element */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-brand/5 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl" />
                  
                  <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-start relative z-10">
                    {companyData.presidentImage.status === "approved" && (
                      <div className="w-full md:w-5/12 shrink-0">
                        <div className="relative aspect-[3/4] w-full rounded-lg overflow-hidden shadow-lg border-8 border-white">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img 
                            src={companyData.presidentImage.src} 
                            alt={companyData.presidentImage.alt} 
                            className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-700" 
                          />
                        </div>
                      </div>
                    )}
                    <div className={companyData.presidentImage.status === "approved" ? "w-full md:w-7/12" : "w-full"}>
                      <div className="prose prose-lg max-w-none text-foreground/80 whitespace-pre-line leading-loose font-serif">
                        {companyData.presidentMessage.value}
                      </div>
                      <div className="mt-12 pt-8 border-t border-border">
                        <div className="text-right">
                          <p className="text-sm text-brand font-bold tracking-widest mb-2">{companyData.ceo.split(" ")[0]}</p>
                          <p className="text-3xl font-bold text-foreground font-serif tracking-widest">{companyData.ceo.split(" ")[1]}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          )}

          {/* Company Overview Table */}
          <div className="mb-32">
            <SectionHeader 
              title="会社概要" 
              subtitle="Company Profile" 
              align="center" 
            />
            <Reveal delay={200}>
              <div className="bg-white rounded-xl shadow-sm border border-border overflow-hidden">
                <table className="w-full text-left text-foreground">
                  <tbody className="divide-y divide-border">
                    <tr className="flex flex-col md:table-row hover:bg-surface-muted transition-colors">
                      <th className="md:w-1/4 px-6 md:px-8 py-5 bg-surface font-bold align-top border-r border-border/50 text-brand">会社名</th>
                      <td className="px-6 md:px-8 py-5 font-bold text-lg">{companyData.name}</td>
                    </tr>
                    <tr className="flex flex-col md:table-row hover:bg-surface-muted transition-colors">
                      <th className="md:w-1/4 px-6 md:px-8 py-5 bg-surface font-bold align-top border-r border-border/50 text-brand">代表者</th>
                      <td className="px-6 md:px-8 py-5">{companyData.ceo}</td>
                    </tr>
                    <tr className="flex flex-col md:table-row hover:bg-surface-muted transition-colors">
                      <th className="md:w-1/4 px-6 md:px-8 py-5 bg-surface font-bold align-top border-r border-border/50 text-brand">設立年月</th>
                      <td className="px-6 md:px-8 py-5">{companyData.established}</td>
                    </tr>
                    <tr className="flex flex-col md:table-row hover:bg-surface-muted transition-colors">
                      <th className="md:w-1/4 px-6 md:px-8 py-5 bg-surface font-bold align-top border-r border-border/50 text-brand">事業内容</th>
                      <td className="px-6 md:px-8 py-5 leading-relaxed">{companyData.description}</td>
                    </tr>
                    {companyData.employeeCount.status === "confirmed" && (
                      <tr className="flex flex-col md:table-row hover:bg-surface-muted transition-colors">
                        <th className="md:w-1/4 px-6 md:px-8 py-5 bg-surface font-bold align-top border-r border-border/50 text-brand">従業員数</th>
                        <td className="px-6 md:px-8 py-5">{companyData.employeeCount.value}</td>
                      </tr>
                    )}
                    <tr className="flex flex-col md:table-row hover:bg-surface-muted transition-colors">
                      <th className="md:w-1/4 px-6 md:px-8 py-5 bg-surface font-bold align-top border-r border-border/50 text-brand">公式URL</th>
                      <td className="px-6 md:px-8 py-5 font-inter">
                        <a href={companyData.url} className="text-brand hover:underline font-medium" target="_blank" rel="noopener noreferrer">
                          {companyData.url}
                        </a>
                      </td>
                    </tr>
                    {companyData.banks.status === "confirmed" && (
                      <tr className="flex flex-col md:table-row hover:bg-surface-muted transition-colors">
                        <th className="md:w-1/4 px-6 md:px-8 py-5 bg-surface font-bold align-top border-r border-border/50 text-brand">取引銀行</th>
                        <td className="px-6 md:px-8 py-5">
                          {companyData.banks.value.map((bank, i) => (
                            <div key={i} className="mb-1 last:mb-0">{bank}</div>
                          ))}
                        </td>
                      </tr>
                    )}
                    {companyData.clients.status === "confirmed" && (
                      <tr className="flex flex-col md:table-row hover:bg-surface-muted transition-colors">
                        <th className="md:w-1/4 px-6 md:px-8 py-5 bg-surface font-bold align-top border-r border-border/50 text-brand">主な取引先</th>
                        <td className="px-6 md:px-8 py-5 leading-relaxed">
                          {companyData.clients.value.join("、")} ほか<br/><span className="text-sm text-foreground-muted">（五十音順）</span>
                        </td>
                      </tr>
                    )}
                    {companyData.partners.status === "confirmed" && (
                      <tr className="flex flex-col md:table-row hover:bg-surface-muted transition-colors">
                        <th className="md:w-1/4 px-6 md:px-8 py-5 bg-surface font-bold align-top border-r border-border/50 text-brand">産地・提携</th>
                        <td className="px-6 md:px-8 py-5 leading-relaxed">
                          {companyData.partners.value.join("、")} ほか多数
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </Reveal>
          </div>

          {/* Access Map List (Summary) */}
          <Reveal delay={300}>
            <div className="bg-brand text-white p-10 md:p-12 rounded-xl relative overflow-hidden shadow-lg">
              <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
                <MapPin size={240} />
              </div>
              <div className="relative z-10">
                <h2 className="text-3xl font-bold mb-4 font-serif">各拠点情報</h2>
                <p className="mb-10 text-brand-soft text-lg max-w-2xl">
                  東京（築地、大田、豊洲）および大阪に拠点を構え、全国の青果流通を支えています。<br/>詳細な地図やアクセス方法は<Link href="/locations" className="text-accent hover:underline font-bold">拠点情報ページ</Link>をご覧ください。
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {locationsData.map((loc) => (
                    <div key={loc.id} className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20 hover:bg-white/15 transition-colors">
                      <h3 className="text-xl font-bold mb-3 border-b border-white/20 pb-3">{loc.name}</h3>
                      <p className="text-sm text-white/80 mb-4 leading-relaxed font-inter">
                        〒{loc.zip}<br/>
                        <span className="font-sans">{loc.address}</span>
                      </p>
                      <div className="font-inter space-y-1">
                        {loc.tel.status === "confirmed" && (
                          <p className="text-sm font-bold tracking-wider text-white">TEL: {loc.tel.value}</p>
                        )}
                        {loc.fax.status === "confirmed" && (
                          <p className="text-sm text-brand-soft">FAX: {loc.fax.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </div>
  );
}
