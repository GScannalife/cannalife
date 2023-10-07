import React, { useState } from "react";

const Form = () => {
  const [email, setEmail] = useState("");
  const MAILCHIMP_ENDPOINT = "https://us9.api.mailchimp.com/3.0/lists/084fc048cd/members";
  const MAILCHIMP_API_KEY = "c000ae6ea8bdb207f60b65ad3f0c0c9f-us9";

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try {
      const response = await fetch(MAILCHIMP_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `apikey ${MAILCHIMP_API_KEY}`
        },
        body: JSON.stringify({
          email_address: email,
          status: "subscribed"
        })
      });

      const data = await response.json();
      if (response.ok) {
        // Handle successful subscription, maybe show a success message
      } else {
        // Handle errors, maybe show the user an error message
        console.error(data);
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
