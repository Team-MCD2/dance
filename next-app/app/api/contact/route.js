import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Tous les champs obligatoires doivent être remplis.' },
        { status: 400 }
      );
    }

    // Simulation / Integration with Resend if RESEND_API_KEY is configured
    console.log('=== Nouveau message de contact reçu ===');
    console.log(`Nom: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Message: ${message}`);
    console.log('=======================================');

    // If using Resend in production:
    // import { Resend } from 'resend';
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: 'contact@tempsdance.fr',
    //   to: 'engy31@hotmail.fr',
    //   subject: `Nouveau message de ${name}`,
    //   text: message,
    // });

    return NextResponse.json(
      { success: true, message: 'Votre message a été envoyé avec succès.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Erreur API Contact :', error);
    return NextResponse.json(
      { error: 'Une erreur est survenue lors de l\'envoi du message.' },
      { status: 500 }
    );
  }
}
