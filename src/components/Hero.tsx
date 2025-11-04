import { Button } from "@/components/ui/button";
import { getAssetPath } from "@/lib/assets";

const Hero = () => {
  return <section className="relative min-h-screen flex items-center justify-center pt-20 pb-12 px-4 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-card to-background opacity-50"></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto text-center max-w-5xl animate-fade-in-up">
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black mb-4 leading-tight">
          O maior evento de urgência e emergência do Brasil
        </h1>
        <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-black mb-6 leading-tight text-primary">Feito para quem quer liderar e salvar na linha de frente</h2>
        
        <p className="text-lg sm:text-xl md:text-2xl text-foreground/90 mb-6 max-w-3xl mx-auto font-medium">
          Um dia para entender o que realmente diferencia o médico que sobrevive 
          do que lidera no plantão.
        </p>
        
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 font-medium">
          📍 13 de Dezembro | WTC Hotel, Goiânia
        </p>
        
        <div className="flex justify-center w-full">
          <Button asChild size="lg" className="w-full max-w-md sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground font-black px-4 sm:px-8 md:px-12 py-5 sm:py-6 md:py-8 text-sm sm:text-base md:text-xl transition-all hover:scale-105 shadow-xl shadow-primary/20">
            <a href="https://clkdmg.site/pay/dialm" target="_blank" rel="noopener noreferrer" className="text-center leading-tight">
              QUERO MINHA VAGA NO DIA DA LM
            </a>
          </Button>
        </div>
      </div>
    </section>;
};
export default Hero;
