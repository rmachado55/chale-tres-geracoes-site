import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Contato = () => {
  return (
    <section id="contato" className="py-20 bg-gradient-to-b from-accent/20 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-coffee mb-6">
            Venha nos Visitar
          </h2>
          <div className="w-24 h-1 bg-golden mx-auto mb-8"></div>
          <div className="w-full max-w-4xl mx-auto">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14057.972545424995!2d-52.41775966821186!3d-28.25306021377275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94e2c09083861137%3A0xb14c8bb441a01931!2sR.%20Sananduva%2C%20152%20-%20Vila%20Vera%20Cruz%2C%20Passo%20Fundo%20-%20RS%2C%2099020-450!5e0!3m2!1spt-BR!2sbr!4v1758573854366!5m2!1spt-BR!2sbr" 
              width="100%" 
              height="450" 
              style={{border:0}} 
              allowFullScreen={true}
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg shadow-lg"
            ></iframe>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <Card className="shadow-elegant">
            <CardContent className="p-8">
              <h3 className="text-2xl font-playfair font-semibold text-coffee mb-6">
                Informações de Contato
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
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-coffee rounded-full flex items-center justify-center">
                    <span className="text-xl text-cream">📱</span>
                  </div>
                  <div>
                    <h4 className="font-inter font-semibold text-foreground mb-1">Contato</h4>
                    <p className="text-muted-foreground font-inter">
                      WhatsApp: (54) 99982-0152<br />
                      Instagram: @chaleboloscia<br />
                      Facebook: /lisandranacozinha
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-elegant">
            <CardContent className="p-8">
              <h3 className="text-2xl font-playfair font-semibold text-coffee mb-6">
                Faça seu Pedido
              </h3>
              
              <div className="space-y-6">
                <p className="text-foreground font-inter leading-relaxed">
                  Entre em contato conosco para encomendar seus bolos favoritos, 
                  agendar uma visita ou saber mais sobre nossos produtos especiais.
                </p>
                
                <div className="space-y-4">
                  <Button 
                    className="w-full bg-coffee hover:bg-wood text-cream font-inter py-3 text-lg"
                    onClick={() => window.open('https://wa.me/5554999820152', '_blank')}
                  >
                    <span className="mr-2">💬</span>
                    WhatsApp
                  </Button>
                  
                  <Button 
                    variant="outline"
                    className="w-full border-coffee text-coffee hover:bg-coffee hover:text-cream font-inter py-3 text-lg"
                    onClick={() => window.open('https://www.instagram.com/chaleboloscia', '_blank')}
                  >
                    <span className="mr-2">📷</span>
                    Instagram
                  </Button>
                </div>

                <div className="mt-8 p-6 bg-accent rounded-lg">
                  <h4 className="font-playfair font-semibold text-coffee mb-3">
                    Encomendas Especiais
                  </h4>
                  <p className="text-muted-foreground font-inter text-sm">
                    Para bolos personalizados e eventos especiais, 
                    entre em contato com antecedência de 48 horas.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contato;