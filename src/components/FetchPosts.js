import React, { useState, useEffect } from 'react'
import axios from 'axios'

const BASE_URL = 'https://jsonplaceholder.typicode.com/'
const fetchData = async (term = 'posts') => {
  const response = await axios.get(`${BASE_URL}${term}`)
  return response?.data
}

const FetchPosts = () => {
  const [posts, setPosts] = useState(null)
  useEffect(() => {
    let mounted = true
    const getPosts = async () => {
      const results = await fetchData()
      if (mounted) {
        // update its state only if the component is mounted
        setPosts(results)
      }
    }
    getPosts()
    // we clean up here
    return () => {
      mounted = false
    }
  }, [])

  if (!posts) {
    return <div>Loading...</div>
  }
  return (
    <ul data-test-id="list">
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  )
}

export default FetchPosts
