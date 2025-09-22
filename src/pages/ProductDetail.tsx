import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
}

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const { data, error } = await supabase
          .from('products')
          .select('*')
          .eq('id', parseInt(id!))
          .single();
        
        if (error) {
          console.error('Error fetching product:', error);
        } else {
          // Transform the data to match our interface
          const transformedProduct: Product = {
            ...data,
            acompanhamentos: Array.isArray(data.acompanhamentos) ? data.acompanhamentos : [],
            bebidas: Array.isArray(data.bebidas) ? data.bebidas : [],
          };
          setProduct(transformedProduct);
        }
      } catch (error) {
        console.error('Error:', error);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchProduct();
    }
  }, [id]);

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
              <Badge variant="secondary" className="text-lg px-4 py-2 font-inter">
                {product.date}
              </Badge>
            )}
          </div>

          {/* Content Sections */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
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
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetail;