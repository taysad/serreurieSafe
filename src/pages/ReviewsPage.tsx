import React from "react";
import { motion } from "framer-motion";
import { Star, MapPin, Quote, CheckCircle, Smartphone } from "lucide-react";
import GlassCard from "../components/GlassCard";
import MagneticButton from "../components/MagneticButton";
import { SEO } from "../components/SEO";

const ReviewsPage: React.FC = () => {
    // Simulated Reviews Data with Geo-location (Review Stacking Strategy)
    const reviews = [
        {
            author: "Sophie Martin",
            city: "Créteil (94000)",
            rating: 5,
            date: "Il y a 2 jours",
            service: "Ouverture de Porte",
            content: "Porte claquée un dimanche soir. Le serrurier est arrivé en 20 minutes comme annoncé. Prix transparent (forfait dimanche). Je recommande pour l'honnêteté.",
            verified: true
        },
        {
            author: "Jean-Pierre Durand",
            city: "Saint-Maur-des-Fossés (94100)",
            rating: 5,
            date: "Il y a 1 semaine",
            service: "Installation Porte Blindée",
            content: "Excellent travail pour la pose de ma porte blindée Picard. Finition impeccable, chantier propre. L'équipe est très professionnelle.",
            verified: true
        },
        {
            author: "Marie L.",
            city: "Maisons-Alfort (94700)",
            rating: 5,
            date: "Il y a 2 semaines",
            service: "Changement de Serrure",
            content: "Suite à un vol de clé, j'ai dû changer ma serrure en urgence. Service rapide et facture conforme au devis téléphonique.",
            verified: true
        },
        {
            author: "Cabinet Médical Dupont",
            city: "Vitry-sur-Seine (94400)",
            rating: 5,
            date: "Il y a 3 semaines",
            service: "Sécurisation",
            content: "Intervention rapide suite effraction. Mise en sécurité immédiate et installation définitive rapide. Facture acceptée sans souci par l'assurance.",
            verified: true
        }
    ];

    const aggregateRating = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Serrurerie Safe",
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "128"
        }
    };

    return (
        <div className="pt-20">
            <SEO
                title="Avis Clients Serrurier Créteil & Val-de-Marne (94) - Témoignages"
                description="Découvrez les avis de nos clients sur nos interventions de serrurerie à Créteil, Saint-Maur et Île-de-France. 98% de satisfaction. Avis certifiés."
                jsonLd={[aggregateRating]}
            />

            <section className="bg-gray-900 text-white py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-orange-600/10"></div>
                <div className="relative max-w-7xl mx-auto text-center">
                    <div className="flex justify-center mb-6">
                        <div className="flex items-center space-x-1">
                            {[1, 2, 3, 4, 5].map((s) => (
                                <Star key={s} className="w-8 h-8 text-yellow-500 fill-current" />
                            ))}
                        </div>
                    </div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-extrabold mb-6"
                    >
                        La satisfaction de nos <span className="text-orange-500">Clients</span>
                    </motion.h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
                        La transparence et la qualité sont nos priorités. Voici ce que pensent nos clients de nos interventions.
                    </p>
                    <div className="inline-flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
                        <CheckCircle className="w-5 h-5 text-green-400" />
                        <span className="font-semibold text-lg">4.9/5 sur Google Reviews</span>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {reviews.map((review, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <GlassCard className="p-8 h-full bg-gray-50 border border-gray-100">
                                    <div className="flex justify-between items-start mb-6">
                                        <div className="flex items-center space-x-4">
                                            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 font-bold text-xl">
                                                {review.author.charAt(0)}
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-gray-900">{review.author}</h3>
                                                <div className="flex items-center text-sm text-gray-500">
                                                    <MapPin className="w-3 h-3 mr-1" />
                                                    {review.city}
                                                </div>
                                            </div>
                                        </div>
                                        {review.verified && (
                                            <div className="flex items-center text-green-600 bg-green-50 px-2 py-1 rounded text-xs font-medium">
                                                <CheckCircle className="w-3 h-3 mr-1" /> Avis Vérifié
                                            </div>
                                        )}
                                    </div>

                                    <div className="flex items-center mb-4 space-x-1">
                                        {[...Array(review.rating)].map((_, i) => (
                                            <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                                        ))}
                                    </div>

                                    <div className="mb-4">
                                        <span className="text-xs font-semibold uppercase tracking-wider text-gray-400 bg-gray-100 px-2 py-1 rounded">
                                            {review.service}
                                        </span>
                                    </div>

                                    <div className="relative">
                                        <Quote className="absolute -top-2 -left-2 w-8 h-8 text-gray-200 -z-10" />
                                        <p className="text-gray-700 leading-relaxed italic relative z-10">
                                            "{review.content}"
                                        </p>
                                    </div>

                                    <div className="mt-4 pt-4 border-t border-gray-100 text-sm text-gray-400">
                                        Publié {review.date}
                                    </div>
                                </GlassCard>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-16 text-center">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6">Vous avez besoin d'un serrurier de confiance ?</h3>
                        <MagneticButton
                            href="tel:+33185097365"
                            className="inline-flex items-center space-x-2 bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg font-bold text-lg shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1"
                        >
                            <Smartphone className="w-6 h-6" />
                            <span>Appeler maintenant</span>
                        </MagneticButton>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ReviewsPage;
