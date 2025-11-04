import { Button } from "@/components/ui/button";

const FinalCTA = () => {
  return (
    <section className="py-16 md:py-24 px-4">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-3xl md:text-5xl font-black mb-8 md:mb-12">
          Se a sua missão é salvar na linha de frente,{" "}
          <span className="text-primary">o LM DAY é o primeiro passo.</span>
        </h2>
        
        <Button 
          asChild
          size="lg"
          className="bg-primary hover:bg-primary/90 text-primary-foreground font-black text-xl md:text-2xl px-12 md:px-16 py-6 md:py-8 transition-all hover:scale-105 shadow-xl shadow-primary/30"
        >
          <a href="https://clkdmg.site/pay/dialm" target="_blank" rel="noopener noreferrer">
            QUERO PARTICIPAR DO LM DAY
          </a>
        </Button>
      </div>
    </section>
  );
};

export default FinalCTA;
