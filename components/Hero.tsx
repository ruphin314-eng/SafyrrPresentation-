import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative pt-20 min-h-screen flex items-center">

      <div className="absolute inset-0">
        <Image
          src="/assets/hero-card-Ca2WVrhe.jpg"
          alt="Hero"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 bg-linear-to-r from-black/50 to-transparent"></div>
      </div>

      <div className="container mx-auto relative z-10 px-0 md:px-0">
        <div className="max-w-2xl text-white">

          <span className="inline-block px-4 py-2 bg-[#FFDF8F]/20 text-[#FFDF8F] rounded-full mb-6">
            Digne de confiance par des milliers de personnes à travers l’Afrique
          </span>

          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#FFFFFF] leading-tight mb-6">            
            Bienvenue chez <span className="text-[#FFDF8F]">SAFYRR</span>
          </h1>

          <p className="text-lg md:text-xl text-[#FFFFFF] leading-relaxed mb-8 max-w-xl">
            Votre partenaire de confiance pour les cartes prépayées, 
            les transferts d’argent et les abonnements. 
            Rapide, sécurisé et conçu pour votre style de vie.
          </p>

          <div className="flex flex-wrap gap-4">
               <Link
                 href="/services"
                 className="inline-flex items-center gap-2 bg-linear-to-r bg-[#FFDF8F] to-[#F5B547] text-gray-900 font-bold rounded-xl shadow-lg hover:opacity-90 transition-all text-lg px-6 py-3"
                >
                  Commencez
                 <ArrowRight size={18} />
               </Link>

          <Link href="/about">
            <button className="border border-white/30 px-6 py-5 rounded-xl hover:bg-white/10 transition">
              En savoir plus
           </button>
         </Link>
          </div>
        </div>
      </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-background/50 animate-bounce">
        <div className="w-px h-8 bg-background/30"></div><span className="text-xs" >Rouleau</span></div>
    </section>
  );
}