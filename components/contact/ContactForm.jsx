import React, { useState, useRef } from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import Confetti from 'react-confetti'; // Ensure you've installed this package

const ContactForm = () => {
  const [notification, setNotification] = useState(null);
  const [isLoading, setIsLoading] = useState(false); // Loading spinner state
  const [showConfetti, setShowConfetti] = useState(false); // Confetti state
  const recaptchaRef = useRef();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    const name = event.target.name.value;
    const email = event.target.email.value;
    const message = event.target.message.value;

    const token = await recaptchaRef.current.executeAsync();
    recaptchaRef.current.reset();

    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message, recaptchaToken: token }),
      });

      if (response.ok) {
        setNotification("Email successfully sent!");
        setShowConfetti(true); // Show confetti on success
        setTimeout(() => setShowConfetti(false), 5000); // Hide confetti after 5 seconds
      } else {
        setNotification("Error sending email.");
      }
    } catch (error) {
      setNotification("Error sending email.");
    } finally {
      setIsLoading(false); // Hide loading spinner whether success or fail
    }
  };

  return (
    <div>
      {showConfetti && <Confetti />}
      {isLoading && <div>Loading...</div>} 
      {notification && <div>{notification}</div>}

      <div className="form-style-one" data-aos="fade-up">
        <form onSubmit={handleSubmit}>
          <div className="messages" />
          <div className="row controls">
            {/* ... the rest of your form fields ... */}
            <div className="col-12">
              <button className="btn-twentyOne fw-500 tran3s d-block">
                Send Message
              </button>
            </div>
          </div>
          <div className='hide-everything'>
            <ReCAPTCHA
              ref={recaptchaRef}
              size="invisible"
              sitekey="6LfIZYsnAAAAAEGYUS93Ugn-_mXssjMcKQV7_47Y" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
