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
              <p>📍 Passo Fundo, RS</p>
              <p>📱 (54) 9999-9999</p>
              <p>✉️ contato@chalebolos.com.br</p>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-playfair font-semibold mb-4">Horários</h4>
            <div className="space-y-2 font-inter text-cream/80">
              <p>Segunda a Sábado</p>
              <p>8h às 18h</p>
              <p>Domingo: 9h às 17h</p>
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