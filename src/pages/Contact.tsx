
import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactForm from "@/components/contact/ContactForm";
import QuoteForm from "@/components/contact/QuoteForm";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const [showQuoteForm, setShowQuoteForm] = useState(false);

  return (
    <>
      <Navbar />
      <main>
        {/* Header */}
        <section className="pt-32 pb-16 bg-freelance-dark text-white">
          <div className="container text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact</h1>
            <p className="text-lg max-w-2xl mx-auto text-gray-300">
              Vous avez un projet en tête ? N'hésitez pas à me contacter pour en discuter.
              Je vous répondrai dans les plus brefs délais.
            </p>

            <div className="mt-8">
              <Button 
                onClick={() => setShowQuoteForm(!showQuoteForm)}
                size="lg"
                className="bg-freelance-accent hover:bg-freelance-accent/90 text-white"
              >
                {showQuoteForm ? "Revenir au formulaire de contact" : "Demander un devis personnalisé"}
              </Button>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="section bg-gray-50">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Contact Information */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Parlons de votre projet</h2>
                <p className="text-gray-600 mb-8">
                  Je suis toujours à la recherche de nouveaux défis et de projets intéressants.
                  N'hésitez pas à me contacter pour discuter de vos besoins ou pour demander un devis personnalisé.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-freelance-light p-3 rounded-full text-freelance-primary">
                      <Mail size={24} />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold">Email</h3>
                      <p className="text-gray-600">contact@mindcrafter.fr</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-freelance-light p-3 rounded-full text-freelance-primary">
                      <Phone size={24} />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold">Téléphone</h3>
                      <p className="text-gray-600">+33 6 12 34 56 78</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-freelance-light p-3 rounded-full text-freelance-primary">
                      <MapPin size={24} />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold">Localisation</h3>
                      <p className="text-gray-600">Paris, France</p>
                      <p className="text-gray-600">Disponible pour les projets à distance</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-freelance-light p-3 rounded-full text-freelance-primary">
                      <Clock size={24} />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold">Heures de travail</h3>
                      <p className="text-gray-600">Lun - Ven: 9h - 18h</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form or Quote Form */}
              <div className="bg-white p-8 rounded-xl shadow-lg">
                {showQuoteForm ? (
                  <QuoteForm />
                ) : (
                  <>
                    <h2 className="text-2xl font-bold mb-6">Envoyez-moi un message</h2>
                    <ContactForm />
                  </>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="h-96 w-full bg-gray-300 mt-16">
          {/* Placeholder pour une carte Google Maps */}
          <div className="w-full h-full flex items-center justify-center bg-freelance-light text-freelance-primary">
            <p className="text-lg font-medium">Carte Google Maps</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
