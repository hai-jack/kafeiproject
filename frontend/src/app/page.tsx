import { FadeIn } from "@/components/animations";
import { ArrowRight, Coffee, Navigation } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-x-hidden selection:bg-roast selection:text-sand">
      {/* Navigation */}
      <nav className="fixed top-0 inset-x-0 z-50 glass py-4 px-6 md:px-12 flex justify-between items-center mix-blend-difference text-sand">
        <div className="font-heading font-semibold text-2xl tracking-widest lowercase">Aura</div>
        <div className="hidden md:flex gap-8 text-sm uppercase tracking-widest font-mono">
          <Link href="#store" className="hover:opacity-70 transition-opacity">Store</Link>
          <Link href="#story" className="hover:opacity-70 transition-opacity">Process</Link>
          <Link href="#spaces" className="hover:opacity-70 transition-opacity">Spaces</Link>
        </div>
        <button className="h-10 px-5 bg-sand text-ink text-sm font-mono uppercase tracking-wider rounded-full hover:bg-white transition-colors">
          Shop Beans
        </button>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex flex-col justify-end px-6 md:px-12 pb-12 md:pb-24 pt-32">
        <div className="absolute inset-0 max-w-7xl mx-auto flex items-center justify-center -z-10 px-6 opacity-80 mix-blend-multiply md:mix-blend-normal object-cover">
          <div className="w-full lg:w-3/5 aspect-[4/5] lg:aspect-[16/9] relative overflow-hidden saturate-50 contrast-125 mb-12">
            <Image
              src="/hero.png"
              alt="Artisanal Espresso Pull"
              fill
              priority
              className="object-cover animate-pulse" // Wait, I'll use raw CSS animation internally or standard object-cover. Let's rely on standard image loading
              style={{ filter: "sepia(20%)" }}
            />
          </div>
        </div>

        <div className="z-10 mix-blend-exclusion text-sand max-w-6xl w-full mx-auto flex flex-col md:flex-row justify-between items-end gap-12">
          <div className="max-w-2xl">
            <h1 className="font-heading text-6xl sm:text-7xl md:text-9xl tracking-tighter leading-[0.85] text-balance">
              Extraction <br /> As Form.
            </h1>
          </div>
          <div className="max-w-xs font-mono text-sm leading-relaxed uppercase tracking-widest text-sand/80">
            Aura Roasters — Serving the ritual of absolute precision. We source, roast, and extract beautiful coffees in Portland, OR.
          </div>
        </div>
      </section>

      {/* Marquee Divider */}
      <div className="w-full bg-ink text-sand py-4 md:py-6 overflow-hidden border-y border-ink/10 flex whitespace-nowrap">
        <div className="animate-marquee font-mono uppercase tracking-widest text-xs lg:text-sm flex gap-12 lg:gap-24">
          <span>Single Origin Excellence</span>
          <span>•</span>
          <span>Zero Compromise Roasting</span>
          <span>•</span>
          <span>Sourced Ethically</span>
          <span>•</span>
          <span>Single Origin Excellence</span>
          <span>•</span>
          <span>Zero Compromise Roasting</span>
          <span>•</span>
          <span>Sourced Ethically</span>
          <span>•</span>
        </div>
      </div>

      {/* Section: The Process */}
      <section id="story" className="py-24 md:py-32 lg:py-48 px-6 md:px-12 max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
        <FadeIn className="lg:col-span-4 lg:col-start-2">
          <h2 className="font-mono text-roast uppercase tracking-widest text-xs mb-8">01. The Craft</h2>
          <h3 className="font-heading text-4xl sm:text-5xl lg:text-7xl leading-none mb-8">
            Measured <br /> Intensity.
          </h3>
          <p className="font-body text-lg text-ink/70 leading-relaxed mb-12 text-balance">
            Every batch is roasted to highlight its origin. No blends, no dark roast masking flavor. We embrace the naked, vibrant profile of the cherry. Our brutalist approach to extraction ensures what enters the cup is pure resonance.
          </p>
          <Link href="#store" className="inline-flex items-center gap-4 text-ink font-mono uppercase text-sm tracking-widest border-b border-ink/20 pb-2 hover:border-accent transition-colors group">
            <span className="group-hover:text-accent transition-colors">Our Ethos</span>
            <ArrowRight className="w-4 h-4 group-hover:text-accent transition-colors group-hover:translate-x-1" />
          </Link>
        </FadeIn>
        
        <div className="lg:col-span-6 relative aspect-[3/4] lg:aspect-square w-full">
          {/* We'll use a standard image tag wrapped in a FadeIn for effect */}
          <FadeIn delay={0.2} className="w-full h-full relative">
            <Image 
              src="/interior.png" 
              alt="Aura Cafe Interior" 
              fill 
              className="object-cover grayscale hover:grayscale-0 transition-all duration-[2s] ease-in-out" 
            />
          </FadeIn>
        </div>
      </section>

      {/* Section: Offerings */}
      <section id="store" className="py-24 md:py-32 px-6 md:px-12 bg-roast text-sand">
        <div className="max-w-screen-2xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-24 relative z-10">
            <FadeIn>
              <h2 className="font-heading text-5xl lg:text-8xl leading-none select-none">Current <br/> Harvest</h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="font-mono uppercase tracking-widest text-xs max-w-sm mt-8 md:mt-0 text-sand/60">
                Freshly roasted batches available for shipping every Tuesday. Quantities strictly limited.
              </p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-12 relative z-20">
            <FadeIn delay={0.1}>
              <div className="group cursor-pointer">
                <div className="aspect-[4/5] relative bg-ink overflow-hidden mb-6">
                  <Image src="/beans.png" alt="Ethiopia Yirgacheffe" fill className="object-cover scale-100 group-hover:scale-105 transition-transform duration-1000 opacity-60 mix-blend-luminosity" />
                  <div className="absolute inset-0 ring-1 ring-inset ring-sand/20 z-10" />
                </div>
                <div className="flex justify-between items-baseline mb-2">
                  <h3 className="font-heading text-2xl">Ethiopia Yirgacheffe</h3>
                  <span className="font-mono text-sm uppercase">$24</span>
                </div>
                <p className="font-body text-sand/70 text-sm">Jasmine, Bergamot, Honey, Washed.</p>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="group cursor-pointer mt-0 lg:mt-24">
                <div className="aspect-[4/5] relative bg-ink overflow-hidden mb-6">
                  <Image src="/beans.png" alt="Colombia Finca El Paraiso" fill className="object-cover scale-100 group-hover:scale-105 transition-transform duration-1000 opacity-70 sepia-[.3]" />
                  <div className="absolute inset-0 ring-1 ring-inset ring-sand/20 z-10" />
                </div>
                <div className="flex justify-between items-baseline mb-2">
                  <h3 className="font-heading text-2xl">Colombia El Paraiso</h3>
                  <span className="font-mono text-sm uppercase">$32</span>
                </div>
                <p className="font-body text-sand/70 text-sm">Lychee, Strawberry, Rose, Thermal Shock.</p>
              </div>
            </FadeIn>

            <FadeIn delay={0.5}>
              <div className="group cursor-pointer">
                <div className="aspect-[4/5] relative bg-ink overflow-hidden mb-6">
                  <Image src="/beans.png" alt="Kenya Nyeri" fill className="object-cover scale-100 group-hover:scale-105 transition-transform duration-1000 opacity-50 sepia-[.1]" />
                  <div className="absolute inset-0 ring-1 ring-inset ring-sand/20 z-10" />
                </div>
                <div className="flex justify-between items-baseline mb-2">
                  <h3 className="font-heading text-2xl">Kenya Nyeri Peaberry</h3>
                  <span className="font-mono text-sm uppercase">$26</span>
                </div>
                <p className="font-body text-sand/70 text-sm">Blackberry, Tomato, Syrupy, Double Washed.</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-ink text-sand pt-24 md:pt-48 pb-12 px-6 md:px-12 flex flex-col relative overflow-hidden">
        <div className="max-w-screen-2xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24 mb-24 lg:mb-48 relative z-10">
          <div className="md:col-span-4">
            <h4 className="font-heading text-2xl mb-6">Location</h4>
            <div className="font-mono text-sm leading-relaxed text-sand/60">
              1102 SE Burnside St,<br />
              Portland, OR 97214<br />
              <br />
              Mon–Sun<br />
              7am — 4pm
            </div>
          </div>
          <div className="md:col-span-8 flex flex-col md:items-end text-left md:text-right">
            <h4 className="font-heading text-4xl mb-8">Join the inner circle.</h4>
            <form className="flex w-full md:max-w-md group border-b border-sand/30 pb-2 focus-within:border-sand transition-colors">
              <input 
                type="email" 
                placeholder="ENTER EMAIL" 
                className="bg-transparent outline-none font-mono text-sm tracking-widest uppercase w-full placeholder:text-sand/30"
              />
              <button className="px-4 hover:translate-x-2 transition-transform opacity-60 hover:opacity-100">
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>

        <div className="relative z-10 flex flex-col items-center mt-auto">
          <div className="font-heading text-[15vw] leading-none tracking-tight overflow-hidden text-[#C05C36] mix-blend-screen opacity-90 select-none pointer-events-none mb-12">
            A·U·R·A
          </div>
          <div className="w-full flex justify-between items-center border-t border-sand/10 pt-6 font-mono text-xs text-sand/40">
            <p>&copy; {new Date().getFullYear()} Aura Roasters. All rights reserved.</p>
            <p className="hover:text-sand cursor-pointer transition-colors">Instagram / Journal</p>
          </div>
        </div>
      </footer>
      
      {/* Background grain applied globally via CSS, but custom animation classes defined below */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}} />
    </main>
  );
}
