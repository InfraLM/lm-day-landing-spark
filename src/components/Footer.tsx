const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-8 px-4">
      <div className="container mx-auto text-center">
        <div className="mb-4">
          <span className="text-xl md:text-2xl font-bold">
            Liberdade <span className="text-primary">Médica</span>
          </span>
        </div>
        <p className="text-sm md:text-base text-muted-foreground">
          © 2024 Liberdade Médica. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
