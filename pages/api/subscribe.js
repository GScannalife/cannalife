import axios from 'axios';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end();
  }

  const { email } = req.body;

  try {
    const response = await axios.post(
      'https://api.sendgrid.com/v3/marketing/contacts',
      {
        list_ids: [process.env.SENDGRID_MAILING_ID], // Ensure this is an array
        contacts: [{
          email,
          // ... other contact properties if needed
        }]
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.SENDGRID_API_KEY}`
        }
      }
    );

    // Check for successful response
    if (response.status !== 202) { // SendGrid returns 202 Accepted for this endpoint on success
      console.error('Unexpected response status:', response.status);
      return res.status(500).json({ error: 'Failed to add contact to list.' });
    }

    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error adding contact to SendGrid list:', error.message);
    if (error.response) {
      console.error('Error response data:', error.response.data);
      console.error('Error response status:', error.response.status);
      console.error('Error response headers:', error.response.headers);
    }
    res.status(500).json({ error: 'An error occurred.' });
  }
}
