/* eslint-disable @next/next/no-img-element */
// app/services/prepaid-cards/page.tsx
import { FC } from "react";

const PrepaidCard: FC = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-[#333333] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-400 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 md:px-8 text-center relative z-10">
          <span className="inline-block px-3 py-1 bg-yellow-400/20 border border-yellow-300 text-yellow-400 text-xs font-semibold rounded-full uppercase tracking-wider mb-3">
            Cartes prépayées
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Cartes prépayées SAFYRR
          </h1>
          <p className="text-white/60 max-w-xl mx-auto text-lg">
            La manière la plus intelligente de dépenser, d’épargner et de faire ses achats — sans compte bancaire traditionnel.
          </p>
        </div>
      </section>

      {/* Avantages Section */}
      <section className="py-16 bg-white">
        <div className="px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-5">Avantages</h2>
              <div className="w-12 h-1 bg-linear-to-r from-yellow-400 to-yellow-200 rounded-full mb-6"></div>
              <div className="space-y-4">
                <div className="flex gap-4 items-start p-4 bg-[#FBF6EF] rounded-xl hover:bg-yellow-100 transition">
                  <span className="text-2xl">💳</span>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Aucun compte bancaire nécessaire</h4>
                    <p className="text-sm text-gray-600">
                      Prenez une carte et commencez à dépenser tout de suite sans aucune obligation bancaire.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start p-4 bg-[#FBF6EF] rounded-xl hover:bg-yellow-100 transition">
                  <span className="text-2xl">🌐</span>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Accepté dans le monde entier</h4>
                    <p className="text-sm text-gray-600">
                      Utilisez votre carte SAFYRR partout où la carte Visa/Mastercard est acceptée.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start p-4 bg-[#FBF6EF] rounded-xl hover:bg-yellow-100 transition">
                  <span className="text-2xl">🔒</span>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Dépenses sécurisées</h4>
                    <p className="text-sm text-gray-600">
                      Protection du code PIN et notifications de transactions en temps réel.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start p-4 bg-[#FBF6EF] rounded-xl hover:bg-yellow-100 transition">
                  <span className="text-2xl">🔄</span>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Rechargement facile</h4>
                    <p className="text-sm text-gray-600">
                      Rechargez votre carte instantanément via de l’argent mobile, un virement bancaire ou liquide.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-4 bg-linear-to-r from-yellow-400 to-yellow-200 rounded-3xl opacity-20 blur-xl"></div>
              <img
                src="/assets/prepaid-card-hero-CliEPAod.jpg"
                alt="Carte prépayée SAFYRR"
                className="relative rounded-2xl shadow-lg w-full object-cover border-4 border-yellow-300/30"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Comment ça fonctionne */}
      <section className="py-20 bg-[#FBF6EF]">
        <div className="px-4 md:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-3 text-center">Comment ça fonctionne</h2>
          <div className="w-16 h-1 bg-linear-to-r from-yellow-400 to-yellow-200 rounded-full mx-auto mb-12"></div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Choisissez votre carte", desc: "Choisissez parmi notre gamme d’options de cartes prépayées." },
              { step: "02", title: "Vérifier l’identité", desc: "Processus de vérification KYC rapide et simple." },
              { step: "03", title: "Fonds de charge", desc: "Ajoutez de l’argent via de l’argent mobile, un transfert ou de l’argent liquide." },
              { step: "04", title: "Commencez à dépenser", desc: "Utilisez votre carte n’importe où, à tout moment, partout dans le monde." },
            ].map((item) => (
              <div key={item.step} className="text-center bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
                <div className="w-12 h-12 bg-linear-to-r from-yellow-400 to-yellow-200 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-gray-900">
                  {item.step}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tarification */}
      <section className="py-20 bg-white">
        <div className="px-4 md:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-3 text-center">Tarification</h2>
          <div className="w-16 h-1 bg-linear-to-r from-yellow-400 to-yellow-200 rounded-full mx-auto mb-12"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { plan: "Classique", price: "3 500 FCFA", benefits: ["Chargez jusqu’à 1.000.000 FCFA", "Retraits aux distributeurs automatiques", "Paiements en ligne", "Support par email"] },
              { plan: "Or", price: "5 000 FCFA", benefits: ["Chargez jusqu’à 2M FCFA", "Retraits gratuits aux distributeurs automatiques", "Online et sans contact", "Soutien prioritaire", "Récompenses en cashback"], popular: true },
              { plan: "Premium", price: "10 000 FCFA", benefits: ["Chargement illimité", "Distributeur automatique mondial gratuit", "Support VIP 24h/24 et 7j/7", "Cashback de la prime", "Assurance voyage"] },
            ].map((item) => (
              <div key={item.plan} className={`rounded-2xl p-8 ${item.popular ? "bg-[#333333] text-yellow-400 shadow-lg ring-2 ring-yellow-400" : "bg-[#FBF6EF]"} transition hover:-translate-y-1`}>
                {item.popular && <span className="inline-block px-3 py-1 bg-yellow-400 text-gray-900 text-xs font-bold rounded-full mb-3">Les plus populaires</span>}
                <h3 className={`text-2xl font-bold mb-2 ${item.popular ? "text-yellow-400" : "text-gray-900"}`}>{item.plan}</h3>
                <p className={`text-3xl font-extrabold mb-6 ${item.popular ? "text-white" : "text-gray-900"}`}>{item.price}</p>
                <ul className="space-y-2 mb-8">
                  {item.benefits.map((b, i) => (
                    <li key={i} className={`flex items-center gap-2 text-sm ${item.popular ? "text-white/80" : "text-gray-600"}`}>
                      <span className={`${item.popular ? "text-yellow-400" : "text-yellow-400"}`}>✓</span> {b}
                    </li>
                  ))}
                </ul>
                <a
                  href="/contact"
                  className={`block text-center py-3 rounded-xl font-semibold transition ${item.popular ? "bg-linear-to-r from-yellow-400 to-yellow-200 text-gray-900 shadow-lg hover:opacity-90" : "bg-white border border-gray-300 hover:bg-yellow-100"}`}
                >
                  Acheter maintenant
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16" style={{ backgroundColor: "#FBF6EF" }}>
        <div className="px-4 md:px-8">
          <div className="relative rounded-2xl overflow-hidden shadow-lg">
            <img src="/assets/hero-card-Ca2WVrhe.jpg" alt="Carte SAFYRR en usage" className="w-full h-64 md:h-80 object-cover" />
            <div className="absolute inset-0 bg-linear-to-r from-gray-900/80 to-transparent flex items-center">
              <div className="p-8 md:p-12 max-w-lg">
                <h2 className="text-3xl font-bold text-white mb-3">Prêt à recevoir ta carte ?</h2>
                <p className="text-white/70 mb-6">Get your Safyrr card. NOW.</p>
                <a className="inline-flex items-center gap-2 px-6 py-3 bg-linear-to-r from-yellow-400 to-yellow-200 text-gray-900 font-bold rounded-xl shadow-lg hover:opacity-90 transition" href="/contact">
                  Acheter maintenant
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PrepaidCard;