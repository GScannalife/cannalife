import React, { useState } from "react";
import { Button } from "react-bootstrap";

const SubscribeButton = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send the email to your backend to subscribe the user
  };

  return (
    <Button
      variant="primary"
      onClick={handleSubmit}
      disabled={email === ""}
    >
      Subscribe
    </Button>
  );
};

export default SubscribeButton;