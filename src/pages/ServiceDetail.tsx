import React from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Key,
  Shield,
  Phone,
  Clock,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import GlassCard from "../components/GlassCard";
import MagneticButton from "../components/MagneticButton";
import ContextualCTA from "../components/ContextualCTA";

const ServiceDetail: React.FC = () => {
  const { serviceId } = useParams<{ serviceId: string }>();

  const services = {
    "serrurerie-depannage": {
      id: "serrurerie-depannage",
      title: "Serrurerie & Dépannage",
      subtitle: "Votre sécurité est notre priorité",
      description: "Intervention rapide 24h/24 pour toute ouverture, installation ou réparation de serrure, porte blindée, rideau métallique et plus encore.",
      longDescription: "Besoin d'un dépannage en urgence pour une serrure bloquée ou d'un remplacement de cylindre ? Notre équipe de serruriers qualifiés intervient 24h/24 pour tous vos besoins, avec une intervention soignée et rapide, sans dommage pour votre porte.",
      icon: Key,
      price: "À partir de 89€",
      features: [
        "Ouverture de porte claquée, verrouillée ou bloquée",
        "Réparation et remplacement de serrures toutes marques",
        "Installation de serrures multipoints",
        "Mise en sécurité après effraction"
      ],
      images: [
        "https://images.pexels.com/photos/277559/pexels-photo-277559.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
        "https://images.pexels.com/photos/4792509/pexels-photo-4792509.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
        "https://images.pexels.com/photos/5691659/pexels-photo-5691659.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
      ],
      isUrgent: true,
      process: [
        {
          step: "01",
          title: "Appel d'urgence",
          description: "Contactez-nous 24h/24 pour une intervention rapide"
        },
        {
          step: "02",
          title: "Diagnostic",
          description: "Évaluation de la situation et devis transparent"
        },
        {
          step: "03",
          title: "Intervention",
          description: "Réalisation des travaux par nos experts certifiés"
        },
        {
          step: "04",
          title: "Garantie",
          description: "Suivi et garantie sur tous nos travaux"
        }
      ],
      benefits: [
        "Intervention en moins de 30 minutes",
        "Devis gratuit et transparent",
        "Artisan certifié A2P",
        "Garantie sur tous nos travaux",
        "Paiement sécurisé",
        "Service client réactif"
      ]
    },
    "porte-blindee": {
      id: "porte-blindee",
      title: "Dépannage de Porte Blindée",
      subtitle: "Sécurité renforcée garantie",
      description: "Votre porte blindée est un gage de sécurité, mais elle peut nécessiter un dépannage en urgence. Nous intervenons pour débloquer, réparer et sécuriser toutes les portes blindées sans endommager la structure.",
      longDescription: "Les portes blindées offrent une protection maximale contre les effractions. Notre expertise nous permet d'intervenir rapidement sur tous types de portes blindées, qu'elles soient en acier, aluminium ou bois renforcé. Nous respectons les normes de sécurité les plus strictes.",
      icon: Shield,
      price: "À partir de 120€",
      features: [
        "Déblocage de serrures bloquées ou endommagées",
        "Remplacement de serrures haute sécurité",
        "Mise en sécurité renforcée après effraction",
        "Ajustement et maintenance de portes blindées"
      ],
      images: [
        "https://images.pexels.com/photos/4792509/pexels-photo-4792509.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
        "https://images.pexels.com/photos/277559/pexels-photo-277559.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
        "https://images.pexels.com/photos/5691659/pexels-photo-5691659.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
      ],
      isUrgent: true,
      process: [
        {
          step: "01",
          title: "Diagnostic sécurité",
          description: "Analyse complète de l'état de votre porte blindée"
        },
        {
          step: "02",
          title: "Déblocage sécurisé",
          description: "Intervention sans dégât pour préserver l'intégrité"
        },
        {
          step: "03",
          title: "Renforcement",
          description: "Amélioration de la sécurité selon vos besoins"
        },
        {
          step: "04",
          title: "Test et garantie",
          description: "Vérification du bon fonctionnement et garantie"
        }
      ],
      benefits: [
        "Expertise spécialisée portes blindées",
        "Intervention sans dégât",
        "Serrures certifiées A2P",
        "Garantie renforcée",
        "Conseil en sécurité",
        "Maintenance préventive"
      ]
    }
  };

  const service = services[serviceId as keyof typeof services];

  if (!service) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Service non trouvé</h1>
          <Link to="/services" className="text-blue-600 hover:text-blue-700">
            Retour aux services
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Images */}
        <div className="absolute inset-0">
          <img
            src={service.images[0]}
            alt={service.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/30"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white"
            >
              <div className="inline-flex items-center space-x-2 bg-orange-500/20 backdrop-blur-sm border border-orange-500/30 text-orange-200 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <service.icon className="w-4 h-4" />
                <span>{service.subtitle}</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                {service.title}
              </h1>

              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                {service.longDescription}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <div className="text-2xl font-bold text-orange-400">{service.price}</div>
                  <div className="text-sm text-gray-300">Tarif de base</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <div className="flex items-center space-x-2 text-green-400">
                    <Clock className="w-5 h-5" />
                    <span className="font-semibold">Intervention &lt; 30min</span>
                  </div>
                  <div className="text-sm text-gray-300">Temps d'intervention</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <MagneticButton
                  href="tel:+33185097365"
                  className="inline-flex items-center space-x-2 bg-orange-600 hover:bg-orange-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-200 hover:shadow-lg"
                >
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>01 85 09 73 65 / 07 83 86 76 50</span>
                </MagneticButton>
                <Link
                  to="/contact"
                  className="inline-flex items-center space-x-2 border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-200 hover:bg-white hover:text-gray-900"
                >
                  <span>Demander un Devis</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={service.images[1]}
                  alt={service.title}
                  className="w-full h-96 lg:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>

                {/* Floating Badge */}
                <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-lg">
                  <div className="flex items-center space-x-3">
                    <service.icon className="w-8 h-8 text-orange-600" />
                    <div>
                      <div className="font-semibold text-gray-900">
                        Certifié A2P
                      </div>
                      <div className="text-sm text-gray-600">
                        Sécurité garantie
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Nos Prestations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des services professionnels adaptés à vos besoins
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {service.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
              >
                <GlassCard className="p-6 h-full">
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {feature}
                      </h3>
                      <p className="text-gray-600">
                        Service professionnel avec garantie et suivi personnalisé.
                      </p>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Notre Processus
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une méthode éprouvée pour garantir votre satisfaction
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
              >
                <GlassCard className="p-6 text-center h-full">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Pourquoi choisir nos services ?
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Plus de 15 ans d'expérience au service de votre sécurité.
                Nous intervenons rapidement avec du matériel professionnel et certifié.
              </p>

              <div className="space-y-4">
                {service.benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={service.images[2]}
                  alt={service.title}
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>

                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/95 backdrop-blur-sm rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Expertise reconnue
                    </h3>
                    <p className="text-gray-600">
                      Certifiés A2P, nous respectons les normes de sécurité les plus strictes
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Prêt à sécuriser votre {service.title.toLowerCase()} ?
            </h2>
            <p className="text-xl mb-12 max-w-3xl mx-auto opacity-90">
              Contactez-nous dès maintenant pour une intervention rapide et professionnelle.
              Notre équipe d'experts est disponible 24h/24.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
              <MagneticButton
                href="tel:+33185097365"
                className="inline-flex items-center space-x-2 bg-white text-gray-900 px-6 sm:px-10 py-3 sm:py-4 rounded-lg font-bold text-lg sm:text-xl hover:bg-gray-100 transition-all duration-200 hover:shadow-lg"
              >
                <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
                <span>01 85 09 73 65 / 07 83 86 76 50</span>
              </MagneticButton>
              <Link
                to="/contact"
                className="inline-flex items-center space-x-2 border-2 border-white text-white px-6 sm:px-10 py-3 sm:py-4 rounded-lg font-bold text-lg sm:text-xl hover:bg-white hover:text-gray-900 transition-all duration-200"
              >
                <span>Demander un Devis</span>
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </Link>
            </div>

            <div className="mt-12 text-center">
              <p className="text-gray-300 text-lg">
                ⚡ Intervention en moins de 30 minutes • 🛡️ Devis gratuit • ✅
                Satisfaction garantie
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contextual CTA */}
      <ContextualCTA
        serviceId={service?.id}
        serviceName={service?.title}
        price={service?.price}
        urgency={service?.isUrgent}
        position="bottom"
      />
    </div>
  );
};

export default ServiceDetail;
