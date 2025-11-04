import { Button } from "@/components/ui/button";

const FinalCTA = () => {
  return (
    <section className="py-16 md:py-24 px-4">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-black mb-8 md:mb-12">
          Se a sua missão é salvar na linha de frente,{" "}
          <span className="text-primary">o Dia da LM é o primeiro passo.</span>
        </h2>
        
        <div className="flex justify-center w-full">
          <Button 
            asChild
            size="lg"
            className="w-full max-w-2xl sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground font-black text-base sm:text-xl md:text-2xl px-6 sm:px-12 md:px-16 py-5 sm:py-6 md:py-8 transition-all hover:scale-105 shadow-xl shadow-primary/30"
          >
            <a href="https://clkdmg.site/pay/dialm" target="_blank" rel="noopener noreferrer" className="text-center leading-tight">
              QUERO PARTICIPAR DO DIA DA LIBERDADE MÉDICA
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
