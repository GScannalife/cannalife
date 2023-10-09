import { useState, useRef } from 'react';
import Confetti from 'react-confetti';

export default function NewsLetterSignUpForm() {
  const inputRef = useRef(null);
  const [showConfetti, setShowConfetti] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [userExistsMessage, setUserExistsMessage] = useState(false);

  const subscribeUser = async (e) => {
    e.preventDefault();

    const res = await fetch('/api/subscribeUser', {
      body: JSON.stringify({
        email: inputRef.current.value,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });

    const data = await res.json(); // Retrieve the JSON data from the response

    if (res.status === 200 || res.status === 201) {
        setShowConfetti(true);
        setShowSuccessMessage(true);

        setTimeout(() => {
          setShowConfetti(false);
        }, 3000);
    } else if (res.status === 400 && data.error === "User already exists") {
        setUserExistsMessage(true);
     
    }
    console.log(res.status)
    console.log(data.error)
  };

  return (
    <div>
      {/* Show confetti */}
      {showConfetti && <Confetti />}

      <form onSubmit={subscribeUser}>
        <input
          type="email"
          id="email-input"
          name="email"
          placeholder="your best email"
          ref={inputRef}
          required
          autoCapitalize="off"
          autoCorrect="off"
        />
        <button type="submit" className="tran3s position-absolute" name='subscribe'>
          Subscribe
        </button>
      </form>

      {/* Success notification */}
      {showSuccessMessage && (
        <div style={{ marginTop: '15px', color: 'green' }}>
          Successfully subscribed! 🎉
        </div>
      )}

      {/* User exists notification */}
      {userExistsMessage && (
        <div style={{ marginTop: '15px', color: 'red' }}>
          This email is already subscribed!
        </div>
      )}
    </div>
  );
}
