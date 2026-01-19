import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
    Lightbulb,
    Shield,
    Key,
    ArrowRight,
    BookOpen,
    AlertTriangle
} from "lucide-react";
import GlassCard from "../../components/GlassCard";
import { SEO } from "../../components/SEO";

const AdviceHub: React.FC = () => {
    const articles = [
        {
            title: "Comment éviter les cambriolages ?",
            excerpt: "Les techniques simples et efficaces pour dissuader les voleurs : éclairage, simulation de présence, et sécurisation des accès.",
            icon: Shield,
            slug: "prevent-burglary",
            category: "Prévention"
        },
        {
            title: "Clé cassée dans la serrure : que faire ?",
            excerpt: "Ne forcez surtout pas ! Voici les bons gestes à adopter et les techniques pour extraire le morceau resté coincé.",
            icon: Key,
            slug: "broken-key-in-lock",
            category: "Dépannage"
        },
        {
            title: "Serrure A2P : Comprendre la certification",
            excerpt: "1, 2 ou 3 étoiles ? Tout savoir sur la norme A2P, l'exigence des assurances et comment choisir le bon niveau de sécurité.",
            icon: BookOpen,
            slug: "tout-savoir-serrures-a2p",
            category: "Guide Achat"
        },
        {
            title: "Porte claquée : la technique de la radio",
            excerpt: "Mythe ou réalité ? Découvrez comment ouvrir une porte claquée sans clé avec une simple radio médicale.",
            icon: Lightbulb,
            slug: "radio-technique",
            category: "Technique"
        },
        {
            title: "Arnaques serrurier : les éviter",
            excerpt: "Prix trop bas, autocollants dans le hall, majorations abusives... Apprenez à repérer les escrocs du dépannage.",
            icon: AlertTriangle,
            slug: "avoid-scams",
            category: "Sécurité"
        }
    ];

    return (
        <div className="pt-20">
            <SEO
                title="Conseils Serrurier & Sécurité - Guide Anti-Cambriolage"
                description="Retrouvez nos conseils d'experts pour sécuriser votre domicile, choisir voter serrure A2P et éviter les arnaques. Blog officiel Serrurerie Safe."
            />

            <section className="bg-gray-900 text-white py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <img src="https://images.unsplash.com/photo-1556983852-43bb211edeeb?auto=format&fit=crop&q=80&w=2000" alt="Bureau" className="w-full h-full object-cover" />
                </div>
                <div className="relative max-w-7xl mx-auto text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-extrabold mb-6"
                    >
                        Le Guide de la <span className="text-orange-500">Sécurité</span>
                    </motion.h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Astuces, guides techniques et conseils de prévention pour protéger ce qui compte le plus pour vous.
                    </p>
                </div>
            </section>

            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {articles.map((article, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <GlassCard className="h-full flex flex-col p-6 hover:border-orange-500/50 transition-colors duration-300 group cursor-pointer">
                                    <div className="flex items-center space-x-3 mb-4">
                                        <div className="p-2 bg-orange-100 rounded-lg text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                                            <article.icon className="w-6 h-6" />
                                        </div>
                                        <span className="text-sm font-semibold text-orange-600 uppercase tracking-wider">
                                            {article.category}
                                        </span>
                                    </div>

                                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                                        {article.title}
                                    </h3>

                                    <p className="text-gray-600 mb-6 flex-grow">
                                        {article.excerpt}
                                    </p>

                                    <Link
                                        to={`/blog/${article.slug}`}
                                        className="inline-flex items-center text-orange-600 font-semibold hover:text-orange-700 mt-auto"
                                    >
                                        Lire l'article <ArrowRight className="w-4 h-4 ml-2" />
                                    </Link>
                                </GlassCard>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Internal Linking Section - SEO Power */}
            <section className="py-12 bg-white border-t border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Sujets liés</h2>
                    <div className="flex flex-wrap gap-4">
                        <Link to="/ouverture-porte" className="px-4 py-2 bg-gray-100 rounded-full text-gray-700 hover:bg-orange-100 hover:text-orange-800 transition-colors">Ouverture de porte</Link>
                        <Link to="/changement-serrure" className="px-4 py-2 bg-gray-100 rounded-full text-gray-700 hover:bg-orange-100 hover:text-orange-800 transition-colors">Serrure A2P</Link>
                        <Link to="/porte-blindee" className="px-4 py-2 bg-gray-100 rounded-full text-gray-700 hover:bg-orange-100 hover:text-orange-800 transition-colors">Porte Blindée</Link>
                        <Link to="/apres-effraction" className="px-4 py-2 bg-gray-100 rounded-full text-gray-700 hover:bg-orange-100 hover:text-orange-800 transition-colors">Cambriolage</Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AdviceHub;
