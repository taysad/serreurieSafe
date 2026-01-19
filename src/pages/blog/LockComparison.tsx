import React from "react";
import { Link } from "react-router-dom";
import { SEO } from "../../components/SEO";
import { Shield, ShieldCheck, XCircle } from "lucide-react";

const LockComparison: React.FC = () => {
    return (
        <div className="pt-20">
            <SEO
                title="Comparatif Serrures : 3 points vs 5 points, A2P, Marques"
                description="Quelle serrure choisir ? Comparatif complet entre serrures 3, 5 et 7 points. Norme A2P, prix et niveau de sécurité pour faire le bon choix."
            />

            <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl font-extrabold text-gray-900 mb-8 text-center">Comparatif des niveaux de sécurité</h1>

                    <p className="text-xl text-gray-600 mb-12 text-center">
                        Choisir sa serrure est crucial pour la sécurité de votre domicile. Voici un guide simple pour comprendre les différences.
                    </p>

                    {/* Table Comparison */}
                    <div className="bg-white shadow-xl rounded-2xl overflow-hidden mb-16 border border-gray-200">
                        <div className="grid grid-cols-3 bg-gray-900 text-white p-6 text-center font-bold">
                            <div>Type de Serrure</div>
                            <div>Sécurité</div>
                            <div>Usage Recommandé</div>
                        </div>

                        <div className="divide-y divide-gray-200">
                            <div className="grid grid-cols-3 p-6 items-center hover:bg-gray-50">
                                <div className="font-semibold text-gray-900">Serrure Monopoint</div>
                                <div className="text-red-500 flex justify-center"><XCircle className="w-6 h-6" /> Faible</div>
                                <div className="text-sm text-gray-600 text-center">Porte intérieure, cave, garage non critique</div>
                            </div>
                            <div className="grid grid-cols-3 p-6 items-center hover:bg-gray-50 bg-orange-50/30">
                                <div className="font-semibold text-gray-900">Serrure 3 Points</div>
                                <div className="text-orange-500 flex justify-center"><Shield className="w-6 h-6" /> Moyenne</div>
                                <div className="text-sm text-gray-600 text-center">Appartement standard, porte d'entrée classique</div>
                            </div>
                            <div className="grid grid-cols-3 p-6 items-center hover:bg-gray-50 bg-green-50/30 border-l-4 border-green-500">
                                <div className="font-semibold text-gray-900">Serrure 5 Points A2P</div>
                                <div className="text-green-600 flex justify-center"><ShieldCheck className="w-6 h-6" /> Haute</div>
                                <div className="text-sm text-gray-600 text-center">Maison individuelle, appartement RDC, zones à risque</div>
                            </div>
                            <div className="grid grid-cols-3 p-6 items-center hover:bg-gray-50">
                                <div className="font-semibold text-gray-900">Porte Blindée (Bloc-porte)</div>
                                <div className="text-blue-600 flex justify-center"><ShieldCheck className="w-6 h-6" /> Maximale</div>
                                <div className="text-sm text-gray-600 text-center">Protection totale, exigence assurance élevée</div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">La norme A2P, c'est quoi ?</h2>
                            <p className="text-gray-600 mb-4">
                                L'Assurance Prévention Protection (A2P) est une certification délivrée par le CNPP qui classe les serrures selon leur résistance à l'effraction :
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-center">
                                    <span className="font-bold text-orange-600 w-16">A2P *</span>
                                    <span className="text-gray-700">5 minutes de résistance (opportuniste)</span>
                                </li>
                                <li className="flex items-center">
                                    <span className="font-bold text-orange-600 w-16">A2P **</span>
                                    <span className="text-gray-700">10 minutes de résistance (cambrioleur averti)</span>
                                </li>
                                <li className="flex items-center">
                                    <span className="font-bold text-orange-600 w-16">A2P ***</span>
                                    <span className="text-gray-700">15 minutes de résistance (professionnel)</span>
                                </li>
                            </ul>
                        </div>
                        <div className="bg-gray-100 p-8 rounded-xl">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Notre conseil d'expert</h3>
                            <p className="text-gray-700 mb-6">
                                Pour un appartement classique, inutile de sur-investir : une <strong>serrure 3 points A2P*</strong> suffit souvent à décourager la majorité des cambrioleurs et à satisfaire votre assurance.
                            </p>
                            <Link to="/contact" className="inline-block bg-orange-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-orange-700 transition">
                                Demander un diagnostic gratuit
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LockComparison;
