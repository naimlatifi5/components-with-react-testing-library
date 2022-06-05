import React, { useState } from 'react'

const ButtonStyle = ({ handleClick }) => {
  const [buttonColor, setButtonColor] = useState('red')
  const newButtonColor = buttonColor === 'red' ? 'green' : 'red'

  return (
    <button
      style={{ backgroundColor: buttonColor }}
      type="button"
      onClick={() => handleClick(setButtonColor(newButtonColor))}
    >
      Change button to {newButtonColor}
    </button>
  )
}

export default ButtonStyle
