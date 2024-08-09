import React, { useState, useRef, useEffect } from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import Confetti from 'react-confetti';

const ContactForm = () => {
  const [notification, setNotification] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [cooldown, setCooldown] = useState(0); // Cooldown period in seconds
  const recaptchaRef = useRef();
  const cooldownPeriod = 60; // Cooldown period of 60 seconds

  useEffect(() => {
    let timer;
    if (cooldown > 0) {
      timer = setInterval(() => {
        setCooldown(prev => prev - 1);
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [cooldown]);

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
        setShowConfetti(true);
        setTimeout(() => setShowConfetti(false), 5000);
        setCooldown(cooldownPeriod); // Start cooldown
      } else {
        setNotification("Error sending email.");
      }
    } catch (error) {
      setNotification("Error sending email.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      {isLoading && <div>Sending...</div>}
      {notification && <div>{notification}</div>}

      <div className="form-style-one" data-aos="fade-up">
        {showConfetti && <Confetti />}
        <form onSubmit={handleSubmit}>
          <div className="messages" />
          <div className="row controls">
            <div className="col-12">
              <div className="input-group-meta form-group mb-30">
                <input
                  type="text"
                  placeholder="Your Name*"
                  name="name"
                  required="required"
                  data-error="Name is required."
                  disabled={cooldown > 0}
                />
                <div className="help-block with-errors" />
              </div>
            </div>

            <div className="col-12">
              <div className="input-group-meta form-group mb-50">
                <input
                  type="email"
                  placeholder="Email Address*"
                  name="email"
                  required="required"
                  data-error="Valid email is required."
                  disabled={cooldown > 0}
                />
                <div className="help-block with-errors" />
              </div>
            </div>

            <div className="col-12">
              <div className="input-group-meta form-group mb-30">
                <textarea
                  placeholder="Your message*"
                  name="message"
                  required="required"
                  data-error="Please, leave us a message."
                  disabled={cooldown > 0}
                />
                <div className="help-block with-errors" />
              </div>
            </div>

            <div className="col-12">
              <button
                className="btn-twentyOne fw-500 tran3s d-block"
                disabled={cooldown > 0}
              >
                {cooldown > 0 ? `Wait ${cooldown}s` : 'Send Message'}
              </button>
            </div>
          </div>

          <div className='hide-everything'>
            <ReCAPTCHA
              ref={recaptchaRef}
              size="invisible"
              sitekey="6LfIZYsnAAAAAEGYUS93Ugn-_mXssjMcKQV7_47Y"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
