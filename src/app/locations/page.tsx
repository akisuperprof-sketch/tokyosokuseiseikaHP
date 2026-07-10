import { MapPin, Phone, Printer, ExternalLink } from "lucide-react";
import { locationsData } from "@/lib/content/repository";

export const metadata = {
  title: "拠点情報",
  description: "東京促成青果株式会社の各拠点（築地本社、大田営業部、大阪営業部、豊洲営業部）のアクセス情報をご案内します。",
};

export default function LocationsPage() {
  return (
    <div className="w-full">
      {/* Page Header */}
      <section className="bg-foreground text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">拠点情報</h1>
          <p className="text-gray-300 text-lg font-inter">Locations</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          
          {/* Quick Navigation */}
          <div className="flex flex-wrap gap-3 mb-16">
            {locationsData.map((loc) => (
              <a 
                key={loc.id} 
                href={`#${loc.id}`}
                className="bg-white border border-border px-4 py-2 rounded-full text-sm font-medium hover:border-brand hover:text-brand transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
              >
                {loc.name}
              </a>
            ))}
          </div>

          <div className="space-y-20">
            {locationsData.map((loc) => {
              const googleMapsQuery = encodeURIComponent(`${loc.name} ${loc.address}`);
              const embedUrl = `https://maps.google.com/maps?q=${googleMapsQuery}&t=&z=15&ie=UTF8&iwloc=&output=embed`;
              const externalUrl = `https://www.google.com/maps/search/?api=1&query=${googleMapsQuery}`;

              return (
                <div key={loc.id} id={loc.id} className="scroll-mt-24">
                  <div className="flex items-center gap-3 mb-6 border-b border-border pb-4">
                    <MapPin className="text-brand" size={28} />
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground">{loc.name}</h2>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                    
                    {/* Info */}
                    <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm border border-border">
                      <div className="mb-8">
                        <p className="text-sm text-muted mb-1 font-inter">〒{loc.zip}</p>
                        <p className="text-lg text-foreground font-medium leading-relaxed">{loc.address}</p>
                      </div>

                      <div className="space-y-4 mb-8">
                        {loc.tel.status === "confirmed" && (
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-surface-accent flex items-center justify-center text-brand shrink-0">
                              <Phone size={18} />
                            </div>
                            <div>
                              <p className="text-xs text-muted mb-0.5">電話番号</p>
                              <p className="font-inter font-medium text-lg">{loc.tel.value}</p>
                            </div>
                          </div>
                        )}
                        {loc.fax.status === "confirmed" && (
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-surface-accent flex items-center justify-center text-brand shrink-0">
                              <Printer size={18} />
                            </div>
                            <div>
                              <p className="text-xs text-muted mb-0.5">FAX番号</p>
                              <p className="font-inter font-medium text-lg">{loc.fax.value}</p>
                            </div>
                          </div>
                        )}
                      </div>

                      <div>
                        <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
                          <MapPin size={18} className="text-brand" />
                          アクセス
                        </h3>
                        <ul className="space-y-2">
                          {loc.access.map((item, index) => (
                            <li key={index} className="text-foreground/80 text-sm leading-relaxed relative pl-4 before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:bg-brand before:rounded-full">
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Map */}
                    <div className="h-[400px] lg:h-full min-h-[400px] bg-surface rounded-lg border border-border overflow-hidden relative group">
                      <iframe 
                        title={`${loc.name}の地図`}
                        width="100%" 
                        height="100%" 
                        style={{ border: 0 }} 
                        loading="lazy" 
                        allowFullScreen 
                        referrerPolicy="no-referrer-when-downgrade"
                        src={embedUrl}
                        className="absolute inset-0"
                      />
                      <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity focus-within:opacity-100">
                        <a 
                          href={externalUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="bg-white/90 backdrop-blur-sm text-foreground hover:text-brand px-4 py-2 rounded-md shadow-md text-sm font-medium flex items-center gap-2 border border-border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
                        >
                          Google Mapsで開く
                          <ExternalLink size={16} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
