
import { Resend } from 'resend';

// Utilisation d'une clé API factice si aucune n'est fournie
const API_KEY = import.meta.env.VITE_RESEND_API_KEY || 'dummy_key_for_development';
const resend = new Resend(API_KEY);

export async function sendContactEmail(formData: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) {
  try {
    // Vérifier si nous sommes en mode développement avec une clé factice
    if (API_KEY === 'dummy_key_for_development') {
      console.log('Mode développement : Email simulé avec les données suivantes :', formData);
      // Simuler un envoi réussi pour le développement
      return { 
        success: true, 
        data: { id: 'dev-mode-email-id' },
        dev: true 
      };
    }

    const { name, email, subject, message } = formData;

    const data = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: ['contact@mindcrafter.fr'],
      subject: `Nouveau message de contact: ${subject}`,
      replyTo: email,
      text: `
        Nom: ${name}
        Email: ${email}
        Sujet: ${subject}
        
        Message:
        ${message}
      `,
      html: `
        <h2>Nouveau message de contact</h2>
        <p><strong>Nom:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Sujet:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });
    
    return { success: true, data };
  } catch (error) {
    console.error('Resend API error:', error);
    return { success: false, error };
  }
}
