"use client";

import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="bg-gray-50 text-gray-900">

      {/* Hero Section */}
      <section className="py-32 bg-linear-to-br bg-[#eddbae] to-gray-50 text-center">
        <span className="inline-block px-3 py-1 bg-[#FFF2DB] text-[#F5B83D] text-xs font-semibold rounded-full uppercase tracking-wider mb-3">
          Qui Nous sommes
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          À propos de SAFYRR
        </h1>
        <p className="max-w-xl mx-auto text-lg text-gray-700">
          Une entreprise fintech en mission de démocratiser les services financiers à travers l’Afrique.
        </p>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="px-4 md:px-8 grid lg:grid-cols-2 gap-16 items-center">

          <div>
            <h2 className="text-3xl font-bold mb-6">Notre mission</h2>
            <div className="w-16 h-1 bg-yellow-400 rounded-full mb-6"></div>
            <p className="mb-4 text-gray-700">
              Safyrr développe des solutions fintech combinant cartes virtuelles sécurisées et transferts internationaux
            </p>
            <p className="mb-4 text-gray-700">
             afin de réduire les barrières financières en Afrique centrale
            </p>
            <p className="text-gray-700">
             tout en garantissant transparence, conformité et performance opérationnelle
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="bg-gray-100 rounded-xl p-4 text-center">
                <p className="font-display text-2xl font-extrabold text-gold-deep text-[#F5B547]">2019</p>
                <p className="text-sm text-gray-600">Fondation</p>
              </div>
              <div className="bg-gray-100 rounded-xl p-4 text-center">
                <p className="font-display text-2xl font-extrabold text-gold-deep text-[#F5B547]">50K+</p>
                <p className="text-sm text-gray-600">Clients</p>
              </div>
              <div className="bg-gray-100 rounded-xl p-4 text-center">
                <p className="font-display text-2xl font-extrabold text-gold-deep text-[#F5B547]">15+</p>
                <p className="text-sm text-gray-600">Pays</p>
              </div>
              <div className="bg-gray-100 rounded-xl p-4 text-center">
                <p className="font-display text-2xl font-extrabold text-gold-deep text-[#F5B547]">99.9%</p>
                <p className="text-sm text-gray-600">Disponibilité</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-yellow-400 opacity-20 blur-xl rounded-2xl"></div>
            <Image
              src="/assets/about-team-CR7MVbYi.jpg"
              alt="Équipe SAFYRR"
              width={600}
              height={400}
              className="relative rounded-2xl shadow-xl w-full object-cover border-4 border-yellow-300"
            />
          </div>

        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-3xl font-bold mb-3 text-center">Notre histoire</h2>
          <div className="w-16 h-1 bg-yellow-400 rounded-full mx-auto mb-12"></div>

          <div className="max-w-3xl mx-auto space-y-8">
            {[
              { year: "2019", title: "Fondation de l’entreprise", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam." },
              { year: "2021", title: "Lancement des cartes prépayées", text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." },
              { year: "2023", title: "Étendu à 15 pays", text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim." },
              { year: "2025", title: "50 000 clients satisfaits", text: "Mais ut persévéré où omnis iste natus error sit accusateur voluptatem doloremque laudantium." },
            ].map((item, idx) => (
              <div key={idx} className="flex gap-6 items-start">
                <div className="shrink-0 w-20 text-right">
                  <span className="font-display font-extrabold text-gold-deep text-xl text-[#FFDF8F]">{item.year}</span>
                </div>
                <div className="w-px bg-yellow-300 self-stretch mx-2 relative">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#F5B547]"></div>
                </div>
                <div className="flex-1 bg-white rounded-xl p-5 shadow">
                  <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-700">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}