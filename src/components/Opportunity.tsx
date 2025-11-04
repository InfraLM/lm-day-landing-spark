const Opportunity = () => {
  return (
    <section className="py-16 md:py-24 px-4 bg-card/30">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-3xl md:text-5xl font-black mb-8">
          Você pode aprender em um dia o que a maioria dos médicos{" "}
          <span className="text-primary">demora anos para descobrir.</span>
        </h2>
        
        <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
          A medicina de emergência e urgência não perdoa amadores. Mas o sistema ainda 
          forma médicos despreparados para o que mais mata no Brasil: a instabilidade clínica. 
          No LM DAY, você vai aprender com quem vive a realidade do PS, UTI e sala vermelha — 
          e sair com clareza sobre o caminho prático para dominar essa área que mais precisa 
          de líderes prontos.
        </p>
      </div>
    </section>
  );
};

export default Opportunity;
