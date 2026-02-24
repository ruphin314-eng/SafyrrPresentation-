// pages/get-started.js
import React from "react";
import Link from "next/link";

export default function GetStarted() {
  return (
    <section className="py-20 bg-[#333333] relative overflow-hidden">
      {/* Background gold blurs */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-400 rounded-full blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-8 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Prêt à commencer ?
        </h2>
        <p className="text-white/60 max-w-md mx-auto mb-8">
          Rejoignez des milliers de clients satisfaits et découvrez l’avenir des services financiers.
        </p>
        <Link
          href="/services"
          className="inline-flex items-center gap-2 px-8 py-4 bg-linear-to-r from-yellow-400 to-yellow-300 text-gray-900 font-bold rounded-xl shadow-lg hover:opacity-90 transition-all text-lg"
        >
          Commencez dès aujourd’hui
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="ml-1"
          >
            <path d="M5 12h14"></path>
            <path d="m12 5 7 7-7 7"></path>
          </svg>
        </Link>
      </div>
    </section>
  );
}