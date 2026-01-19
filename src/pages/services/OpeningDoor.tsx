import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
    Key,
    Phone,
    Clock,
    CheckCircle,
    ArrowRight,
    Unlock,
    ShieldCheck
} from "lucide-react";
import GlassCard from "../../components/GlassCard";
import MagneticButton from "../../components/MagneticButton";
import ContextualCTA from "../../components/ContextualCTA";
import { SEO } from "../../components/SEO";

const OpeningDoor: React.FC = () => {
    const service = {
        id: "ouverture-porte",
        title: "Ouverture de Porte",
        subtitle: "Intervention Immédiate 24/7",
        description: "Porte claquée ou fermée à clé ? Ouverture fine sans destruction de serrure garantie.",
        longDescription: "Spécialiste de l'ouverture de porte à Paris et Île-de-France. Que votre porte soit claquée, verrouillée ou que la clé soit cassée, nos artisans serruriers interviennent en 30 minutes. Nous privilégions toujours l'ouverture fine (radio, crochetage) pour préserver votre serrure et limiter les frais.",
        icon: Unlock,
        price: "À partir de 89€",
        features: [
            "Ouverture de porte claquée sans dégât",
            "Ouverture de porte verrouillée",
            "Clé cassée dans la serrure",
            "Serrure grippée ou bloquée"
        ],
        images: [
            "https://images.unsplash.com/photo-1558002038-109177381792?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1484154218962-a1c002085d2f?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=2000",
        ],
        isUrgent: true,
        process: [
            {
                step: "01",
                title: "Appel & Diagnostic",
                description: "Estimation immédiate par téléphone selon votre situation"
            },
            {
                step: "02",
                title: "Arrivée 30 min",
                description: "Géolocalisation du technicien le plus proche de chez vous"
            },
            {
                step: "03",
                title: "Ouverture Fine",
                description: "Techniques non-destructives privilégiées (radio, crochetage)"
            },
            {
                step: "04",
                title: "Accès rétabli",
                description: "Vous retrouvez l'accès à votre domicile immédiatement"
            }
        ],
        benefits: [
            "Devis gratuit avant intervention",
            "Agrée assurances (GMF, Maaf, Axa...)",
            "Prix annoncés à l'avance",
            "Matériel professionnel",
            "Pas de majoration cachée",
            "Ouverture 'radio' privilégiée"
        ]
    };

    const schema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Ouverture de Porte",
        "provider": {
            "@type": "LocalBusiness",
            "name": "Serrurerie Safe"
        },
        "areaServed": "Île-de-France",
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Services d'ouverture de porte",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Ouverture de porte claquée"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Ouverture de porte verrouillée"
                    }
                }
            ]
        },
        "description": service.longDescription
    };

    return (
        <div className="pt-20">
            <SEO
                title="Ouverture de Porte Paris & IDF - Intervention 30 min - Devis Gratuit"
                description="Serrurier expert pour ouverture de porte claquée ou fermée à clé. Intervention en 30 minutes, 24h/24 et 7j/7. Prix transparents, agréé assurances."
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
                                    <div className="text-sm text-gray-300">Tarif ouverture claquée</div>
                                </div>
                                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                                    <div className="flex items-center space-x-2 text-green-400">
                                        <Clock className="w-5 h-5" />
                                        <span className="font-semibold">30 min chrono</span>
                                    </div>
                                    <div className="text-sm text-gray-300">Délai d'intervention</div>
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
                                        <ShieldCheck className="w-8 h-8 text-orange-600" />
                                        <div>
                                            <div className="font-semibold text-gray-900">
                                                Technique Radio
                                            </div>
                                            <div className="text-sm text-gray-600">
                                                Ouverture Sans Casse
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
                            Nos Solutions d'Ouverture
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Nous adaptons notre technique à votre type de serrure et de porte
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
                                                Techniciens formés aux dernières techniques d'ouverture fine.
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
                            Comment ça se passe ?
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Un processus clair pour une intervention sans stress
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
                                Zéro Mauvaise Surprise
                            </h2>
                            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                                Notre charte de qualité vous garantit une tarification transparente et respectueuse.
                                Aucun travaux ne commence sans votre validation d'un devis écrit.
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
                                            Ouverture Radio
                                        </h3>
                                        <p className="text-gray-600">
                                            Cette technique permet d'ouvrir une porte claquée sans toucher à la serrure.
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
                            Porte bloquée ? Pas de panique.
                        </h2>
                        <p className="text-xl mb-12 max-w-3xl mx-auto opacity-90">
                            Un serrurier est peut-être déjà dans votre quartier. Appelez-nous.
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
                serviceId={service.id}
                serviceName={service.title}
                price={service.price}
                urgency={service.isUrgent}
                position="bottom"
            />
        </div>
    );
};

export default OpeningDoor;
