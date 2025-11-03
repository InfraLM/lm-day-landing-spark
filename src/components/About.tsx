import { Users, TrendingUp, DollarSign, Heart } from "lucide-react";

const About = () => {
  const features = [
    { icon: Users, label: "Liderança Médica" },
    { icon: TrendingUp, label: "Gestão" },
    { icon: DollarSign, label: "Saúde Financeira" },
    { icon: Heart, label: "Equilíbrio Emocional" },
  ];

  return (
    <section className="py-16 md:py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-5xl font-black text-center mb-8 md:mb-12">
          O QUE É O DIA DA <span className="text-primary">LIBERDADE MÉDICA?</span>
        </h2>
        
        <div className="bg-card rounded-2xl p-6 md:p-10 shadow-2xl border border-border mb-12">
          <p className="text-base md:text-lg text-foreground/90 leading-relaxed mb-8">
            O Dia da Liberdade Médica é um encontro criado para médicos intensivistas e emergencistas que desejam evoluir profissionalmente e pessoalmente. Reunindo nomes de destaque como <span className="text-primary font-semibold">Dr. José de Alencar</span>, <span className="text-primary font-semibold">Dr. Rodrigo Cleto</span> e <span className="text-primary font-semibold">Dr. Ian Camilo</span> e outros (em breve...), o evento traz palestras sobre liderança médica, gestão, saúde financeira e equilíbrio emocional, com o objetivo de inspirar e preparar os profissionais para crescerem como médicos, líderes e pessoas.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={index}
                  className="flex flex-col items-center text-center p-4 rounded-xl bg-background/50 hover:bg-background transition-all hover:scale-105"
                >
                  <Icon className="w-10 h-10 md:w-12 md:h-12 text-primary mb-3" />
                  <span className="text-sm md:text-base font-semibold">{feature.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
