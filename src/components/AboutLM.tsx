const AboutLM = () => {
  return (
    <section className="py-16 md:py-24 px-4 bg-card/30">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-8">
          <img 
            src="/assets/logo-lm-white.png" 
            alt="Liberdade Médica" 
            className="h-12 md:h-16 w-auto mx-auto mb-6"
          />
          <h2 className="text-3xl md:text-5xl font-black mb-4">
            SOBRE A <span className="text-primary">LIBERDADE MÉDICA</span>
          </h2>
          <p className="text-xl md:text-2xl text-primary font-semibold mb-6">
            Formamos médicos prontos para liderar na linha de frente.
          </p>
        </div>
        
        <p className="text-lg md:text-xl text-foreground/80 leading-relaxed text-center">
          A Liberdade Médica é a maior escola de educação prática em urgência e 
          emergência do Brasil. Mais de 3 mil médicos já passaram pelos nossos cursos, 
          imersões e pela nossa Pós-graduação em Paciente Grave, reconhecida pela 
          metodologia aplicada e pelos plantões reais com pacientes. Nosso propósito é claro:{" "}
          <span className="text-primary font-semibold">
            Salvar um milhão de vidas através de nossos alunos.
          </span>{" "}
          Essa jornada começa no Dia da Liberdade Médica.
        </p>
      </div>
    </section>
  );
};

export default AboutLM;
