import React from 'react';

const ContactForm = () => {
  const handleSubmit = async (event) => {
    event.preventDefault();

    const name = event.target.name.value;
    const email = event.target.email.value;
    const message = event.target.message.value;

    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        console.log('Email sent');
        // You can also add a notification or reset the form here if needed.
      } else {
        console.error('Error sending email');
      }
    } catch (error) {
      console.error('There was an error sending the email', error);
    }
  };

  return (
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
      </form>
    </div>
  );
};

export default ContactForm;
