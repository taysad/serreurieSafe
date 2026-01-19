import React from "react";
import { Link } from "react-router-dom";
import { SEO } from "../components/SEO";
import { FileText, MapPin, Wrench, BookOpen, MessageCircle } from "lucide-react";

const Sitemap: React.FC = () => {
    const sitemapSections = [
        {
            title: "Services Principaux",
            icon: Wrench,
            links: [
                { path: "/ouverture-porte", label: "Ouverture de Porte Urgence" },
                { path: "/changement-serrure", label: "Changement de Serrure A2P" },
                { path: "/porte-blindee", label: "Installation Porte Blindée" },
                { path: "/apres-effraction", label: "Intervention Après Effraction" },
                { path: "/serrurier-urgence", label: "Serrurier Urgence 24/7" },
                { path: "/services", label: "Tous nos services" },
            ],
        },
        {
            title: "Pages Locales",
            icon: MapPin,
            links: [
                { path: "/serrurier-creteil", label: "Serrurier Créteil (94000)" },
                { path: "/serrurier-maisons-alfort", label: "Serrurier Maisons-Alfort (94700)" },
                { path: "/serrurier-saint-maur", label: "Serrurier Saint-Maur (94100)" },
                { path: "/serrurier-vitry", label: "Serrurier Vitry-sur-Seine (94400)" },
                { path: "/serrurier-paris-1", label: "Serrurier Paris 1er" },
                { path: "/serrurier-paris-2", label: "Serrurier Paris 2ème" },
                { path: "/serrurier-boulogne", label: "Serrurier Boulogne-Billancourt" },
            ],
        },
        {
            title: "Ressources & Conseils",
            icon: BookOpen,
            links: [
                { path: "/conseils", label: "Conseils Sécurité & Prévention" },
                { path: "/comparatif-serrures", label: "Comparatif Serrures A2P" },
                { path: "/faq", label: "Questions Fréquentes (FAQ)" },
                { path: "/blog", label: "Blog & Actualités" },
                { path: "/blog/tout-savoir-serrures-a2p", label: "Guide Complet Serrures A2P" },
                { path: "/blog/prevent-burglary", label: "Comment Éviter les Cambriolages" },
                { path: "/blog/broken-key-in-lock", label: "Clé Cassée : Que Faire ?" },
                { path: "/gallery", label: "Galerie de Réalisations" },
            ],
        },
        {
            title: "Informations",
            icon: FileText,
            links: [
                { path: "/about", label: "À Propos de Nous" },
                { path: "/contact", label: "Nous Contacter" },
                { path: "/emergency", label: "Urgence 24h/24" },
                { path: "/tarifs-serrurier-paris", label: "Tarifs & Devis" },
                { path: "/legal", label: "Mentions Légales" },
            ],
        },
    ];

    return (
        <div className="pt-20 bg-gray-50 min-h-screen">
            <SEO
                title="Plan du Site - Serrurerie Safe"
                description="Accédez rapidement à toutes les pages de notre site : services de serrurerie, pages locales, conseils, avis clients et informations pratiques."
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Plan du Site</h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Retrouvez facilement toutes les pages de notre site organisées par catégorie.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {sitemapSections.map((section, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
                        >
                            <div className="flex items-center space-x-3 mb-6">
                                <div className="p-2 bg-orange-100 rounded-lg">
                                    <section.icon className="w-6 h-6 text-orange-600" />
                                </div>
                                <h2 className="text-2xl font-bold text-gray-900">{section.title}</h2>
                            </div>

                            <ul className="space-y-3">
                                {section.links.map((link, linkIndex) => (
                                    <li key={linkIndex}>
                                        <Link
                                            to={link.path}
                                            className="flex items-center text-gray-700 hover:text-orange-600 transition-colors group"
                                        >
                                            <span className="w-2 h-2 bg-orange-400 rounded-full mr-3 group-hover:bg-orange-600 transition-colors"></span>
                                            <span className="group-hover:underline">{link.label}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* CTA Section */}
                <div className="mt-16 bg-gradient-to-r from-orange-600 to-orange-500 rounded-2xl p-8 text-center text-white shadow-xl">
                    <MessageCircle className="w-12 h-12 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold mb-2">Besoin d'aide pour naviguer ?</h3>
                    <p className="text-orange-100 mb-6">Notre équipe est disponible 24h/24 pour répondre à vos questions.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="tel:+33185097365"
                            className="inline-flex items-center justify-center bg-white text-orange-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
                        >
                            Appeler maintenant
                        </a>
                        <Link
                            to="/contact"
                            className="inline-flex items-center justify-center border-2 border-white text-white px-6 py-3 rounded-lg font-bold hover:bg-white hover:text-orange-600 transition-colors"
                        >
                            Nous contacter
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sitemap;
