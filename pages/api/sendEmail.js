// pages/api/sendEmail.js

import sgMail from '@sendgrid/mail';

export default async (req, res) => {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    console.log("Request body:", req.body);
    console.log("API", process.env.SENDGRID_API_KEY);
    const msg = {
      to: 'info@cannalifenj.com',
      from: email,
      subject: `New message from ${name}`,
      text: message,
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
