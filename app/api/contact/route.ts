import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { name, email, subject, message } = await req.json();

  try {
    const { error } = await resend.emails.send({
      from: 'SAFYRR Contact <contact@safyrr.tech>', // 👈 gardez ça pour les tests
      to: process.env.EMAIL_TO!,
      replyTo: email,
      subject: `[SAFYRR Contact] ${subject || 'Nouveau message'}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #F5B83D, #FFDF8F); padding: 24px; border-radius: 12px 12px 0 0;">
            <h2 style="margin: 0; color: #1a1a1a;">📩 Nouveau message de contact</h2>
          </div>
          <div style="background: #fff; padding: 24px; border: 1px solid #e5e7eb; border-radius: 0 0 12px 12px;">
            <p><strong>Nom :</strong> ${name}</p>
            <p><strong>Email :</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Sujet :</strong> ${subject || 'Non précisé'}</p>
            <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 16px 0;" />
            <p><strong>Message :</strong></p>
            <p style="background: #fdf6ea; padding: 16px; border-radius: 8px; color: #374151;">
              ${message.replace(/\n/g, '<br/>')}
            </p>
          </div>
          <p style="text-align:center; font-size:12px; color:#9ca3af; margin-top:16px;">
            Envoyé depuis le formulaire de contact SAFYRR
          </p>
        </div>
      `,
    });

    if (error) {
      console.error('❌ Erreur Resend:', error);
      return NextResponse.json({ success: false, error }, { status: 500 });
    }

    console.log('✅ Email envoyé avec succès');
    return NextResponse.json({ success: true });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error('❌ Erreur:', error.message);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}