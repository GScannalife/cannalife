import React, { useState } from "react";
import axios from 'axios';  // Import axios

const Form = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("/api/subscribe", {  // Using axios.post
        email: email,
        // You can add more fields here if needed, like first_name and last_name
      });

      if (response.status === 200) {
        // Handle successful addition to SendGrid list, maybe show a success message
      } else {
        console.error("Subscription error:", response.data.error);
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
