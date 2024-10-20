import React from 'react';
import { useLocation } from 'react-router-dom';

function Submission() {
  const location = useLocation();
  const { name, email, message } = location.state;

  return (
    <div>
      <h2>Thank You, {name}!</h2>
      <p>Your message has been sent.</p>
      <p>Email: {email}</p>
      <p>Message: {message}</p>
    </div>
  );
}

export default Submission;