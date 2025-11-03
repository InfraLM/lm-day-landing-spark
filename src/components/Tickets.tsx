import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Ticket, Calendar, MapPin, Users } from "lucide-react";

const Tickets = () => {
  return (
    <section id="tickets" className="py-16 md:py-24 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-5xl font-black text-center mb-12 md:mb-16">
          GARANTA SUA <span className="text-primary">VAGA DUPLA</span>
        </h2>
        
        <Card className="bg-gradient-to-br from-card to-card/50 border-2 border-primary/30 shadow-2xl shadow-primary/10 hover:shadow-primary/20 transition-all">
          <CardContent className="p-8 md:p-12">
            <div className="flex justify-center mb-6">
              <div className="bg-primary/10 p-4 rounded-full">
                <Ticket className="w-12 h-12 md:w-16 md:h-16 text-primary" />
              </div>
            </div>
            
            <h3 className="text-2xl md:text-4xl font-black text-center mb-4">
              INGRESSO DUPLO
            </h3>
            
            <div className="text-center mb-6">
              <div className="text-5xl md:text-6xl font-black text-primary mb-2">
                R$ 297,00
              </div>
              <p className="text-base md:text-lg text-muted-foreground">
                Pagamento único
              </p>
            </div>
            
            <div className="bg-background/50 rounded-xl p-6 mb-8 space-y-4">
              <div className="flex items-start gap-3">
                <Users className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-base md:text-lg">2 Entradas Incluídas</p>
                  <p className="text-sm md:text-base text-muted-foreground">
                    Leve um colega médico para evoluir com você!
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Calendar className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-base md:text-lg">13 de Dezembro de 2024</p>
                  <p className="text-sm md:text-base text-muted-foreground">
                    Dia inteiro de conteúdo transformador
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-base md:text-lg">Goiânia, Goiás</p>
                  <p className="text-sm md:text-base text-muted-foreground">
                    Local será divulgado em breve
                  </p>
                </div>
              </div>
            </div>
            
            <Button 
              asChild
              size="lg"
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-black text-lg md:text-2xl py-6 md:py-8 transition-all hover:scale-105 shadow-xl shadow-primary/30"
            >
              <a href="https://clkdmg.site/pay/dialm" target="_blank" rel="noopener noreferrer">
                COMPRAR INGRESSO DUPLO AGORA
              </a>
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Tickets;
