"use client";

import Image from "next/image";

export default function Subscriptions() {
     const goldGradient = {
    background: "linear-gradient(to right, #F5B547, #FFDF8F)",
  };

  const charcoal = "#333333";

  const steps = [
    { id: 1, icon: "🔍", text: "Service sélectionné" },
    { id: 2, icon: "✏️", text: "Entrer les détails" },
    { id: 3, icon: "💰", text: "Choisir le montant" },
    { id: 4, icon: "✅", text: "Confirmer le paiement" },
    { id: 5, icon: "🎉", text: "C’est fait !" },
  ];
    
  return (
    <div>

      {/* HERO */}
      <section
        className="pt-32 pb-12 relative overflow-hidden"
        style={{ backgroundColor: "#333333" }}
      >
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl"
            style={{ backgroundColor: "#F5B547" }}
          ></div>
        </div>

        <div className="container mx-auto px-4 md:px-8 text-center relative z-10">
          <span
            className="inline-block px-3 py-1 text-xs font-semibold rounded-full uppercase tracking-wider mb-3"
            style={{
              backgroundColor: "rgba(245,181,71,0.2)",
              border: "1px solid rgba(245,181,71,0.3)",
              color: "#F5B547",
            }}
          >
            djangui
          </span>

          <h1
            className="text-4xl md:text-5xl font-extrabold mb-4"
            style={{ color: "#FBF6EF" }}
          >
            Services Safyrr djangui
          </h1>

          <p
            className="max-w-xl mx-auto text-lg"
            style={{ color: "rgba(251,246,239,0.7)" }}
          >
           Avec la technologie safyrr djangui 2.0 la tontine n’a jamais été aussi easy 😎
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-20" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="px-4 md:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">

            <div>
              <h2
                className="text-3xl font-bold mb-5"
                style={{ color: "#333333" }}
              >
                Safyrr djangui 2.0
              </h2>

              <div
                className="w-12 h-1 rounded-full mb-6"
                style={{
                  background: "linear-gradient(90deg,#F5B547,#FFDF8F)",
                }}
              ></div>

              <p className="mb-4" style={{ color: "#6B7280" }}>
               Voici une version courte, impactante et storytelling que tu peux utiliser 👇
              </p>

              <p style={{ color: "#6B7280" }}>
               “Tout commence au XVIIe siècle…”
               Un banquier italien nommé Lorenzo Tonti imagine un système simple :
               un groupe de personnes met de l’argent en commun…
               Chaque année, les gains sont partagés entre les membres encore en vie.
               Et plus le temps passe… plus les survivants gagnent.
               Ce système traverse les siècles, évolue, et arrive en Afrique.
               Aujourd’hui, on l’appelle autrement…
               mais l’esprit reste le même :
               s’unir pour avancer ensemble.
                La tontine n’est pas qu’un système…
                c’est une culture de solidarité.

              </p>
            </div>

            <div className="relative">
              <div
                className="absolute -inset-4 rounded-3xl opacity-20 blur-xl"
                style={{
                  background: "linear-gradient(90deg,#F5B547,#FFDF8F)",
                }}
              ></div>

              <Image
                src="/assets/subscription.jpg"
                alt="Subscriptions"
                width={600}
                height={400}
                className="relative rounded-2xl w-full h-64 object-cover border-4"
                style={{ borderColor: "rgba(245,181,71,0.3)" }}
              />
            </div>

          </div>

          {/* SERVICES GRID 
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">

            {[
              { icon: "📺", name: "Canal+", desc: "Chaînes TV premium." },
              { icon: "⚡", name: "Eneo", desc: "Recharge électricité." },
              { icon: "📡", name: "MTN", desc: "Data et crédit mobile." },
              { icon: "🟠", name: "Orange", desc: "Forfaits Internet." },
              { icon: "💧", name: "Camwater", desc: "Factures d’eau." },
              { icon: "➕", name: "Plus bientôt", desc: "Nouveaux services." },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-muted rounded-2xl p-6 hover:bg-gold-light hover:-translate-y-1 transition-smooth cursor-pointer group"
                style={{
                  backgroundColor: "#F5EFE7",
                }}
              >
                <div className="text-4xl mb-3">{item.icon}</div>

                <h3
                  className="font-sans font-bold text-gray-800 text-lg mb-2 group-hover:text-yellow-600 transition-all"
                  style={{ color: "#333333" }}
                >
                  {item.name}
                </h3>

                <p className="text-sm" style={{ color: "#6B7280" }}>
                  {item.desc}
                </p>
              </div>
            ))}

          </div> */}
        </div>
      </section>

      {/* GESTION */}
      <section className="py-20" style={{ backgroundColor: "#F5EFE7" }}>
        <div className="px-4 md:px-8">

          <h2
            className="text-3xl font-bold mb-3 text-center"
            style={{ color: "#333333" }}
          >
            Gestion facile
          </h2>

          <div
            className="w-16 h-1 rounded-full mx-auto mb-12"
            style={{
              background: "linear-gradient(90deg,#F5B547,#FFDF8F)",
            }}
          ></div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

            {[
              { icon: "📱", title: "One App", text: "Tout gérer en un seul endroit." },
              { icon: "🔔", title: "Rappels", text: "Notifications avant expiration." },
              { icon: "⚡", title: "Renouvellement", text: "Paiement instantané." },
              { icon: "📊", title: "Analyses", text: "Suivi des dépenses." },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all text-center"
                style={{
                  backgroundColor: "#FFFFFF",
                  boxShadow: "0 10px 25px rgba(0,0,0,0.05)",
                }}
              >
                <div className="text-4xl mb-3">{item.icon}</div>

                <h3
                  className="font-semibold mb-2"
                  style={{ color: "#333333" }}
                >
                  {item.title}
                </h3>

                <p className="text-sm" style={{ color: "#6B7280" }}>
                  {item.text}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* STEPS */}
      <section className="py-20" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="mx-auto px-4 md:px-8 max-w-4xl">
        
        <h2
          className="text-3xl font-bold mb-3 text-center"
          style={{ color: charcoal }}
        >
         Comment fonctionne le paiement des cotisations
        </h2>

        <div
          className="w-16 h-1 rounded-full mx-auto mb-12"
          style={goldGradient}
        />

        <div className="relative">
          
          {/* Ligne horizontale */}
          <div
            className="absolute top-6 left-0 right-0 h-0.5 hidden md:block"
            style={{ backgroundColor: "#F5B54755" }}
          />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
            {steps.map((step) => (
              <div
                key={step.id}
                className="flex flex-col items-center text-center"
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center font-extrabold mb-3 shadow-lg z-10"
                  style={{
                    ...goldGradient,
                    color: charcoal,
                  }}
                >
                  {step.id}
                </div>

                <span className="text-2xl mb-1">{step.icon}</span>

                <p
                  className="text-sm font-semibold"
                  style={{ color: charcoal }}
                >
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>

    </div>
  );
}