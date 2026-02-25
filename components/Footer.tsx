"use client";

import Link from "next/link";
import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaWhatsapp,
  FaTiktok,
} from "react-icons/fa";

export default function Footer() {
  const socialLinks = [
    {
      href: "https://facebook.com/safyrr",
      label: "Facebook",
      icon: <FaFacebookF size={18} />,
    },
    {
      href: "https://instagram.com/safyrr",
      label: "Instagram",
      icon: <FaInstagram size={18} />,
    },
    {
      href: "https://twitter.com/safyrr",
      label: "Twitter",
      icon: <FaTwitter size={18} />,
    },
    {
      href: "https://linkedin.com/company/safyrr",
      label: "LinkedIn",
      icon: <FaLinkedinIn size={18} />,
    },
    {
      href: "https://wa.me/237000000000",
      label: "WhatsApp",
      icon: <FaWhatsapp size={18} />,
    },
    {
      href: "https://www.tiktok.com/@safyrr237?_r=1&_t=ZS-949D5mojq3I",
      label: "TikTok",
      icon: <FaTiktok size={18} />,
    },
  ];

  const quickLinks = [
    { href: "/", label: "Accueil" },
    { href: "/about", label: "À propos de nous" },
    { href: "/services", label: "Services" },
    { href: "/faq", label: "FAQ" },
    { href: "/contact", label: "Contactez-nous" },
  ];

  return (
    <footer className="bg-[#333333] text-white">
      <div className="w-full px-4 md:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Logo */}
          <div className="flex flex-col items-center md:items-start">
            <div className="mb-4">
              <Image
                src="/Image/logo2.png"
                alt="SAFYRR Logo"
                width={140}
                height={60}
                className="object-contain rounded-2xl"
              />
            </div>

            <p className="text-sm text-white/60 leading-relaxed max-w-xs text-center md:text-left">
              Votre partenaire de confiance pour les cartes prépayées,
              les transferts d’argent et les services d’abonnement.
              Rapide, sécurisé et fiable.
            </p>
          </div>

          {/* Liens */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-semibold text-[#FFDF8F] mb-4">
              Liens rapides
            </h4>

            <ul className="space-y-2">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-[#FFDF8F] transition"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-semibold text-[#FFDF8F] mb-4">
              Contactez-nous
            </h4>

            {/* Social Icons */}
            <div className="flex gap-3 mb-6 justify-center md:justify-start">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 bg-white/10 hover:bg-[#FFDF8F] hover:text-gray-900 rounded-xl flex items-center justify-center transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>

            <div className="text-sm text-white/60 space-y-1 text-center md:text-left">
              <p>📧 <a href="mailto:Lionelkewang087@safyrr.org" className="hover:underline">
                     contact@safyrr.com
                     </a>
              </p>

              <p>📞 <a href="https://wa.me/237688704382" target="_blank" className="hover:underline">
                     +237 000 000 000
                     </a>
              </p>
              <p>📍 Douala, Cameroun</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/40 text-center md:text-left">
            © SAFYRR 2026. Tous droits réservés.
          </p>

          <div className="flex gap-4 text-sm text-white/40">
            <Link href="#Hero" className="hover:text-[#FFDF8F] transition">
              Politique de confidentialité
            </Link>
            <Link href="#Hero" className="hover:text-[#FFDF8F] transition">
              Conditions d’utilisation
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}