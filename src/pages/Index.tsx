import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Speakers from "@/components/Speakers";
import Tickets from "@/components/Tickets";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Speakers />
      <Tickets />
      <Footer />
    </div>
  );
};

export default Index;
