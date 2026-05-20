"use client";
import React, { useEffect, useState } from "react";

// 🔧 Tes liens
const LINKS = {
  playstore: "https://play.google.com/store/apps/details?id=com.safyr.safyr",
  webApp: "https://safyrr.tech/",
};

export default function GetStarted() {
  const [label, setLabel] = useState("Télécharger l'application");

  useEffect(() => {
    const ua = navigator.userAgent.toLowerCase();
    if (ua.includes("android")) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setLabel("Télécharger sur Play Store");
    } else {
      setLabel("Ouvrir l'application web");
    }
  }, []);

  const handleDownload = () => {
    const ua = navigator.userAgent.toLowerCase();
    if (ua.includes("android")) {
      window.location.href = LINKS.playstore;
    } else {
      window.location.href = LINKS.webApp;
    }
  };

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
          Rejoignez des milliers de clients satisfaits et découvrez l'avenir des services financiers.
        </p>
        <button
          onClick={handleDownload}
          className="inline-flex items-center gap-2 px-8 py-4 bg-linear-to-r from-yellow-400 to-yellow-300 text-gray-900 font-bold rounded-xl shadow-lg hover:opacity-90 transition-all text-lg"
        >
          {label}
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
        </button>
      </div>
    </section>
  );
}