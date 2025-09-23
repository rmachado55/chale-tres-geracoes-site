import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import chaleLogo from "@/assets/chale-logo.png";

const Header = () => {
  const navigate = useNavigate();
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/5554999820152', '_blank');
  };

  const handleHomeClick = () => {
    navigate('/');
  };

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div 
          className="flex items-center space-x-2 cursor-pointer" 
          onClick={handleHomeClick}
        >
          <img 
            src={chaleLogo} 
            alt="Chalé Bolos e Cia" 
            className="h-12 w-auto"
          />
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <button 
            onClick={handleHomeClick}
            className="text-foreground hover:text-coffee transition-colors font-inter"
          >
            Início
          </button>
          <button 
            onClick={() => scrollToSection('cardapios')}
            className="text-foreground hover:text-coffee transition-colors font-inter"
          >
            Cardápios
          </button>
          <button 
            onClick={() => navigate('/eventos')}
            className="text-foreground hover:text-coffee transition-colors font-inter"
          >
            Eventos
          </button>
          <button 
            onClick={() => scrollToSection('sobre')}
            className="text-foreground hover:text-coffee transition-colors font-inter"
          >
            Sobre o Chalé
          </button>
          <button 
            onClick={() => scrollToSection('contato')}
            className="text-foreground hover:text-coffee transition-colors font-inter"
          >
            Contato
          </button>
        </nav>

        <Button 
          onClick={handleWhatsApp}
          className="bg-coffee hover:bg-wood text-cream font-inter flex items-center gap-2"
        >
          <MessageCircle className="w-4 h-4" />
          Faça seu Pedido
        </Button>
      </div>
    </header>
  );
};

export default Header;