import React from 'react';
import { SEO } from '../components/SEO';

const CGV: React.FC = () => {
    return (
        <>
            <SEO
                title="Conditions Générales de Vente (CGV) - Serrurerie Safe"
                description="Conditions Générales de Vente des prestations et services proposés par Serrurerie Safe."
                noindex={true}
            />
            <div className="bg-white py-16 px-4 sm:px-6 lg:px-8 mt-20">
                <div className="max-w-3xl mx-auto prose prose-orange">
                    <h1 className="text-3xl font-bold text-gray-900 mb-8">Conditions Générales de Vente (CGV)</h1>

                    <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-4">1. Objet</h2>
                    <p className="text-gray-600 mb-4">
                        Les présentes Conditions Générales de Vente (CGV) régissent l'ensemble des relations commerciales entre l'entreprise Serrurerie Safe et ses clients, concernant les prestations de services de serrurerie (dépannage, installation, ouverture de porte, etc.). Toute commande implique l'adhésion sans réserve aux présentes CGV.
                    </p>

                    <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-4">2. Devis et Commandes</h2>
                    <p className="text-gray-600 mb-4">
                        Préalablement à toute intervention d'un montant supérieur à 150 euros TTC, ou à la demande du client, un devis détaillé, chiffré et gratuit est établi. Le contrat est définitivement formé dès l'acceptation du devis par le client, matérialisée par sa signature. En cas d'urgence absolue limitant la possibilité de rédiger un devis avant intervention, un accord sur le tarif sera convenu et formalisé au plus tôt.
                    </p>

                    <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-4">3. Prix et Tarifs</h2>
                    <p className="text-gray-600 mb-4">
                        Les prix de nos prestations sont indiqués en euros toutes taxes comprises (TTC). Ils tiennent compte de la TVA applicable au jour de la commande. Les tarifs incluent le déplacement, la main d'œuvre et, le cas échéant, le matériel fourni. Serrurerie Safe se réserve le droit de modifier ses prix à tout moment, mais la prestation sera facturée sur la base du tarif en vigueur à la validation du devis.
                    </p>

                    <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-4">4. Modalités de paiement</h2>
                    <p className="text-gray-600 mb-4">
                        Le règlement des prestations s'effectue au comptant, dès l'achèvement des travaux, directement auprès du technicien par carte bancaire (terminal de paiement) ou espèces. En cas de retard de paiement, des pénalités de retard calculées sur la base de trois fois le taux d'intérêt légal en vigueur seront exigibles, ainsi qu'une indemnité forfaitaire pour frais de recouvrement de 40 euros.
                    </p>

                    <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-4">5. Droit de rétractation (Urgences à domicile)</h2>
                    <p className="text-gray-600 mb-4">
                        Conformément à l'article L.221-28 8° du Code de la consommation, le droit de rétractation de 14 jours <strong>ne s'applique pas</strong> aux prestations de services concernant des travaux d'entretien ou de réparation à réaliser en urgence au domicile du consommateur et expressément sollicités par lui. Pour les installations hors urgence (ex: installation d'une porte blindée planifiée), le client dispose d'un délai de 14 jours pour se rétracter.
                    </p>

                    <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-4">6. Garanties</h2>
                    <p className="text-gray-600 mb-4">
                        Notre matériel bénéficie de la garantie légale de conformité (articles L. 217-4 et suivants du Code de la consommation) et de la garantie des vices cachés (articles 1641 et suivants du Code civil). En cas de matériel défectueux, il sera remplacé ou réparé selon les conditions prévues par la loi. La garantie ne couvre pas les dommages résultant d'une mauvaise utilisation ou d'une intervention tierce.
                    </p>

                    <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-4">7. Médiation des litiges de la consommation</h2>
                    <p className="text-gray-600 mb-4">
                        Conformément aux dispositions du Code de la consommation concernant le règlement amiable des litiges, le client peut recourir gratuitement à un service de médiation en cas de litige qui n'aurait pas pu être résolu directement avec Serrurerie Safe.
                    </p>

                    <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-4">8. Loi applicable et juridiction compétente</h2>
                    <p className="text-gray-600 mb-4">
                        Les présentes CGV sont soumises à la loi française. En cas de litige non résolu à l'amiable, les tribunaux français seront seuls compétents, et plus particulièrement le tribunal rattaché au siège social de Serrurerie Safe, sauf disposition légale impérative contraire.
                    </p>
                </div>
            </div>
        </>
    );
};

export default CGV;
