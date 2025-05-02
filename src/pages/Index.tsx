
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import About from "@/components/home/About";
import Testimonials from "@/components/home/Testimonials";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const Index = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Testimonials />
        
        {/* Call-to-Action Section */}
        <section className="section bg-freelance-primary text-white">
          <div className="container text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Prêt à lancer votre projet ?</h2>
              <p className="text-lg mb-8">
                Contactez-moi dès aujourd'hui pour discuter de vos besoins et obtenir un devis personnalisé.
              </p>
              <Link to="/contact" className="inline-flex items-center bg-white text-freelance-primary hover:bg-freelance-light px-8 py-3 rounded-md font-medium transition-colors">
                Demander un devis <ArrowRight className="ml-2" size={18} />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Index;
