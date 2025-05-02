
import { useState } from "react";
import { ArrowLeft, ArrowRight, Star, Music } from "lucide-react";

const testimonials = [
  {
    id: 1,
    content:
      "La chanson d'anniversaire créée pour ma fille était parfaite ! Elle a été émue aux larmes, et toute la famille a adoré cette attention personnalisée. Un souvenir qui restera gravé à vie.",
    author: "Marie Dubois",
    position: "Chanson d'anniversaire",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 2,
    content:
      "MINDCRAFTER a composé la musique pour notre mariage avec une sensibilité incroyable. Nos invités nous demandent encore qui a créé cette magnifique chanson. Un talent rare !",
    author: "Thomas et Sophie Martin",
    position: "Musique de cérémonie",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/46.jpg",
  },
  {
    id: 3,
    content:
      "Grâce à la formule Brand Boost, notre marque a développé une véritable identité sonore. Les vidéos ont généré un engagement 3 fois supérieur à nos contenus habituels !",
    author: "Alexandre Lambert",
    position: "Fondateur, Eco Solutions",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/65.jpg",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="section bg-gradient-to-br from-freelance-dark to-black text-white" id="testimonials">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-slide-up">
          <span className="text-freelance-primary font-medium">Témoignages</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ce que disent nos clients</h2>
          <p className="text-lg text-gray-300">
            Découvrez les expériences partagées par ceux qui ont fait confiance à nos créations.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-freelance-dark/50 p-8 md:p-12 rounded-xl border border-freelance-primary/20 backdrop-blur-sm">
            <div className="absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/4">
              <div className="text-freelance-primary opacity-10">
                <Music size={120} />
              </div>
            </div>
            
            <div key={testimonials[currentIndex].id} className="animate-fade-in">
              <div className="flex flex-col md:flex-row md:items-center mb-8 gap-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-freelance-primary blur-md rounded-full opacity-30"></div>
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].author}
                    className="w-20 h-20 rounded-full object-cover relative z-10 border-2 border-freelance-primary"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">{testimonials[currentIndex].author}</h4>
                  <p className="text-freelance-accent">{testimonials[currentIndex].position}</p>
                  <div className="flex mt-1">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className="text-yellow-400 fill-yellow-400"
                      />
                    ))}
                  </div>
                </div>
              </div>

              <p className="text-lg md:text-xl italic mb-6">"{testimonials[currentIndex].content}"</p>
            </div>

            <div className="flex justify-between mt-8">
              <button
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-freelance-primary/20 hover:bg-freelance-primary/40 transition-colors"
                aria-label="Témoignage précédent"
              >
                <ArrowLeft size={20} />
              </button>
              
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentIndex ? "bg-freelance-primary" : "bg-gray-400"
                    }`}
                    aria-label={`Témoignage ${index + 1}`}
                  />
                ))}
              </div>
              
              <button
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-freelance-primary/20 hover:bg-freelance-primary/40 transition-colors"
                aria-label="Témoignage suivant"
              >
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
