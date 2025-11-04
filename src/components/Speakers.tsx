import { Card, CardContent } from "@/components/ui/card";
import { User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getAssetPath } from "@/lib/assets";

const Speakers = () => {
  const pillar1Speakers = [
    {
      name: "Dr. Ian Camilo",
      specialty: "Especialista em Medicina de Emergência e CEO da Liberdade Médica",
      title: "O médico que inspira: liderança além da técnica",
      subtitle: "Como gerar influência genuína em um ambiente dominado pela hierarquia e pelo cansaço",
      description: "A autoridade técnica forma respeito. A autoridade humana cria legado.",
      hasImage: true,
      image: "speakers/dr-ian-camilo-real.jpg",
    },
    {
      name: "Dr. Rodrigo Cleto",
      specialty: "Sócio do maior hospital privado do Centro-Oeste",
      title: "Liderança com propósito",
      subtitle: "O que diferencia médicos que apenas sobrevivem dos que constroem legado",
      description: "Liderar na urgência é ter clareza emocional quando todos estão perdidos.",
      hasImage: true,
      image: "speakers/dr-rodrigo-cleto-real.jpg",
    },
  ];

  const pillar2Speakers = [
    {
      name: "Dr. José de Alencar",
      specialty: "Referência mundial em Cardiologia",
      title: "Alta performance no caos: como decidir rápido e certo",
      subtitle: "O raciocínio clínico de quem vive a beira do leito",
      description: "O cérebro de um emergencista em ação.",
      hasImage: true,
      image: "speakers/dr-jose-alencar.jpeg",
    },
    {
      name: "Dr. Rafael Mendanha",
      specialty: "Especialista em Psiquiatria e Diretor da Faculdade Cenbrape",
      title: "O equilíbrio invisível: saúde mental como estratégia de sobrevivência na medicina",
      subtitle: "Por que tantos médicos se perdem ao tentar salvar os outros?",
      description: "A psiquiatria como ponte entre propósito e preservação emocional; inteligência emocional como pilar da liberdade.",
      hasImage: true,
      image: "speakers/dr-rafael-mendanha.jpg",
    },
  ];

  const pillar3Speakers = [
    {
      name: "Dr. Ibrahim Facuri",
      specialty: "Médico e CEO do Hospital Jacob Facuri",
      title: "O médico Antifrágil: como crescer em meio ao caos",
      subtitle: "Como transformar instabilidade em estratégia",
      description: "Finanças e mentalidade antifrágil para autonomia e patrimônio sustentável.",
      hasImage: true,
      image: "speakers/dr-ibrahim-facuri.jpg",
    },
  ];

  const SpeakerCard = ({ speaker }: { speaker: any }) => (
    <Card className="bg-card border-border hover:border-primary/50 transition-all overflow-hidden">
      <CardContent className="p-0">
        <div className="grid md:grid-cols-[200px,1fr] gap-0">
          <div className="aspect-square md:aspect-auto bg-secondary/30 flex items-center justify-center overflow-hidden">
            {speaker.hasImage ? (
              <img 
                src={getAssetPath(speaker.image)}
                alt={speaker.name}
                className="w-full h-full object-cover object-top"
              />
            ) : (
              <User className="w-20 h-20 text-muted-foreground" />
            )}
          </div>
          <div className="p-6">
            <h4 className="text-xl md:text-2xl font-bold mb-1 text-primary">
              {speaker.name}
            </h4>
            <p className="text-sm md:text-base text-muted-foreground italic mb-3">
              {speaker.specialty}
            </p>
            <h5 className="text-lg md:text-xl font-bold mb-2">
              {speaker.title}
            </h5>
            <p className="text-sm md:text-base text-muted-foreground mb-2 italic">
              {speaker.subtitle}
            </p>
            <p className="text-sm md:text-base text-foreground/80">
              {speaker.description}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <section className="py-16 md:py-24 px-4 bg-card/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-5xl font-black text-center mb-4">
          APRENDA COM AS MAIORES{" "}
          <span className="text-primary">ESPECIALIDADES DO BRASIL</span>
        </h2>
        <p className="text-center text-lg md:text-xl text-muted-foreground mb-16">
          3 pilares essenciais para dominar a urgência e emergência
        </p>

        {/* PILAR 1 */}
        <div className="mb-16">
          <div className="mb-8">
            <h3 className="text-2xl md:text-4xl font-black mb-2">
              <span className="text-primary">PILAR 1</span> — LIDERANÇA NA EMERGÊNCIA
            </h3>
          </div>
          <div className="space-y-6">
            {pillar1Speakers.map((speaker, index) => (
              <SpeakerCard key={index} speaker={speaker} />
            ))}
          </div>
        </div>

        {/* PILAR 2 */}
        <div className="mb-16">
          <div className="mb-8">
            <h3 className="text-2xl md:text-4xl font-black mb-2">
              <span className="text-primary">PILAR 2</span> — ALTA PERFORMANCE E SAÚDE MENTAL
            </h3>
          </div>
          <div className="space-y-6">
            {pillar2Speakers.map((speaker, index) => (
              <SpeakerCard key={index} speaker={speaker} />
            ))}
          </div>
        </div>

        {/* PILAR 3 */}
        <div className="mb-16">
          <div className="mb-8">
            <h3 className="text-2xl md:text-4xl font-black mb-2">
              <span className="text-primary">PILAR 3</span> — FINANÇAS E LIBERDADE
            </h3>
          </div>
          <div className="space-y-6">
            {pillar3Speakers.map((speaker, index) => (
              <SpeakerCard key={index} speaker={speaker} />
            ))}
          </div>
        </div>

        {/* PAINEL PRÁTICO */}
        <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/30 hover:border-primary transition-all mb-12">
          <CardContent className="p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-black text-primary mb-4">
              MAIS PALESTRANTES EM BREVE...
            </h3>
            <p className="text-base md:text-lg text-foreground/80 mb-2">
              <span className="font-semibold">Atenção:</span> Os próximos palestrantes serão anunciados, em breve, no Instagram da Liberdade Médica.
            </p>
          </CardContent>
        </Card>

        {/* CTA FINAL DA SEÇÃO */}
        <div className="text-center">
          <p className="text-xl md:text-2xl font-bold mb-6">
            Um dia. Um evento.{" "}
            <span className="text-primary">
              O início da sua trajetória real na urgência e emergência.
            </span>
          </p>
          <Button 
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-black text-lg md:text-xl px-8 md:px-12 py-6 md:py-7 transition-all hover:scale-105 shadow-xl shadow-primary/30"
          >
            <a href="https://clkdmg.site/pay/dialm" target="_blank" rel="noopener noreferrer">
              GARANTA SUA VAGA NO DIA DA LIBERDADE MÉDICA
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Speakers;
