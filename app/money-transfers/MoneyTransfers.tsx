/* eslint-disable @next/next/no-img-element */
// pages/MoneyTransfert.tsx
import React from "react";

const MoneyTransfert: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-[#333333] relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 text-center relative z-10">
          <span className="inline-block px-3 py-1 bg-[#FFDF8F] border border-[#FFDF8F] text-[#333333] text-xs font-display font-semibold rounded-full uppercase tracking-wider mb-3">
            Transferts d’argent
          </span>
          <h1 className="font-display text-4xl md:text-5xl font-extrabold text-[#FBF6EF] mb-4">
            Transferts rapides d’argent
          </h1>
          <p className="text-[#FBF6EF]/60 max-w-xl mx-auto text-lg">
            Envoyez de l’argent à l’échelle mondiale en quelques secondes. Sûr, rapide et abordable.
          </p>
        </div>
      </section>

      {/* SECTION TRANSFERT RAPIDE */}
      <section className="py-20" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* IMAGE */}
            <div className="relative group">
              <div
                className="absolute -inset-4 rounded-3xl opacity-20 blur-xl"
                style={{
                  background: "linear-gradient(90deg, #F5B547, #FFDF8F)",
                }}
              ></div>

              <img
                src="/assets/money-transfer-M_nvfJJX.jpg"
                alt="Transfert d’argent"
                width={600}
                height={400}
                className="relative rounded-2xl shadow-lg w-full object-cover border-4"
                style={{ borderColor: "rgba(245,181,71,0.3)" }}
              />
            </div>

            {/* TEXTE */}
            <div>
              <h2
                className="text-3xl font-bold mb-5"
                style={{ color: "#333333" }}
              >
                Transferts rapides
              </h2>

              <div
                className="w-12 h-1 rounded-full mb-6"
                style={{
                  background: "linear-gradient(90deg, #F5B547, #FFDF8F)",
                }}
              ></div>

              <p
                className="leading-relaxed mb-4"
                style={{ color: "#6B7280" }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mais do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>

              <p
                className="leading-relaxed mb-6"
                style={{ color: "#6B7280" }}
              >
                Nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore.
              </p>

              {/* STATS */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "< 30", label: "Vitesse de transfert" },
                  { value: "15+", label: "Pays" },
                  { value: "0.5%", label: "Frais min." },
                  { value: "24/7", label: "Disponible" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="rounded-xl p-4 text-center"
                    style={{ backgroundColor: "#F5EFE7" }}
                  >
                    <p
                      className="text-xl font-extrabold font-sans "
                      style={{ color: "#F5B547" }}
                    >
                      {item.value}
                    </p>
                    <p
                      className="text-xs mt-1"
                      style={{ color: "#6B7280" }}
                    >
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION PROCESSUS SECURISE */}
      <section className="py-20" style={{ backgroundColor: "#F5EFE7" }}>
        <div className="px-4 md:px-8">

          <h2
            className="text-3xl font-bold mb-3 text-center"
            style={{ color: "#333333" }}
          >
            Processus sécurisé
          </h2>

          <div
            className="w-16 h-1 rounded-full mx-auto mb-12"
            style={{
              background: "linear-gradient(90deg, #F5B547, #FFDF8F)",
            }}
          ></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {[
              {
                icon: "🔒",
                title: "Chiffrement de bout en bout",
                text: "Toutes vos données de transfert sont chiffrées grâce à la technologie SSL de qualité bancaire.",
              },
              {
                icon: "🛡️",
                title: "Protection contre la fraude",
                text: "Notre système de détection de fraude alimenté par IA surveille chaque transaction 24h/24.",
              },
              {
                icon: "✅",
                title: "Conformité réglementaire",
                text: "SAFYRR est pleinement conforme à toutes les réglementations financières.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl text-center transition"
                style={{
                  backgroundColor: "#FFFFFF",
                  boxShadow: "0 10px 25px rgba(0,0,0,0.05)",
                }}
              >
                <div className="text-5xl mb-4">{item.icon}</div>

                <h3
                  className="font-bold text-xl mb-3"
                  style={{ color: "#333333" }}
                >
                  {item.title}
                </h3>

                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "#6B7280" }}
                >
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

        {/* SECTION TARIFS */}
      <section className="py-20" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="container mx-auto px-4 md:px-8 max-w-3xl">
        
        {/* TITLE */}
        <h2
          className="text-3xl font-bold mb-3 text-center"
          style={{ color: "#333333" }}
        >
          Frais transparents
        </h2>

        <div
          className="w-16 h-1 rounded-full mx-auto mb-12"
          style={{
            background: "linear-gradient(90deg, #F5B547, #FFDF8F)",
          }}
        ></div>

        {/* TABLE CARD */}
        <div
          className="rounded-2xl overflow-hidden"
          style={{
            backgroundColor: "#FFFFFF",
            boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
          }}
        >
          <table className="w-full">
            
            {/* HEADER */}
            <thead
              style={{
                backgroundColor: "#333333",
                color: "#FFFFFF",
              }}
            >
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold">
                  Montant
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold">
                  Frais
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold">
                  Livraison
                </th>
              </tr>
            </thead>

            {/* BODY */}
            <tbody>
              {[
                {
                  amount: "0 – 50 000 FCFA",
                  fee: "500 FCFA",
                  delivery: "Instantané",
                },
                {
                  amount: "50 001 – 200 000 FCFA",
                  fee: "0.5%",
                  delivery: "Instantané",
                },
                {
                  amount: "200 001 – 1M FCFA",
                  fee: "0.3%",
                  delivery: "< 5 minutes",
                },
                {
                  amount: "1M+ FCFA",
                  fee: "0.2%",
                  delivery: "< 30 minutes",
                },
              ].map((row, index) => (
                <tr
                  key={index}
                  style={{
                    backgroundColor:
                      index % 2 === 0 ? "rgba(245,239,231,0.5)" : "#FFFFFF",
                  }}
                >
                  <td
                    className="px-6 py-4 text-sm font-medium"
                    style={{ color: "#333333" }}
                  >
                    {row.amount}
                  </td>

                  <td
                    className="px-6 py-4 text-sm font-semibold"
                    style={{ color: "#F5B547" }}
                  >
                    {row.fee}
                  </td>

                  <td
                    className="px-6 py-4 text-sm"
                    style={{ color: "#6B7280" }}
                  >
                    {row.delivery}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
    </div>
  );
};

export default MoneyTransfert;