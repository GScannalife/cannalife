// api/subscribe.js
const axios = require('axios');

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).end();
  }

  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }

  const API_KEY = process.env.MAILCHIMP_API_KEY;
  const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;
  const REGION = API_KEY.split('-')[1];
  const URL = `https://${REGION}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}`;

  const data = {
    email_address: email,
    status: 'subscribed'
  };

  try {
    await axios.post(URL, data, {
      headers: {
        Authorization: `apikey ${API_KEY}`,
        'Content-Type': 'application/json'
      }
    });
    res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
