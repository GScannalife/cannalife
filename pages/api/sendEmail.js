import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// Define the email sending handler function
const sendEmailHandler = async (req, res) => {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;
    const msg = {
      to: 'info@cannalifenj.com',
      from: 'info@cannalifenj.com',
      subject: `New message from ${name} - ${email}`,
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

// Export the handler function
export default sendEmailHandler;
