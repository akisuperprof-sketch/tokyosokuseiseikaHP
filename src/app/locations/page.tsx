import { MapPin, Phone, Printer, ExternalLink, Navigation } from "lucide-react";
import { locationsData } from "@/lib/content/repository";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";

export const metadata = {
  title: "拠点情報",
  description: "東京促成青果株式会社の各拠点（築地本社、大田営業部、大阪営業部、豊洲営業部）のアクセス情報をご案内します。",
};

export default function LocationsPage() {
  return (
    <div className="w-full">
      <PageHero
        title="拠点情報"
        subtitle="Locations"
        description="全国の青果流通を支える、当社の主要拠点をご紹介します。"
        backgroundImage="https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&q=80"
      />

      {/* Main Content */}
      <section className="py-24 bg-background">
        <Container className="max-w-5xl">
          
          {/* Quick Navigation */}
          <Reveal>
            <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-24">
              {locationsData.map((loc) => (
                <a 
                  key={loc.id} 
                  href={`#${loc.id}`}
                  className="bg-white border-2 border-border/50 px-6 py-3 rounded-full text-sm md:text-base font-bold text-foreground-muted hover:border-brand hover:text-brand hover:shadow-md transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 flex items-center gap-2"
                >
                  <MapPin size={16} className="text-brand/50" />
                  {loc.name}
                </a>
              ))}
            </div>
          </Reveal>

          <div className="space-y-32">
            {locationsData.map((loc, index) => {
              const googleMapsQuery = encodeURIComponent(`${loc.name} ${loc.address}`);
              const embedUrl = `https://maps.google.com/maps?q=${googleMapsQuery}&t=&z=15&ie=UTF8&iwloc=&output=embed`;
              const externalUrl = `https://www.google.com/maps/search/?api=1&query=${googleMapsQuery}`;

              return (
                <div key={loc.id} id={loc.id} className="scroll-mt-32">
                  <Reveal delay={index * 100}>
                    <div className="flex items-center gap-4 mb-10 pb-6 border-b-2 border-brand/10">
                      <div className="w-12 h-12 bg-brand-soft rounded-2xl flex items-center justify-center text-brand shrink-0">
                        <MapPin size={24} />
                      </div>
                      <h2 className="text-3xl md:text-4xl font-bold text-foreground font-serif tracking-wide">{loc.name}</h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
                      
                      {/* Info Panel */}
                      <div className="lg:col-span-5 bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-border flex flex-col">
                        <div className="mb-10">
                          <p className="inline-block px-3 py-1 bg-surface-strong text-foreground-muted text-sm font-bold tracking-widest rounded-md font-inter mb-4">〒{loc.zip}</p>
                          <p className="text-xl text-foreground font-medium leading-relaxed">{loc.address}</p>
                        </div>

                        <div className="space-y-6 mb-10 flex-grow">
                          {loc.tel.status === "confirmed" && (
                            <div className="flex items-center gap-4 p-4 bg-surface rounded-xl">
                              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-brand shrink-0 shadow-sm">
                                <Phone size={20} />
                              </div>
                              <div>
                                <p className="text-xs text-brand font-bold tracking-widest mb-1">PHONE</p>
                                <p className="font-inter font-bold text-xl">{loc.tel.value}</p>
                              </div>
                            </div>
                          )}
                          {loc.fax.status === "confirmed" && (
                            <div className="flex items-center gap-4 p-4 bg-surface rounded-xl">
                              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-foreground-muted shrink-0 shadow-sm">
                                <Printer size={20} />
                              </div>
                              <div>
                                <p className="text-xs text-foreground-muted font-bold tracking-widest mb-1">FAX</p>
                                <p className="font-inter font-medium text-lg">{loc.fax.value}</p>
                              </div>
                            </div>
                          )}
                        </div>

                        <div className="bg-brand/5 p-6 rounded-xl border border-brand/10">
                          <h3 className="font-bold text-brand mb-4 flex items-center gap-2">
                            <Navigation size={18} />
                            アクセス
                          </h3>
                          <ul className="space-y-3">
                            {loc.access.map((item, i) => (
                              <li key={i} className="text-foreground/80 text-sm leading-relaxed flex items-start gap-3">
                                <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0 mt-2"></span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Map Container */}
                      <div className="lg:col-span-7 h-[400px] lg:h-auto min-h-[400px] bg-surface rounded-2xl border-4 border-white shadow-lg overflow-hidden relative group">
                        <iframe 
                          title={`${loc.name}の地図`}
                          width="100%" 
                          height="100%" 
                          style={{ border: 0 }} 
                          loading="lazy" 
                          allowFullScreen 
                          referrerPolicy="no-referrer-when-downgrade"
                          src={embedUrl}
                          className="absolute inset-0 grayscale contrast-125 opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                        />
                        <div className="absolute top-6 right-6 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 focus-within:opacity-100">
                          <a 
                            href={externalUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="bg-brand text-white hover:bg-brand-hover px-6 py-3 rounded-full shadow-xl text-sm font-bold flex items-center gap-2 transition-transform hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand group"
                          >
                            Google Mapsで開く
                            <ExternalLink size={16} className="hover-arrow" />
                          </a>
                        </div>
                      </div>

                    </div>
                  </Reveal>
                </div>
              );
            })}
          </div>
        </Container>
      </section>
    </div>
  );
}
