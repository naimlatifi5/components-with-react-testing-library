import React, { useState, useEffect } from 'react'
import axios from 'axios'

const ToDos = () => {
  const [toDos, setToDos] = useState([])

  const fetchToDos = async (hasToDosFetched) => {
    try {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/todos',
      )

      if (hasToDosFetched && response.data) {
        setToDos(response.data)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    let hasToDosFetched = true

    fetchToDos(hasToDosFetched)
    return () => {
      // cancel fetching toDos
      hasToDosFetched = false
    }
  }, [])

  return (
    <>
      ToDos:
      <ul data-testid="todo-container">
        {toDos.map((item, index) => (
          <li key={index}>{item.title}</li>
        ))}
      </ul>
    </>
  )
}

export default ToDos
