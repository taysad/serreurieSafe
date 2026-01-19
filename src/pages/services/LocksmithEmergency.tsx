import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
    Siren,
    Phone,
    Clock,
    CheckCircle,
    ArrowRight,
    MapPin,
    Smartphone
} from "lucide-react";
import GlassCard from "../../components/GlassCard";
import MagneticButton from "../../components/MagneticButton";
import ContextualCTA from "../../components/ContextualCTA";
import { SEO } from "../../components/SEO";

const LocksmithEmergency: React.FC = () => {
    const service = {
        id: "serrurier-urgence",
        title: "Serrurier Urgence 24h/24",
        subtitle: "Dépannage Rapide < 30 min",
        description: "Serrurier mobile à proximité pour tous dépannages urgents. Disponibilité jour, nuit, dimanche et fériés.",
        longDescription: "Une urgence serrurerie n'attend pas. Clé perdue, porte bloquée, serrure cassée ? Notre service d'urgence mobilise le serrurier le plus proche de votre position géographique pour une intervention en moins de 30 minutes. Tarifs clairs et annoncés avant le départ du technicien.",
        icon: Siren,
        price: "Forfait déplacement + MO",
        features: [
            "Géolocalisation du technicien le plus proche",
            "Intervention en moins de 30 minutes réelle",
            "Disponibilité Nuit / Week-end / Fériés",
            "Véhicule atelier tout équipé"
        ],
        images: [
            "https://images.unsplash.com/photo-1618512215286-9e99c808722a?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1585336302569-45e0d376ca78?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1544724569-5f546fd6dd2d?auto=format&fit=crop&q=80&w=2000",
        ],
        isUrgent: true,
        process: [
            {
                step: "01",
                title: "Appel Prioritaire",
                description: "Ligne dédiée aux urgences, décroché immédiat"
            },
            {
                step: "02",
                title: "Dispatch",
                description: "Envoi immédiat du serrurier le plus proche"
            },
            {
                step: "03",
                title: "Intervention",
                description: "Ouverture ou réparation rapide sur place"
            },
            {
                step: "04",
                title: "Paiement",
                description: "Facilité de paiement CB et facture immédiate"
            }
        ],
        benefits: [
            "Numéro non surtaxé",
            "Agrément assurances",
            "Pas de surprise sur la facture",
            "Serruriers qualifiés et identifiables",
            "Respect du délai annoncé",
            "Stock permanent dans les véhicules"
        ]
    };

    const schema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Serrurier Urgence",
        "provider": {
            "@type": "LocalBusiness",
            "name": "Serrurerie Safe"
        },
        "areaServed": "Île-de-France",
        "serviceType": "EmergencyService",
        "description": service.longDescription,
        "availableChannel": {
            "@type": "ServiceChannel",
            "serviceUrl": "https://serrurerie-safe.com/serrurier-urgence",
            "servicePhone": "+33185097365"
        }
    };

    return (
        <div className="pt-20">
            <SEO
                title="Serrurier Urgence Paris & IDF - Intervention en 30 min 24/7"
                description="Serrurier d'urgence disponible immédiatement nuit et jour, dimanche et jours fériés. Ouverture porte, réparation serrure. Arrivée garantie en 30 min."
                jsonLd={[schema]}
            />

            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center overflow-hidden">
                {/* Background Images */}
                <div className="absolute inset-0">
                    <img
                        src={service.images[0]}
                        alt={service.title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-900/90 via-orange-900/60 to-black/50"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-white"
                        >
                            <div className="inline-flex items-center space-x-2 bg-orange-600/30 backdrop-blur-sm border border-orange-500/50 text-orange-100 px-4 py-2 rounded-full text-sm font-medium mb-6">
                                <service.icon className="w-4 h-4 animate-pulse" />
                                <span>INTERVENTION 30 MIN</span>
                            </div>

                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                                {service.title}
                            </h1>

                            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                                {service.longDescription}
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 mb-8">
                                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                                    <div className="text-2xl font-bold text-orange-400">24h / 24</div>
                                    <div className="text-sm text-gray-300">7 jours / 7</div>
                                </div>
                                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                                    <div className="flex items-center space-x-2 text-orange-400">
                                        <MapPin className="w-5 h-5" />
                                        <span className="font-semibold">Partout en IDF</span>
                                    </div>
                                    <div className="text-sm text-gray-300">Déplacement rapide</div>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <MagneticButton
                                    href="tel:+33185097365"
                                    className="inline-flex items-center space-x-2 bg-orange-600 hover:bg-orange-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-200 hover:shadow-lg animate-bounce-slow"
                                >
                                    <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                                    <span>APPEL IMMÉDIAT</span>
                                </MagneticButton>
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
                                    src={service.images[2]}
                                    alt={service.title}
                                    className="w-full h-96 lg:h-[500px] object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                                <div className="absolute top-6 left-6 bg-orange-600 text-white rounded-lg p-4 shadow-lg">
                                    <div className="flex items-center space-x-3">
                                        <Smartphone className="w-8 h-8" />
                                        <div>
                                            <div className="font-semibold">
                                                Mobile First
                                            </div>
                                            <div className="text-sm text-orange-100">
                                                Géolocalisation active
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
                            Pourquoi nous appeler ?
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            La rapidité d'exécution et la qualité du service, même dans l'urgence.
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
                                        <CheckCircle className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                                        <div>
                                            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                                {feature}
                                            </h3>
                                            <p className="text-gray-600">
                                                Garanti par contrat de confiance.
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
                            Intervention Ultra-Rapide
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Chaque minute compte quand vous êtes bloqué dehors
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
                                    <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4 animate-pulse">
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
                                Service client Premium
                            </h2>
                            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                                Ce n'est pas parce que c'est une urgence que le service doit être bâclé.
                                Nos opérateurs prennent le temps de vous écouter, de vous rassurer et de vous donner une estimation précise avant l'envoi du technicien.
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
                                        <CheckCircle className="w-6 h-6 text-orange-500 flex-shrink-0" />
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
                                    src={service.images[1]}
                                    alt={service.title}
                                    className="w-full h-96 object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>

                                <div className="absolute bottom-6 left-6 right-6">
                                    <div className="bg-white/95 backdrop-blur-sm rounded-lg p-6">
                                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                            Paiement Facilité
                                        </h3>
                                        <p className="text-gray-600">
                                            TPE mobile dans tous nos véhicules pour paiement par carte bancaire.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-orange-900 to-gray-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center text-white"
                    >
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                            Une urgence ?
                        </h2>
                        <p className="text-xl mb-12 max-w-3xl mx-auto opacity-90">
                            Ne restez pas dehors. Appelez-nous.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
                            <MagneticButton
                                href="tel:+33185097365"
                                className="inline-flex items-center space-x-2 bg-white text-gray-900 px-6 sm:px-10 py-3 sm:py-4 rounded-lg font-bold text-lg sm:text-xl hover:bg-gray-100 transition-all duration-200 hover:shadow-lg"
                            >
                                <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
                                <span>01 23 45 67 89</span>
                            </MagneticButton>
                        </div>
                        <div className="mt-8 text-orange-400 font-bold text-lg animate-pulse">
                            Technicien à proximité : OUI
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Contextual CTA */}
            <ContextualCTA
                serviceId={service.id}
                serviceName={service.title}
                price={service.price}
                urgency={service.isUrgent}
                position="bottom"
            />
        </div>
    );
};

export default LocksmithEmergency;
