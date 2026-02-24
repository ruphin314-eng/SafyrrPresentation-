// pages/services.js
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Cartes prépayées",
    description:
      "Découvrez notre gamme de cartes prépayées premium conçues pour l’usage quotidien, le shopping en ligne, et bien plus encore.",
    href: "/prepaid-cards",
    imageSrc: "/assets/prepaid-card-hero-CliEPAod.jpg",
  },
  {
    title: "Transferts d’argent",
    description:
      "Envoyez de l’argent de manière sécurisée et instantanée à n’importe qui, n’importe où. Transferts rapides à des tarifs compétitifs.",
    href: "/money-transfers",
    imageSrc: "/assets/money-transfer-M_nvfJJX.jpg",
  },
  {
    title: "Services d’abonnement",
    description:
      "Gérez facilement vos abonnements Canal Plus, Eneo et autres via notre plateforme.",
    href: "/subscriptions",
    imageSrc: "/assets/subscriptions-BPdFSVoI.jpg",
  },
];

export default function Services() {
  return (
    <section className="py-20 bg-white">
      <div className="px-4 md:px-8">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 bg-[#FFF2DB] text-[#F5B83D] text-xs font-semibold rounded-full uppercase tracking-wider mb-3">
            Ce que nous proposons
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nos services principaux
          </h2>
          <p className="text-gray-600 max-w-lg mx-auto">
            Tout ce dont vous avez besoin pour vos besoins financiers et d’abonnement, tout au même endroit.
          </p>
        </div>

       <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
  {services.map((service, index) => (
    <Link
      key={index}
      href={service.href}
      className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all "
    >
      <div className="relative h-48 overflow-hidden">
        {/* Image */}
        <Image
          src={service.imageSrc}
          alt={service.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover group-hover:scale-105 transition-all"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent"></div>

        {/* Icône en bas à gauche */}
        {index === 0 && (
          <div style={{ position: 'absolute', bottom: '1rem', left: '1rem', color: '#FFDF8F' }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect width="20" height="14" x="2" y="5" rx="2" />
              <line x1="2" y1="10" x2="22" y2="10" />
            </svg>
          </div>
        )}
        {index === 1 && (
          <div style={{ position: 'absolute', bottom: '1rem', left: '1rem', color: '#FFDF8F' }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M8 3 L4 7 L8 11" />
              <path d="M4 7 H20" />
              <path d="M16 21 L20 17 L16 13" />
              <path d="M20 17 H4" />
            </svg>
          </div>
        )}
        {index === 2 && (
          <div style={{ position: 'absolute', bottom: '1rem', left: '1rem', color: '#FFDF8F' }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect width="20" height="15" x="2" y="7" rx="2" ry="2" />
              <polyline points="17 2 12 7 7 2" />
            </svg>
          </div>
        )}
      </div>

      <div className="p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
        <p className="text-sm text-gray-600 mb-4">{service.description}</p>
        <span className="inline-flex items-center gap-1 text-[#F5B83D] font-semibold text-sm group-hover:gap-2 transition-all">
          En savoir plus
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14"></path>
            <path d="m12 5 7 7-7 7"></path>
          </svg>
        </span>
      </div>
    </Link>
  ))}
</div>
      </div>
    </section>
  );
}