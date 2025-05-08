
import { Resend } from 'resend';

// Utilisation d'une clé API factice si aucune n'est fournie
const API_KEY = import.meta.env.VITE_RESEND_API_KEY || 'dummy_key_for_development';
const resend = new Resend(API_KEY);

export async function sendQuoteEmail(formData: {
  fullName: string;
  contact: string;
  deliveryDate: string;
  eventType: string;
  includeMessage: string;
  musicStyles: string;
  urgencyLevel: string;
  deliveryMethod: string;
  additionalInfo?: string;
}) {
  try {
    // Vérifier si nous sommes en mode développement avec une clé factice
    if (API_KEY === 'dummy_key_for_development') {
      console.log('Mode développement : Demande de devis simulée avec les données suivantes :', formData);
      // Simuler un envoi réussi pour le développement
      return { 
        success: true, 
        data: { id: 'dev-mode-quote-id' },
        dev: true 
      };
    }

    const {
      fullName,
      contact,
      deliveryDate,
      eventType,
      includeMessage,
      musicStyles,
      urgencyLevel,
      deliveryMethod,
      additionalInfo = 'Aucune information supplémentaire',
    } = formData;

    const data = await resend.emails.send({
      from: 'Demande de Devis <onboarding@resend.dev>',
      to: ['contact@mindcrafter.fr'],
      subject: `Nouvelle demande de devis: ${eventType}`,
      replyTo: contact.includes('@') ? contact : undefined,
      text: `
        Nom: ${fullName}
        Contact: ${contact}
        Date de livraison: ${deliveryDate}
        Type d'événement: ${eventType}
        Message à inclure: ${includeMessage}
        Styles musicaux: ${musicStyles}
        Niveau d'urgence: ${urgencyLevel}
        Mode de livraison: ${deliveryMethod}
        Informations supplémentaires: ${additionalInfo}
      `,
      html: `
        <h2>Nouvelle demande de devis</h2>
        <p><strong>Nom:</strong> ${fullName}</p>
        <p><strong>Contact:</strong> ${contact}</p>
        <p><strong>Date de livraison:</strong> ${deliveryDate}</p>
        <p><strong>Type d'événement:</strong> ${eventType}</p>
        <p><strong>Message à inclure:</strong> ${includeMessage}</p>
        <p><strong>Styles musicaux:</strong> ${musicStyles}</p>
        <p><strong>Niveau d'urgence:</strong> ${urgencyLevel}</p>
        <p><strong>Mode de livraison:</strong> ${deliveryMethod}</p>
        <p><strong>Informations supplémentaires:</strong> ${additionalInfo}</p>
      `,
    });
    
    return { success: true, data };
  } catch (error) {
    console.error('Resend API error:', error);
    return { success: false, error };
  }
}
