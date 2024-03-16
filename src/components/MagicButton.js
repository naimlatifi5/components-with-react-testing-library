import React, { useState } from 'react';

const MagicButton = ({ handleOnClickProp }) => {
  const [buttonColor, setButtonColor] = useState('red');
  const [text, setText] = useState('Login');

  const handleOnClickLocal = () => {
    setButtonColor('green');
    setText('Welcome to the app!');
    handleOnClickProp?.();
  };
  return (
    <button
      data-test-id="magic-button"
      style={{ backgroundColor: buttonColor }}
      type="button"
      onClick={handleOnClickLocal}
    >
      {text}
    </button>
  );
};

export default MagicButton;
