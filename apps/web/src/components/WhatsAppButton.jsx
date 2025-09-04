import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const phoneNumber = "902169092834";
  const message = "Merhaba! WALMCO hakkında bilgi almak istiyorum.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* WhatsApp Floating Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-16 h-16 bg-green-500 hover:bg-green-600 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 hover:shadow-green-500/50"
        aria-label="WhatsApp ile iletişime geçin"
      >
        {/* WhatsApp Icon */}
        <MessageCircle 
          size={28} 
          className="text-white group-hover:scale-110 transition-transform duration-300" 
        />
        
        {/* Pulse Animation */}
        <div className="absolute inset-0 bg-green-400 rounded-full animate-ping opacity-75"></div>
        
        {/* Hover Tooltip */}
        <div className="absolute right-full mr-4 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
          WhatsApp ile iletişime geçin
          <div className="absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-gray-900 border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
        </div>
      </a>
      
      {/* Floating Text */}
      <div className="absolute bottom-20 right-0 text-center">
        <div className="bg-green-500 text-white text-xs px-2 py-1 rounded-full font-medium animate-bounce">
          Canlı Destek
        </div>
      </div>
    </div>
  );
}
