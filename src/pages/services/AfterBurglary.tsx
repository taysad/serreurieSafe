import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
    ShieldAlert,
    Phone,
    Clock,
    CheckCircle,
    ArrowRight,
    Hammer,
    FileCheck
} from "lucide-react";
import GlassCard from "../../components/GlassCard";
import MagneticButton from "../../components/MagneticButton";
import ContextualCTA from "../../components/ContextualCTA";
import { SEO } from "../../components/SEO";

const AfterBurglary: React.FC = () => {
    const service = {
        id: "apres-effraction",
        title: "Mise en Sécurité Après Effraction",
        subtitle: "Intervention Urgence Cambriolage",
        description: "Sécurisation immédiate de votre domicile après cambriolage. Fermeture provisoire, remplacement de serrure, déclaration assurance.",
        longDescription: "Victime d'une effraction ? Notre priorité est de sécuriser votre domicile immédiatement. Nous intervenons en urgence pour réparer les dégâts, installer une fermeture provisoire si nécessaire, et remplacer vos serrures. Nous vous accompagnons également dans vos démarches auprès de votre assurance.",
        icon: ShieldAlert,
        price: "Tarif Assurance",
        features: [
            "Intervention en urgence (moins de 30 min)",
            "Fermeture provisoire sécurisée",
            "Remplacement de serrure à l'identique",
            "Devis agréé assurance (remboursement)"
        ],
        images: [
            "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1628198751509-f19af50a316c?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=2000",
        ],
        isUrgent: true,
        process: [
            {
                step: "01",
                title: "Sécurisation",
                description: "Arrivée immédiate pour sécuriser les accès compromis"
            },
            {
                step: "02",
                title: "Constat & Devis",
                description: "Devis détaillé pour votre assurance et constat des dégâts"
            },
            {
                step: "03",
                title: "Réparations",
                description: "Fermeture provisoire ou remplacement définitif immédiat"
            },
            {
                step: "04",
                title: "Dossier Assurance",
                description: "Aide à la constitution de votre dossier de remboursement"
            }
        ],
        benefits: [
            "Tarifs agréés assurances (remboursement facilité)",
            "Disponibilité absolue 24h/24 et 7j/7",
            "Fermeture provisoire si porte irréparable instantanément",
            "Stock de serrures toutes marques dans le véhicule",
            "Nettoyage du chantier après intervention",
            "Empathie et accompagnement rassurant"
        ]
    };

    const schema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Dépannage Après Cambriolage",
        "provider": {
            "@type": "LocalBusiness",
            "name": "Serrurerie Safe"
        },
        "areaServed": "Île-de-France",
        "serviceType": "EmergencyService",
        "description": service.longDescription
    };

    return (
        <div className="pt-20">
            <SEO
                title="Dépannage Après Cambriolage Paris - Mise en Sécurité Urgente"
                description="Intervention serrurier urgence après effraction ou tentative de cambriolage. Fermeture provisoire, remplacement serrure, devis assurance. 24h/24 7j/7."
                jsonLd={[schema]}
            />

            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center overflow-hidden">
                {/* Background Images */}
                <div className="absolute inset-0">
                    <img
                        src={service.images[0]}
                        alt={service.title}
                        className="w-full h-full object-cover grayscale"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-red-900/90 via-red-900/60 to-black/50"></div>
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
                            <div className="inline-flex items-center space-x-2 bg-red-600/30 backdrop-blur-sm border border-red-500/50 text-red-100 px-4 py-2 rounded-full text-sm font-medium mb-6">
                                <service.icon className="w-4 h-4" />
                                <span>URGENCE CAMBRIOLAGE</span>
                            </div>

                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                                {service.title}
                            </h1>

                            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                                {service.longDescription}
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 mb-8">
                                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                                    <div className="text-2xl font-bold text-white">Tarif Agréé</div>
                                    <div className="text-sm text-gray-300">Remboursement Assurance</div>
                                </div>
                                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                                    <div className="flex items-center space-x-2 text-red-400">
                                        <Clock className="w-5 h-5" />
                                        <span className="font-semibold">Arrivée Immédiate</span>
                                    </div>
                                    <div className="text-sm text-gray-300">Priorité Absolue</div>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <MagneticButton
                                    href="tel:+33185097365"
                                    className="inline-flex items-center space-x-2 bg-red-600 hover:bg-red-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-200 hover:shadow-lg animate-pulse"
                                >
                                    <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                                    <span>01 23 45 67 89</span>
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
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                                <div className="absolute top-6 left-6 bg-red-600 text-white rounded-lg p-4 shadow-lg">
                                    <div className="flex items-center space-x-3">
                                        <FileCheck className="w-8 h-8" />
                                        <div>
                                            <div className="font-semibold">
                                                Dossier Assurance
                                            </div>
                                            <div className="text-sm text-red-100">
                                                Devis conforme
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
                            Actions Immédiates
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Nous rétablissons la sécurité de votre domicile sans attendre.
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
                                <GlassCard className="p-6 h-full border-l-4 border-red-500">
                                    <div className="flex items-start space-x-4">
                                        <CheckCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                                        <div>
                                            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                                {feature}
                                            </h3>
                                            <p className="text-gray-600">
                                                Service prioritaire pour les victimes d'effraction.
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
                            Procédure d'Urgence
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Nous gérons la situation pour vous permettre de retrouver votre sérénité.
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
                                    <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
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
                                Nous sommes à vos côtés
                            </h2>
                            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                                Au-delà de la réparation technique, nous savons qu'un cambriolage est une épreuve.
                                Nos techniciens sont formés pour intervenir avec discrétion, tact et efficacité, tout en facilitant vos démarches administratives.
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
                                        <CheckCircle className="w-6 h-6 text-red-500 flex-shrink-0" />
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
                                            Fermeture Provisoire
                                        </h3>
                                        <p className="text-gray-600">
                                            Solution immédiate pour passer la nuit en sécurité, en attendant le remplacement définitif.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-red-900 to-gray-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center text-white"
                    >
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                            Besoin d'une mise en sécurité immédiate ?
                        </h2>
                        <p className="text-xl mb-12 max-w-3xl mx-auto opacity-90">
                            Nos serruriers d'urgence sont prêts à partir. Appelez-nous maintenant.
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

export default AfterBurglary;
