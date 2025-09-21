import { Card, CardContent } from "@/components/ui/card";

const Produtos = () => {
  const produtos = [
    {
      categoria: "Bolos Artesanais",
      items: [
        "Bolo de Chocolate da Vó",
        "Bolo de Cenoura com Cobertura",
        "Bolo de Laranja com Calda",
        "Bolo de Coco Gelado"
      ],
      icon: "🍰"
    },
    {
      categoria: "Cafés Especiais",
      items: [
        "Café Coado Tradicional",
        "Espresso Cremoso",
        "Cappuccino Artesanal",
        "Café com Leite Especial"
      ],
      icon: "☕"
    },
    {
      categoria: "Doces & Salgados",
      items: [
        "Pão de Açúcar Caseiro",
        "Biscoitos da Casa",
        "Sanduíches Naturais",
        "Tortas Salgadas"
      ],
      icon: "🥧"
    }
  ];

  return (
    <section id="produtos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-coffee mb-6">
            Nossos Produtos
          </h2>
          <div className="w-24 h-1 bg-golden mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground font-inter max-w-2xl mx-auto">
            Cada produto é preparado com ingredientes selecionados e muito carinho, 
            seguindo receitas tradicionais passadas de geração em geração.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {produtos.map((produto, index) => (
            <Card key={index} className="group hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {produto.icon}
                </div>
                <h3 className="text-2xl font-playfair font-semibold text-coffee mb-6">
                  {produto.categoria}
                </h3>
                <ul className="space-y-3">
                  {produto.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-foreground font-inter flex items-center justify-start">
                      <span className="w-2 h-2 bg-golden rounded-full mr-3"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-accent p-8 rounded-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-playfair font-semibold text-coffee mb-4">
              Produção 100% Artesanal
            </h3>
            <p className="text-foreground font-inter leading-relaxed">
              Todos os nossos produtos são preparados diariamente em nossa cozinha, 
              mantendo a qualidade e o sabor caseiro que você já conhece e ama.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Produtos;