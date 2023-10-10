import React, { useState, useRef } from 'react';
import ReCAPTCHA from "react-google-recaptcha";

const ContactForm = () => {
  const [notification, setNotification] = useState(null);
  const recaptchaRef = useRef();

  const handleSubmit = async (event) => {
    event.preventDefault();

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
      } else {
        setNotification("Error sending email.");
      }
    } catch (error) {
      setNotification("Error sending email.");
    }
  };

  return (
    <div>
      {notification && <div>{notification}</div>}



    <div className="form-style-one" data-aos="fade-up">
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
              />
              <div className="help-block with-errors" />
            </div>
          </div>
          {/* End .col-12 */}

          <div className="col-12">
            <div className="input-group-meta form-group mb-50">
              <input
                type="email"
                placeholder="Email Address*"
                name="email"
                required="required"
                data-error="Valid email is required."
              />
              <div className="help-block with-errors" />
            </div>
          </div>
          {/* End .col-12 */}

          <div className="col-12">
            <div className="input-group-meta form-group mb-30">
              <textarea
                placeholder="Your message*"
                name="message"
                required="required"
                data-error="Please, leave us a message."
                defaultValue={""}
              />
              <div className="help-block with-errors" />
            </div>
          </div>
          {/* End .col-12 */}

          <div className="col-12">
            <button className="btn-twentyOne fw-500 tran3s d-block">
              Send Message
            </button>
          </div>
          {/* End .col-12 */}
          
        </div>
        {/* End .row */}
        <div className='hide-everything'>
        <ReCAPTCHA
        ref={recaptchaRef}
        size="invisible"
        sitekey="6LfIZYsnAAAAAEGYUS93Ugn-_mXssjMcKQV7_47Y" /></div>
      
      </form>
      
    </div></div>
  );
};

export default ContactForm;
