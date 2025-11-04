import { Button } from "@/components/ui/button";
import { getAssetPath } from "@/lib/assets";

const Header = () => {
  const scrollToTickets = () => {
    const ticketSection = document.getElementById('tickets');
    ticketSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <img 
          src={getAssetPath("assets/logo-lm-white.png")}  
          alt="Liberdade Médica" 
          className="h-8 md:h-10 w-auto"
        />
        <Button 
          onClick={scrollToTickets}
          className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-4 md:px-6 py-2 md:py-3 text-sm md:text-base transition-all hover:scale-105"
        >
          GARANTIR MEU INGRESSO
        </Button>
      </div>
    </header>
  );
};

export default Header;
