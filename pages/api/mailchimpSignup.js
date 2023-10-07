const axios = require('axios');

// Your Mailchimp API key
const apiKey = '6c31fd68c198d2d675926bab9b13b28e';
// The datacenter prefix in your API key (the part after the dash)
const dataCenter = 'us9';
// Your Mailchimp List ID
const listId = '1038406';

// Base Mailchimp API URL
const baseUrl = `https://${dataCenter}.api.mailchimp.com/3.0/`;

async function addSubscriber(email) {
  // Endpoint to add a subscriber to a list
  const url = `${baseUrl}lists/${listId}/members/`;

  // Data payload
  const data = {
    email_address: email,
    status: 'subscribed', // "subscribed" or "pending"
  };

  // Axios config for Mailchimp API
  const config = {
    headers: {
      'Authorization': `apikey ${apiKey}`,
      'Content-Type': 'application/json',
    },
  };

  try {
    // Make the API call to add the subscriber
    const response = await axios.post(url, data, config);
    console.log(`Successfully added subscriber with email ${email}.`);
  } catch (error) {
    if (error.response) {
      console.error(`Error adding subscriber: ${error.response.data.title}`);
    } else {
      console.error(`Error adding subscriber: ${error.message}`);
    }
  }
}

// Test the function by adding an email
addSubscriber('test@example.com');