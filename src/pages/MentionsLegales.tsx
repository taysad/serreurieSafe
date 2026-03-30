import React from 'react';
import { SEO } from '../components/SEO';

const MentionsLegales: React.FC = () => {
    return (
        <>
            <SEO
                title="Mentions Légales - Serrurerie Safe"
                description="Mentions légales du site Serrurerie Safe. Informations sur l'éditeur, l'hébergeur et la propriété intellectuelle."
                noindex={true}
            />
            <div className="bg-white py-16 px-4 sm:px-6 lg:px-8 mt-20">
                <div className="max-w-3xl mx-auto prose prose-orange">
                    <h1 className="text-3xl font-bold text-gray-900 mb-8">Mentions Légales</h1>

                    <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-4">1. Éditeur du site</h2>
                    <p className="text-gray-600 mb-4">
                        Le site <strong>serrurerie-safe.fr</strong> est édité par la société <strong>Serrurerie Safe</strong>.<br />
                        <strong>Siège social :</strong> 10 Rue de la Paix, 91210 Viry-Châtillon<br />
                        <strong>Téléphone :</strong> 01 85 09 73 65 / 07 83 86 76 50<br />
                        <strong>Email :</strong> contact@serruresafe.fr<br />
                        <strong>SIRET :</strong> 123 456 789 00012<br />
                        <strong>RCS :</strong> Evry B 123 456 789<br />
                        <strong>TVA Intracommunautaire :</strong> FR 12 123456789<br />
                        <strong>Directeur de la publication :</strong> M. Achraf Briki
                    </p>

                    <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-4">2. Hébergement</h2>
                    <p className="text-gray-600 mb-4">
                        Ce site est hébergé par :<br />
                        <strong>Vercel Inc.</strong><br />
                        340 S Lemon Ave #4133<br />
                        Walnut, CA 91789, USA<br />
                        Site web : https://vercel.com
                    </p>

                    <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-4">3. Propriété intellectuelle</h2>
                    <p className="text-gray-600 mb-4">
                        L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques. La reproduction de tout ou partie de ce site sur un support électronique quel qu'il soit est formellement interdite sauf autorisation expresse du directeur de la publication.
                    </p>

                    <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-4">4. Responsabilité</h2>
                    <p className="text-gray-600 mb-4">
                        Serrurerie Safe s'efforce d'assurer au mieux de ses possibilités, l'exactitude et la mise à jour des informations diffusées sur ce site, dont elle se réserve le droit de corriger, à tout moment et sans préavis, le contenu. Toutefois, Serrurerie Safe ne peut garantir l'exactitude, la précision ou l'exhaustivité des informations mises à la disposition sur ce site.
                    </p>
                </div>
            </div>
        </>
    );
};

export default MentionsLegales;
