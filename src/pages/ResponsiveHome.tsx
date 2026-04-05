import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Shield,
  Clock,
  Phone,
  Star,
  ArrowRight,
  Award,
  Users,
  BadgeCheck,
} from "lucide-react";

import ImmersiveServices from "../components/ImmersiveServices";
import InterventionProcess from "../components/InterventionProcess";
import ContactModal from "../components/ContactModal";
import InteractiveMap from "../components/InteractiveMap";
import ClientReviews from "../components/ClientReviews";
import InteractivePolls from "../components/InteractivePolls";

import NavigationGuide from "../components/NavigationGuide";

const ResponsiveHome: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showGuide, setShowGuide] = useState(false);
  const [timeOnPage, setTimeOnPage] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [, setUserBehavior] = useState<
    "new" | "returning" | "engaged"
  >("new");

  useEffect(() => {
    const visited = localStorage.getItem("visited");
    if (visited) setUserBehavior("returning");
    else localStorage.setItem("visited", "true");

    const timer = setInterval(() => setTimeOnPage((p) => p + 1), 1000);
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(scrollTop / docHeight);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      clearInterval(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (timeOnPage > 30 && scrollProgress > 0.5) {
      setUserBehavior("engaged");
    }
  }, [timeOnPage, scrollProgress]);

  const stats = [
    { number: "24h/24", label: "Disponibilité", icon: Clock },
    { number: "15+", label: "Ans d'expérience", icon: Award },
    { number: "1000+", label: "Clients satisfaits", icon: Users },
    { number: "100%", label: "Satisfaction", icon: Star },
  ];

  return (
    <div className="bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900 text-gray-900 dark:text-gray-100">
      {/* 🏠 HERO */}
      <section className="relative flex flex-col lg:flex-row items-center justify-center min-h-[80vh] py-10 px-6 sm:px-10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_#FF6B00_0%,_transparent_70%)] opacity-10" />
        <div className="relative z-10 max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 text-center lg:text-left"
          >
            <div className="inline-flex items-center space-x-2 bg-[#FF6B00]/10 text-[#FF6B00] px-4 py-1.5 rounded-full text-sm font-semibold">
              <Clock className="w-4 h-4" />
              <span>Service 24h/24</span>
            </div>

            <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight text-gray-900 dark:text-white">
              Serrure Safe{" "}
              <span className="block bg-gradient-to-r from-[#FF6B00] to-[#FF3C00] bg-clip-text text-transparent">
                Essonne
              </span>
            </h1>

            <div className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed space-y-4">
              <p className="font-semibold text-gray-900 dark:text-white">
                Serrurier en Essonne – Chez vous en 30 minutes<br/>
                <span className="font-normal text-gray-600 dark:text-gray-300">Ouverture de porte, dépannage urgent, changement de serrure.</span>
              </p>
              <ul className="space-y-2 text-base mx-auto lg:mx-0 w-fit text-left">
                <li className="flex items-start gap-2"><span>🔑</span> <span>Intervention 24h/24 – 7j/7</span></li>
                <li className="flex items-start gap-2"><span>🛡️</span> <span>Pose de serrures certifiées A2P</span></li>
                <li className="flex items-start gap-2"><span>💰</span> <span>Prix annoncés à l’avance, sans mauvaise surprise</span></li>
                <li className="flex items-start gap-2"><span>📍</span> <span>Artisan local basé à Viry-Châtillon</span></li>
                <li className="flex items-start gap-2"><span>⭐</span> <span>5/5 sur Google – +52 avis clients vérifiés</span></li>
                <li className="flex items-start gap-2"><span>🪟</span> <span>Vitrerie et rideaux roulants : on s’occupe aussi de ça.</span></li>
                <li className="flex items-start gap-2 font-semibold text-[#FF6B00]"><span>📞</span> <span>Appelez maintenant – Un serrurier décroche 24h/24</span></li>
              </ul>
            </div>

            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              <a
                href="tel:+33185097365"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#FF6B00] to-[#FF3C00] text-white px-5 sm:px-6 py-2.5 rounded-lg font-bold text-sm sm:text-base shadow hover:shadow-lg transition-all whitespace-nowrap"
              >
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span>01 85 09 73 65</span>
              </a>
              <a
                href="tel:+33783867650"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#FF6B00] to-[#FF3C00] text-white px-5 sm:px-6 py-2.5 rounded-lg font-bold text-sm sm:text-base shadow hover:shadow-lg transition-all whitespace-nowrap"
              >
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span>07 83 86 76 50</span>
              </a>
              {/* 🔹 Nouveau bouton WhatsApp */}
              <a
                href="https://wa.me/33783867650"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-5 sm:px-6 py-2.5 rounded-lg font-bold text-sm sm:text-base shadow hover:shadow-lg transition-all whitespace-nowrap"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.52 3.48A11.84 11.84 0 0 0 12 0a11.93 11.93 0 0 0-10.3 17.94L0 24l6.3-1.66A11.91 11.91 0 0 0 12 24a11.93 11.93 0 0 0 8.49-20.52ZM12 21.8a9.7 9.7 0 0 1-5.24-1.53l-.38-.23-3.73 1 1-3.64-.25-.38A9.73 9.73 0 1 1 12 21.8Zm5.47-7.35c-.3-.15-1.74-.86-2.01-.96s-.47-.15-.66.15-.76.96-.93 1.15-.34.22-.63.07a7.91 7.91 0 0 1-2.32-1.43 8.66 8.66 0 0 1-1.6-2c-.17-.3 0-.46.13-.61.13-.13.3-.34.44-.52s.19-.3.3-.5a.54.54 0 0 0 0-.5c-.08-.15-.66-1.6-.9-2.19s-.47-.5-.66-.51h-.56a1.07 1.07 0 0 0-.77.36 3.24 3.24 0 0 0-1 2.41 5.67 5.67 0 0 0 1.2 3.03 13.1 13.1 0 0 0 5.07 4.32c.7.3 1.26.47 1.69.6a4 4 0 0 0 1.84.12 3.05 3.05 0 0 0 2-1.43 2.47 2.47 0 0 0 .17-1.43c-.05-.1-.25-.17-.56-.32Z" />
                </svg>
                <span>WhatsApp</span>
              </a>

              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 border-2 border-[#FF6B00] text-[#FF6B00] hover:bg-[#FF6B00] hover:text-white px-5 sm:px-6 py-2.5 rounded-lg font-bold text-sm sm:text-base transition-all whitespace-nowrap"
              >
                <span>Nos Services</span>
                <ArrowRight className="w-5 h-5 flex-shrink-0" />
              </Link>
            </div>

            {/* 🔹 Badge Google Trust */}
            <div className="flex justify-center lg:justify-start pt-6">
              <a
                href="https://share.google/YzvsPqkbP6xX6bojc"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 sm:space-x-4 bg-white/95 dark:bg-gray-800/95 backdrop-blur-md border border-gray-200 dark:border-gray-700 shadow-md rounded-2xl px-4 sm:px-5 py-3 hover:shadow-lg hover:border-blue-400 transition-all hover:scale-105"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png"
                  alt="Google"
                  className="w-10 h-10 flex-shrink-0"
                />
                <div className="flex flex-col text-left">
                  <span className="text-sm sm:text-base font-extrabold text-gray-900 dark:text-white leading-tight">⭐ 5/5 sur Google</span>
                  <div className="flex items-center space-x-1 mt-0.5">
                    <span className="text-xs sm:text-sm font-medium text-gray-500 dark:text-gray-400">
                      +52 avis clients
                    </span>
                    <BadgeCheck className="w-4 h-4 text-blue-500 fill-blue-100 dark:fill-blue-900" />
                  </div>
                </div>
                <div className="ml-2 border-l border-gray-200 dark:border-gray-600 pl-3 sm:pl-4 flex items-center h-full">
                  <span className="text-xs sm:text-sm font-bold text-blue-600 dark:text-blue-400 underline-offset-2 hover:underline whitespace-nowrap">
                    Voir nos avis
                  </span>
                </div>
              </a>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.2 + index * 0.1,
                    duration: 0.6,
                  }}
                  className="text-center p-3 bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm rounded-xl shadow-sm"
                >
                  <stat.icon className="w-5 h-5 text-[#FF6B00] mx-auto mb-1" />
                  <div className="text-xl font-bold">{stat.number}</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.pexels.com/photos/277559/pexels-photo-277559.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Serrurier professionnel"
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute top-4 left-4 bg-white/90 rounded-lg p-3 shadow">
                <div className="flex items-center space-x-2">
                  <Shield className="w-6 h-6 text-[#FF6B00]" />
                  <div>
                    <div className="font-bold text-gray-900">Certifié A2P</div>
                    <div className="text-xs text-gray-600">
                      Sécurité garantie
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SERVICES */}
      <ImmersiveServices />

      {/* SECTIONS CONDENSÉES */}
      <div className="space-y-12">
        <InteractiveMap />
        <ClientReviews />
        <InteractivePolls />
      </div>

      {/* 🌟 POURQUOI NOUS CHOISIR */}
      <section className="relative py-16 bg-gradient-to-b from-white via-orange-50/30 to-white dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-extrabold text-center mb-8"
          >
            Pourquoi <span className="text-[#FF6B00]">nous choisir</span> ?
          </motion.h2>

          {/* tableau puzzle */}
          <div className="overflow-x-auto rounded-2xl border border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-900/70 shadow-md backdrop-blur-md">
            <table className="min-w-full text-left text-gray-800 dark:text-gray-200">
              <thead className="text-sm uppercase tracking-wide bg-gray-100 dark:bg-gray-800/60">
                <tr>
                  <th className="px-5 py-3 font-semibold">Critère</th>
                  <th className="px-5 py-3 font-semibold text-[#FF6B00]">
                    Nous
                  </th>
                  <th className="px-5 py-3 font-semibold">Standard marché</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
                {[
                  {
                    crit: "Délai d’intervention",
                    us: "≤ 30 minutes",
                    others: "1–2 heures",
                  },
                  {
                    crit: "Disponibilité",
                    us: "24h/24 — 7j/7",
                    others: "Horaires limités",
                  },
                  {
                    crit: "Qualification",
                    us: "Certifiés A2P",
                    others: "Variable",
                  },
                  {
                    crit: "Devis",
                    us: "Clairs et transparents",
                    others: "Souvent flous",
                  },
                  {
                    crit: "Matériel",
                    us: "Haute sécurité",
                    others: "Entrée de gamme",
                  },
                  {
                    crit: "Garantie",
                    us: "Incluse sur travaux",
                    others: "Selon prestataire",
                  },
                ].map((row, rowIndex) => (
                  <motion.tr
                    key={rowIndex}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {[row.crit, row.us, row.others].map((cell, cellIndex) => (
                      <motion.td
                        key={cellIndex}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: (rowIndex * 3 + cellIndex) * 0.05 }}
                        viewport={{ once: true }}
                        className={`px-5 py-3 ${cellIndex === 1
                          ? "text-[#FF6B00] font-semibold"
                          : cellIndex === 2
                            ? "text-gray-500 dark:text-gray-400"
                            : "font-medium"
                          }`}
                      >
                        {cell}
                      </motion.td>
                    ))}
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* PROCESSUS */}
      <InterventionProcess />

      {/* 📞 CTA FINAL COMPACT */}
      <section className="relative flex flex-col items-center justify-center py-12 px-6 text-center bg-gradient-to-r from-[#FF6B00] to-[#FF3C00] overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 max-w-2xl mx-auto bg-white/10 backdrop-blur-xl p-6 rounded-xl shadow-lg"
        >
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-2 text-white">
            Besoin d’une intervention urgente ?
          </h2>
          <p className="text-sm sm:text-base mb-5 text-white/90">
            Disponible 24h/24 et 7j/7 — intervention rapide garantie.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <a
              href="tel:+33185097365"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#FF6B00] font-bold px-5 py-2.5 rounded-lg hover:scale-[1.05] transition-all shadow"
            >
              <Phone className="mr-2 w-5 h-5" />
              01 85 09 73 65 / 07 83 86 76 50
            </a>

            <Link
              to="/emergency"
              className="inline-flex items-center justify-center gap-2 border-2 border-white px-5 py-2.5 rounded-lg font-bold text-white hover:bg-white hover:text-[#FF6B00] transition-all shadow"
            >
              <span>Urgence</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </motion.div>
      </section>

      {/* MODALS + CTA FLOATING */}
      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      <NavigationGuide
        isVisible={showGuide}
        onClose={() => setShowGuide(false)}
      />
    </div>
  );
};

export default ResponsiveHome;
