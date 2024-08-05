// pages/api/subscribe.js
import { NextApiRequest, NextApiResponse } from 'next';
import mailchimp from '@mailchimp/mailchimp_marketing';

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_SERVER_PREFIX, // Your Mailchimp server prefix, e.g., 'us1'
});

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { email } = req.body;

  if (!email || !email.includes('@')) {
    return res.status(400).json({ error: 'Invalid email address' });
  }

  try {
    const response = await mailchimp.lists.batchListMembers(process.env.MAILCHIMP_AUDIENCE_ID, {
      members: [
        {
          email_address: email,
          status: 'subscribed',
        },
      ],
    });

    if (response.errors.length > 0) {
      const existingMemberError = response.errors.find(err => err.error.includes("is already a list member"));
      if (existingMemberError) {
        return res.status(400).json({ error: 'User already exists' });
      }
      console.error('Mailchimp errors:', response.errors);
      return res.status(500).json({ error: 'Failed to subscribe user.' });
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Mailchimp subscription error:', error);
    return res.status(500).json({ error: 'An error occurred while subscribing.' });
  }
}
