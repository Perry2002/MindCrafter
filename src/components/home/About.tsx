
import { Calendar, CheckCircle, Users } from "lucide-react";

const About = () => {
  return (
    <section className="section bg-white" id="about">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">À propos de moi</h2>
            <p className="text-lg text-gray-600 mb-6">
              Je suis un freelance passionné par la création numérique avec plus de 5 ans d'expérience. 
              Je travaille en étroite collaboration avec mes clients pour transformer leurs idées en solutions numériques efficaces et esthétiques.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="mt-1">
                  <CheckCircle size={18} className="text-freelance-primary" />
                </div>
                <div className="ml-3">
                  <h3 className="font-semibold">Expertise technique</h3>
                  <p className="text-gray-600">
                    Maîtrise des dernières technologies web pour créer des solutions modernes et performantes.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mt-1">
                  <CheckCircle size={18} className="text-freelance-primary" />
                </div>
                <div className="ml-3">
                  <h3 className="font-semibold">Communication transparente</h3>
                  <p className="text-gray-600">
                    Je m'assure que vous soyez informé à chaque étape du projet et que vos attentes soient satisfaites.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mt-1">
                  <CheckCircle size={18} className="text-freelance-primary" />
                </div>
                <div className="ml-3">
                  <h3 className="font-semibold">Engagement qualité</h3>
                  <p className="text-gray-600">
                    Chaque projet est traité avec la plus grande attention aux détails pour garantir un résultat parfait.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="bg-freelance-light p-4 rounded-lg">
                <div className="flex justify-center mb-2 text-freelance-primary">
                  <Calendar size={24} />
                </div>
                <h4 className="font-bold text-2xl">5+</h4>
                <p className="text-gray-600 text-sm">Années d'expérience</p>
              </div>
              
              <div className="bg-freelance-light p-4 rounded-lg">
                <div className="flex justify-center mb-2 text-freelance-primary">
                  <CheckCircle size={24} />
                </div>
                <h4 className="font-bold text-2xl">100+</h4>
                <p className="text-gray-600 text-sm">Projets réalisés</p>
              </div>
              
              <div className="bg-freelance-light p-4 rounded-lg">
                <div className="flex justify-center mb-2 text-freelance-primary">
                  <Users size={24} />
                </div>
                <h4 className="font-bold text-2xl">50+</h4>
                <p className="text-gray-600 text-sm">Clients satisfaits</p>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 animate-fade-in">
            <img 
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Freelance travaillant sur son ordinateur"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
