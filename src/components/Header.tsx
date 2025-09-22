import { Button } from "@/components/ui/button";
import chaleLogo from "@/assets/chale-logo.png";

const Header = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img 
            src={chaleLogo} 
            alt="Chalé Bolos e Cia" 
            className="h-12 w-auto"
          />
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => scrollToSection('home')}
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
          onClick={() => scrollToSection('contato')}
          className="bg-coffee hover:bg-wood text-cream font-inter"
        >
          Faça seu Pedido
        </Button>
      </div>
    </header>
  );
};

export default Header;