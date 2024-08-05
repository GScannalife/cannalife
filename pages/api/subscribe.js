// pages/api/subscribe.js
import mailchimp from '@mailchimp/mailchimp_marketing';

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_SERVER_PREFIX, // e.g., 'us1'
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
    const response = await mailchimp.lists.addListMember(process.env.MAILCHIMP_AUDIENCE_ID, {
      email_address: email,
      status: 'subscribed', // Use 'pending' for double opt-in if needed
    });

    return res.status(200).json({ success: true, data: response });
  } catch (error) {
    console.error('Mailchimp subscription error:', error.response?.text || error.message);

    if (error.response) {
      const errorData = JSON.parse(error.response.text);
      if (errorData.title === "Member Exists") {
        return res.status(400).json({ error: 'User already exists' });
      }
    }

    return res.status(500).json({ error: 'An error occurred while subscribing.' });
  }
}
