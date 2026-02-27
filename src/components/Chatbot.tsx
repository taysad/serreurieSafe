import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";
import { sendEmail } from "../utils/emailService";

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "👋 Bonjour ! Je suis l’assistant virtuel Serrure Safe. Dites-moi ce dont vous avez besoin — dépannage, devis, ou simple information ?",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // 🧩 Analyse du message utilisateur
  const detectIntent = (msg: string) => {
    msg = msg.toLowerCase();

    if (msg.match(/(urgence|urgent|immédiat|bloqué|porte|clé|cassé|fermée)/))
      return "urgence";
    if (msg.match(/(prix|tarif|combien|coût|devis|facture)/)) return "tarif";
    if (msg.match(/(rendez|dispo|horaire|heure|aujourd'hui|demain)/))
      return "horaire";
    if (msg.match(/(zone|où|secteur|région|ville|adresse)/)) return "zone";
    if (msg.match(/(contact|appel|téléphone|numéro|whatsapp)/))
      return "contact";
    if (msg.match(/(sécurité|blindée|certification|norme|garantie)/))
      return "sécurité";
    if (msg.match(/(serrure|porte|installation|réparation|changement)/))
      return "service";
    if (msg.match(/(bonjour|salut|hey|coucou)/)) return "salutation";
    if (msg.match(/(merci|super|top|ok)/)) return "merci";
    return "inconnu";
  };

  // 🧠 Générateur de réponse avancée
  const generateResponse = (intent: string): string => {
    const responses: Record<string, string[]> = {
      urgence: [
        "🚨 Pas de panique ! Un technicien peut être sur place en **moins de 30 minutes**. Pouvez-vous me dire votre **ville ou arrondissement** ?",
        "🧰 Je comprends, c’est une urgence. Nos serruriers interviennent **24 h/24 et 7 j/7**. Où êtes-vous situé ?",
      ],
      tarif: [
        "💰 L’ouverture de porte démarre à **80 €**, le changement de serrure à **150 €**, et le **devis est toujours gratuit**.",
        "Nos tarifs sont transparents : **80 € à 150 € selon la prestation**, déplacement inclus dans Viry-Châtillon. Souhaitez-vous un devis rapide ?",
      ],
      horaire: [
        "🕒 Nous intervenons **24 h/24 et 7 j/7**, même la nuit et le week-end. Pour un rendez-vous planifié, nous travaillons de **8 h à 20 h**.",
        "Nous sommes disponibles **tous les jours**, sans interruption. Quelle heure vous conviendrait pour l’intervention ?",
      ],
      zone: [
        "📍 Nous couvrons **toute l'Essonne et l’Île-de-France** : Hauts-de-Seine, Essonne, Seine-Saint-Denis… Où êtes-vous exactement ?",
        "Nous intervenons rapidement **dans toute la région parisienne**. Pouvez-vous préciser votre adresse ou arrondissement ?",
      ],
      contact: [
        "📞 Vous pouvez nous joindre immédiatement au **01 85 09 73 65** ou via **WhatsApp**. Réponse garantie en moins de **5 minutes** !",
        "☎️ Voici notre contact direct : **01 85 09 73 65**. Vous pouvez aussi m’envoyer un message WhatsApp pour être rappelé rapidement.",
      ],
      sécurité: [
        "🛡️ Tous nos produits sont **certifiés A2P** et répondent aux normes européennes. Serrure Safe garantit la **qualité et la sécurité** de chaque installation.",
        "🔒 Nous installons uniquement des **serrures certifiées** et garanties jusqu’à **5 ans**. Souhaitez-vous un modèle haute sécurité ?",
      ],
      service: [
        "🔐 Nous réalisons : ouverture de porte, remplacement de serrure, installation de porte blindée, et dépannage en urgence.",
        "Nous proposons des **services complets de serrurerie** : ouverture, changement, blindage, réparation. Que souhaitez-vous exactement ?",
      ],
      salutation: [
        "👋 Bonjour ! Ravi de vous aider. Avez-vous besoin d’un **devis**, d’une **intervention urgente**, ou d’un **conseil technique** ?",
        "Salut ! 😊 Je suis là pour vous. Que puis-je faire pour vous aujourd’hui ?",
      ],
      merci: [
        "Avec plaisir ! 😊 Si vous avez besoin d’aide, je peux lancer un **devis express** ou vous mettre en contact avec un technicien.",
        "Merci à vous ! 🔐 N’hésitez pas à revenir vers moi pour tout besoin de dépannage ou d’installation.",
      ],
      inconnu: [
        "🤔 Je ne suis pas sûr de comprendre. Pouvez-vous préciser si vous parlez d’un **devis**, d’une **urgence**, ou d’un **service de serrurerie** ?",
        "🛠️ Je n’ai pas bien saisi votre demande. Parlez-vous d’un problème de **serrure**, d’un **prix**, ou d’un **rendez-vous** ?",
      ],
    };

    const pool = responses[intent] || responses["inconnu"];
    return pool[Math.floor(Math.random() * pool.length)];
  };

  const sendMessage = () => {
    if (!inputValue.trim()) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue("");
    setIsTyping(true);

    // Simule une réponse humaine rapide
    setTimeout(() => {
      const intent = detectIntent(userMsg.text);
      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        text: generateResponse(intent),
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 700 + Math.random() * 500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  // Auto-ouverture après 10 s
  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), 10000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Bouton flottant */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 left-6 bg-gradient-to-r from-orange-500 to-red-500 text-white p-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 z-40"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        animate={
          isOpen
            ? {}
            : {
              scale: [1, 1.1, 1],
              boxShadow: [
                "0 10px 25px rgba(234,88,12,0.3)",
                "0 15px 35px rgba(234,88,12,0.5)",
                "0 10px 25px rgba(234,88,12,0.3)",
              ],
            }
        }
        transition={{ duration: 2, repeat: Infinity }}
      >
        <MessageCircle className="w-6 h-6" />
      </motion.button>

      {/* Interface du chatbot */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 100 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 100 }}
            className="fixed bottom-24 left-6 w-96 h-[450px] bg-white rounded-2xl shadow-2xl border border-gray-200 z-50 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <Bot className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-semibold">Assistant Serrure Safe</h3>
                  <p className="text-xs opacity-90">Réponses instantanées ⚡</p>
                </div>
              </div>
              <button
                onClick={() => {
                  if (messages.length > 2) { // S'il y a eu un échange
                    const history = messages.map(m => `[${m.sender.toUpperCase()}] ${m.timestamp.toLocaleTimeString()}: ${m.text}`).join('\n');
                    sendEmail('template_contact', {
                      name: 'Historique Chatbot',
                      email: 'chatbot@serruresafe.fr',
                      phone: 'Non renseigné',
                      message: history,
                      to_email: 'contact@serruresafe.fr'
                    }).catch(console.error);
                  }
                  setIsOpen(false);
                }}
                className="p-1 hover:bg-white/20 rounded-lg transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"
                    }`}
                >
                  <div
                    className={`flex items-start space-x-2 max-w-xs ${msg.sender === "user"
                      ? "flex-row-reverse space-x-reverse"
                      : ""
                      }`}
                  >
                    <div
                      className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${msg.sender === "user"
                        ? "bg-orange-500 text-white"
                        : "bg-gray-200 text-gray-600"
                        }`}
                    >
                      {msg.sender === "user" ? (
                        <User className="w-3 h-3" />
                      ) : (
                        <Bot className="w-3 h-3" />
                      )}
                    </div>
                    <div
                      className={`px-3 py-2 rounded-2xl text-sm ${msg.sender === "user"
                        ? "bg-orange-500 text-white rounded-br-sm"
                        : "bg-gray-100 text-gray-800 rounded-bl-sm"
                        }`}
                    >
                      {msg.text}
                    </div>
                  </div>
                </motion.div>
              ))}

              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="flex items-start space-x-2">
                    <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center">
                      <Bot className="w-3 h-3 text-gray-600" />
                    </div>
                    <div className="bg-gray-100 px-3 py-2 rounded-2xl rounded-bl-sm">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div
                          className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                          style={{ animationDelay: "0.1s" }}
                        ></div>
                        <div
                          className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                          style={{ animationDelay: "0.2s" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-gray-200">
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Posez votre question ici..."
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-full focus:outline-none focus:border-orange-500 text-sm"
                />
                <button
                  onClick={sendMessage}
                  disabled={!inputValue.trim()}
                  className="p-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 disabled:opacity-50 transition-colors"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;
