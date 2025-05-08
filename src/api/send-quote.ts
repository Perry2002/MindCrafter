
import { Resend } from 'resend';

const resend = new Resend(import.meta.env.VITE_RESEND_API_KEY);

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
      from: 'Demande de Devis <onboarding@resend.dev>', // Utilisez votre domaine vérifié dans Resend
      to: ['contact@mindcrafter.fr'], // L'adresse email de destination
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
