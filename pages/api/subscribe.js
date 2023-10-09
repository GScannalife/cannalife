// pages/api/addToList.js

import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end();
  }

  const { email } = req.body;

  try {
    // Add the contact to SendGrid
    const response = await sgMail.post('https://api.sendgrid.com/v3/marketing/contacts', {
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        list_ids: process.env.SENDGRID_MAILING_ID,
        contacts: [{
          email,
        }]
      }),
    });

    // Check for successful response
    if (response.statusCode >= 400) {
      return res.status(500).json({ error: 'Failed to add contact to list.' });
    }

    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error adding contact to SendGrid list:', error);
    res.status(500).json({ error: 'An error occurred.' });
  }
}