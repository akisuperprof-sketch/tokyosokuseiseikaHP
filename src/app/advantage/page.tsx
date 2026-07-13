import { ArrowRight, Package, MapPin, Building2, Beaker, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { advantageData } from "@/lib/content/advantage";
import { canDisplayImage } from "@/lib/content/image";
import { clsx } from "clsx";

export const metadata = {
  title: "当社の強み｜東京促成青果株式会社",
  description: "東京促成青果株式会社の当社の強みをご紹介します。豊洲市場内での荷受業務、大田・大阪での仲卸業務、ピッキング・袋詰め加工、産地からの集荷、商品開発への取り組みをご案内します。",
};

export default function AdvantagePage() {
  const { hero, overview, cards, testKitchen, regionalSupport, cta } = advantageData;

  // Filter confirmed cards
  const visibleCards = cards.filter(card => card.status === "confirmed");

  return (
    <div className="w-full bg-background">
      <PageHero
        title={hero.title}
        subtitle={hero.subtitle}
        description={hero.intro}
        backgroundImage={hero.image?.src}
      />

      {/* Overview */}
      <section className="py-16 md:py-24 bg-surface border-b border-border">
        <Container>
          <Reveal>
            <div className="flex flex-wrap justify-center gap-4 md:gap-8">
              {overview.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 bg-background px-4 py-2 rounded-full shadow-sm border border-border">
                  <CheckCircle2 className="text-brand w-4 h-4" />
                  <span className="text-sm md:text-base font-medium">{item}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Main Advantages (Bento Grid) */}
      <section className="py-24">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
            {visibleCards.map((card, idx) => {
              const isLarge = card.layout === "large";
              const colSpan = isLarge ? "md:col-span-8" : "md:col-span-4";
              
              // Alternate styles based on index for a varied bento look
              const styleType = idx % 3;
              const bgClass = styleType === 0 ? "bg-brand text-white" : styleType === 1 ? "bg-surface text-foreground border border-border" : "bg-background text-foreground border border-border shadow-sm";
              const numberColor = styleType === 0 ? "text-white/30" : "text-brand/20";
              const textMuted = styleType === 0 ? "text-white/80" : "text-foreground-muted";

              return (
                <Reveal 
                  key={card.id} 
                  direction={idx % 2 === 0 ? "right" : "left"} 
                  className={clsx("flex flex-col rounded-2xl overflow-hidden hover-card transition-all duration-300", colSpan, bgClass)}
                >
                  <div className="p-8 md:p-10 flex-1 flex flex-col relative z-10">
                    <span className={clsx("font-serif text-5xl md:text-6xl font-bold mb-6 absolute top-6 right-6 select-none", numberColor)}>
                      {card.number}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold mb-6 font-serif mt-4">
                      {card.title}
                    </h3>
                    <p className={clsx("text-lg leading-relaxed mb-6", textMuted)}>
                      {card.description.value}
                      {card.extraInfo && card.extraInfo.status === "confirmed" && (
                        <span className="block mt-2 font-medium">
                          {card.extraInfo.value}
                        </span>
                      )}
                    </p>
                  </div>
                  {canDisplayImage(card.image) && (
                    <div className="relative h-48 md:h-64 w-full overflow-hidden mt-auto">
                      <div 
                        className="absolute inset-0 bg-cover bg-center hover-image-zoom transition-transform duration-700"
                        style={{ backgroundImage: `url('${card.image.src}')` }}
                        aria-label={card.image.alt}
                      />
                    </div>
                  )}
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Test Kitchen Section */}
      {testKitchen.status === "confirmed" && (
        <section className="py-24 bg-surface border-t border-border overflow-hidden">
          <Container>
            <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24">
              <Reveal direction="right" className="flex-1 w-full order-2 md:order-1">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl bg-background border border-border flex items-center justify-center">
                  {/* Placeholder for actual image if none exists */}
                  <div className="text-center p-8">
                     <Beaker className="w-16 h-16 mx-auto text-brand/20 mb-4" />
                     <div className="w-24 h-1 bg-brand/30 mx-auto rounded-full" />
                  </div>
                </div>
              </Reveal>
              <Reveal direction="left" className="flex-1 w-full order-1 md:order-2">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif">{testKitchen.title}</h2>
                <p className="text-lg text-foreground-muted leading-relaxed">
                  {testKitchen.description}
                </p>
              </Reveal>
            </div>
          </Container>
        </section>
      )}

      {/* Regional Support Section */}
      {regionalSupport.status === "confirmed" && (
        <section className="py-24 bg-background border-t border-border">
          <Container className="max-w-4xl text-center">
            <Reveal>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif">{regionalSupport.title}</h2>
              <p className="text-lg text-foreground-muted leading-relaxed">
                {regionalSupport.description}
              </p>
              
              <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
                <div className="flex flex-col items-center bg-surface p-6 rounded-xl border border-border w-48 hover-card">
                  <MapPin className="w-8 h-8 text-brand mb-3" />
                  <span className="font-bold">産地</span>
                </div>
                <ArrowRight className="text-brand/30 hidden md:block w-8 h-8" />
                <div className="flex flex-col items-center bg-brand text-white p-6 rounded-xl w-56 hover-card scale-105">
                  <Building2 className="w-8 h-8 mb-3" />
                  <span className="font-bold">東京促成青果</span>
                </div>
                <ArrowRight className="text-brand/30 hidden md:block w-8 h-8" />
                <div className="flex flex-col items-center bg-surface p-6 rounded-xl border border-border w-48 hover-card">
                  <Package className="w-8 h-8 text-brand mb-3" />
                  <span className="font-bold">販路</span>
                </div>
              </div>
            </Reveal>
          </Container>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-24 bg-brand text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10 z-10 mix-blend-multiply"></div>
        <Container className="text-center relative z-20">
          <Reveal>
            <h2 className="text-3xl font-bold mb-6 font-serif">{cta.title}</h2>
            <p className="text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
              {cta.description}
            </p>
            <Link 
              href={cta.href} 
              className="btn-accent group inline-flex"
            >
              {cta.buttonText}
              <ArrowRight size={18} className="hover-arrow" />
            </Link>
          </Reveal>
        </Container>
      </section>
    </div>
  );
}
