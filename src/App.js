import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Blog from './components/Blog'
import blogsService from './services/blogs'

const App = () => {

  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    console.log('useEffect...')
    blogsService
      .getAll()
      .then(blogs => setBlogs(blogs))
  }, [])

  return (
    <div>
      <Header />
      <Blog blogs={blogs} />
      <Footer />
    </div>
  )
}

export default App