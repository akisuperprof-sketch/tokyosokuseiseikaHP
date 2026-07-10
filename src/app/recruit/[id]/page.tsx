import { MapPin, ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { jobsData } from "@/lib/content/recruit";
import { locationsData } from "@/lib/content/repository";

export async function generateMetadata({ params }: { params: { id: string } }) {
  const job = jobsData.find((j) => j.id === params.id && j.status === "open");
  if (!job) return { title: "募集が見つかりません" };
  const location = locationsData.find((l) => l.id === job.locationId);
  return {
    title: `${job.title} | ${location?.name ?? ""} 採用情報`,
  };
}

export function generateStaticParams() {
  return jobsData.filter(job => job.status === "open").map(job => ({
    id: job.id
  }));
}

export default function JobDetailPage({ params }: { params: { id: string } }) {
  const job = jobsData.find((j) => j.id === params.id && j.status === "open");

  if (!job) {
    notFound();
  }

  const location = locationsData.find((l) => l.id === job.locationId);

  return (
    <div className="w-full">
      {/* Page Header */}
      <section className="bg-foreground text-white py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <Link 
            href="/recruit" 
            className="inline-flex items-center gap-2 text-gray-300 hover:text-white mb-8 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-sm"
          >
            <ArrowLeft size={16} /> 採用情報一覧へ戻る
          </Link>
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="bg-brand text-white font-medium px-3 py-1 rounded-full text-sm">
              {job.employmentType.status === "confirmed" ? job.employmentType.value : "雇用形態未確認"}
            </span>
            {location && (
              <span className="flex items-center gap-1 text-gray-300 text-sm">
                <MapPin size={16} />
                {location.name}
              </span>
            )}
          </div>
          <h1 className="text-3xl md:text-4xl font-bold">{job.title}</h1>
        </div>
      </section>

      {/* Job Details */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          
          <div className="bg-white rounded-lg border border-border shadow-sm overflow-hidden mb-12">
            <h2 className="bg-surface px-6 py-4 border-b border-border text-lg font-bold text-foreground">
              募集要項
            </h2>
            <div className="p-6 md:p-8">
              <dl className="divide-y divide-border">
                {/* 職種 */}
                <div className="py-4 flex flex-col md:flex-row gap-2 md:gap-8">
                  <dt className="md:w-1/4 font-bold text-foreground shrink-0">職種</dt>
                  <dd className="md:w-3/4 text-foreground/90">{job.title}</dd>
                </div>

                {/* 雇用形態 */}
                {job.employmentType.status === "confirmed" && (
                  <div className="py-4 flex flex-col md:flex-row gap-2 md:gap-8">
                    <dt className="md:w-1/4 font-bold text-foreground shrink-0">雇用形態</dt>
                    <dd className="md:w-3/4 text-foreground/90">{job.employmentType.value}</dd>
                  </div>
                )}

                {/* 仕事内容 */}
                {job.description.status === "confirmed" && (
                  <div className="py-4 flex flex-col md:flex-row gap-2 md:gap-8">
                    <dt className="md:w-1/4 font-bold text-foreground shrink-0">仕事内容</dt>
                    <dd className="md:w-3/4 text-foreground/90 leading-relaxed whitespace-pre-line">
                      {job.description.value}
                    </dd>
                  </div>
                )}

                {/* 勤務地 */}
                {location && (
                  <div className="py-4 flex flex-col md:flex-row gap-2 md:gap-8">
                    <dt className="md:w-1/4 font-bold text-foreground shrink-0">勤務地</dt>
                    <dd className="md:w-3/4 text-foreground/90">
                      <p className="font-bold mb-1">{location.name}</p>
                      <p className="text-sm text-muted mb-2">〒{location.zip} {location.address}</p>
                      <p className="text-sm">
                        {location.access.join(" / ")}
                      </p>
                    </dd>
                  </div>
                )}

                {/* 応募資格 */}
                {job.requirements?.status === "confirmed" && (
                  <div className="py-4 flex flex-col md:flex-row gap-2 md:gap-8">
                    <dt className="md:w-1/4 font-bold text-foreground shrink-0">応募資格</dt>
                    <dd className="md:w-3/4 text-foreground/90">
                      <ul className="list-disc pl-5 space-y-1">
                        {job.requirements.value.map((req, i) => (
                          <li key={i}>{req}</li>
                        ))}
                      </ul>
                    </dd>
                  </div>
                )}

                {/* 勤務時間 */}
                {job.workingHours?.status === "confirmed" && (
                  <div className="py-4 flex flex-col md:flex-row gap-2 md:gap-8">
                    <dt className="md:w-1/4 font-bold text-foreground shrink-0">勤務時間</dt>
                    <dd className="md:w-3/4 text-foreground/90 whitespace-pre-line">
                      {job.workingHours.value}
                    </dd>
                  </div>
                )}

                {/* 給与 */}
                {job.salary?.status === "confirmed" && (
                  <div className="py-4 flex flex-col md:flex-row gap-2 md:gap-8">
                    <dt className="md:w-1/4 font-bold text-foreground shrink-0">給与</dt>
                    <dd className="md:w-3/4 text-foreground/90 whitespace-pre-line">
                      {job.salary.value}
                    </dd>
                  </div>
                )}

                {/* 休日休暇 */}
                {job.holidays?.status === "confirmed" && (
                  <div className="py-4 flex flex-col md:flex-row gap-2 md:gap-8">
                    <dt className="md:w-1/4 font-bold text-foreground shrink-0">休日・休暇</dt>
                    <dd className="md:w-3/4 text-foreground/90 whitespace-pre-line">
                      {job.holidays.value}
                    </dd>
                  </div>
                )}

                {/* 待遇・福利厚生 */}
                {job.benefits?.status === "confirmed" && (
                  <div className="py-4 flex flex-col md:flex-row gap-2 md:gap-8">
                    <dt className="md:w-1/4 font-bold text-foreground shrink-0">待遇・福利厚生</dt>
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
            </div>
          </div>

          <div className="text-center bg-surface p-8 md:p-12 rounded-lg border border-border">
            <h3 className="text-xl font-bold mb-4 text-foreground">ご応募・お問い合わせ</h3>
            <p className="text-foreground/80 mb-8 max-w-xl mx-auto">
              この職種に関するご質問やご応募については、お問い合わせフォームより「採用に関するお問い合わせ」を選択の上、ご連絡ください。
            </p>
            <Link 
              href={`/contact?type=recruit&job=${job.id}`} 
              className="bg-brand hover:bg-brand-dark text-white px-8 py-4 rounded-md font-medium transition-colors inline-flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand shadow-sm"
            >
              応募・お問い合わせフォームへ
              <ArrowRight size={18} />
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
}
