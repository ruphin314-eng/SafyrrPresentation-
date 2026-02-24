// pages/why-safyrr.js
import React from "react";

const features = [
  {
    icon: "⚡",
    title: "Ultra-rapide",
    description: "Transferts instantanés et émission de carte en quelques minutes.",
  },
  {
    icon: "🔒",
    title: "Sécurité au niveau bancaire",
    description:
      "Vos fonds sont toujours protégés grâce à un chiffrement de première qualité.",
  },
  {
    icon: "💳",
    title: "Pas de frais cachés",
    description: "Tarification transparente sans frais surprises.",
  },
  {
    icon: "🌍",
    title: "Portée panafricaine",
    description: "Envoyez de l’argent à travers l’Afrique et au-delà sans effort.",
  },
];

export default function WhySafyrr() {
  return (
    <section className="py-20 bg-[#FBF6EF]">
      <div className="px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Pourquoi choisir SAFYRR ?
          </h2>
          <p className="text-gray-600 max-w-lg mx-auto">
            Nous nous engageons à rendre les services financiers simples, rapides et accessibles pour tous.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-transform text-center"
            >
              <div className="text-4xl mb-3">{feature.icon}</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}