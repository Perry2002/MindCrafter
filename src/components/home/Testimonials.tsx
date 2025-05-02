
import { useState } from "react";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    content:
      "Un travail exceptionnel! Notre site e-commerce a connu une augmentation significative des conversions depuis sa refonte. Communication claire et résultats au-delà de nos attentes.",
    author: "Marie Dubois",
    position: "Directrice Marketing, ModeShop",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 2,
    content:
      "Collaboration très professionnelle. Le développement de notre application a été réalisé dans les délais et avec une qualité impressionnante. Je recommande vivement!",
    author: "Thomas Martin",
    position: "CEO, TechStart",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/46.jpg",
  },
  {
    id: 3,
    content:
      "Un vrai expert dans son domaine. La refonte de notre identité visuelle et de notre site web a transformé notre image de marque. Un grand merci pour ce travail minutieux.",
    author: "Sophie Lambert",
    position: "Fondatrice, Eco Solutions",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/65.jpg",
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
    <section className="section bg-freelance-dark text-white" id="testimonials">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ce que disent mes clients</h2>
          <p className="text-lg text-gray-300">
            Découvrez les témoignages de clients satisfaits avec qui j'ai eu le plaisir de collaborer.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-freelance-secondary/30 p-8 md:p-12 rounded-xl">
            <div key={testimonials[currentIndex].id} className="animate-fade-in">
              <div className="flex items-center mb-8">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].author}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
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
