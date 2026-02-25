import React from "react";

export default function Valeur() {
  return (
    <section className="py-20 bg-gray-50">
  <div className="container mx-auto px-4 md:px-8">
    
    <h2 className="text-3xl font-bold text-gray-900 mb-3 text-center">
      Nos valeurs
    </h2>

    <div className="w-16 h-1 bg-yellow-400 rounded-full mx-auto mb-12"></div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      
      {/* Sécurité */}
      <div className="p-8 bg-[#f7f0e5] rounded-2xl hover:bg-[#f4e9ce] transition-all">
        <div className="text-center text-5xl mb-4">🔐</div>
        <h3 className="text-xl font-bold text-gray-900 mb-3">Sécurité</h3>
        <p className="text-gray-700 text-sm leading-relaxed">
          <ol>
           <li>👉 Nous protégeons l’argent et les données de nos utilisateurs.</li>
          <li>👉 Transparence totale sur les frais et les transactions.</li>
          <li>👉 Zéro compromis sur la confiance.</li>
          </ol>
        </p>
      </div>

      {/* Rapidité  */}
      <div className="p-8 bg-[#f7f0e5] rounded-2xl hover:bg-[#f4e9ce] transition-all">
        <div className="text-center text-5xl mb-4">⚡</div>
        <h3 className="text-xl font-bold text-gray-900 mb-3"> Rapidité </h3>
        <p className="text-gray-700 text-sm leading-relaxed">
         Dans un marché où les gens veulent des solutions immédiates :
          <p>👉 Création rapide de carte</p>
          <p>👉 Transferts instantanés</p>
        </p>
      </div>

      {/* Proximité */}
      <div className="text-center p-8 bg-[#f7f0e5] rounded-2xl hover:bg-[#f4e9ce] transition-all">
        <div className="text-5xl mb-4">💙</div>
        <h3 className="text-xl font-bold text-gray-900 mb-3">Proximité</h3>
        <p className="text-gray-700 text-sm leading-relaxed">
          On ne vend pas juste une carte. 
          On accompagne nos clients à chaque étape de leur parcours financier.
        </p>
      </div>

       {/* Opportunité */}
      <div className="p-8 bg-[#f7f0e5] rounded-2xl hover:bg-[#f4e9ce] transition-all">
        <div className="text-center text-5xl mb-4">📈</div>
        <h3 className="text-xl font-bold text-gray-900 mb-3">Opportunité</h3>
        <p className="text-gray-700 text-sm leading-relaxed">
            Safyrr n’est pas seulement une fintech.
            C’est une porte d’opportunité :
           👉 Permettre aux étudiants de gagner de l’argent
        </p>
      </div>

       {/* Transparence */}
      <div className="text-center p-8 bg-[#f7f0e5] rounded-2xl hover:bg-[#f4e9ce] transition-all">
        <div className="text-5xl mb-4">🤝</div>
        <h3 className="text-xl font-bold text-gray-900 mb-3">Transparence</h3>
        <p className="text-gray-700 text-sm leading-relaxed">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.
        </p>
      </div>

        {/* Inclusion Financière */}
      <div className="text-center p-8 bg-[#f7f0e5] rounded-2xl hover:bg-[#f4e9ce] transition-all">
        <div className="text-5xl mb-4">🌍 </div>
        <h3 className="text-xl font-bold text-gray-900 mb-3">Inclusion Financière</h3>
        <p className="text-gray-700 text-sm leading-relaxed">
          Nous donnons accès aux services financiers digitaux à tous, 
          même sans compte bancaire traditionnel.
          Un téléphone suffit pour entrer dans l’économie mondiale..
        </p>
      </div>

    </div>
  </div>
</section>
  );
}
   