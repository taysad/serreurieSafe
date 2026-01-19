import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SEO } from "../components/SEO";
import { Plus, Minus, HelpCircle, Phone, MessageSquare, ShieldCheck, Clock, CreditCard, Wrench } from "lucide-react";
import { Link } from "react-router-dom";
import MagneticButton from "../components/MagneticButton";

const FAQPage: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const faqs = [
        {
            question: "Quel est le tarif d'un serrurier d'urgence à Créteil et alentours ?",
            answer: "Nos tarifs commencent à 89€ pour une ouverture de porte claquée en journée. Ce prix inclut le déplacement et la main-d'œuvre. Pour une intervention de nuit, un weekend ou un jour férié, une majoration peut s'appliquer. Nous vous communiquons toujours une estimation ferme par téléphone avant notre départ.",
            icon: CreditCard
        },
        {
            question: "En combien de temps intervenez-vous dans le 94 ?",
            answer: "Grâce à notre équipe locale basée à Créteil, nous intervenons en moyenne sous 30 minutes sur Saint-Maur-des-Fossés, Maisons-Alfort, Vitry-sur-Seine et Bonneuil. En fonction du trafic, ce délai peut varier légèrement mais nous vous tenons informé en temps réel.",
            icon: Clock
        },
        {
            question: "Mes travaux de serrurerie sont-ils remboursés par mon assurance ?",
            answer: "Oui, dans la plupart des cas. Si vous avez subi une tentative de cambriolage ou une effraction, votre assurance habitation prend en charge les frais de mise en sécurité et de remplacement de serrure. Pour une clé perdue ou volée, vérifiez l'option 'Assistance' de votre contrat ou de votre carte bancaire.",
            icon: ShieldCheck
        },
        {
            question: "Ouvrez-vous les portes sans casser la serrure ?",
            answer: "Absolument. Dans 95% des cas de portes simplement claquées, nous utilisons la technique de la 'radio' ou du crochetage qui permet d'ouvrir la porte sans aucun dégât sur le cylindre ou la porte elle-même. Notre objectif est de vous éviter des frais de remplacement inutiles.",
            icon: HelpCircle
        },
        {
            question: "Comment savoir si ma serrure est certifiée A2P ?",
            answer: "Le logo A2P suivi d'une, deux ou trois étoiles doit être gravé sur la têtière de votre serrure (la tranche de la porte) ainsi que sur vos clés d'origine. C'est le gage de résistance exigé par les compagnies d'assurance.",
            icon: ShieldCheck
        },
        {
            question: "Intervenez-vous pour les rideaux métalliques de commerces ?",
            answer: "Oui, nous proposons un service de dépannage pour les commerçants : déblocage de rideaux métalliques, réparation de moteurs, et changement de serrures de sécurité pour devantures de magasins dans tout le Val-de-Marne.",
            icon: Wrench
        }
    ];

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    };

    return (
        <div className="pt-24 bg-gray-50 min-h-screen font-sans">
            <SEO
                title="FAQ Serrurier 94 - Vos Questions sur nos Interventions et Tarifs"
                description="Retrouvez toutes les réponses à vos questions : tarifs, délais d'intervention à Créteil, remboursement assurance, certifications A2P et conseils de sécurité."
                jsonLd={[faqSchema]}
            />

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center px-4 py-2 rounded-full bg-orange-100 text-orange-700 font-bold text-sm mb-4"
                    >
                        <HelpCircle className="w-4 h-4 mr-2" />
                        Centre d'aide
                    </motion.div>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
                        Questions Fréquentes
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Tout ce que vous devez savoir sur nos services de serrurerie, nos tarifs et nos délais d'intervention.
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
                        >
                            <button
                                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                            >
                                <div className="flex items-center space-x-4">
                                    <div className="p-2 bg-orange-50 rounded-lg text-orange-600">
                                        <faq.icon className="w-5 h-5" />
                                    </div>
                                    <span className="text-lg font-bold text-gray-900 md:pr-10">
                                        {faq.question}
                                    </span>
                                </div>
                                <div className="flex-shrink-0">
                                    {activeIndex === index ? (
                                        <Minus className="w-5 h-5 text-orange-600" />
                                    ) : (
                                        <Plus className="w-5 h-5 text-gray-400" />
                                    )}
                                </div>
                            </button>

                            <AnimatePresence>
                                {activeIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                    >
                                        <div className="px-6 pb-6 pt-2 text-gray-600 leading-relaxed border-t border-gray-50 pt-4 bg-gray-50/30">
                                            <div className="pl-14">
                                                {faq.answer}
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-20 bg-gradient-to-br from-orange-600 to-red-600 rounded-3xl p-8 md:p-12 text-white shadow-xl relative overflow-hidden">
                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="text-center md:text-left">
                            <h2 className="text-3xl font-bold mb-4">Besoin d'aide immédiate ?</h2>
                            <p className="text-orange-100 text-lg">
                                Nos serruriers experts sont disponibles 24h/24 pour répondre à toutes vos questions.
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
                            <MagneticButton
                                href="tel:+33185097365"
                                className="bg-white text-orange-600 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all flex items-center justify-center space-x-2 shadow-lg"
                            >
                                <Phone className="w-5 h-5" />
                                <span>01 85 09 73 65</span>
                            </MagneticButton>
                            <Link
                                to="/contact"
                                className="bg-orange-700/50 backdrop-blur-sm border-2 border-orange-400/30 text-white px-8 py-4 rounded-xl font-bold hover:bg-orange-700/80 transition-all flex items-center justify-center space-x-2"
                            >
                                <MessageSquare className="w-5 h-5" />
                                <span>Nous écrire</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQPage;
