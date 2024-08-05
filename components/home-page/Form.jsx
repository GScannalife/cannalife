import { useState, useRef } from 'react';
import Confetti from 'react-confetti';

export default function NewsLetterSignUpForm() {
  const inputRef = useRef(null);
  const [showConfetti, setShowConfetti] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [userExistsMessage, setUserExistsMessage] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const subscribeUser = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: inputRef.current.value,
          firstName: 'FirstName', // Replace with actual first name if available
          lastName: 'LastName',   // Replace with actual last name if available
        }),
      });

      const data = await res.json();

      if (res.ok) {
        setShowConfetti(true);
        setShowSuccessMessage(true);
        setUserExistsMessage(false);
        setShowErrorMessage(false);

        setTimeout(() => {
          setShowConfetti(false);
        }, 3000);
      } else if (res.status === 400 && data.error === "User already exists") {
        setUserExistsMessage(true);
        setShowSuccessMessage(false);
        setShowErrorMessage(false);
      } else {
        setShowErrorMessage(true);
        setShowSuccessMessage(false);
        setUserExistsMessage(false);
      }

      console.log('Response status:', res.status);
      console.log('Response error:', data.error);
    } catch (error) {
      console.error('Error subscribing user:', error);
      setShowErrorMessage(true);
      setShowSuccessMessage(false);
      setUserExistsMessage(false);
    }
  };

  return (
    <div>
      {showConfetti && <Confetti />}

      <form onSubmit={subscribeUser}>
        <input
          type="email"
          id="email-input"
          name="email"
          placeholder="Email"
          ref={inputRef}
          required
          autoCapitalize="off"
          autoCorrect="off"
        />
        <button type="submit" className="tran3s position-absolute" name='subscribe'>
          Subscribe
        </button>
      </form>

      {showSuccessMessage && (
        <div style={{ marginTop: '15px', color: 'green' }}>
          Successfully subscribed! 🎉
        </div>
      )}

      {userExistsMessage && (
        <div style={{ marginTop: '15px', color: 'red' }}>
          This email is already subscribed!
        </div>
      )}

      {showErrorMessage && (
        <div style={{ marginTop: '15px', color: 'red' }}>
          An error occurred. Please try again later.
        </div>
      )}
    </div>
  );
}
