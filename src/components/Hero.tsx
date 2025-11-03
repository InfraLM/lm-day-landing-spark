import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-12 px-4 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-card to-background opacity-50"></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto text-center max-w-5xl animate-fade-in-up">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
          O FUTURO DA MEDICINA <br />
          PERTENCE AOS <span className="text-primary">GENERALISTAS</span>
        </h1>
        
        <p className="text-lg md:text-2xl text-muted-foreground mb-4 font-medium">
          Goiânia | 13 de dezembro
        </p>
        
        <p className="text-base md:text-xl text-foreground/80 mb-8 max-w-3xl mx-auto">
          O maior encontro de medicina de emergência para evoluir sua carreira.
        </p>
        
        <Button 
          asChild
          size="lg"
          className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-8 md:px-12 py-6 md:py-8 text-base md:text-xl transition-all hover:scale-105 shadow-xl shadow-primary/20"
        >
          <a href="https://clkdmg.site/pay/dialm" target="_blank" rel="noopener noreferrer">
            QUERO EVOLUIR MINHA CARREIRA
          </a>
        </Button>
      </div>
    </section>
  );
};

export default Hero;
