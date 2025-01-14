import React, { useState } from 'react';
import "./App.css"
function Input() {
  const [message, setMessage] = useState('');

  const handleInput = (event) => {
    const value = parseInt(event.target.value, 10);

    if (isNaN(value)) {
      setMessage('');
      return;
    }

    if (value < 0) {
      setMessage('Please Enter a Positive Value');
    } else if (value % 2 === 0) {
      setMessage(`Next 3 Even Numbers: ${value + 2}, ${value + 4}, ${value + 6}`);
    } else {
      setMessage(`Next 3 Odd Numbers: ${value + 2}, ${value + 4}, ${value + 6}`);
    }
  };

  return (
    <div className='container'>
      <h1>Input Checker</h1>
      <input
        type="number"
        placeholder="Enter a number"
        onChange={handleInput}
      />
      <p className="message">{message}</p>
    </div>
  );
}

export default Input;
