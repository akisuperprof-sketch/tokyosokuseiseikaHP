import { MapPin, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { jobsData } from "@/lib/content/recruit";
import { locationsData } from "@/lib/content/repository";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";

export const metadata = {
  title: "採用情報",
  description: "東京促成青果株式会社の採用情報をご案内します。",
};

export default function RecruitPage() {
  const openJobs = jobsData.filter(job => job.status === "open");

  return (
    <div className="w-full">
      <PageHero
        title="採用情報"
        subtitle="Recruit"
        description="青果物流通の最前線で、日本の食を支える仲間を募集しています。"
        backgroundImage="/images/ai/recruit/recruit-001.jpg"
      />

      {/* Intro */}
      <section className="py-24 bg-background">
        <Container className="max-w-5xl">
          <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-16">
            <Reveal className="w-full md:w-1/2">
              <h2 className="text-2xl md:text-4xl font-bold mb-8 text-foreground font-serif leading-relaxed">
                一緒に「日本の食」を<br className="hidden md:block"/>支えませんか？
              </h2>
              <p className="text-lg md:text-xl leading-relaxed text-foreground-muted mb-6">
                東京促成青果では、青果物流通の最前線で活躍する人材を募集しています。
                生産者と消費者をつなぐ重要な役割を担い、食の安定供給に貢献する仕事です。
              </p>
            </Reveal>
            <Reveal delay={200} className="w-full md:w-1/2">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-border">
                <Image 
                  src="/images/ai/recruit/recruit-002.jpg" 
                  alt="働く環境" 
                  fill 
                  className="object-cover hover:scale-105 transition-transform duration-1000"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Jobs List */}
      <section className="py-24 bg-surface border-t border-border min-h-[40vh]">
        <Container className="max-w-4xl">
          <SectionHeader 
            title="募集中の職種" 
            subtitle="Open Positions" 
          />

          {openJobs.length === 0 ? (
            <Reveal delay={100}>
              <div className="bg-white p-12 md:p-16 text-center rounded-2xl border border-border shadow-sm">
                <p className="text-foreground-muted text-lg font-medium tracking-wide">現在公開中の募集情報はありません。</p>
              </div>
            </Reveal>
          ) : (
            <div className="space-y-6">
              {openJobs.map((job, index) => {
                const location = locationsData.find(loc => loc.id === job.locationId);
                return (
                  <Reveal key={job.id} delay={index * 100} direction="up">
                    <details className="group bg-white rounded-2xl border border-border hover:border-brand hover:shadow-lg transition-all duration-300 overflow-hidden">
                      <summary className="cursor-pointer p-8 md:p-10 list-none [&::-webkit-details-marker]:hidden flex flex-col md:flex-row justify-between md:items-start gap-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 relative">
                        {/* Decorative accent line */}
                        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-accent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        
                        <div className="flex-1">
                          <div className="flex flex-wrap items-center gap-3 mb-4">
                            <span className="bg-brand/10 text-brand font-bold tracking-widest px-4 py-1.5 rounded-full text-xs">
                              {job.employmentType.status === "confirmed" ? job.employmentType.value : "雇用形態未確認"}
                            </span>
                            {location && (
                              <span className="flex items-center gap-1.5 text-foreground-muted text-sm font-medium">
                                <MapPin size={16} className="text-brand/50" />
                                {location.name}
                              </span>
                            )}
                          </div>
                          <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-brand transition-colors font-serif tracking-wide">
                            {job.title}
                          </h3>
                          {job.description.status === "confirmed" && (
                            <p className="text-foreground-muted line-clamp-2 text-base leading-relaxed max-w-2xl group-open:hidden">
                              {job.description.value}
                            </p>
                          )}
                        </div>
                        <div className="shrink-0 flex items-center justify-end text-accent mt-4 md:mt-0 font-bold tracking-widest bg-brand-soft/50 px-4 py-2 rounded-full group-hover:bg-brand-soft transition-colors">
                          <span className="mr-2 text-sm group-open:hidden">詳細を見る</span>
                          <span className="mr-2 text-sm hidden group-open:inline">閉じる</span>
                          <ArrowRight size={18} className="group-open:rotate-90 transition-transform duration-300" />
                        </div>
                      </summary>
                      
                      <div className="p-8 md:p-10 pt-0 border-t border-border mt-4">
                        <div className="pt-6 animate-in fade-in slide-in-from-top-4 duration-500">
                          <dl className="divide-y divide-border/50 text-sm md:text-base">
                            {job.description.status === "confirmed" && (
                              <div className="py-4 flex flex-col md:flex-row gap-2 md:gap-8">
                                <dt className="md:w-1/4 font-bold text-brand shrink-0">仕事内容</dt>
                                <dd className="md:w-3/4 text-foreground/90 leading-relaxed whitespace-pre-line">{job.description.value}</dd>
                              </div>
                            )}
                            {job.requirements?.status === "confirmed" && (
                              <div className="py-4 flex flex-col md:flex-row gap-2 md:gap-8">
                                <dt className="md:w-1/4 font-bold text-brand shrink-0">応募資格</dt>
                                <dd className="md:w-3/4 text-foreground/90">
                                  <ul className="list-disc pl-5 space-y-1">
                                    {job.requirements.value.map((req, i) => (
                                      <li key={i}>{req}</li>
                                    ))}
                                  </ul>
                                </dd>
                              </div>
                            )}
                            {job.workingHours?.status === "confirmed" && (
                              <div className="py-4 flex flex-col md:flex-row gap-2 md:gap-8">
                                <dt className="md:w-1/4 font-bold text-brand shrink-0">勤務時間</dt>
                                <dd className="md:w-3/4 text-foreground/90 whitespace-pre-line">{job.workingHours.value}</dd>
                              </div>
                            )}
                            {job.salary?.status === "confirmed" && (
                              <div className="py-4 flex flex-col md:flex-row gap-2 md:gap-8">
                                <dt className="md:w-1/4 font-bold text-brand shrink-0">給与</dt>
                                <dd className="md:w-3/4 text-foreground/90 whitespace-pre-line">{job.salary.value}</dd>
                              </div>
                            )}
                            {job.holidays?.status === "confirmed" && (
                              <div className="py-4 flex flex-col md:flex-row gap-2 md:gap-8">
                                <dt className="md:w-1/4 font-bold text-brand shrink-0">休日・休暇</dt>
                                <dd className="md:w-3/4 text-foreground/90 whitespace-pre-line">{job.holidays.value}</dd>
                              </div>
                            )}
                            {job.benefits?.status === "confirmed" && (
                              <div className="py-4 flex flex-col md:flex-row gap-2 md:gap-8">
                                <dt className="md:w-1/4 font-bold text-brand shrink-0">待遇・福利厚生</dt>
                                <dd className="md:w-3/4 text-foreground/90">
                                  <ul className="list-disc pl-5 space-y-1">
                                    {job.benefits.value.map((benefit, i) => (
                                      <li key={i}>{benefit}</li>
                                    ))}
                                  </ul>
                                </dd>
                              </div>
                            )}
                          </dl>
                          
                          <div className="mt-10 text-center bg-surface p-8 rounded-xl border border-border/50">
                            <p className="mb-6 text-foreground-muted text-sm max-w-lg mx-auto">この職種に関するご質問やご応募は、お問い合わせフォームより「採用について」をご選択の上、ご連絡ください。</p>
                            <Link 
                              href={`/contact?type=recruit&job=${job.id}`} 
                              className="btn-accent inline-flex group"
                            >
                              応募・お問い合わせ
                              <ArrowRight size={18} className="hover-arrow" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </details>
                  </Reveal>
                );
              })}
            </div>
          )}
        </Container>
      </section>
    </div>
  );
}
