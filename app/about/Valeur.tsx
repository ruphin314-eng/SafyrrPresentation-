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
      
      {/* Confiance */}
      <div className="text-center p-8 bg-[#f7f0e5] rounded-2xl hover:bg-[#f4e9ce] transition-all">
        <div className="text-5xl mb-4">🤝</div>
        <h3 className="text-xl font-bold text-gray-900 mb-3">Confiance</h3>
        <p className="text-gray-700 text-sm leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
        </p>
      </div>

      {/* Innovation */}
      <div className="text-center p-8 bg-[#f7f0e5] rounded-2xl hover:bg-[#f4e9ce] transition-all">
        <div className="text-5xl mb-4">💡</div>
        <h3 className="text-xl font-bold text-gray-900 mb-3">Innovation</h3>
        <p className="text-gray-700 text-sm leading-relaxed">
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
        </p>
      </div>

      {/* Excellence */}
      <div className="text-center p-8 bg-[#f7f0e5] rounded-2xl hover:bg-[#f4e9ce] transition-all">
        <div className="text-5xl mb-4">🎯</div>
        <h3 className="text-xl font-bold text-gray-900 mb-3">Excellence</h3>
        <p className="text-gray-700 text-sm leading-relaxed">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.
        </p>
      </div>

    </div>
  </div>
</section>
  );
}
   