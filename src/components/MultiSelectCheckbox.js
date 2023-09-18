import React, { useState } from 'react'

const MultiSelectCheckbox = ({ options, onChange }) => {
  const [data, setData] = useState(options)
  const handleToggle = (index) => {
    const newData = [...data]
    newData.splice(index, 1, {
      label: data[index].label,
      checked: !data[index].checked,
    })
    setData(newData)
    onChange(newData.filter((x) => x.label))
  }

  return (
    <>
      {data &&
        data.map((item, index) => (
          <label
            htmlFor="checkbox"
            data-test-id="checkbox-labels"
            key={item.label}
          >
            <input
              id="checkbox"
              type="checkbox"
              data-testid="checkbox"
              readOnly
              checked={item.checked || false}
              onChange={() => handleToggle(index)}
            />
            {item.label}
          </label>
        ))}
    </>
  )
}

export default MultiSelectCheckbox
