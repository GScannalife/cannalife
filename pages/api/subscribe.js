// pages/api/subscribe.js
import axios from 'axios';

export default async function handler(req, res) {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }

  try {
    const data = {
      email_address: email,
      status: 'subscribed'
    };

    const MAILCHIMP_API_KEY = process.env.MAILCHIMP_API_KEY;
    const LIST_ID = process.env.MAILCHIMP_LIST_ID;

    const authStr = 'anystring:' + "MAILCHIMP_API_KEY";

    const config = {
      headers: {
        'Authorization': `Basic ${Buffer.from(authStr).toString('base64')}`,
        'Content-Type': 'application/json'
      }
    };

    console.log("Sending data to Mailchimp", data);

    const response = await axios.post(`https://us9.api.mailchimp.com/3.0/lists/${LIST_ID}/members/`, data, config);
    

    console.log("Mailchimp API response", response.data);

    return res.status(200).json({ status: 'subscribed' });
  } catch (error) {
    console.error("Error subscribing to Mailchimp", error.response.data);
    return res.status(500).json({ error: 'Error subscribing to Mailchimp' });
  }
}
