/* eslint-disable @next/next/no-img-element */
import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "Qu’est-ce qu’une carte prépayée ?",
    answer: "Une carte prépayée est une carte de paiement que tu dois charger avec de l’argent avant de l’utiliser.",
  },
  {
    question: "Comment puis-je transférer de l’argent avec SAFYRR ?",
    answer: "[Réponse ici…]",
  },
  {
    question: "Quels abonnements puis-je payer ?",
    answer: "Recharge son bouquet canal +, son électricité, etc.",
  },
  {
    question: "Comment puis-je recharger ma carte prépayée ?",
    answer: "1.Ouvre l’application (ex : Safyrr); 2.Clique sur “Recharger” ou “Ajouter de l’argent”;  3.Choisis MTN MoMo ou Orange Money; 4.Entre le montant; 5.Confirme la transaction sur ton téléphone",
  },
  {
    question: "Mon argent est-il en sécurité avec SAFYRR ?",
    answer: "Oui — ton argent est sécurisé chez Safyrr. Safyrr fonctionne avec une banque américaine réglementée et utilise des systèmes de sécurité bancaire modernes pour protéger ton argent et tes données",
  },
  {
    question: "Quels sont les frais de transfert ?",
    answer: "[Réponse ici…]",
  },
  {
    question: "Combien de temps prend la vérification des comptes ?",
    answer: "juste 05min😌",
  },
  {
    question: "Puis-je utiliser ma carte SAFYRR à l’international ?",
    answer: "Oui, Safyrr est sous la tutelle d’une banque américaine. De ce fait, cette carte est reconnue dans le monde entier.",
  },
];

export default function FAQBlogs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      {/* Section Header */}
      <section className="pt-32 pb-12 bg-linear-to-br bg-[#eddbae] to-gray-50">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <span className="inline-block px-3 py-1 bg-[#FFF2DB] text-[#F5B83D] text-xs font-semibold rounded-full uppercase tracking-wider mb-3">
            FAQ
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Questions fréquemment posées
          </h1>
          <p className="text-gray-700 max-w-xl mx-auto text-lg">
            Des questions ? Nous avons des réponses. Trouvez tout ce que vous
            devez savoir sur SAFYRR.
          </p>
        </div>
      </section>

      {/* Section FAQ */}
      <section className="contains md:auto-center py-20 bg-gray-50">
        <div className="px-4 md:px-8">
          <div className="container mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            {/* Illustration & Contact */}
            <div className="lg:col-span-2 sticky top-24">
              <div className="relative">
                <div className="absolute -inset-4 bg-linear-to-r from-yellow-300 to-yellow-400 rounded-3xl opacity-15 blur-xl"></div>
                <img
                  src="/assets/faq-illustration-HsXLPSrC.jpg"
                  alt="FAQ illustration"
                  className="relative rounded-2xl shadow-lg w-full object-cover border-4 border-yellow-300/30"
                />
              </div>
              <div className="mt-4 bg-white rounded-xl p-4 shadow max-w-xs mx-auto">
                     <h3 className="font-semibold text-gray-900 mb-1 text-sm">
                       Vous avez encore des questions ?
                     </h3>
                      <p className="text-xs text-gray-600 mb-1">
                         Notre équipe de support est disponible 24h/24 et 7j/7 pour vous aider.
                    </p>
                 <a
                    href="/contact"
                    className="block text-center py-1 bg-linear-to-r from-yellow-300 to-yellow-400 text-gray-900 font-semibold rounded-lg shadow hover:opacity-90 transition-all text-sm"
                   >
                   Contactez le support
                 </a>
              </div>
            </div>

            {/* FAQ Accordions */}
            <div className="lg:col-span-3 space-y-3">
              {faqData.map((item, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-xl px-6 shadow transition-all hover:shadow-lg"
                >
                  <h3 className="flex">
                    <button
                      type="button"
                      className="flex flex-1 items-center justify-between py-5 font-semibold text-gray-900 text-left hover:text-[#F5B83D] transition-all"
                      onClick={() => toggleAccordion(index)}
                    >
                      {item.question}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`h-4 w-4 shrink-0 transition-transform duration-200 ${
                          openIndex === index ? "rotate-180" : ""
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="m6 9 6 6 6-6"></path>
                      </svg>
                    </button>
                  </h3>
                  {openIndex === index && (
                    <div className="overflow-hidden text-sm py-2 text-gray-700">
                      {item.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}