const Footer = () => {
  return (
    <footer className="bg-coffee text-cream py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-playfair font-bold mb-4">
              Chalé Bolos e Cia
            </h3>
            <p className="font-inter text-cream/80 leading-relaxed">
              Três gerações de tradição familiar, oferecendo comida afetiva 
              e momentos especiais em um ambiente acolhedor.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-playfair font-semibold mb-4">Contato</h4>
            <div className="space-y-2 font-inter text-cream/80">
              <p>📍 Rua Sananduva 152, Vera Cruz - Passo Fundo - RS</p>
              <p>📱 (54) 99982-0152</p>
              <p>📷 @chaleboloscia</p>
              <p>👥 /lisandranacozinha</p>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-playfair font-semibold mb-4">Horários</h4>
            <div className="space-y-2 font-inter text-cream/80">
              <p>Segunda a Quinta - Fechado para o público externo</p>
              <p>Sexta - 15:00 às 19:00</p>
              <p>Sábado - 10:00 às 19:00</p>
              <p>Domingo - 10:00 às 18:00</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-cream/20 mt-8 pt-8 text-center">
          <p className="font-inter text-cream/60">
            © 2025 Chalé Bolos e Cia. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;