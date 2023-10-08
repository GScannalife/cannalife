import React, { useState, useEffect } from "react";
import TextField from '@material-ui/core/TextField';
import { Button, Form } from "react-bootstrap";
import { Mailchimp } from "@mailchimp/mailchimp-marketing";

const SubscribeForm = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check for errors
    if (!email) {
      setError("Please enter your email address.");
      return;
    }

    // Make the API call to Mailchimp
    const client = new Mailchimp({
      apiKey: process.env.MAILCHIMP_API_KEY,
      server: process.env.MAILCHIMP_API_SERVER,
    });
    const response = await client.lists.subscribe({
      list_id: process.env.MAILCHIMP_LIST_ID,
      email_address: email,
    });

    if (response.status === 200) {
      setError(null);
      setEmail("");
    } else {
      setError(response.detail);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <TextField
        id="email"
        label="Email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      {error && <p className="text-danger">{error}</p>}
      <Button variant="primary" type="submit">
        Subscribe
      </Button>
    </Form>
  );
};

export default SubscribeForm;