import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";

const TargetAudience = () => {
  const audiences = [
    "Médicos de PS, UTI ou prontos para entrar na linha de frente",
    "Revalidandos que querem acelerar sua segurança",
    "Internos que desejam se destacar em emergências",
    "Qualquer médico que sabe que teoria não é o suficiente",
  ];

  return (
    <section className="py-16 md:py-24 px-4 bg-card/30">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-5xl font-black text-center mb-12 md:mb-16">
          Feito para quem quer <span className="text-primary">viver</span>{" "}
          (e não só estudar) a medicina de emergência e urgência.
        </h2>
        
        <Card className="bg-card border-border">
          <CardContent className="p-8 md:p-12">
            <div className="space-y-6">
              {audiences.map((audience, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="bg-primary/10 rounded-full p-2 flex-shrink-0">
                    <Check className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-lg md:text-xl text-foreground/90 pt-1">
                    {audience}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default TargetAudience;
