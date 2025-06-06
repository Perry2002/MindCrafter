
import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactForm from "@/components/contact/ContactForm";
import { Mail, Phone, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Contact = () => {
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
                asChild
                size="lg"
                className="bg-freelance-accent hover:bg-freelance-accent/90 text-white"
              >
                <Link to="/demande-devis">Demander un devis personnalisé</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="section bg-gray-50 py-16">
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
                      <Clock size={24} />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold">Heures de travail</h3>
                      <p className="text-gray-600">Lun - Ven: 9h - 18h</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h2 className="text-2xl font-bold mb-6">Envoyez-moi un message</h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
