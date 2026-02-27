import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Key,
  Shield,
  Building,
  Camera,
  Car,
  CheckCircle,
  Phone,
  ArrowRight,
  Zap,
  Euro,
} from "lucide-react";
import AnimatedCanvas from "../components/AnimatedCanvas";
import LocksmithServiceGallery from "../components/LocksmithServiceGallery";

const Services: React.FC = () => {
  const services = [
    {
      id: "serrurerie",
      title: "Serrurerie & Dépannage",
      icon: Key,
      image:
        "Debloquer_une_serrure_sans_l_endommager__Techniques_efficaces-1536x867.webp",
      description:
        "Ouverture rapide, remplacement et sécurisation de serrures toutes marques. Intervention professionnelle en moins de 30 minutes, 24h/24 à Viry-Châtillon et alentours.",
      points: [
        "Ouverture sans dégât",
        "Serrures multipoints",
        "Mise en sécurité immédiate",
        "Service d’urgence 24h/24",
      ],
      price: "À partir de 79€",
    },
    {
      id: "porte-blindee",
      title: "Portes Blindées & Sécurité",
      icon: Shield,
      image: "Securite-Serrurerie-Portes-Blindage.jpg",
      description:
        "Installation de portes blindées esthétiques et performantes. Nos produits certifiés A2P assurent protection, isolation et design moderne.",
      points: [
        "Portes haute sécurité A2P",
        "Installation sur mesure",
        "Isolation phonique et thermique",
        "Garantie 10 ans",
      ],
      price: "Dès 1299€",
    },
    {
      id: "rideaux-metalliques",
      title: "Rideaux Métalliques & Volets",
      icon: Building,
      image: "VOLET_R.jpg",
      description:
        "Sécurisez votre commerce ou garage avec un rideau métallique motorisé. Dépannage et maintenance express, 7j/7.",
      points: [
        "Installation rapide et solide",
        "Motorisation et automatisme",
        "Réparation toutes marques",
        "Maintenance préventive",
      ],
      price: "Dès 499€",
    },
    {
      id: "videosurveillance",
      title: "Vidéosurveillance & Alarmes",
      icon: Camera,
      image: "video_surveillance-1-768x0-c-default.jpg",
      description:
        "Installez un système connecté et intelligent. Visualisez vos caméras en temps réel, recevez des alertes et protégez vos biens à distance.",
      points: [
        "Caméras HD connectées",
        "Accès smartphone sécurisé",
        "Installation discrète",
        "Support technique 24/7",
      ],
      price: "À partir de 299€",
    },
    {
      id: "vehicules",
      title: "Ouverture de Véhicules",
      icon: Car,
      image: "5.png",
      description:
        "Clés oubliées, perdues ou bloquées ? Nous ouvrons votre voiture sans dégât, sur place, à toute heure.",
      points: [
        "Ouverture sans casse",
        "Intervention sur place",
        "Toutes marques et modèles",
        "Disponible 24h/24",
      ],
      price: "Dès 89€",
    },
  ];

  return (
    <div className="pt-0 bg-gradient-to-b from-white via-orange-50/20 to-white">
      {/* 🎯 HERO IMMERSIF */}
      <section className="relative h-[95vh] flex flex-col justify-center items-center text-center overflow-hidden">
        {/* Image immersive */}
        <img
          src="optimisez-vos-portes-coulissantes-avec-une-serrure-a-crochet-efficace-1024x683.jpg"
          alt="Serrurier en intervention"
          className="absolute inset-0 w-full h-full object-cover brightness-[0.55]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-transparent" />
        <AnimatedCanvas type="particles" color="#ffffff" intensity={0.15} />

        {/* Contenu */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-white px-6 max-w-4xl"
        >
          <div className="inline-flex items-center space-x-2 bg-white/20 px-4 py-2 rounded-full text-sm font-semibold mb-6 backdrop-blur-sm">
            <Zap className="w-4 h-4 text-orange-300" />
            <span>Intervention Serrurerie 24h/24 ,Île-de-France</span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight bg-gradient-to-r from-orange-400 to-yellow-300 bg-clip-text text-transparent drop-shadow-[0_3px_4px_rgba(0,0,0,0.5)]">
            Sécurisez votre quotidien avec <br /> Serrure Safe Île-de-France
          </h1>

          <p className="text-lg sm:text-xl text-gray-200 mb-8">
            Dépannage rapide, portes blindées, rideaux métalliques et systèmes
            connectés. Intervention garantie en moins de 30 minutes.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:scale-105 transition-transform shadow-lg"
            >
              <Phone className="w-5 h-5" />
              <span>Appelez-nous</span>
            </Link>

            <Link
              to="/emergency"
              className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-gray-900 transition-all duration-200"
            >
              <span>Urgence immédiate</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </motion.div>
      </section>

      {/* 🔧 SERVICES avec tarif */}
      <section className="relative py-20 space-y-20">
        {services.map((s, i) => (
          <motion.section
            key={s.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative flex flex-col md:flex-row items-center justify-between overflow-hidden rounded-3xl shadow-md bg-gradient-to-br from-white via-white/85 to-orange-50 border border-orange-100 mx-4 sm:mx-10"
          >
            {/* Image */}
            <div className="absolute inset-0 overflow-hidden rounded-3xl">
              <img
                src={s.image}
                alt={s.title}
                loading="lazy"
                className="w-full h-full object-cover brightness-[0.9] scale-105 opacity-70 transition-transform duration-[2500ms] hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/70 to-white/50" />
            </div>

            {/* Contenu */}
            <div
              className={`relative z-10 w-full md:w-1/2 px-6 sm:px-10 py-10 ${i % 2 === 0 ? "md:ml-auto text-right" : "md:mr-auto text-left"
                }`}
            >
              <s.icon className="w-10 h-10 text-orange-500 mb-4 mx-auto md:mx-0" />
              <h2 className="text-3xl sm:text-4xl font-bold mb-2 text-gray-900">
                {s.title}
              </h2>

              <div className="flex items-center justify-center md:justify-start gap-2 text-orange-600 font-semibold text-lg mb-3">
                <Euro className="w-5 h-5" />
                <span>{s.price}</span>
              </div>

              <p className="text-gray-700 mb-5 text-base sm:text-lg leading-relaxed">
                {s.description}
              </p>

              <ul className="space-y-2 mb-6">
                {s.points.map((p, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-2 text-gray-800 justify-start"
                  >
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm sm:text-base">{p}</span>
                  </li>
                ))}
              </ul>

              <Link
                to={`/services/${s.id}`}
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-5 py-2.5 rounded-lg font-semibold hover:scale-105 transition-transform shadow-sm"
              >
                <span>Découvrir</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.section>
        ))}
      </section>

      <LocksmithServiceGallery />
    </div>
  );
};

export default Services;
