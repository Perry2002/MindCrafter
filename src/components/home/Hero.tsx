
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-freelance-light to-white">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-freelance-dark leading-tight mb-6">
              Solutions <span className="text-freelance-primary">créatives</span> pour votre entreprise
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg">
              Freelance expert en développement web, design UX/UI et marketing digital pour donner vie à vos projets.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/portfolio" className="btn-primary flex items-center justify-center">
                Voir mes réalisations
                <ArrowRight className="ml-2" size={18} />
              </Link>
              <Link to="/contact" className="btn-outline flex items-center justify-center">
                Me contacter
              </Link>
            </div>
          </div>
          <div className="animate-fade-in flex justify-center lg:justify-end">
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Freelance au travail" 
              className="rounded-lg shadow-xl max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
