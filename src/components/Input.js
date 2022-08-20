import React, { useState } from 'react'

const Input = () => {
  const [inputValue, setInputValue] = useState('')
  return (
    <div>
      Input testing: {inputValue}
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </div>
  )
}

export default Input
