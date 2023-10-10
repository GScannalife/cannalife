import sgMail from '@sendgrid/mail';
import fetch from 'node-fetch';

export default async (req, res) => {
  if (req.method === 'POST') {
    const { name, email, message, recaptchaToken } = req.body;

    // Verify reCAPTCHA token
    const verificationURL = `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_V3_SECRET_KEY}&response=${recaptchaToken}`;
    const recaptchaResponse = await fetch(verificationURL, {
      method: 'POST',
    });
    const recaptchaData = await recaptchaResponse.json();

    if (!recaptchaData.success || recaptchaData.score < 0.5) {
      res.status(400).send('reCAPTCHA verification failed.');
      return;
    }

    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    const msg = {
      to: 'info@cannalifenj.com',
      from: 'info@cannalifenj.com',
      subject: `New message from ${name} - ${email}`,
      text: message,
      email,
    };

    try {
      await sgMail.send(msg);
      res.status(200).send('Email sent');
    } catch (error) {
      console.error(error);
      res.status(500).send('Error sending email');
    }
  } else {
    res.status(405).send('Method not allowed');
  }
};