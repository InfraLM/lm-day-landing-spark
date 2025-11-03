const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-8 px-4">
      <div className="container mx-auto text-center">
        <div className="mb-4 flex justify-center">
          <img 
            src="/assets/logo-lm-white.png" 
            alt="Liberdade Médica" 
            className="h-8 w-auto"
          />
        </div>
        <p className="text-sm md:text-base text-muted-foreground">
          © 2025 Liberdade Médica. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
