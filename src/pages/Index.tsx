import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Historia from "@/components/Historia";
import Cardapios from "@/components/Cardapios";
import Contato from "@/components/Contato";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Cardapios />
      <Historia />
      <Contato />
      <Footer />
    </div>
  );
};

export default Index;
