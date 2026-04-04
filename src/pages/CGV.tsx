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
                    <h1 className="text-3xl font-bold text-gray-900 mb-8">CONDITIONS GÉNÉRALES DE VENTE</h1>
                    <p className="text-sm text-gray-500 mb-8">
                        Version en vigueur au 1er avril 2026<br />
                        SASU SERRURE SAFE — SIRET : 991 108 663 00014<br />
                        7 Allée de Dijon — 91170 Viry-Châtillon — France<br />
                        Tél. : 01 85 09 73 65 — contact@serruresafe.fr
                    </p>

                    <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-4">Préambule</h2>
                    <p className="text-gray-600 mb-4">Les présentes Conditions Générales de Vente (ci-après « CGV ») régissent l'ensemble des relations contractuelles entre la société SERRURE SAFE, SASU au capital de [capital social] euros, immatriculée au RCS d'Évry sous le numéro 991 108 663 (ci-après « le Prestataire »), et toute personne physique ou morale (ci-après « le Client ») souhaitant bénéficier de ses services.</p>
                    <p className="text-gray-600 mb-4">Toute demande d'intervention, commande ou acceptation de devis implique l'adhésion pleine et entière du Client aux présentes CGV, sans restriction ni réserve. Ces CGV prévalent sur tout autre document du Client, sauf accord écrit préalable du Prestataire.</p>
                    <p className="text-gray-600 mb-4">Le Prestataire se réserve le droit de modifier les présentes CGV à tout moment. Les CGV applicables sont celles en vigueur à la date de la demande d'intervention ou de la commande.</p>

                    <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-4">Article 1 — Identification du Prestataire</h2>
                    <ul className="text-gray-600 mb-4 list-disc pl-5">
                        <li>Raison sociale : SERRURE SAFE</li>
                        <li>Forme juridique : Société par Actions Simplifiée Unipersonnelle (SASU)</li>
                        <li>Activité : Serrurerie, vitrerie et rideaux roulants</li>
                        <li>Siège social : 7 Allée de Dijon — 91170 Viry-Châtillon — France</li>
                        <li>Téléphone : 01 85 09 73 65</li>
                        <li>E-mail : contact@serruresafe.fr</li>
                        <li>Site internet : www.serruresafe.fr</li>
                        <li>SIRET : 991 108 663 00014</li>
                        <li>RCS : 991 108 663 R.C.S. Évry</li>
                        <li>Numéro de TVA intracommunautaire : FR36991108663</li>
                        <li>Responsable de la publication : M. Achraf Briki</li>
                        <li>Code APE : 4332B — Travaux de menuiserie métallique et serrurerie</li>
                        <li>Disponibilité : 24h/24 — 7j/7, y compris les jours fériés</li>
                    </ul>

                    <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-4">Article 2 — Champ d'application</h2>
                    <p className="text-gray-600 mb-4">Les présentes CGV s'appliquent à l'ensemble des prestations de services proposées par SERRURE SAFE, à savoir notamment :</p>
                    <ul className="text-gray-600 mb-4 list-disc pl-5">
                        <li>Ouverture de porte claquée, verrouillée ou bloquée</li>
                        <li>Changement, remplacement, réparation et installation de serrures</li>
                        <li>Remplacement et duplication de cylindres</li>
                        <li>Blindage de porte et installation de portes blindées</li>
                        <li>Installation et réparation de rideaux métalliques</li>
                        <li>Pose et réparation de vitrerie</li>
                        <li>Installation de systèmes de sécurité (coffres-forts, alarmes, contrôle d'accès, vidéosurveillance)</li>
                        <li>Sécurisation provisoire après effraction ou cambriolage</li>
                        <li>Toute autre prestation de serrurerie, vitrerie et dépannage</li>
                    </ul>
                    <p className="text-gray-600 mb-4">Ces CGV s'appliquent aussi bien aux interventions d'urgence qu'aux travaux planifiés, pour des clients particuliers (B2C) comme professionnels (B2B).</p>

                    <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-4">Article 3 — Devis et formation du contrat</h2>
                    <p className="text-gray-600 font-semibold mb-2">3.1 — Demande de devis</p>
                    <p className="text-gray-600 mb-4">Tout Client peut solliciter un devis gratuit avant toute intervention, par téléphone, e-mail ou via le formulaire disponible sur le site www.serruresafe.fr. Le devis mentionne de manière détaillée :</p>
                    <ul className="text-gray-600 mb-4 list-disc pl-5">
                        <li>La nature et la description des travaux à réaliser</li>
                        <li>Le coût de la main-d'œuvre</li>
                        <li>Le prix des fournitures et pièces nécessaires (HT et TTC)</li>
                        <li>Les frais de déplacement le cas échéant</li>
                        <li>Les éventuelles majorations applicables (nuit, week-end, jours fériés)</li>
                        <li>La durée de validité du devis</li>
                    </ul>
                    <p className="text-gray-600 font-semibold mb-2">3.2 — Interventions d'urgence</p>
                    <p className="text-gray-600 mb-4">Dans le cadre d'une intervention d'urgence (porte claquée, serrure bloquée, vitre brisée, etc.), le Prestataire communique une estimation tarifaire orale avant tout déplacement. La confirmation verbale ou écrite du Client vaut acceptation du devis et constitue une commande ferme.</p>
                    <p className="text-gray-600 font-semibold mb-2">3.3 — Validation et formation du contrat</p>
                    <p className="text-gray-600 mb-4">Le contrat est formé dès la signature du devis écrit par le Client, ou dès la confirmation orale explicite en cas d'urgence. Tout devis écrit est valable 30 jours à compter de sa date d'émission, sauf mention contraire.</p>
                    <p className="text-gray-600 font-semibold mb-2">3.4 — Modifications</p>
                    <p className="text-gray-600 mb-4">Toute modification de la prestation initialement convenue doit faire l'objet d'un avenant écrit ou d'une confirmation orale préalable du Client, et peut entraîner une révision du tarif et des délais.</p>

                    <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-4">Article 4 — Tarifs et modalités de paiement</h2>
                    <p className="text-gray-600 font-semibold mb-2">4.1 — Prix</p>
                    <p className="text-gray-600 mb-4">Les prix sont exprimés en euros toutes taxes comprises (TTC). Ils comprennent la main-d'œuvre et les frais de déplacement dans la zone d'intervention habituelle. Les fournitures et pièces détachées font l'objet d'une facturation séparée et détaillée sur le devis et la facture.</p>
                    <p className="text-gray-600 font-semibold mb-2">4.2 — Majorations tarifaires</p>
                    <p className="text-gray-600 mb-2">Les majorations suivantes peuvent s'appliquer selon les conditions d'intervention :</p>
                    <ul className="text-gray-600 mb-4 list-disc pl-5">
                        <li>Intervention de nuit (20h00 – 08h00) : majoration de 50 % sur la main-d'œuvre</li>
                        <li>Intervention le samedi après-midi, dimanche et jours fériés : majoration de 50 %</li>
                        <li>Zone d'intervention éloignée (au-delà de 30 km du siège social) : frais de déplacement supplémentaires communiqués au préalable</li>
                        <li>Intervention express (délai inférieur à 30 minutes) : supplément éventuel communiqué au préalable</li>
                    </ul>
                    <p className="text-gray-600 mb-4">Ces majorations sont systématiquement communiquées au Client avant toute intervention.</p>
                    <p className="text-gray-600 font-semibold mb-2">4.3 — Modalités de paiement</p>
                    <p className="text-gray-600 mb-2">Le paiement est dû à la fin de l'intervention, ou à réception de la facture pour les travaux planifiés. Les modes de paiement acceptés sont :</p>
                    <ul className="text-gray-600 mb-4 list-disc pl-5">
                        <li>Espèces</li>
                        <li>Chèque bancaire à l'ordre de SERRURE SAFE</li>
                        <li>Virement bancaire (coordonnées communiquées sur facture)</li>
                        <li>Carte bancaire (selon disponibilité du terminal)</li>
                    </ul>
                    <p className="text-gray-600 font-semibold mb-2">4.4 — Retard de paiement</p>
                    <p className="text-gray-600 mb-2">Conformément à l'article L.441-10 du Code de commerce, tout retard de paiement entraîne de plein droit, sans mise en demeure préalable :</p>
                    <ul className="text-gray-600 mb-4 list-disc pl-5">
                        <li>L'application de pénalités de retard au taux légal en vigueur majoré de 5 points</li>
                        <li>Une indemnité forfaitaire pour frais de recouvrement de 40 € (art. D.441-5 du Code de commerce)</li>
                        <li>L'exigibilité immédiate de toutes les sommes restant dues</li>
                    </ul>
                    <p className="text-gray-600 font-semibold mb-2">4.5 — Acompte</p>
                    <p className="text-gray-600 mb-4">Pour les travaux d'un montant supérieur à 500 € TTC, le Prestataire peut exiger le versement d'un acompte de 30 % à la commande.</p>

                    <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-4">Article 5 — Conditions d'exécution des prestations</h2>
                    <p className="text-gray-600 font-semibold mb-2">5.1 — Délais d'intervention</p>
                    <p className="text-gray-600 mb-4">Les délais d'intervention sont donnés à titre indicatif et peuvent varier selon les conditions de circulation, la disponibilité des techniciens et la complexité de l'intervention. SERRURE SAFE s'engage à informer le Client de tout retard significatif.</p>
                    <p className="text-gray-600 font-semibold mb-2">5.2 — Obligations du Client</p>
                    <p className="text-gray-600 mb-2">Le Client s'engage à :</p>
                    <ul className="text-gray-600 mb-4 list-disc pl-5">
                        <li>Être présent ou représenté par une personne mandatée lors de l'intervention</li>
                        <li>Justifier de son droit d'accès aux lieux par la présentation d'une pièce d'identité valide et d'un justificatif de domicile (facture EDF, téléphone, quittance de loyer, etc.)</li>
                        <li>Donner accès sans entrave aux zones d'intervention</li>
                        <li>Signaler au technicien toute contrainte particulière (présence d'animaux, fragilité des installations, etc.)</li>
                    </ul>
                    <p className="text-gray-600 mb-4">SERRURE SAFE se réserve le droit de refuser toute intervention en l'absence des justificatifs requis ou en cas de suspicion fondée d'accès non autorisé.</p>
                    <p className="text-gray-600 font-semibold mb-2">5.3 — Réception des travaux</p>
                    <p className="text-gray-600 mb-4">À l'issue de l'intervention, le Client est invité à vérifier la conformité des travaux réalisés. La signature du bon d'intervention vaut réception sans réserve. Toute réserve doit être formulée par écrit dans les 48 heures suivant l'intervention.</p>

                    <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-4">Article 6 — Droit de rétractation</h2>
                    <p className="text-gray-600 font-semibold mb-2">6.1 — Principe</p>
                    <p className="text-gray-600 mb-4">Conformément aux articles L.221-18 et suivants du Code de la consommation, le Client consommateur dispose d'un délai de rétractation de 14 jours calendaires à compter de la conclusion du contrat, pour les contrats conclus à distance ou hors établissement.</p>
                    <p className="text-gray-600 font-semibold mb-2">6.2 — Exceptions</p>
                    <p className="text-gray-600 mb-2">Le droit de rétractation ne s'applique pas dans les cas suivants (art. L.221-28 du Code de la consommation) :</p>
                    <ul className="text-gray-600 mb-4 list-disc pl-5">
                        <li>Prestation de services pleinement exécutée avant la fin du délai de rétractation, avec l'accord exprès du Client</li>
                        <li>Intervention d'urgence expressément demandée par le Client (porte claquée, vitre brisée, serrure bloquée, etc.)</li>
                    </ul>
                    <p className="text-gray-600 font-semibold mb-2">6.3 — Exercice du droit de rétractation</p>
                    <p className="text-gray-600 mb-4">Pour exercer son droit de rétractation, le Client doit notifier sa décision par tout moyen non ambigu (lettre recommandée avec accusé de réception, e-mail) à l'adresse suivante :<br/>SERRURE SAFE — 7 Allée de Dijon — 91170 Viry-Châtillon<br/>E-mail : contact@serruresafe.fr<br/>En cas de rétractation valide, le Prestataire remboursera les sommes versées dans un délai de 14 jours à compter de la réception de la notification.</p>

                    <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-4">Article 7 — Garanties</h2>
                    <p className="text-gray-600 font-semibold mb-2">7.1 — Garantie légale de conformité</p>
                    <p className="text-gray-600 mb-4">Conformément aux articles L.217-4 et suivants du Code de la consommation, toutes les pièces et fournitures installées bénéficient d'une garantie légale de conformité de 2 ans à compter de la date d'intervention.</p>
                    <p className="text-gray-600 font-semibold mb-2">7.2 — Garantie contre les vices cachés</p>
                    <p className="text-gray-600 mb-4">Conformément aux articles 1641 et suivants du Code civil, le Client bénéficie de la garantie légale contre les vices cachés pouvant affecter les pièces installées.</p>
                    <p className="text-gray-600 font-semibold mb-2">7.3 — Garantie contractuelle</p>
                    <p className="text-gray-600 mb-4">SERRURE SAFE accorde une garantie contractuelle de 12 mois sur la main-d'œuvre à compter de la date d'intervention. Cette garantie couvre les défauts de pose et d'exécution imputables au Prestataire.</p>
                    <p className="text-gray-600 font-semibold mb-2">7.4 — Exclusions de garantie</p>
                    <p className="text-gray-600 mb-2">Les garanties ne s'appliquent pas en cas de :</p>
                    <ul className="text-gray-600 mb-4 list-disc pl-5">
                        <li>Mauvaise utilisation ou négligence du Client</li>
                        <li>Usure normale des pièces</li>
                        <li>Dégradation causée par un tiers ou un événement extérieur (vandalisme, sinistre, etc.)</li>
                        <li>Intervention postérieure d'un tiers non mandaté par SERRURE SAFE</li>
                        <li>Non-respect des consignes d'utilisation et d'entretien</li>
                    </ul>

                    <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-4">Article 8 — Responsabilité</h2>
                    <p className="text-gray-600 font-semibold mb-2">8.1 — Responsabilité du Prestataire</p>
                    <p className="text-gray-600 mb-4">SERRURE SAFE est assuré au titre de sa Responsabilité Civile Professionnelle pour les dommages directs causés lors de l'exécution de ses prestations. Sa responsabilité est limitée au montant de la prestation facturée.<br/>Le Prestataire ne saurait être tenu responsable des dommages indirects, immatériels, pertes d'exploitation, manques à gagner ou préjudices consécutifs résultant de l'exécution ou de l'inexécution de ses prestations.</p>
                    <p className="text-gray-600 font-semibold mb-2">8.2 — Force majeure</p>
                    <p className="text-gray-600 mb-4">Le Prestataire ne pourra être tenu responsable de l'inexécution ou du retard dans l'exécution de ses obligations en cas de survenance d'un événement de force majeure au sens de l'article 1218 du Code civil (catastrophes naturelles, grèves, pandémies, coupures de réseau, etc.).</p>
                    <p className="text-gray-600 font-semibold mb-2">8.3 — Responsabilité du Client</p>
                    <p className="text-gray-600 mb-4">Le Client est seul responsable de l'exactitude des informations communiquées au Prestataire. En cas de fausse déclaration (notamment sur son droit d'accès aux lieux), le Client engage sa responsabilité civile et pénale.</p>

                    <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-4">Article 9 — Annulation et modification</h2>
                    <p className="text-gray-600 font-semibold mb-2">9.1 — Annulation par le Client</p>
                    <p className="text-gray-600 mb-2">En cas d'annulation par le Client après confirmation de l'intervention, les conditions suivantes s'appliquent :</p>
                    <ul className="text-gray-600 mb-4 list-disc pl-5">
                        <li>Annulation plus de 24h avant l'intervention planifiée : aucuns frais</li>
                        <li>Annulation moins de 24h avant l'intervention planifiée : facturation des frais de préparation (20 % du devis)</li>
                        <li>Annulation après déplacement du technicien : facturation des frais de déplacement</li>
                    </ul>
                    <p className="text-gray-600 font-semibold mb-2">9.2 — Annulation par le Prestataire</p>
                    <p className="text-gray-600 mb-4">Le Prestataire se réserve le droit d'annuler ou de reporter une intervention planifiée en cas de circonstances exceptionnelles (force majeure, indisponibilité technique). Le Client en est informé dans les meilleurs délais et aucune pénalité n'est applicable.</p>

                    <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-4">Article 10 — Protection des données personnelles (RGPD)</h2>
                    <p className="text-gray-600 font-semibold mb-2">10.1 — Responsable du traitement</p>
                    <p className="text-gray-600 mb-4">SERRURE SAFE, représentée par M. Achraf Briki, est responsable du traitement des données personnelles collectées dans le cadre de ses prestations.</p>
                    <p className="text-gray-600 font-semibold mb-2">10.2 — Données collectées</p>
                    <p className="text-gray-600 mb-2">Dans le cadre de la relation commerciale, SERRURE SAFE collecte les données suivantes :</p>
                    <ul className="text-gray-600 mb-4 list-disc pl-5">
                        <li>Données d'identification : nom, prénom, adresse postale</li>
                        <li>Coordonnées : numéro de téléphone, adresse e-mail</li>
                        <li>Données financières : mode de paiement, montants facturés</li>
                        <li>Données techniques : nature des travaux réalisés</li>
                    </ul>
                    <p className="text-gray-600 font-semibold mb-2">10.3 — Finalités du traitement</p>
                    <p className="text-gray-600 mb-2">Ces données sont collectées et traitées aux fins suivantes :</p>
                    <ul className="text-gray-600 mb-4 list-disc pl-5">
                        <li>Exécution des prestations et gestion de la relation client</li>
                        <li>Établissement des devis, factures et bons d'intervention</li>
                        <li>Respect des obligations légales et réglementaires</li>
                        <li>Amélioration des services</li>
                    </ul>
                    <p className="text-gray-600 font-semibold mb-2">10.4 — Base légale</p>
                    <p className="text-gray-600 mb-4">Le traitement des données est fondé sur l'exécution du contrat (art. 6.1.b du RGPD) et le respect des obligations légales (art. 6.1.c du RGPD).</p>
                    <p className="text-gray-600 font-semibold mb-2">10.5 — Durée de conservation</p>
                    <p className="text-gray-600 mb-4">Les données sont conservées pendant une durée de 3 ans à compter du dernier contact commercial, et 10 ans pour les documents comptables et fiscaux conformément aux obligations légales.</p>
                    <p className="text-gray-600 font-semibold mb-2">10.6 — Droits des personnes</p>
                    <p className="text-gray-600 mb-2">Conformément au RGPD et à la loi Informatique et Libertés, le Client dispose des droits suivants :</p>
                    <ul className="text-gray-600 mb-4 list-disc pl-5">
                        <li>Droit d'accès à ses données personnelles</li>
                        <li>Droit de rectification des données inexactes</li>
                        <li>Droit à l'effacement (« droit à l'oubli »)</li>
                        <li>Droit à la limitation du traitement</li>
                        <li>Droit à la portabilité des données</li>
                        <li>Droit d'opposition au traitement</li>
                    </ul>
                    <p className="text-gray-600 mb-4">Pour exercer ces droits, le Client peut contacter SERRURE SAFE à : contact@serruresafe.fr ou par courrier à l'adresse du siège social. En cas de réclamation non résolue, le Client peut saisir la CNIL (www.cnil.fr).</p>
                    <p className="text-gray-600 font-semibold mb-2">10.7 — Sécurité des données</p>
                    <p className="text-gray-600 mb-4">SERRURE SAFE met en œuvre toutes les mesures techniques et organisationnelles appropriées pour garantir la sécurité et la confidentialité des données personnelles collectées.</p>

                    <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-4">Article 11 — Médiation et règlement des litiges</h2>
                    <p className="text-gray-600 font-semibold mb-2">11.1 — Règlement amiable</p>
                    <p className="text-gray-600 mb-4">En cas de litige relatif à l'exécution ou à l'interprétation des présentes CGV, le Client est invité à contacter SERRURE SAFE en priorité par courrier recommandé avec accusé de réception afin de rechercher une solution amiable dans un délai de 30 jours.</p>
                    <p className="text-gray-600 font-semibold mb-2">11.2 — Médiation de la consommation</p>
                    <p className="text-gray-600 mb-4">Conformément à l'article L.612-1 du Code de la consommation, en l'absence de réponse satisfaisante du Prestataire dans un délai de 2 mois à compter de la réclamation écrite, le Client consommateur peut saisir gratuitement un médiateur de la consommation.<br/>Plateforme européenne de règlement en ligne des litiges (RLL) : <a href="https://ec.europa.eu/consumers/odr" className="text-orange-600 hover:text-orange-800 underline">https://ec.europa.eu/consumers/odr</a></p>
                    <p className="text-gray-600 font-semibold mb-2">11.3 — Tribunal compétent</p>
                    <p className="text-gray-600 mb-4">En cas d'échec de la médiation, tout litige relatif aux présentes CGV sera soumis à la compétence exclusive des tribunaux d'Évry (91), nonobstant pluralité de défendeurs ou appel en garantie.<br/>Pour les litiges avec des consommateurs, le tribunal compétent sera celui du domicile du consommateur conformément aux dispositions du Code de la consommation.<br/>Les présentes CGV sont soumises au droit français.</p>

                    <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-4">Article 12 — Propriété intellectuelle</h2>
                    <p className="text-gray-600 mb-4">L'ensemble des éléments constituant le site www.serruresafe.fr (textes, images, logos, charte graphique, etc.) est la propriété exclusive de SERRURE SAFE et est protégé par les lois françaises et internationales relatives à la propriété intellectuelle.<br/>Toute reproduction, représentation, modification ou exploitation, totale ou partielle, des contenus du site, sans autorisation écrite préalable de SERRURE SAFE, est strictement interdite et constituerait une contrefaçon sanctionnée par les articles L.335-2 et suivants du Code de la propriété intellectuelle.</p>

                    <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-4">Article 13 — Dispositions finales</h2>
                    <p className="text-gray-600 font-semibold mb-2">13.1 — Divisibilité</p>
                    <p className="text-gray-600 mb-4">Si l'une des clauses des présentes CGV était déclarée nulle ou non applicable en vertu d'une loi, d'un règlement ou d'une décision de justice, les autres clauses demeureront en vigueur et de plein effet.</p>
                    <p className="text-gray-600 font-semibold mb-2">13.2 — Non-renonciation</p>
                    <p className="text-gray-600 mb-4">Le fait pour SERRURE SAFE de ne pas se prévaloir à un moment donné de l'une quelconque des dispositions des présentes CGV ne pourra être interprété comme une renonciation à s'en prévaloir ultérieurement.</p>
                    <p className="text-gray-600 font-semibold mb-2">13.3 — Mise à jour</p>
                    <p className="text-gray-600 mb-4">Les présentes CGV peuvent être modifiées à tout moment par SERRURE SAFE. Les CGV applicables sont celles en vigueur à la date de la commande ou de la demande d'intervention.</p>

                    <div className="mt-8 p-6 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-600 mb-12">
                        <p className="font-bold text-gray-800 mb-2">SERRURE SAFE — Le réflexe sécurité</p>
                        <p>7 Allée de Dijon — 91170 Viry-Châtillon — France</p>
                        <p>Tél. : 01 85 09 73 65 — contact@serruresafe.fr — www.serruresafe.fr</p>
                        <p>SIRET : 991 108 663 00014 — RCS Évry — TVA : FR36991108663</p>
                        <p className="mt-2">© 2026 SERRURE SAFE — Tous droits réservés</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CGV;
