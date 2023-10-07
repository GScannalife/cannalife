// pages/api/checkMailchimpStatus.js
import axios from 'axios';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const MAILCHIMP_API_KEY = process.env.MAILCHIMP_API_KEY;
      const authStr = 'anystring:' + MAILCHIMP_API_KEY;

      const config = {
        headers: {
          'Authorization': `Basic ${Buffer.from(authStr).toString('base64')}`,
          'Content-Type': 'application/json',
        },
      };

      const response = await axios.get(`https://us9.api.mailchimp.com/3.0/`, config);

      return res.status(200).json({ status: 'Mailchimp API is reachable', mailchimpResponse: response.data });
    } catch (error) {
      return res.status(500).json({ status: 'Failed to reach Mailchimp API', error: error.message });
    }
  } else {
    return res.status(405).end();
  }
}
