// pages/api/subscribe.js
import crypto from 'crypto';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { email, firstName, lastName } = req.body;

  if (!email || !email.includes('@')) {
    return res.status(400).json({ error: 'Invalid email address' });
  }

  const apiKey = process.env.MAILCHIMP_API_KEY;
  const serverPrefix = process.env.MAILCHIMP_SERVER_PREFIX; // e.g., 'us9'
  const listId = process.env.MAILCHIMP_AUDIENCE_ID;

  // Create MD5 hash of the email address
  const subscriberHash = crypto.createHash('md5').update(email.toLowerCase()).digest('hex');

  // Encode API key for basic auth
  const authString = Buffer.from(`anystring:${apiKey}`).toString('base64');

  const url = `https://${serverPrefix}.api.mailchimp.com/3.0/lists/${listId}/members/${subscriberHash}`;

  const subscriberData = {
    email_address: email,
    status_if_new: 'subscribed',
    merge_fields: {
      FNAME: firstName || '',
      LNAME: lastName || '',
    },
  };

  try {
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Basic ${authString}`,
      },
      body: JSON.stringify(subscriberData),
    });

    const data = await response.json();

    if (response.ok) {
      return res.status(200).json({ success: true, data });
    } else {
      console.error('Mailchimp API error:', data);
      return res.status(response.status).json({ error: data.detail || 'Failed to subscribe user.' });
    }
  } catch (error) {
    console.error('Request failed:', error);
    return res.status(500).json({ error: 'An error occurred while subscribing.' });
  }
}
