import { Button } from "@/components/ui/button";
import heroImage from "@/assets/chale-hero.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-coffee/40"></div>
      </div>
      
      <div className="relative z-10 text-center text-cream px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-playfair font-bold mb-6 drop-shadow-lg">
          Chalé Bolos e Cia
        </h1>
        <p className="text-xl md:text-2xl font-inter mb-4 drop-shadow-md">
          Cafeteria Artesanal em Passo Fundo
        </p>
        <p className="text-lg md:text-xl font-inter mb-8 opacity-90 drop-shadow-md max-w-2xl mx-auto">
          Comida afetiva, cheia de carinho e doce como um abraço de vó, 
          em um ambiente acolhedor rodeado pela natureza
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            onClick={() => scrollToSection('sobre')}
            size="lg"
            className="bg-cream text-coffee hover:bg-accent font-inter font-medium px-8 py-3 text-lg shadow-lg"
          >
            Sobre o Chalé
          </Button>
          <Button 
            onClick={() => scrollToSection('cardapios')}
            variant="outline"
            size="lg"
            className="border-cream text-cream hover:bg-cream hover:text-coffee font-inter font-medium px-8 py-3 text-lg shadow-lg"
          >
            Ver Cardápios
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;