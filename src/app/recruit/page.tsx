import { MapPin, ArrowRight } from "lucide-react";
import Link from "next/link";
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
        backgroundImage="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80"
      />

      {/* Intro */}
      <section className="py-24 bg-background">
        <Container className="max-w-4xl text-center">
          <Reveal>
            <h2 className="text-2xl md:text-4xl font-bold mb-8 text-foreground font-serif leading-relaxed">
              一緒に「日本の食」を<br className="hidden md:block"/>支えませんか？
            </h2>
            <p className="text-lg md:text-xl leading-relaxed text-foreground-muted">
              東京促成青果では、青果物流通の最前線で活躍する人材を募集しています。
              生産者と消費者をつなぐ重要な役割を担い、食の安定供給に貢献する仕事です。
            </p>
          </Reveal>
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
                  <Reveal key={job.id} delay={index * 100}>
                    <Link 
                      href={`/recruit/${job.id}`}
                      className="block bg-white p-8 md:p-10 rounded-2xl border border-border hover:border-brand hover:shadow-lg transition-all duration-300 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 relative overflow-hidden"
                    >
                      {/* Decorative accent line */}
                      <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-accent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      
                      <div className="flex flex-col md:flex-row justify-between md:items-center gap-6">
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
                            <p className="text-foreground-muted line-clamp-2 text-base leading-relaxed max-w-2xl">
                              {job.description.value}
                            </p>
                          )}
                        </div>
                        <div className="shrink-0 flex items-center justify-end text-accent mt-4 md:mt-0 font-bold tracking-widest">
                          <span className="mr-3 group-hover:mr-4 transition-all uppercase text-sm">詳細を見る</span>
                          <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </Link>
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
