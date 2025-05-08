
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Préparation des données pour Resend API
      const response = await fetch('/api/send-contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message
        }),
      });

      if (!response.ok) {
        throw new Error('Une erreur est survenue lors de l\'envoi du message');
      }

      // Notification de succès
      toast({
        title: "Message envoyé !",
        description: "Merci pour votre message. Je vous répondrai dans les plus brefs délais.",
      });
      
      // Réinitialisation du formulaire
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Erreur lors de l'envoi de l'email:", error);
      toast({
        title: "Erreur",
        description: "Une erreur est survenue lors de l'envoi de votre message. Veuillez réessayer ultérieurement.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Nom complet <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-freelance-primary focus:border-transparent"
            placeholder="Votre nom"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-freelance-primary focus:border-transparent"
            placeholder="votre.email@exemple.com"
          />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
          Sujet <span className="text-red-500">*</span>
        </label>
        <select
          id="subject"
          name="subject"
          required
          value={formData.subject}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-freelance-primary focus:border-transparent"
        >
          <option value="">Sélectionnez un sujet</option>
          <option value="devis">Demande de devis</option>
          <option value="information">Demande d'information</option>
          <option value="collaboration">Proposition de collaboration</option>
          <option value="autre">Autre</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          value={formData.message}
          onChange={handleChange}
          rows={6}
          className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-freelance-primary focus:border-transparent"
          placeholder="Décrivez votre projet ou votre demande..."
        />
      </div>

      <div>
        <button
          type="submit"
          disabled={isSubmitting}
          className={`bg-freelance-primary text-white px-6 py-3 rounded-md hover:bg-freelance-primary/90 transition-colors w-full md:w-auto ${
            isSubmitting
              ? "opacity-70 cursor-not-allowed"
              : ""
          }`}
        >
          {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
