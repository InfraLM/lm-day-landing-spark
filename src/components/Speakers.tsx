import { Card, CardContent } from "@/components/ui/card";
import { User } from "lucide-react";

const Speakers = () => {
  const speakers = [
    {
      name: "Dr. José de Alencar",
      specialty: "Especialista em Medicina de Emergência",
      hasImage: false,
    },
    {
      name: "Dr. Rodrigo Cleto",
      specialty: "Especialista em Medicina de Emergência",
      hasImage: true,
      image: "/speakers/dr-rodrigo-cleto.jpg",
    },
    {
      name: "Dr. Ian Camilo",
      specialty: "Especialista em Medicina de Emergência",
      hasImage: true,
      image: "/speakers/dr-ian-camilo.jpg",
    },
  ];

  return (
    <section className="py-16 md:py-24 px-4 bg-card/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-5xl font-black text-center mb-12 md:mb-16">
          CONHEÇA NOSSOS <span className="text-primary">PALESTRANTES</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-8">
          {speakers.map((speaker, index) => (
            <Card 
              key={index}
              className="bg-card border-border hover:border-primary/50 transition-all hover:scale-105 overflow-hidden group"
            >
              <CardContent className="p-0">
                <div className="aspect-square bg-secondary/30 flex items-center justify-center overflow-hidden">
                  {speaker.hasImage ? (
                    <img 
                      src={speaker.image} 
                      alt={speaker.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  ) : (
                    <User className="w-24 h-24 md:w-32 md:h-32 text-muted-foreground" />
                  )}
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl md:text-2xl font-bold mb-2">{speaker.name}</h3>
                  <p className="text-sm md:text-base text-muted-foreground">{speaker.specialty}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/30 hover:border-primary transition-all">
          <CardContent className="p-8 md:p-12 text-center">
            <h3 className="text-2xl md:text-3xl font-black text-primary mb-2">
              E MUITO MAIS EM BREVE...
            </h3>
            <p className="text-muted-foreground">
              Mais palestrantes de destaque serão anunciados em breve!
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Speakers;
