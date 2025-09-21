import { Card } from "@/components/ui/card";

const Historia = () => {
  return (
    <section id="historia" className="py-20 bg-gradient-to-b from-background to-accent/20">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-coffee mb-6">
            Nossa História
          </h2>
          <div className="w-24 h-1 bg-golden mx-auto mb-8"></div>
        </div>
        
        <Card className="p-8 md:p-12 shadow-elegant">
          <div className="space-y-6 text-foreground font-inter leading-relaxed">
            <p className="text-lg md:text-xl first-letter:text-6xl first-letter:font-playfair first-letter:text-coffee first-letter:float-left first-letter:mr-3 first-letter:mt-1">
              Resultado do trabalho de três gerações, o Chalé nasceu de um sonho familiar de morar em uma cabana. 
              Na troca de ideias transformou-se em um chalé canadense em estilo rústico.
            </p>
            
            <p className="text-lg md:text-xl">
              Quinze anos se passaram, o jardim cresceu à sua volta e agora, em 2025, está sendo ressignificado, 
              transformando-se em um local acolhedor e com a missão de oferecer à Passo Fundo e região a 
              possibilidade de saborear delícias junto à natureza e, o melhor, sem sair do espaço urbano.
            </p>
            
            <p className="text-lg md:text-xl text-coffee font-medium">
              Com uma produção totalmente artesanal, oferecemos uma comida afetiva, cheia de carinho e 
              doce como um abraço de vó.
            </p>
          </div>
        </Card>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <div className="w-16 h-16 bg-coffee rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl text-cream">🏠</span>
            </div>
            <h3 className="text-xl font-playfair font-semibold text-coffee mb-2">Tradição Familiar</h3>
            <p className="text-muted-foreground font-inter">Três gerações de sonhos e dedicação</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-coffee rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl text-cream">🌿</span>
            </div>
            <h3 className="text-xl font-playfair font-semibold text-coffee mb-2">Natureza Urbana</h3>
            <p className="text-muted-foreground font-inter">Conexão com a natureza no coração da cidade</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-coffee rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl text-cream">👵</span>
            </div>
            <h3 className="text-xl font-playfair font-semibold text-coffee mb-2">Receitas da Vó</h3>
            <p className="text-muted-foreground font-inter">Sabores autênticos e afetuosos</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Historia;