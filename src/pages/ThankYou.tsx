import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, Home, Mail, Phone } from 'lucide-react';
import { SEO } from '../components/SEO';
import GlassCard from '../components/GlassCard';

const ThankYou: React.FC = () => {
    useEffect(() => {
        // Envoi de l'événement de conversion Google Ads
        if (typeof (window as any).gtag === 'function') {
            (window as any).gtag('event', 'conversion', {
                'send_to': 'AW-17858791346/1wKbCNzig-YbELKP3sNC'
            });
        }
    }, []);

    return (
        <div className="pt-32 pb-20 min-h-screen bg-gray-50 dark:bg-gray-900">
            <SEO
                title="Merci pour votre message | Serrure Safe"
                description="Nous avons bien reçu votre demande. Notre équipe vous recontactera dans les plus brefs délais."
            />

            <div className="container mx-auto px-4 text-center">
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                    className="mb-12"
                >
                    <CheckCircle className="w-24 h-24 text-green-500 mx-auto" />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                        Demande transmise avec succès !
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
                        Merci pour votre confiance. L'un de nos serruriers experts analyse votre demande et vous rappellera dans les 15 prochaines minutes.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
                    <GlassCard className="p-8">
                        <Phone className="w-8 h-8 text-orange-500 mx-auto mb-4" />
                        <h3 className="font-bold mb-2">Urgence ?</h3>
                        <p className="text-sm text-gray-600 mb-4">Besoin d'aide immédiate ?</p>
                        <a href="tel:+33185097365" className="text-orange-600 font-bold hover:underline">
                            01 85 09 73 65
                        </a>
                    </GlassCard>

                    <GlassCard className="p-8">
                        <Mail className="w-8 h-8 text-blue-500 mx-auto mb-4" />
                        <h3 className="font-bold mb-2">Email</h3>
                        <p className="text-sm text-gray-600 mb-4">Confirmation envoyée à votre adresse.</p>
                        <span className="text-blue-600 font-medium">contact@serruresafe.fr</span>
                    </GlassCard>

                    <GlassCard className="p-8">
                        <Home className="w-8 h-8 text-green-500 mx-auto mb-4" />
                        <h3 className="font-bold mb-2">Accueil</h3>
                        <p className="text-sm text-gray-600 mb-4">Retourner à la page d'accueil.</p>
                        <Link to="/" className="text-green-600 font-bold hover:underline">
                            Retourner
                        </Link>
                    </GlassCard>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        to="/"
                        className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg hover:shadow-xl"
                    >
                        Retour à l'accueil
                    </Link>
                    <Link
                        to="/blog"
                        className="bg-white dark:bg-gray-800 text-gray-800 dark:text-white px-8 py-4 rounded-full font-bold transition-all shadow-md hover:shadow-lg border border-gray-200 dark:border-gray-700"
                    >
                        Lire nos conseils sécurité
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ThankYou;
