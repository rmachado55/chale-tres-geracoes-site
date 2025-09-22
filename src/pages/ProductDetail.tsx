import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { supabase } from "@/integrations/supabase/client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface Product {
  id: number;
  titulo: string;
  date: string;
  imagePath: string;
  label: string;
  paes: string[];
  frios: string[];
  salgado: string[];
  acompanhamentos: string[];
  doces: string[];
  bebidas: string[];
  price: number;
}

const ProductDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState<Product | null>(null);
  const [otherProducts, setOtherProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        // Convert slug back to query format (cafeColonial -> titulo contains this)
        const titleQuery = slug?.replace(/([A-Z])/g, ' $1').toLowerCase();
        
        const { data, error } = await supabase
          .from('products')
          .select('*')
          .ilike('titulo', `%${titleQuery}%`)
          .single();
        
        if (error) {
          console.error('Error fetching product:', error);
        } else {
          // Transform the data to match our interface
          const transformedProduct: Product = {
            ...data,
            acompanhamentos: Array.isArray(data.acompanhamentos) ? data.acompanhamentos : 
                           typeof data.acompanhamentos === 'string' ? data.acompanhamentos.split(',') : [],
            bebidas: Array.isArray(data.bebidas) ? data.bebidas : 
                    typeof data.bebidas === 'string' ? data.bebidas.split(',') : [],
            price: data.price || 0
          };
          setProduct(transformedProduct);
          
          // Fetch other products for carousel
          const { data: allProducts } = await supabase
            .from('products')
            .select('*')
            .neq('id', data.id);
          
          if (allProducts) {
            setOtherProducts(allProducts.map(p => ({
              ...p,
              acompanhamentos: Array.isArray(p.acompanhamentos) ? p.acompanhamentos : 
                             typeof p.acompanhamentos === 'string' ? p.acompanhamentos.split(',') : [],
              bebidas: Array.isArray(p.bebidas) ? p.bebidas : 
                      typeof p.bebidas === 'string' ? p.bebidas.split(',') : [],
              price: p.price || 0
            })));
          }
        }
      } catch (error) {
        console.error('Error:', error);
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchProduct();
    }
  }, [slug]);

  const createSlug = (title: string) => {
    return title
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-zA-Z0-9\s]/g, '')
      .replace(/\s+/g, '')
      .toLowerCase();
  };

  if (loading) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="pt-20 py-20 bg-background">
          <div className="container mx-auto px-4 text-center">
            <div className="animate-pulse">
              <div className="h-8 bg-muted rounded w-64 mx-auto mb-4"></div>
              <div className="h-4 bg-muted rounded w-96 mx-auto"></div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="pt-20 py-20 bg-background">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-playfair font-bold text-coffee mb-4">
              Cardápio não encontrado
            </h1>
            <p className="text-muted-foreground font-inter">
              O cardápio solicitado não foi encontrado.
            </p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const sections = [
    { title: "Pães", items: product.paes, count: product.paes?.length || 0 },
    { title: "Frios", items: product.frios, count: product.frios?.length || 0 },
    { title: "Salgados", items: product.salgado, count: product.salgado?.length || 0 },
    { title: "Acompanhamentos", items: product.acompanhamentos, count: product.acompanhamentos?.length || 0 },
    { title: "Doces", items: product.doces, count: product.doces?.length || 0 },
    { title: "Bebidas", items: product.bebidas, count: product.bebidas?.length || 0 },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-20 py-20 bg-background">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="max-w-2xl mx-auto mb-8">
              {product.imagePath && (
                <img 
                  src={product.imagePath} 
                  alt={product.titulo}
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                  onError={(e) => {
                    e.currentTarget.src = '/placeholder.svg';
                  }}
                />
              )}
            </div>
            <h1 className="text-4xl md:text-5xl font-playfair font-bold text-coffee mb-4">
              {product.titulo}
            </h1>
            {product.date && (
              <Badge variant="secondary" className="text-lg px-4 py-2 font-inter mb-4">
                {product.date}
              </Badge>
            )}
            
            {/* Price Box */}
            {product.price && product.price > 0 && (
              <Card className="max-w-md mx-auto mb-8 bg-gradient-to-r from-coffee to-wood text-cream">
                <CardContent className="p-6 text-center">
                  <h3 className="text-2xl font-playfair font-bold mb-2">Preço</h3>
                  <p className="text-3xl font-bold">
                    R$ {product.price.toFixed(2).replace('.', ',')}
                  </p>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Content Sections */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            {sections.map((section) => (
              section.items && section.items.length > 0 && (
                <Card key={section.title} className="h-fit">
                  <CardHeader>
                    <CardTitle className="text-xl font-playfair text-coffee flex items-center justify-between">
                      {section.title}
                      <Badge variant="outline" className="ml-2">
                        {section.count} {section.count === 1 ? 'opção' : 'opções'}
                      </Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {section.items.map((item, index) => (
                        <div 
                          key={index}
                          className="text-muted-foreground font-inter capitalize"
                        >
                          • {item}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )
            ))}
          </div>

          {/* Other Menu Options Carousel */}
          {otherProducts.length > 0 && (
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-playfair font-bold text-coffee text-center mb-8">
                Outros Cardápios
              </h2>
              <Carousel className="w-full">
                <CarouselContent className="-ml-2 md:-ml-4">
                  {otherProducts.map((otherProduct) => (
                    <CarouselItem key={otherProduct.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                      <Card 
                        className="group hover:shadow-lg transition-all duration-300 cursor-pointer border-2 hover:border-coffee/20 h-full"
                        onClick={() => navigate(`/cardapio/${createSlug(otherProduct.titulo)}`)}
                      >
                        <CardHeader className="text-center p-4">
                          <div className="w-full h-32 mb-3 overflow-hidden rounded-lg bg-muted">
                            {otherProduct.imagePath ? (
                              <img 
                                src={otherProduct.imagePath} 
                                alt={otherProduct.titulo}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                onError={(e) => {
                                  e.currentTarget.src = '/placeholder.svg';
                                }}
                              />
                            ) : (
                              <div className="w-full h-full flex items-center justify-center bg-muted">
                                <span className="text-muted-foreground text-sm">Imagem não disponível</span>
                              </div>
                            )}
                          </div>
                          <CardTitle className="text-lg font-playfair text-coffee group-hover:text-wood transition-colors">
                            {otherProduct.titulo}
                          </CardTitle>
                          {otherProduct.date && (
                            <p className="text-xs text-muted-foreground font-inter">
                              {otherProduct.date}
                            </p>
                          )}
                        </CardHeader>
                        <CardContent className="px-4 pb-4">
                          {otherProduct.label && (
                            <p className="text-xs text-muted-foreground font-inter leading-relaxed">
                              {otherProduct.label}
                            </p>
                          )}
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetail;
