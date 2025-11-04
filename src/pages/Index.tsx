import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Opportunity from "@/components/Opportunity";
import Speakers from "@/components/Speakers";
import Tickets from "@/components/Tickets";
import TargetAudience from "@/components/TargetAudience";
import Testimonials from "@/components/Testimonials";
import AboutLM from "@/components/AboutLM";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Opportunity />
      <Speakers />
      <Tickets />
      <TargetAudience />
      <Testimonials />
      <AboutLM />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
