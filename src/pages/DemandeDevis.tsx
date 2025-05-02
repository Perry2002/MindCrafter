
import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import QuoteForm from "@/components/contact/QuoteForm";

const DemandeDevis = () => {
  return (
    <>
      <Navbar />
      <main>
        {/* Header */}
        <section className="pt-32 pb-16 bg-freelance-dark text-white">
          <div className="container text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Demande de devis</h1>
            <p className="text-lg max-w-2xl mx-auto text-gray-300">
              Transformez chaque événement en souvenir inoubliable avec un son personnalisé signé Mind Crafter.
              Remplissez le formulaire ci-dessous pour obtenir votre devis personnalisé.
            </p>
          </div>
        </section>

        {/* Quote Form Section */}
        <section className="section bg-gray-50 py-16">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <QuoteForm />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default DemandeDevis;
