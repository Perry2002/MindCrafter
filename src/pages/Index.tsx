
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import About from "@/components/home/About";
import Testimonials from "@/components/home/Testimonials";
import { Link } from "react-router-dom";
import { ArrowRight, Music, Headphones } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

// Sample tracks component
const SampleTracks = () => {
  const tracks = [
    { 
      title: "Célébration d'Anniversaire", 
      duration: "3:42", 
      type: "Personnalisée",
      waveColor: "bg-freelance-accent" 
    },
    { 
      title: "Premier Regard (Mariage)", 
      duration: "4:15", 
      type: "Cérémonie",
      waveColor: "bg-freelance-primary" 
    },
    { 
      title: "Bienvenue au Monde (Naissance)", 
      duration: "2:38", 
      type: "Famille",
      waveColor: "bg-purple-400" 
    },
  ];
  
  return (
    <section className="section bg-gray-100">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-freelance-primary font-medium">Nos créations</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Écoutez nos compositions</h2>
          <p className="text-lg text-gray-600">
            Découvrez quelques exemples de nos créations musicales personnalisées
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {tracks.map((track, index) => (
            <div key={index} className="bg-white rounded-lg p-4 mb-4 flex items-center hover:shadow-md transition-shadow">
              <div className="h-12 w-12 bg-freelance-dark/10 rounded-full flex items-center justify-center mr-4">
                <Music size={24} className="text-freelance-primary" />
              </div>
              <div className="flex-grow">
                <h3 className="font-medium text-lg">{track.title}</h3>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-500">{track.type}</span>
                  <span className="h-1 w-1 bg-gray-300 rounded-full"></span>
                  <span className="text-sm text-gray-500">{track.duration}</span>
                </div>
              </div>
              <div className="flex items-center space-x-1 mx-4">
                {[1, 2, 3, 4, 5, 6].map((bar) => (
                  <div 
                    key={bar} 
                    className={`w-1 ${track.waveColor}`}
                    style={{height: `${Math.max(10, Math.min(24, 8 + (bar % 3) * 8))}px`}}
                  ></div>
                ))}
              </div>
              <button className="px-4 py-2 bg-freelance-light text-freelance-primary hover:bg-freelance-primary hover:text-white rounded transition-colors">
                Écouter
              </button>
            </div>
          ))}
          
          <div className="text-center mt-8">
            <Link 
              to="/portfolio" 
              className="inline-flex items-center text-freelance-primary hover:text-freelance-secondary font-medium"
            >
              Voir toutes nos créations <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

const Index = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <SampleTracks />
        <About />
        <Testimonials />
        
        {/* Call-to-Action Section */}
        <section className="section bg-freelance-primary text-white">
          <div className="container text-center">
            <div className="max-w-3xl mx-auto">
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <Headphones size={48} className="relative z-10" />
                  <div className="absolute -inset-4 bg-white/20 rounded-full blur-md animate-pulse"></div>
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Prêt à créer votre musique personnalisée ?</h2>
              <p className="text-lg mb-8">
                Contactez MINDCRAFTER dès aujourd'hui pour discuter de votre projet et recevoir un devis sur mesure.
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
