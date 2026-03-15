import { FadeIn } from "@/components/animations";
import { PetCard } from "@/components/PetCard";
import { ArrowRight, Search, Heart, Shield, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-x-hidden selection:bg-[#F97316] selection:text-white bg-[#FFF7ED]">
      {/* Navigation */}
      <nav className="fixed top-4 left-4 right-4 z-50 bg-white/80 backdrop-blur-md rounded-2xl shadow-clay-sm py-4 px-6 md:px-8 flex justify-between items-center text-[#9A3412] max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <Heart className="w-8 h-8 text-[#F97316] fill-[#F97316]" />
          <div className="font-heading font-bold text-2xl tracking-wide">Pawsitive</div>
        </div>
        <div className="hidden md:flex gap-8 font-semibold text-[15px]">
          <Link href="#adopt" className="hover:text-[#F97316] transition-colors">Adopt</Link>
          <Link href="#process" className="hover:text-[#F97316] transition-colors">How it works</Link>
          <Link href="#about" className="hover:text-[#F97316] transition-colors">Our Mission</Link>
        </div>
        <button className="h-11 px-6 bg-[#2563EB] text-white font-semibold rounded-xl shadow-clay-sm hover:shadow-clay-sm-hover hover:-translate-y-0.5 transition-all text-[15px]">
          Login
        </button>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 md:px-8 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        <div className="flex-1 text-center lg:text-left z-10">
          <FadeIn>
            <div className="inline-flex items-center gap-2 bg-orange-100 text-[#F97316] px-4 py-2 rounded-full font-bold text-sm mb-6 border border-orange-200">
              <Sparkles className="w-4 h-4" />
              <span>Over 2,000 happy families created</span>
            </div>
            <h1 className="font-heading text-5xl md:text-6xl lg:text-[80px] font-bold text-[#9A3412] leading-[1.1] mb-6">
              Find your new <br />
              <span className="text-[#F97316]">best friend.</span>
            </h1>
            <p className="font-body text-lg md:text-xl text-[#9A3412]/80 font-medium mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              We connect compassionate people with wonderful pets. Every adoption makes a difference in a furry life.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button className="w-full sm:w-auto px-8 py-4 bg-[#F97316] text-white font-bold rounded-2xl shadow-clay hover:shadow-clay-hover hover:-translate-y-1 transition-all text-lg flex items-center justify-center gap-2">
                Browse Pets <ArrowRight className="w-5 h-5" />
              </button>
              <button className="w-full sm:w-auto px-8 py-4 bg-white text-[#9A3412] font-bold rounded-2xl shadow-clay-sm hover:shadow-clay-sm-hover hover:-translate-y-1 transition-all text-lg flex items-center justify-center gap-2 border-2 border-transparent hover:border-orange-100">
                <Search className="w-5 h-5 text-[#F97316]" /> Take the Quiz
              </button>
            </div>
          </FadeIn>
        </div>

        <div className="flex-1 relative w-full max-w-lg lg:max-w-none aspect-square">
          <FadeIn delay={0.2} className="w-full h-full relative">
            {/* Blob background for hero image */}
            <div className="absolute inset-0 bg-[#FB923C] rounded-[40px] rotate-3 opacity-20 scale-105"></div>
            <div className="absolute inset-0 bg-[#10B981] rounded-[40px] -rotate-3 opacity-10 scale-105"></div>
            <div className="relative w-full h-full rounded-[40px] overflow-hidden shadow-clay-hover border-8 border-white">
              <Image 
                src="/pet_hero.png" 
                alt="Happy puppy and kitten" 
                fill 
                className="object-cover"
                priority
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Stats/Trust Bar */}
      <section className="px-4 py-8 max-w-7xl mx-auto">
        <div className="bg-white rounded-[32px] p-8 md:p-12 shadow-clay-sm flex flex-col md:flex-row justify-around items-center gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-slate-100">
          <div className="w-full md:w-1/3 pt-4 md:pt-0">
            <h3 className="font-heading text-4xl font-bold text-[#F97316] mb-2">24h</h3>
            <p className="font-body text-[#9A3412]/70 font-semibold">Average response time</p>
          </div>
          <div className="w-full md:w-1/3 pt-8 md:pt-0">
            <h3 className="font-heading text-4xl font-bold text-[#10B981] mb-2">100%</h3>
            <p className="font-body text-[#9A3412]/70 font-semibold">Vet checked & vaccinated</p>
          </div>
          <div className="w-full md:w-1/3 pt-8 md:pt-0">
            <h3 className="font-heading text-4xl font-bold text-[#2563EB] mb-2">30 Days</h3>
            <p className="font-body text-[#9A3412]/70 font-semibold">Post-adoption support</p>
          </div>
        </div>
      </section>

      {/* Pet Listings */}
      <section id="adopt" className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <FadeIn>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-[#9A3412] mb-4">
              Waiting for you
            </h2>
            <p className="font-body text-lg text-[#9A3412]/70 font-medium max-w-md">
              Meet our newest arrivals. These lovely companions are ready to find their forever homes.
            </p>
          </FadeIn>
          <FadeIn delay={0.2} className="mt-6 md:mt-0">
            <button className="text-[#2563EB] font-bold text-lg hover:underline flex items-center gap-2">
              View all pets <ArrowRight className="w-5 h-5" />
            </button>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <FadeIn delay={0.1}>
            <PetCard 
              id="1"
              name="Charlie"
              breed="Golden Retriever Mix"
              age="3 Months"
              location="Portland Shelter"
              imageUrl="/pet_dog_1.png"
              isNew={true}
            />
          </FadeIn>
          <FadeIn delay={0.2}>
             <PetCard 
              id="2"
              name="Luna"
              breed="Ragdoll"
              age="1 Year"
              location="Foster Home"
              imageUrl="/pet_cat_1.png"
            />
          </FadeIn>
          <FadeIn delay={0.3}>
             <PetCard 
              id="3"
              name="Cooper"
              breed="French Bulldog"
              age="6 Months"
              location="Downtown Clinic"
              imageUrl="/pet_dog_2.png"
              isNew={true}
            />
          </FadeIn>
        </div>
      </section>

      {/* Trust & Process Section */}
      <section id="process" className="py-20 px-4 md:px-8 bg-orange-50 mt-12 rounded-t-[60px]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Shield className="w-12 h-12 text-[#10B981] mx-auto mb-6" />
            <h2 className="font-heading text-4xl font-bold text-[#9A3412] mb-4">
              Safe & Simple Adoption
            </h2>
            <p className="font-body text-lg text-[#9A3412]/70 font-medium">
              We've created a transparent process to ensure the best match for both you and the pet.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-[60px] left-[15%] right-[15%] h-1 bg-orange-200 z-0 border-dashed border-2"></div>
            
            {[
              { step: "01", title: "Find a Match", desc: "Browse our verified listings and find a pet that fits your lifestyle." },
              { step: "02", title: "Meet & Greet", desc: "Schedule a video call or an in-person visit to ensure it's a perfect match." },
              { step: "03", title: "Bring Them Home", desc: "Complete the adoption paperwork and welcome your new family member." }
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.2} className="relative z-10">
                <div className="bg-white p-8 rounded-[32px] shadow-clay-sm text-center h-full border-2 border-transparent hover:border-orange-100 transition-colors">
                  <div className="w-16 h-16 bg-[#F97316] text-white rounded-2xl flex items-center justify-center font-heading text-2xl font-bold mx-auto mb-6 shadow-md rotate-3">
                    {item.step}
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-[#9A3412] mb-3">{item.title}</h3>
                  <p className="font-body text-[#9A3412]/70 font-medium">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white pt-20 pb-10 px-4 md:px-8 border-t border-orange-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <Heart className="w-8 h-8 text-[#F97316] fill-[#F97316]" />
              <div className="font-heading font-bold text-2xl tracking-wide text-[#9A3412]">Pawsitive</div>
            </div>
            <p className="font-body text-[#9A3412]/70 font-medium max-w-sm">
              Making pet adoption joyful, safe, and transparent. We're on a mission to end pet homelessness.
            </p>
          </div>
          <div>
            <h4 className="font-heading font-bold text-lg text-[#9A3412] mb-4">Quick Links</h4>
            <ul className="space-y-3 font-body font-medium text-[#9A3412]/70">
              <li><Link href="#" className="hover:text-[#F97316] transition-colors">Search Pets</Link></li>
              <li><Link href="#" className="hover:text-[#F97316] transition-colors">Adoption Process</Link></li>
              <li><Link href="#" className="hover:text-[#F97316] transition-colors">Shelter Login</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-heading font-bold text-lg text-[#9A3412] mb-4">Contact</h4>
            <ul className="space-y-3 font-body font-medium text-[#9A3412]/70">
              <li>hello@pawsitive.com</li>
              <li>1 (800) PAWS-R-US</li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto pt-8 border-t border-orange-100 text-center font-body text-sm font-medium text-[#9A3412]/50">
          &copy; {new Date().getFullYear()} Pawsitive Pet Adoption. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
