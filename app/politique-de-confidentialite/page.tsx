/* eslint-disable react/no-unescaped-entities */
"use client";

import { useEffect, useRef, useState } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import {
  Shield,
  Database,
  Share2,
  Clock,
  Lock,
  UserCheck,
  RefreshCw,
  Mail,
  Phone,
  MapPin,
  Download,
  ChevronRight,
  Eye,
  AlertTriangle,
  CheckCircle,
} from "lucide-react";

const sections = [
  {
    id: "preambule",
    number: "01",
    icon: Shield,
    color: "#F5B83D",
    title: "Préambule & Identité",
    subtitle: "Responsable de traitement",
    content: [
      {
        heading: "Identité de la société",
        text: "La plateforme Safyrr est éditée et exploitée par la société Safyrr SAS, société par actions simplifiée de droit camerounais, dont le siège social est situé à Douala, Cameroun. En tant qu'acteur majeur de la Fintech en Afrique centrale, Safyrr développe des solutions technologiques propriétaires combinant cartes virtuelles sécurisées et transferts de fonds internationaux.",
      },
      {
        heading: "Engagement de confidentialité",
        text: "Nous nous engageons à respecter scrupuleusement les réglementations en vigueur, notamment la Loi n°2010/012 du 21 décembre 2010 relative à la cybersécurité au Cameroun, les directives de la BEAC et de la COBAC régissant les services de paiement en zone CEMAC, ainsi que les standards internationaux RGPD pour nos utilisateurs de la diaspora.",
      },
    ],
  },
  {
    id: "donnees",
    number: "02",
    icon: Database,
    color: "#3B82F6",
    title: "Données collectées",
    subtitle: "Ce que nous recueillons",
    content: [
      {
        heading: "Identification & vérification (KYC)",
        text: "Identité complète (nom, prénom, date et lieu de naissance, nationalité), documents officiels (CNI, Passeport, Carte de séjour) et preuve de présence via Liveness Check (selfie ou vidéo de vérification).",
      },
      {
        heading: "Coordonnées & localisation",
        text: "Numéro de téléphone mobile, adresse e-mail, adresse résidentielle et justificatif de domicile. Données de géolocalisation lors de l'initialisation des transactions pour détecter les activités suspectes.",
      },
      {
        heading: "Données financières & transactions",
        text: "Détails des transferts (montants, devises, dates, bénéficiaires), historique des paiements par cartes virtuelles, et déclarations justifiant l'origine des fonds pour les transactions dépassant les seuils réglementaires COBAC.",
      },
      {
        heading: "Données techniques & navigation",
        text: "Type d'appareil, système d'exploitation, identifiant unique (IMEI), adresse IP, journaux de connexion et horodatage des activités sur l'application.",
      },
    ],
  },
  {
    id: "finalites",
    number: "03",
    icon: Eye,
    color: "#10B981",
    title: "Finalités du traitement",
    subtitle: "Pourquoi nous utilisons vos données",
    content: [
      {
        heading: "Fourniture des services financiers",
        text: "Traitement et routage de vos ordres de transfert de fonds, émission et sécurisation de vos cartes virtuelles, traitement des autorisations de débit auprès des marchands internationaux, et support client.",
      },
      {
        heading: "Conformité légale & réglementaire",
        text: "Vérification d'identité (KYC), lutte contre la criminalité financière (LBC/FT) conformément aux exigences de la COBAC et de l'ANIF, et production des rapports obligatoires destinés aux autorités monétaires.",
      },
      {
        heading: "Sécurité & prévention de la fraude",
        text: "Authentification forte (2FA, biométrie), scoring de fraude pour détecter et bloquer en temps réel toute activité suspecte sur vos cartes virtuelles ou votre portefeuille.",
      },
      {
        heading: "Amélioration & personnalisation",
        text: "Études statistiques anonymisées pour optimiser la rapidité des corridors de transfert, adaptation de l'interface utilisateur, et envoi de notifications critiques (alertes de transaction, mises à jour de sécurité).",
      },
    ],
  },
  {
    id: "partage",
    number: "04",
    icon: Share2,
    color: "#8B5CF6",
    title: "Partage des données",
    subtitle: "Avec qui nous partageons",
    content: [
      {
        heading: "Partenaires opérationnels",
        text: "Partenaires bancaires et émetteurs de monnaie électronique, opérateurs de téléphonie mobile (Mobile Money), et réseaux de cartes internationaux pour la validation et la sécurisation des paiements.",
      },
      {
        heading: "Autorités régulatrices",
        text: "Agences d'investigation financière (ANIF en zone CEMAC, CENTIF en zone UEMOA) dans le cadre de la lutte contre le blanchiment d'argent, et autorités judiciaires uniquement sur réquisition légale.",
      },
      {
        heading: "Prestataires techniques",
        text: "Hébergement cloud sécurisé répondant aux certifications internationales, et services de vérification d'identité spécialisés pour l'analyse des documents KYC et la reconnaissance biométrique.",
      },
      {
        heading: "Transferts internationaux",
        text: "En utilisant nos services, vous consentez à ce que vos données circulent entre les différents pays de notre réseau, avec des garanties de sécurité équivalentes aux exigences de la CEMAC et des standards internationaux.",
      },
    ],
  },
  {
    id: "conservation",
    number: "05",
    icon: Clock,
    color: "#F59E0B",
    title: "Conservation des données",
    subtitle: "Durées légales de rétention",
    content: [
      {
        heading: "Données d'identification (KYC)",
        text: "Vos documents d'identité, selfies de vérification et informations de profil sont conservés pendant toute la durée de la relation contractuelle, puis archivés pendant 10 ans à compter de la clôture de votre compte.",
      },
      {
        heading: "Données de transaction",
        text: "L'historique de vos transferts et l'usage de vos cartes virtuelles sont conservés pendant 10 ans, conformément aux prescriptions légales en matière de preuve bancaire et de lutte contre le blanchiment.",
      },
      {
        heading: "Suppression & anonymisation",
        text: "À l'expiration des délais légaux, vos données sont soit définitivement supprimées de nos serveurs, soit anonymisées de manière irréversible pour être utilisées exclusivement à des fins statistiques globales.",
      },
    ],
  },
  {
    id: "securite",
    number: "06",
    icon: Lock,
    color: "#EF4444",
    title: "Sécurité des données",
    subtitle: "Comment nous protégeons vos informations",
    content: [
      {
        heading: "Chiffrement de bout en bout",
        text: "Toutes les données circulant entre votre application et nos serveurs sont protégées par des protocoles SSL/TLS de grade militaire. Nos APIs utilisent des tokens sécurisés et des protocoles d'authentification stricts.",
      },
      {
        heading: "Stockage compartimenté",
        text: "Les données sensibles (KYC, cartes virtuelles) sont stockées sur des serveurs isolés, soumis à un contrôle d'accès biométrique strict. L'infrastructure est conçue avec des systèmes de sauvegarde réguliers.",
      },
      {
        heading: "Authentification forte (2FA/MFA)",
        text: "Chaque transaction critique requiert une validation multi-facteurs. Les numéros de carte complets ne sont jamais stockés en clair sur votre appareil (principe du Need-to-Know).",
      },
      {
        heading: "Surveillance & audit",
        text: "Des systèmes analysent en temps réel les tentatives de connexion pour bloquer toute activité suspecte. Des tests de vulnérabilité réguliers garantissent que nos défenses évoluent face aux nouvelles cybermenaces.",
      },
    ],
  },
  {
    id: "droits",
    number: "07",
    icon: UserCheck,
    color: "#06B6D4",
    title: "Vos droits",
    subtitle: "Contrôle sur vos données",
    content: [
      {
        heading: "Droit d'accès & rectification",
        text: "Vous pouvez consulter l'ensemble de vos informations personnelles et les mettre à jour directement depuis les paramètres de l'application Safyrr à tout moment.",
      },
      {
        heading: "Droit à la limitation & opposition",
        text: "Vous pouvez vous opposer sans justification à l'utilisation de vos données à des fins de marketing direct, et demander la limitation du traitement dans certains cas spécifiques.",
      },
      {
        heading: "Droit à la portabilité",
        text: "Vous pouvez demander un relevé complet de vos transactions et données dans un format structuré et lisible, afin de les transmettre à un autre prestataire si vous le souhaitez.",
      },
      {
        heading: "Droit à l'effacement",
        text: "Vous pouvez demander la suppression de votre compte. Conformément à la COBAC, vos données d'identification et transactions restent archivées 10 ans après clôture pour les autorités.",
      },
    ],
  },
  {
    id: "evolutions",
    number: "08",
    icon: RefreshCw,
    color: "#F5B83D",
    title: "Évolutions & contact",
    subtitle: "Modifications et coordonnées",
    content: [
      {
        heading: "Droit de modification",
        text: "Safyrr SAS se réserve le droit de modifier cette politique à tout moment pour garantir une conformité totale avec les nouvelles directives de la COBAC ou les lois nationales.",
      },
      {
        heading: "Modalités de notification",
        text: "En cas de modification substantielle, vous serez informé par notification push dans l'application, par e-mail à l'adresse associée à votre compte, ou par mention sur notre site web officiel.",
      },
      {
        heading: "Consentement & acceptation",
        text: "En continuant à utiliser les services Safyrr après notification d'une mise à jour, vous reconnaissez avoir pris connaissance des changements et les acceptez. En cas de désaccord, vous pouvez clôturer votre compte.",
      },
    ],
  },
];

