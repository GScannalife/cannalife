import sgMail from '@sendgrid/mail';

export default async (req, res) => {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

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
