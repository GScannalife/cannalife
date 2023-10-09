import React, { useState } from "react";

const Form = () => {
  const [email, setEmail] = useState("");
  const MAILCHIMP_ENDPOINT = "https://us9.api.mailchimp.com/3.0/lists/084fc048cd/members";
  const MAILCHIMP_API_KEY = process.env.MAILCHIMP_API_KEY;

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try {
      const response = await fetch(MAILCHIMP_ENDPOINT, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
          Authorization: `apikey ${MAILCHIMP_API_KEY}`
        },
        body: JSON.stringify({
          email_address: email,
          status: "subscribed"
        })
      });

      if (response.ok) {
        // Handle successful subscription, maybe show a success message
      } else {
        // Since mode is "no-cors", you can't access the response body for errors in a meaningful way
        console.error("Subscription error");
      }
    } catch (error) {
      console.error("There was an error:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Email address"
        required
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <button type="submit" className="tran3s position-absolute">
        Subscribe
      </button>
    </form>
  );
};

export default Form;
