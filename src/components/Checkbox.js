import React, { useState } from 'react'

const Checkbox = () => {
  const [checked, setChecked] = useState(false)
  return (
    <div>
      <label htmlFor='toggle-checkbox'>Toggle checkbox</label>
      <input onChange={() => setChecked(!checked)} type="checkbox" id="toggle-checkbox" />
      <label htmlFor='another-id'>Another checkbox</label>
         <input onChange={() => setChecked(!checked)} type="checkbox" id="another-id" />
    </div>
  )
}

export default Checkbox
