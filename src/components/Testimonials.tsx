import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      text: "A Liberdade Médica transformou minha forma de atuar no plantão. Aprendi técnicas práticas que uso todos os dias e ganhei segurança para liderar minha equipe.",
      author: "Dr. Carlos Silva",
      role: "Médico Emergencista",
    },
    {
      text: "Depois da pós-graduação em Paciente Grave da LM, me sinto preparado para qualquer situação. O conhecimento aplicado faz toda diferença na linha de frente.",
      author: "Dra. Ana Paula",
      role: "Intensivista",
    },
    {
      text: "O LM DAY foi o ponto de partida da minha jornada. Em um único dia, entendi o que precisava para evoluir na medicina de emergência.",
      author: "Dr. Rafael Costa",
      role: "Médico de Pronto Socorro",
    },
  ];

  return (
    <section className="py-16 md:py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-5xl font-black text-center mb-12 md:mb-16">
          O QUE NOSSOS <span className="text-primary">ALUNOS DIZEM</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="bg-card border-border hover:border-primary/50 transition-all"
            >
              <CardContent className="p-6 md:p-8">
                <Quote className="w-8 h-8 text-primary mb-4" />
                <p className="text-base md:text-lg text-foreground/80 mb-6 italic">
                  "{testimonial.text}"
                </p>
                <div>
                  <p className="font-bold text-lg">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
