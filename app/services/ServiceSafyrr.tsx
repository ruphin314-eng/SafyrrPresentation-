// pages/ServiceSafyrr.tsx
import { FaArrowRight } from 'react-icons/fa';
import Image from 'next/image';
import React from 'react';
import Link from "next/link";

const ServiceSafyrr = () => {
  return (
    <main className="flex flex-col">
      {/* Section Hero */}
      <section
        className="pt-32 pb-12 text-center"
        style={{
          background: 'linear-gradient(to bottom right, #eddbae, #ffffff)',
        }}
      >
        <div className="max-w-4xl mx-auto px-4">
          <span
            className="inline-block px-3 py-1 rounded-full uppercase text-xs font-bold mb-3"
            style={{
              backgroundColor: 'rgba(245, 181, 71, 0.2)',
              color: '#F5B547',
            }}
          >
            Ce que nous proposons
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4" style={{ color: '#333' }}>
            Nos services
          </h1>
          <p className="text-lg max-w-xl mx-auto" style={{ color: '#666' }}>
            Découvrez toutes les façons dont SAFYRR peut simplifier votre vie financière.
          </p>
        </div>
      </section>

      {/* Section Services */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 space-y-16">
          {/* Service 1: Cartes prépayées */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative group">
              <div
                className="absolute -inset-3 rounded-2xl opacity-15 blur-xl transition-opacity"
                style={{ background: 'linear-gradient(to right, #F5B547, #FFDF8F)' }}
              />
              <div className="relative overflow-hidden rounded-2xl shadow-lg">
                <Image
                  src="/assets/prepaid-card-hero-CliEPAod.jpg"
                  alt="Cartes prépayées"
                  width={600}
                  height={300}
                  className="object-cover w-full h-72 transition-transform group-hover:scale-105"
                />
                <span
                  className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold"
                  style={{ backgroundColor: '#FFDF8F', color: '#333' }}
                >
                  Les plus populaires
                </span>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4" style={{ color: '#333' }}>
                Cartes prépayées
              </h2>
              <div className="w-12 h-1 rounded-full mb-5" style={{ background: 'linear-gradient(to right, #F5B547, #FFDF8F)' }} />
              <p className="text-gray-600 mb-6">
                Découvrez notre gamme de cartes prépayées SAFYRR — parfaites pour les achats quotidiens, les paiements en ligne et les cadeaux. Aucun compte bancaire requis.
              </p>
              <ul className="grid grid-cols-2 gap-2 mb-8 text-sm text-gray-800">
                {[
                  'Émission instantanée',
                  'Pas de vérification de crédit',
                  'Accepté dans le monde entier',
                  'Rechargez à tout moment',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span
                      className="w-5 h-5 flex items-center justify-center rounded-full font-bold shrink-0"
                      style={{ backgroundColor: '#F5B547', color: '#333' }}
                    >
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/prepaid-cards"
                className="inline-flex items-center gap-2 px-6 py-3 font-bold rounded-xl shadow-lg transition-opacity"
                style={{
                  background: 'linear-gradient(to right, #F5B547, #FFDF8F)',
                  color: '#333',
                }}
              >
                Découvrez les cartes prépayées <FaArrowRight />
              </Link>
            </div>
          </div>

          {/* Service 2: Transferts d’argent */}
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
  {/* Texte à gauche */}
  <div>
    <h2 className="text-3xl font-bold mb-4" style={{ color: '#333' }}>
      Transferts d’argent
    </h2>
    <div
      className="w-12 h-1 rounded-full mb-5"
      style={{ background: 'linear-gradient(to right, #F5B547, #FFDF8F)' }}
    />
    <p className="text-gray-600 mb-6">
      Envoyez de l’argent instantanément à votre famille et à vos amis à travers l’Afrique et le monde entier. Rapide, sécurisé et aux meilleurs tarifs.
    </p>
    <ul className="grid grid-cols-2 gap-2 mb-8 text-sm text-gray-800">
      {['Livraison instantanée', 'Faibles honoraires', 'Sécurisé et chiffré', '15+ pays'].map((item) => (
        <li key={item} className="flex items-center gap-2">
          <span
            className="w-5 h-5 flex items-center justify-center rounded-full font-bold shrink-0"
            style={{ backgroundColor: '#F5B547', color: '#333' }}
          >
            ✓
          </span>
          {item}
        </li>
      ))}
    </ul>
    <Link
      href="/money-transfers"
      className="inline-flex items-center gap-2 px-6 py-3 font-bold rounded-xl shadow-lg transition-opacity"
      style={{
        background: 'linear-gradient(to right, #F5B547, #FFDF8F)',
        color: '#333',
      }}
    >
      Explorez les transferts d’argent <FaArrowRight />
    </Link>
  </div>

  {/* Image à droite */}
  <div className="relative group">
    <div
      className="absolute -inset-3 rounded-2xl opacity-15 blur-xl transition-opacity"
      style={{ background: 'linear-gradient(to right, #F5B547, #FFDF8F)' }}
    />
    <div className="relative overflow-hidden rounded-2xl shadow-lg">
      <Image
        src="/assets/money-transfer-M_nvfJJX.jpg"
        alt="Transferts d’argent"
        width={600}
        height={300}
        className="object-cover w-full h-72 transition-transform group-hover:scale-105"
      />
      <span
        className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold"
        style={{ backgroundColor: '#FFDF8F', color: '#333' }}
      >
        Rapide et sécurisé
      </span>
    </div>
  </div>
</div>

          {/* Service 3: Services d’abonnement */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative group">
              <div
                className="absolute -inset-3 rounded-2xl opacity-15 blur-xl transition-opacity"
                style={{ background: 'linear-gradient(to right, #F5B547, #FFDF8F)' }}
              />
              <div className="relative overflow-hidden rounded-2xl shadow-lg">
                <Image
                  src="/assets/subscriptions-BPdFSVoI.jpg"
                  alt="Services d’abonnement"
                  width={600}
                  height={300}
                  className="object-cover w-full h-72 transition-transform group-hover:scale-105"
                />
                <span
                  className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold"
                  style={{ backgroundColor: '#FFDF8F', color: '#333' }}
                >
                  Tout-en-un
                </span>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4" style={{ color: '#333' }}>
                Services d’abonnement
              </h2>
              <div className="w-12 h-1 rounded-full mb-5" style={{ background: 'linear-gradient(to right, #F5B547, #FFDF8F)' }} />
              <p className="text-gray-600 mb-6">
                Gérez facilement vos abonnements Canal Plus, Eneo et autres abonnements essentiels. Payez une fois et profitez d’un service ininterrompu.
              </p>
              <ul className="grid grid-cols-2 gap-2 mb-8 text-sm text-gray-800">
                {['Canal Plus', 'Facturation Eneo', 'Renouvellement facile', 'Tout au même endroit'].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span
                      className="w-5 h-5 flex items-center justify-center rounded-full font-bold shrink-0"
                      style={{ backgroundColor: '#F5B547', color: '#333' }}
                    >
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/subscriptions"
                className="inline-flex items-center gap-2 px-6 py-3 font-bold rounded-xl shadow-lg transition-opacity"
                style={{
                  background: 'linear-gradient(to right, #F5B547, #FFDF8F)',
                  color: '#333',
                }}
              >
                Découvrez les services d’abonnement <FaArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ServiceSafyrr;