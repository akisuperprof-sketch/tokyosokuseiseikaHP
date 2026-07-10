import { MapPin, ArrowRight, Briefcase } from "lucide-react";
import Link from "next/link";
import { jobsData } from "@/lib/content/recruit";
import { locationsData } from "@/lib/content/repository";

export const metadata = {
  title: "採用情報",
  description: "東京促成青果株式会社の採用情報をご案内します。",
};

export default function RecruitPage() {
  const openJobs = jobsData.filter(job => job.status === "open");

  return (
    <div className="w-full">
      {/* Page Header */}
      <section className="bg-foreground text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">採用情報</h1>
          <p className="text-gray-300 text-lg font-inter">Recruit</p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-2xl font-bold mb-6 text-foreground">一緒に「日本の食」を支えませんか？</h2>
          <p className="text-lg leading-relaxed text-foreground/80">
            東京促成青果では、青果物流通の最前線で活躍する人材を募集しています。
            生産者と消費者をつなぐ重要な役割を担い、食の安定供給に貢献する仕事です。
          </p>
        </div>
      </section>

      {/* Jobs List */}
      <section className="py-16 md:py-24 bg-surface border-t border-border min-h-[40vh]">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-center gap-3 mb-8">
            <Briefcase className="text-brand" size={28} />
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">募集中の職種</h2>
          </div>

          {openJobs.length === 0 ? (
            <div className="bg-white p-8 md:p-12 text-center rounded-lg border border-border shadow-sm">
              <p className="text-foreground/70 text-lg">現在公開中の募集情報はありません。</p>
            </div>
          ) : (
            <div className="space-y-6">
              {openJobs.map(job => {
                const location = locationsData.find(loc => loc.id === job.locationId);
                return (
                  <Link 
                    key={job.id} 
                    href={`/recruit/${job.id}`}
                    className="block bg-white p-6 md:p-8 rounded-lg border border-border hover:border-brand hover:shadow-md transition-all group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
                  >
                    <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
                      <div>
                        <div className="flex flex-wrap items-center gap-3 mb-3">
                          <span className="bg-surface-accent text-brand font-medium px-3 py-1 rounded-full text-sm">
                            {job.employmentType.status === "confirmed" ? job.employmentType.value : "雇用形態未確認"}
                          </span>
                          {location && (
                            <span className="flex items-center gap-1 text-muted text-sm">
                              <MapPin size={16} />
                              {location.name}
                            </span>
                          )}
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2 group-hover:text-brand transition-colors">
                          {job.title}
                        </h3>
                        {job.description.status === "confirmed" && (
                          <p className="text-foreground/80 line-clamp-2 text-sm leading-relaxed">
                            {job.description.value}
                          </p>
                        )}
                      </div>
                      <div className="shrink-0 flex items-center justify-end text-brand mt-2 md:mt-0">
                        <span className="font-medium mr-2 group-hover:mr-3 transition-all">詳細を見る</span>
                        <ArrowRight size={20} />
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </section>

    </div>
  );
}
