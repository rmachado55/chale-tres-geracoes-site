import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Eventos = () => {
  const handleWhatsApp = () => {
    window.open('https://wa.me/5554999820152', '_blank');
  };

  const eventos = [
    {
      title: "Chá Revelação",
      description: "Celebre este momento especial com nossos deliciosos quitutes artesanais e um ambiente acolhedor que tornará sua revelação inesquecível.",
      image: "/placeholder.svg"
    },
    {
      title: "Reuniões de Trabalho",
      description: "Um espaço perfeito para reuniões corporativas, com ambiente tranquilo, café artesanal e petiscos que favorecem a concentração e produtividade.",
      image: "/placeholder.svg"
    },
    {
      title: "Confraternizações",
      description: "Reúna amigos, família ou colegas de trabalho em nosso ambiente familiar, com comida afetiva e muito carinho em cada detalhe.",
      image: "/placeholder.svg"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-20 py-20 bg-background">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-playfair font-bold text-coffee mb-6">
              Nossos Eventos
            </h1>
            <p className="text-lg text-muted-foreground font-inter max-w-2xl mx-auto">
              Celebre momentos especiais no Chalé Bolos e Cia. Oferecemos o ambiente perfeito 
              para seus eventos, com comida afetiva e atendimento personalizado.
            </p>
          </div>

          {/* Events Grid */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            {eventos.map((evento, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                <CardHeader className="text-center p-6">
                  <div className="w-full h-48 mb-4 overflow-hidden rounded-lg bg-muted">
                    <img 
                      src={evento.image} 
                      alt={evento.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        e.currentTarget.src = '/placeholder.svg';
                      }}
                    />
                  </div>
                  <CardTitle className="text-xl font-playfair text-coffee">
                    {evento.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-6 pb-6">
                  <p className="text-muted-foreground font-inter leading-relaxed text-center">
                    {evento.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <Card className="max-w-2xl mx-auto bg-gradient-to-r from-coffee to-wood text-cream">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-playfair font-bold mb-4">
                  Quer realizar seu evento conosco?
                </h3>
                <p className="text-lg mb-6 opacity-90">
                  Entre em contato pelo WhatsApp e vamos planejar juntos o seu evento especial!
                </p>
                <Button 
                  onClick={handleWhatsApp}
                  className="bg-cream text-coffee hover:bg-cream/90 font-inter flex items-center gap-2 mx-auto"
                >
                  <MessageCircle className="w-4 h-4" />
                  Falar no WhatsApp
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Eventos;