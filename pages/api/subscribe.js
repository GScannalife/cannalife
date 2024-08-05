// pages/api/subscribe.js
import mailchimp from '@mailchimp/mailchimp_marketing';

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY, // Your Mailchimp API key
  server: process.env.MAILCHIMP_SERVER_PREFIX, // Your Mailchimp server prefix, e.g., 'us9'
});

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { email } = req.body;

  if (!email || !email.includes('@')) {
    return res.status(400).json({ error: 'Invalid email address' });
  }

  const listId = process.env.MAILCHIMP_AUDIENCE_ID;

  // Debugging: Log the audience ID
  console.log('Audience ID:', listId || 'Missing');

  if (!listId) {
    console.error('Missing Audience ID');
    return res.status(500).json({ error: 'Server configuration error: Missing Audience ID' });
  }

  try {
    const response = await mailchimp.lists.addListMember(listId, {
      email_address: email,
      status: 'subscribed',
    });

    console.log('Mailchimp response:', response);

    return res.status(200).json({ success: true, data: response });
  } catch (error) {
    console.error('Mailchimp subscription error:', error.response?.text || error.message);

    if (error.response) {
      const errorData = JSON.parse(error.response.text);
      console.log('Error details:', errorData);
      if (errorData.title === "Resource Not Found") {
        return res.status(404).json({ error: 'The requested resource could not be found.' });
      }
    }

    return res.status(500).json({ error: 'An error occurred while subscribing.' });
  }
}
