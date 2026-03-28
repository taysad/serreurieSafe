import React from 'react';
import { Phone } from 'lucide-react';

const EmergencyCallButton: React.FC = () => {
  return (
    <a
      href="tel:+33185097365"
      className="fixed bottom-6 right-6 z-[60] flex items-center justify-center bg-red-600 text-white p-4 rounded-full shadow-[0_0_15px_rgba(220,38,38,0.6)] hover:bg-red-700 transition-all hover:scale-110 group"
      title="Appel d'urgence immédiat"
    >
      {/* Animation de clignotement / pulsation */}
      <span className="absolute inline-flex w-full h-full rounded-full bg-red-500 opacity-75 animate-ping" style={{ animationDuration: '2s' }}></span>
      
      {/* Icône du téléphone */}
      <Phone className="w-6 h-6 relative z-10 animate-pulse" />
      
      {/* Tooltip visible au survol */}
      <span className="absolute right-full mr-4 bg-gray-900 text-white text-sm px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap whitespace-nowrap pointer-events-none font-medium">
        Appel d'urgence
      </span>
    </a>
  );
};

export default EmergencyCallButton;
