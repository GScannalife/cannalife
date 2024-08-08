// pages/api/subscribe.js
import crypto from 'crypto';
import fetch from 'node-fetch';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { email, firstName, lastName } = req.body;

  if (!email || !email.includes('@')) {
    return res.status(400).json({ error: 'Invalid email address' });
  }

  const MAILCHIMP_API = process.env.MAILCHIMP_API_KEY;
  const MAILCHIMP_SERVER = process.env.MAILCHIMP_SERVER_PREFIX;
  const MAILCHIMP_LIST_ID = process.env.MAILCHIMP_AUDIENCE_ID;

  if (!MAILCHIMP_API || !MAILCHIMP_SERVER || !MAILCHIMP_LIST_ID) {
    console.error('Missing Mailchimp configuration');
    return res.status(500).json({ error: 'Server configuration error: Missing Mailchimp configuration' });
  }

  const auth = Buffer.from(`anystring:${MAILCHIMP_API}`).toString('base64');

  // Create MD5 hash of the email address
  const subscriberHash = crypto.createHash('md5').update(email.toLowerCase()).digest('hex');

  const url = `https://${MAILCHIMP_SERVER}.api.mailchimp.com/3.0/lists/${MAILCHIMP_LIST_ID}/members/${subscriberHash}`;

  try {
    // Check if the subscriber already exists
    const checkResponse = await fetch(url, {
      method: 'GET',
      headers: {
        Authorization: `Basic ${auth}`,
        Accept: 'application/json',
      },
    });

    if (checkResponse.status === 200) {
      // Subscriber already exists
      return res.status(400).json({ error: 'Your email is already registered.' });
    }

    const subscriber = {
      email_address: email,
      status_if_new: 'subscribed',
      merge_fields: {
        FNAME: firstName || '',
        LNAME: lastName || '',
      },
    };

    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Basic ${auth}`,
        Accept: 'application/json',
      },
      body: JSON.stringify(subscriber),
    });

    const data = await response.json();

    if (response.ok) {
      return res.status(200).json({ success: true });
    } else {
      console.error('Mailchimp API error:', data);
      return res.status(response.status).json({ error: data.detail || 'Failed to subscribe user.' });
    }
  } catch (error) {
    console.error('Request failed:', error);
    return res.status(500).json({ error: 'An error occurred while subscribing.' });
  }
}
