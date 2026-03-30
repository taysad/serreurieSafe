import React from 'react';
import { SEO } from '../components/SEO';

const Confidentialite: React.FC = () => {
    return (
        <>
            <SEO
                title="Politique de Confidentialité - Serrurerie Safe"
                description="Politique de confidentialité et protection de vos données personnelles (RGPD) chez Serrurerie Safe."
                noindex={true}
            />
            <div className="bg-white py-16 px-4 sm:px-6 lg:px-8 mt-20">
                <div className="max-w-3xl mx-auto prose prose-orange">
                    <h1 className="text-3xl font-bold text-gray-900 mb-8">Politique de Confidentialité</h1>

                    <p className="text-gray-600 mb-6">
                        Serrurerie Safe s'engage à ce que la collecte et le traitement de vos données, effectués à partir du site <strong>serrurerie-safe.fr</strong>, soient conformes au règlement général sur la protection des données (RGPD) et à la loi Informatique et Libertés.
                    </p>

                    <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-4">1. Collecte des données personnelles</h2>
                    <p className="text-gray-600 mb-4">
                        Nous collectons les données suivantes :<br />
                        - Nom, Prénom<br />
                        - Adresse e-mail<br />
                        - Numéro de téléphone<br />
                        - Adresse postale (pour les interventions)<br />
                        Ces données sont collectées lorsque vous remplissez un formulaire de contact ou lorsque vous nous contactez par téléphone pour une intervention.
                    </p>

                    <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-4">2. Finalité du traitement des données</h2>
                    <p className="text-gray-600 mb-4">
                        Les données personnelles collectées ont pour finalité :<br />
                        - La gestion et le suivi des demandes de contact et devis.<br />
                        - L'exécution de la prestation de service (dépannage, installation).<br />
                        - La facturation et la comptabilité.
                    </p>

                    <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-4">3. Conservation des données</h2>
                    <p className="text-gray-600 mb-4">
                        Vos données sont conservées pour la durée nécessaire à la réalisation des finalités évoquées ci-dessus :<br />
                        - Les données clients sont conservées pendant la durée de la relation commerciale, puis archivées selon les délais légaux (10 ans pour les factures).<br />
                        - Les données des prospects sont conservées 3 ans à compter du dernier contact.
                    </p>

                    <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-4">4. Partage des données</h2>
                    <p className="text-gray-600 mb-4">
                        Vos données personnelles ne sont ni vendues, ni louées, ni cédées à des tiers. Elles sont exclusivement destinées à l'usage interne de Serrurerie Safe.
                    </p>

                    <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-4">5. Vos droits (RGPD)</h2>
                    <p className="text-gray-600 mb-4">
                        Conformément à la réglementation applicable, vous disposez d'un droit d'accès, de rectification, de suppression, de limitation et de portabilité de vos données. Vous pouvez également vous opposer au traitement de vos données.<br />
                        Pour exercer ces droits, vous pouvez nous contacter :<br />
                        - Par email : <strong>contact@serruresafe.fr</strong><br />
                        - Par courrier : Serrurerie Safe, 10 Rue de la Paix, 91210 Viry-Châtillon
                    </p>

                    <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-4">6. Cookies</h2>
                    <p className="text-gray-600 mb-4">
                        Le site utilise des cookies techniques strictement nécessaires à son bon fonctionnement. Conformément aux recommandations de la CNIL, ces cookies sont exemptés de consentement préalable. Vous pouvez vous opposer à l'utilisation de cookies en configurant votre navigateur.
                    </p>
                </div>
            </div>
        </>
    );
};

export default Confidentialite;
