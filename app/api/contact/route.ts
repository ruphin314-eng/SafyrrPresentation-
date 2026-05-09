import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  try {
    const { name, email, subject, message } = await req.json();

    // Validation basique
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Les champs nom, email et message sont obligatoires.' },
        { status: 400 }
      );
    }

    // Configuration SMTP Hostinger
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,       // smtp.hostinger.com
      port: Number(process.env.SMTP_PORT), // 465
      secure: true,                        // SSL sur port 465
      auth: {
        user: process.env.SMTP_USER,       
        pass: process.env.SMTP_PASS,       // mot de passe boîte mail
      },
    });

    console.log('SMTP_USER utilisé :', process.env.SMTP_USER);
    console.log('SMTP_PASS chargé :', process.env.SMTP_PASS ? 'OUI' : 'NON ou vide');

    // Email reçu dans ta boîte
    await transporter.sendMail({
      from: `"SAFYRR Contact" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER, // ta boîte qui reçoit
      replyTo: email,            // répondre directement au client
      subject: subject ? `[SAFYRR] ${subject}` : `[SAFYRR] Nouveau message de ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #f5b83d; border-radius: 12px;">
          <h2 style="color: #f5b83d; margin-bottom: 24px;">📩 Nouveau message via le formulaire de contact</h2>

          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; font-weight: bold; color: #374151; width: 140px;">Nom :</td>
              <td style="padding: 10px 0; color: #4B5563;">${name}</td>
            </tr>
            <tr style="background: #fdf6ea;">
              <td style="padding: 10px; font-weight: bold; color: #374151;">Email :</td>
              <td style="padding: 10px; color: #4B5563;">
                <a href="mailto:${email}" style="color: #f5b83d;">${email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 10px 0; font-weight: bold; color: #374151;">Sujet :</td>
              <td style="padding: 10px 0; color: #4B5563;">${subject || '—'}</td>
            </tr>
          </table>

          <div style="margin-top: 20px; padding: 16px; background: #fdf6ea; border-radius: 8px; border-left: 4px solid #f5b83d;">
            <p style="font-weight: bold; color: #374151; margin-bottom: 8px;">Message :</p>
            <p style="color: #4B5563; white-space: pre-wrap; line-height: 1.6;">${message}</p>
          </div>

          <p style="margin-top: 24px; font-size: 12px; color: #9CA3AF;">
            Ce message a été envoyé depuis le formulaire de contact de safyrr.tech
          </p>
        </div>
      `,
    });

    // Email de confirmation au client
    await transporter.sendMail({
      from: `"SAFYRR" <${process.env.SMTP_USER}>`,
      to: email,
      subject: 'Nous avons bien reçu votre message – SAFYRR',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #f5b83d; border-radius: 12px;">
          <h2 style="color: #f5b83d;">Merci, ${name} ! ✅</h2>
          <p style="color: #4B5563; line-height: 1.6;">
            Nous avons bien reçu votre message et nous vous répondrons dans les plus brefs délais.
          </p>
          <div style="margin: 20px 0; padding: 16px; background: #fdf6ea; border-radius: 8px;">
            <p style="font-weight: bold; color: #374151; margin-bottom: 4px;">Votre message :</p>
            <p style="color: #6B7280; font-style: italic;">${message}</p>
          </div>
          <p style="color: #4B5563;">À très bientôt,<br/><strong>L'équipe SAFYRR</strong></p>
          <hr style="border: none; border-top: 1px solid #f5e6c8; margin: 20px 0;" />
          <p style="font-size: 12px; color: #9CA3AF;">
            📍 Bonamoussadi, Douala, Cameroun &nbsp;|&nbsp; 📞 +237 688 70 43 82
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Erreur envoi email:', error);
    return NextResponse.json(
      { error: "Échec de l'envoi. Veuillez réessayer plus tard." },
      { status: 500 }
    );
  }
}