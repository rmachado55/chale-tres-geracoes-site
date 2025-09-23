ilsilsimport { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";

interface Product {
  id: number;
  titulo: string;
  date: string;
  imagePath: string;
  label: string;
  details: string;
}

const Cardapios = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  const createSlug = (title: string) => {
    return title
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-zA-Z0-9\s]/g, '')
      .replace(/\s+/g, '')
      .toLowerCase();
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data, error } = await supabase
          .from('products')
          .select('id, titulo, date, imagePath, label, details');
        
        if (error) {
          console.error('Error fetching products:', error);
        } else {
          setProducts(data || []);
        }
      } catch (error) {
        console.error('Error:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <section id="cardapios" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="animate-pulse">
              <div className="h-8 bg-muted rounded w-64 mx-auto mb-4"></div>
              <div className="h-4 bg-muted rounded w-96 mx-auto"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="cardapios" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-coffee mb-6">
            Nossos Cardápios
          </h2>
          <p className="text-lg text-muted-foreground font-inter max-w-2xl mx-auto">
            Descubra nossos deliciosos cardápios artesanais, preparados com carinho e tradição familiar
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {products.map((product) => (
            <Card 
              key={product.id} 
              className="group hover:shadow-lg transition-all duration-300 cursor-pointer border-2 hover:border-coffee/20"
              onClick={() => navigate(`/cardapio/${product.label}`)}
            >
              <CardHeader className="text-center p-6">
                <div className="w-full h-48 mb-4 overflow-hidden rounded-lg bg-muted">
                  {product.imagePath ? (
                    <img 
                      src={product.imagePath} 
                      alt={product.titulo}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        e.currentTarget.src = '/placeholder.svg';
                      }}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-muted">
                      <span className="text-muted-foreground">Imagem não disponível</span>
                    </div>
                  )}
                </div>
                <CardTitle className="text-xl font-playfair text-coffee group-hover:text-wood transition-colors">
                  {product.titulo}
                </CardTitle>
                {product.date && (
                  <p className="text-sm text-muted-foreground font-inter">
                    {product.date}
                  </p>
                )}
              </CardHeader>
              <CardContent className="px-6 pb-6">
                {product.label && (
                  <p className="text-sm text-muted-foreground font-inter leading-relaxed">
                    {product.details}
                  </p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {products.length === 0 && !loading && (
          <div className="text-center py-12">
            <p className="text-muted-foreground font-inter">
              Nenhum cardápio disponível no momento.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Cardapios;
