import sgMail from '@sendgrid/mail';
import fetch from 'node-fetch';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).send('Method not allowed');
  }

  try {
    await verifyRecaptcha(req.body.recaptchaToken);
  } catch (error) {
    console.error("reCAPTCHA verification failed:", error);
    return res.status(400).send('reCAPTCHA verification failed.');
  }

  try {
    await sendEmail(req.body);
    res.status(200).send('Email sent');
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).send('Error sending email');
  }
};

async function verifyRecaptcha(recaptchaToken) {
  const verificationURL = `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_V3_SECRET_KEY}&response=${recaptchaToken}`;
  const recaptchaResponse = await fetch(verificationURL, {
    method: 'POST',
  });
  const recaptchaData = await recaptchaResponse.json();

  if (!recaptchaData.success || recaptchaData.score < 0.5) {
    throw new Error("reCAPTCHA verification failed");
  }
}

async function sendEmail({ name, email, message }) {
  const msg = {
    to: 'info@cannalifenj.com',
    from: 'info@cannalifenj.com',
    subject: `New message from ${name} - ${email}`,
    text: message,
  };

  await sgMail.send(msg);
}