function AnimatedSection({
  section,
  index,
}: {
  section: (typeof sections)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const Icon = section.icon;

  return (
    <div
      ref={ref}
      id={section.id}
      className={`transition-all duration-700 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 50}ms` }}
    >
      <div className="group relative bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow duration-300">
        {/* Top accent bar */}
        <div
          className="h-1 w-full"
          style={{ backgroundColor: section.color }}
        />

        <div className="p-8">
          {/* Header */}
          <div className="flex items-start gap-5 mb-8">
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
              style={{ backgroundColor: `${section.color}15` }}
            >
              <Icon size={26} style={{ color: section.color }} />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-1">
                <span
                  className="text-xs font-bold tracking-widest uppercase"
                  style={{ color: section.color }}
                >
                  {section.number}
                </span>
              </div>
              <h2 className="text-xl font-bold text-gray-900 leading-tight">
                {section.title}
              </h2>
              <p className="text-sm text-gray-500 mt-0.5">{section.subtitle}</p>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            {section.content.map((item, i) => (
              <div key={i} className="flex gap-4">
                <div className="mt-1 flex-shrink-0">
                  <ChevronRight
                    size={16}
                    style={{ color: section.color }}
                    className="mt-0.5"
                  />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-800 mb-1.5">
                    {item.heading}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PolitiqueConfidentialite() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("preambule");
  const [downloading, setDownloading] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);

      // Update active section
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200) {
            setActiveSection(section.id);
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

const handleDownload = () => {
  // Force toutes les sections à être visibles avant impression
  const sections = document.querySelectorAll(".transition-all");
  sections.forEach((el) => {
    (el as HTMLElement).style.opacity = "1";
    (el as HTMLElement).style.transform = "none";
  });

  window.print();

  // Remet les styles après impression
  setTimeout(() => {
    sections.forEach((el) => {
      (el as HTMLElement).style.opacity = "";
      (el as HTMLElement).style.transform = "";
    });
  }, 1000);
};

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Progress bar */}
      <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-gray-200">
        <div
          className="h-full transition-all duration-100"
          style={{
            width: `${scrollProgress}%`,
            backgroundColor: "#F5B83D",
          }}
        />
      </div>

      {/* Sidebar nav (desktop) */}
      <nav className="fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col gap-2">
        {sections.map((s) => (
          <button
            key={s.id}
            onClick={() => scrollTo(s.id)}
            className="group flex items-center gap-2 text-left"
          >
            <div
              className="w-2 h-2 rounded-full transition-all duration-300"
              style={{
                backgroundColor:
                  activeSection === s.id ? s.color : "#D1D5DB",
                transform:
                  activeSection === s.id ? "scale(1.5)" : "scale(1)",
              }}
            />
            <span
              className={`text-xs transition-all duration-300 whitespace-nowrap ${
                activeSection === s.id
                  ? "opacity-100 text-gray-800 font-medium"
                  : "opacity-0 group-hover:opacity-60 text-gray-500"
              }`}
            >
              {s.title}
            </span>
          </button>
        ))}
      </nav>

      <div id="pdf-content" className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        {/* Hero header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 rounded-full px-4 py-1.5 mb-6">
            <Shield size={14} className="text-amber-600" />
            <span className="text-xs font-semibold text-amber-700 tracking-wide uppercase">
              Dernière mise à jour : 14 mai 2026
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4 leading-tight">
            Politique de{" "}
            <span style={{ color: "#F5B83D" }}>confidentialité</span>
          </h1>

          <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Safyrr SAS s'engage à protéger vos données personnelles conformément
            aux réglementations camerounaises, CEMAC et aux standards
            internationaux RGPD.
          </p>

          {/* Quick stats */}
          <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto mt-10">
            {[
              { icon: CheckCircle, label: "RGPD conforme", color: "#10B981" },
              { icon: Lock, label: "Chiffrement SSL", color: "#3B82F6" },
              { icon: AlertTriangle, label: "COBAC certifié", color: "#F5B83D" },
            ].map((item, i) => {
              const I = item.icon;
              return (
                <div
                  key={i}
                  className="bg-white rounded-xl border border-gray-100 p-4 flex flex-col items-center gap-2"
                >
                  <I size={20} style={{ color: item.color }} />
                  <span className="text-xs text-gray-600 font-medium text-center">
                    {item.label}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Download button */}
          <button
            onClick={handleDownload}
            disabled={downloading}
            className="mt-8 inline-flex items-center gap-2.5 bg-gray-900 hover:bg-gray-800 active:scale-95 text-white font-semibold text-sm px-6 py-3 rounded-full transition-all duration-200 disabled:opacity-60"
          >
            <Download size={16} />
            {downloading ? "Génération en cours..." : "Télécharger en PDF"}
          </button>
        </div>

        {/* Sections grid */}
        <div className="grid grid-cols-1 gap-6">
          {sections.map((section, index) => (
            <AnimatedSection key={section.id} section={section} index={index} />
          ))}
        </div>

        {/* Contact footer card */}
        <div className="mt-10 bg-gray-900 rounded-2xl p-8 text-white">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-amber-400/20 rounded-xl flex items-center justify-center">
              <Mail size={20} className="text-amber-400" />
            </div>
            <div>
              <h2 className="font-bold text-lg">Nous contacter</h2>
              <p className="text-gray-400 text-sm">
                Pour toute question relative à vos données
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-3 gap-4">
            {[
              {
                icon: Mail,
                label: "DPO & Support",
                value: "support@safyrr.tech",
                href: "mailto:support@safyrr.tech",
              },
              {
                icon: Phone,
                label: "WhatsApp",
                value: "+33 07 55 19 65 57",
                href: "https://wa.me/33755196557",
              },
              {
                icon: MapPin,
                label: "Siège social",
                value: "Denver Bonamoussadi, Douala",
                href: null,
              },
            ].map((item, i) => {
              const I = item.icon;
              return (
                <div
                  key={i}
                  className="bg-white/5 hover:bg-white/10 rounded-xl p-4 transition-colors duration-200"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <I size={14} className="text-amber-400" />
                    <span className="text-xs text-gray-400 font-medium">
                      {item.label}
                    </span>
                  </div>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-sm text-white hover:text-amber-400 transition-colors font-medium"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-sm text-white font-medium">
                      {item.value}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer */}
        <p className="text-center text-xs text-gray-400 mt-8">
          © SAFYRR 2026. Tous droits réservés. Document confidentiel Safyrr SAS.
        </p>
      </div>
    </div>
  );
}