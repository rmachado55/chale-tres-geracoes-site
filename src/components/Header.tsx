import { Button } from "@/components/ui/button";

const Header = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <h1 className="text-2xl font-playfair font-bold text-coffee">
            Chalé Bolos e Cia
          </h1>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => scrollToSection('home')}
            className="text-foreground hover:text-coffee transition-colors font-inter"
          >
            Início
          </button>
          <button 
            onClick={() => scrollToSection('historia')}
            className="text-foreground hover:text-coffee transition-colors font-inter"
          >
            Nossa História
          </button>
          <button 
            onClick={() => scrollToSection('produtos')}
            className="text-foreground hover:text-coffee transition-colors font-inter"
          >
            Produtos
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