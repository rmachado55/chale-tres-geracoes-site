import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const About = () => {
  const photos = [
    { src: "/placeholder.svg", alt: "Interior do Chalé" },
    { src: "/placeholder.svg", alt: "Mesa com bolos" },
    { src: "/placeholder.svg", alt: "Área externa" },
    { src: "/placeholder.svg", alt: "Cozinha artesanal" },
    { src: "/placeholder.svg", alt: "Ambiente aconchegante" },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-20 py-20 bg-background">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-playfair font-bold text-coffee mb-6">
              Sobre o Chalé
            </h1>
            <div className="w-24 h-1 bg-golden mx-auto mb-8"></div>
          </div>

          {/* Story Section */}
          <div className="max-w-4xl mx-auto mb-16">
            <Card className="shadow-elegant">
              <CardContent className="p-8">
                <h2 className="text-3xl font-playfair font-bold text-coffee mb-6 text-center">
                  Nossa História
                </h2>
                <div className="space-y-6 text-lg font-inter leading-relaxed text-muted-foreground">
                  <p>
                    Há três gerações, o Chalé Bolos e Cia carrega consigo a tradição familiar 
                    de oferecer comida afetiva e momentos especiais em um ambiente verdadeiramente acolhedor.
                  </p>
                  <p>
                    Localizado no coração de Passo Fundo, nosso chalé representa mais que um simples 
                    estabelecimento - é um refúgio onde a natureza urbana se encontra com a tradição 
                    culinária passada de geração em geração.
                  </p>
                  <p>
                    Cada receita que servimos traz o carinho e o cuidado das receitas da vó, 
                    preparadas com ingredientes selecionados e muito amor. É aqui que memórias 
                    são criadas e sabores inesquecíveis são compartilhados.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Photo Gallery Carousel */}
          <div className="mb-16">
            <h2 className="text-3xl font-playfair font-bold text-coffee text-center mb-8">
              Nosso Ambiente
            </h2>
            <div className="max-w-4xl mx-auto">
              <Carousel className="w-full">
                <CarouselContent>
                  {photos.map((photo, index) => (
                    <CarouselItem key={index}>
                      <div className="w-full h-96 overflow-hidden rounded-lg shadow-lg">
                        <img 
                          src={photo.src} 
                          alt={photo.alt}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.currentTarget.src = '/placeholder.svg';
                          }}
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </div>

          {/* Contact and Location Information */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <Card className="shadow-elegant">
              <CardContent className="p-8">
                <h3 className="text-2xl font-playfair font-semibold text-coffee mb-6">
                  Localização e Contato
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-coffee rounded-full flex items-center justify-center">
                      <span className="text-xl text-cream">📍</span>
                    </div>
                    <div>
                      <h4 className="font-inter font-semibold text-foreground mb-1">Endereço</h4>
                      <p className="text-muted-foreground font-inter">
                        Rua Sananduva 152<br />
                        Vera Cruz - Passo Fundo - RS
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-coffee rounded-full flex items-center justify-center">
                      <span className="text-xl text-cream">📱</span>
                    </div>
                    <div>
                      <h4 className="font-inter font-semibold text-foreground mb-1">WhatsApp</h4>
                      <p className="text-muted-foreground font-inter">
                        (54) 99982-0152
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-coffee rounded-full flex items-center justify-center">
                      <span className="text-xl text-cream">📷</span>
                    </div>
                    <div>
                      <h4 className="font-inter font-semibold text-foreground mb-1">Redes Sociais</h4>
                      <p className="text-muted-foreground font-inter">
                        Instagram: @chaleboloscia<br />
                        Facebook: /lisandranacozinha
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-coffee rounded-full flex items-center justify-center">
                      <span className="text-xl text-cream">🕒</span>
                    </div>
                    <div>
                      <h4 className="font-inter font-semibold text-foreground mb-1">Horário de Funcionamento</h4>
                      <p className="text-muted-foreground font-inter">
                        Segunda a Sábado: 8h às 18h<br />
                        Domingo: 9h às 17h
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-elegant">
              <CardContent className="p-8">
                <h3 className="text-2xl font-playfair font-semibold text-coffee mb-6">
                  Nossos Valores
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-golden rounded-full flex items-center justify-center">
                      <span className="text-2xl">👨‍👩‍👧‍👦</span>
                    </div>
                    <div>
                      <h4 className="font-inter font-semibold text-foreground mb-2">Tradição Familiar</h4>
                      <p className="text-muted-foreground font-inter text-sm">
                        Três gerações dedicadas a manter viva a tradição de receitas caseiras 
                        e o acolhimento familiar.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-golden rounded-full flex items-center justify-center">
                      <span className="text-2xl">🌿</span>
                    </div>
                    <div>
                      <h4 className="font-inter font-semibold text-foreground mb-2">Natureza Urbana</h4>
                      <p className="text-muted-foreground font-inter text-sm">
                        Um refúgio verde no coração da cidade, onde a tranquilidade 
                        encontra o sabor autêntico.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-golden rounded-full flex items-center justify-center">
                      <span className="text-2xl">👵</span>
                    </div>
                    <div>
                      <h4 className="font-inter font-semibold text-foreground mb-2">Receitas da Vó</h4>
                      <p className="text-muted-foreground font-inter text-sm">
                        Cada prato carrega o carinho e o segredo das receitas 
                        passadas através das gerações.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;