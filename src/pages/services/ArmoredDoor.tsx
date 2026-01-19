import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
    Shield,
    Phone,
    CheckCircle,
    ArrowRight,
    Lock,
    ShieldCheck,
    Construction
} from "lucide-react";
import GlassCard from "../../components/GlassCard";
import MagneticButton from "../../components/MagneticButton";
import ContextualCTA from "../../components/ContextualCTA";
import { SEO } from "../../components/SEO";

const ArmoredDoor: React.FC = () => {
    const service = {
        id: "porte-blindee",
        title: "Porte Blindée",
        subtitle: "Sécurité Maximale & Design",
        description: "Installation de portes blindées sur mesure, bloc-porte certifié A2P BP1, BP2, BP3.",
        longDescription: "La porte blindée est le rempart ultime contre les cambriolages. Nous installons des blocs-portes blindés certifiés A2P qui allient haute sécurité, isolation phonique/thermique et esthétique soignée. Ne faites aucun compromis sur la sécurité de votre famille et de vos biens.",
        icon: Shield,
        price: "Sur devis",
        features: [
            "Bloc-porte blindé certifié A2P BP1 à BP3",
            "Blindage de porte existante (super blindage)",
            "Isolation phonique et thermique renforcée",
            "Large choix de décors et finitions"
        ],
        images: [
            "https://images.unsplash.com/photo-1517646287270-a5a9ca602e5c?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&q=80&w=2000",
        ],
        isUrgent: false,
        process: [
            {
                step: "01",
                title: "Étude Technique",
                description: "Relevé de mesures précis et choix des finitions à domicile"
            },
            {
                step: "02",
                title: "Fabrication",
                description: "Conception sur mesure de votre bloc-porte blindé"
            },
            {
                step: "03",
                title: "Installation",
                description: "Pose par nos experts sans dégât sur la maçonnerie"
            },
            {
                step: "04",
                title: "Finitions",
                description: "Réglages, nettoyage et remise des clés protégées"
            }
        ],
        benefits: [
            "Certification A2P (Assurance Prévention Protection)",
            "Résistance au feu et aux bruits",
            "TVA réduite (selon éligibilité)",
            "Garantie 10 ans fabricant",
            "Dissuasion immédiate des cambrioleurs",
            "Valorisation de votre patrimoine immobilier"
        ]
    };

    const schema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Installation Porte Blindée",
        "provider": {
            "@type": "LocalBusiness",
            "name": "Serrurerie Safe"
        },
        "areaServed": "Île-de-France",
        "serviceType": "SecuritySystem",
        "description": service.longDescription,
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Blindage de porte",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Installation bloc-porte A2P"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Blindage porte existante"
                    }
                }
            ]
        }
    };

    return (
        <div className="pt-20">
            <SEO
                title="Porte Blindée Paris - Installation Bloc-Porte A2P & Blindage"
                description="Installation de portes blindées certifiées A2P BP1, BP2, BP3 sur Paris et IDF. Sécurité, isolation et design. Devis gratuit et conseils d'experts."
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
                            <div className="inline-flex items-center space-x-2 bg-indigo-500/20 backdrop-blur-sm border border-indigo-500/30 text-indigo-200 px-4 py-2 rounded-full text-sm font-medium mb-6">
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
                                    <div className="text-2xl font-bold text-orange-400">Devis Gratuit</div>
                                    <div className="text-sm text-gray-300">Étude personnalisée</div>
                                </div>
                                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                                    <div className="flex items-center space-x-2 text-indigo-400">
                                        <ShieldCheck className="w-5 h-5" />
                                        <span className="font-semibold">Certifié BP3</span>
                                    </div>
                                    <div className="text-sm text-gray-300">Norme maximale</div>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <MagneticButton
                                    href="tel:+33185097365"
                                    className="inline-flex items-center space-x-2 bg-orange-600 hover:bg-orange-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-200 hover:shadow-lg"
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
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-gray-800">
                                <img
                                    src={service.images[1]}
                                    alt={service.title}
                                    className="w-full h-96 lg:h-[500px] object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>

                                <div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-lg text-right">
                                    <div className="flex items-center justify-end space-x-3">
                                        <div>
                                            <div className="font-semibold text-gray-900">
                                                Esthétique & Sécurité
                                            </div>
                                            <div className="text-sm text-gray-600">
                                                Finitions bois, métal, couleur...
                                            </div>
                                        </div>
                                        <Construction className="w-8 h-8 text-indigo-600" />
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
                            Nos Solutions de Blindage
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Du renforcement de porte existante au remplacement complet par un bloc-porte.
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
                                        <CheckCircle className="w-6 h-6 text-indigo-500 flex-shrink-0 mt-1" />
                                        <div>
                                            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                                {feature}
                                            </h3>
                                            <p className="text-gray-600">
                                                Installation conforme aux normes des assurances habitation.
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
                            Votre Projet de A à Z
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Nous vous accompagnons dans le choix et la pose de votre porte blindée
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
                                    <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
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
                                Investissez dans la Sérénité
                            </h2>
                            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                                Une porte blindée est l'investissement sécurité le plus efficace.
                                En plus de protéger contre les effractions, elle améliore votre confort thermique et acoustique, et valorise votre bien.
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
                                        <CheckCircle className="w-6 h-6 text-indigo-500 flex-shrink-0" />
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
                                            Picard, Fichet, Tordjman...
                                        </h3>
                                        <p className="text-gray-600">
                                            Nous travaillons avec les leaders du marché pour vous garantir la meilleure qualité.
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
                            Transformez votre porte en forteresse
                        </h2>
                        <p className="text-xl mb-12 max-w-3xl mx-auto opacity-90">
                            Demandez un rendez-vous pour une étude technique gratuite et sans engagement.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
                            <MagneticButton
                                href="tel:+33185097365"
                                className="inline-flex items-center space-x-2 bg-white text-gray-900 px-6 sm:px-10 py-3 sm:py-4 rounded-lg font-bold text-lg sm:text-xl hover:bg-gray-100 transition-all duration-200 hover:shadow-lg"
                            >
                                <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
                                <span>01 23 45 67 89</span>
                            </MagneticButton>
                            <Link
                                to="/contact"
                                className="inline-flex items-center space-x-2 border-2 border-white text-white px-6 sm:px-10 py-3 sm:py-4 rounded-lg font-bold text-lg sm:text-xl hover:bg-white hover:text-gray-900 transition-all duration-200"
                            >
                                <span>Devis Porte Blindée</span>
                                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
                            </Link>
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

export default ArmoredDoor;
