import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Blog from './components/Blog'
import LoginForm from './components/LoginForm'
import BlogForm from './components/BlogForm'
import Notification from './components/Notification'
import blogsService from './services/blogs'
import loginService from './services/login'

const App = () => {

  const [blogs, setBlogs] = useState([])
  const [user, setUser] = useState(null)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [notificationMessage, setNotificationMessage] = useState(null)

  useEffect(() => {
    console.log('useEffect...')
    blogsService
      .getAll()
      .then(blogs => {
        console.log(blogs)
        setBlogs(blogs)
      })
  }, [])

  useEffect(() => {
    console.log('retreiving logged user if any...')
    const loggedInBlogUser = window.localStorage.getItem('loggedInBlogUser')
    if (loggedInBlogUser) {
      const user = JSON.parse(loggedInBlogUser)
      setUser(user)
      blogsService.setToken(user.token)
    }
  }, [])

  const handleUsernameChange = (event) => {
    setUsername(event.target.value)
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
  }

  const handleLogin = async (event) => {
    event.preventDefault()
    console.log(`logging with ${username} ${password}`)

    try {
      const user = await loginService.login({ username, password })
      window.localStorage.setItem('loggedInBlogUser', JSON.stringify(user))
      loginService.setToken(user.token)
      setUser(user)
      setUsername('')
      setPassword('')

    } catch (exception) {
      setNotificationMessage('Wrong Credentials')
      setTimeout(() => {
        setNotificationMessage(null)
      }, 5000)

    }
  }

  return (
    <div>
      <Header />
      <Notification notificationMessage={notificationMessage} />
      {user === null ?
        <LoginForm
          handleLogin={handleLogin}
          handleUsernameChange={handleUsernameChange}
          handlePasswordChange={handlePasswordChange}
          username={username}
          password={password}
        /> :
        <p>You are logged-in</p>}
      <BlogForm />
      <Blog blogs={blogs} />
      <Footer />
    </div>
  )
}

export default App