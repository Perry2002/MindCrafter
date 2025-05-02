
import { ArrowRight, Music, Headphones, Star } from "lucide-react";
import { Link } from "react-router-dom";

// Audio wave animation component
const AudioWave = () => {
  return (
    <div className="flex items-end space-x-1 h-12">
      {[1, 2, 3, 4, 5, 6].map((item, index) => (
        <div 
          key={index}
          className={`w-1.5 bg-freelance-primary rounded-t-md animate-wave-${index % 4 + 1}`}
          style={{height: `${Math.max(15, Math.min(40, 15 + Math.random() * 30))}px`}}
        ></div>
      ))}
    </div>
  );
};

const Hero = () => {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-freelance-dark to-black text-white">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <div className="flex items-center mb-4 space-x-2">
              <AudioWave />
              <span className="text-freelance-accent font-medium">Créations musicales personnalisées</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Offrez une <span className="text-freelance-primary">musique unique</span> pour chaque moment spécial
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-lg">
              MINDCRAFTER compose des créations sonores sur mesure pour vos événements marquants et donne vie à vos émotions en musique.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/portfolio" className="bg-freelance-primary hover:bg-freelance-secondary text-white font-medium py-3 px-8 rounded-md transition-all duration-300 flex items-center justify-center">
                Découvrir nos créations
                <ArrowRight className="ml-2" size={18} />
              </Link>
              <Link to="/contact" className="border border-freelance-primary text-freelance-primary hover:bg-freelance-primary hover:text-white font-medium py-3 px-8 rounded-md transition-all duration-300 flex items-center justify-center">
                Demander un devis
              </Link>
            </div>
            
            <div className="mt-10 flex items-center space-x-4">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="w-10 h-10 rounded-full border-2 border-freelance-primary overflow-hidden">
                    <img 
                      src={`https://randomuser.me/api/portraits/${item % 2 === 0 ? 'women' : 'men'}/${20 + item}.jpg`} 
                      alt="Client satisfait" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((item) => (
                    <Star key={item} size={16} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-sm text-gray-300">Plus de 200 clients satisfaits</p>
              </div>
            </div>
          </div>
          <div className="animate-fade-in flex justify-center lg:justify-end relative">
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 bg-freelance-primary/20 rounded-lg blur-xl animate-pulse"></div>
              <img 
                src="https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Studio d'enregistrement" 
                className="relative z-10 rounded-lg shadow-xl max-w-full h-auto"
              />
              <div className="absolute bottom-4 right-4 bg-freelance-dark/80 backdrop-blur-sm p-3 rounded-lg z-20 flex items-center space-x-2">
                <div className="relative h-8 w-8 bg-freelance-primary rounded-full flex items-center justify-center">
                  <Music size={16} className="text-white" />
                </div>
                <span className="text-white font-medium">Des créations uniques</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
