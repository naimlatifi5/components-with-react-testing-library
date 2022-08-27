import React, { useState } from 'react'

const Checkbox = () => {
  const [checked, setChecked] = useState(false)
  return (
    <div>
      <label>Checkbox</label>
      <input onChange={() => setChecked(!checked)} type="checkbox" />
    </div>
  )
}

export default Checkbox
