
import { Resend } from 'resend';

const resend = new Resend(import.meta.env.VITE_RESEND_API_KEY);

export async function sendContactEmail(formData: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) {
  try {
    const { name, email, subject, message } = formData;

    const data = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>', // Utilisez votre domaine vérifié dans Resend
      to: ['contact@mindcrafter.fr'], // L'adresse email de destination
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
