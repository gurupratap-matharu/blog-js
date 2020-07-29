import React, { useState, useEffect, useRef } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Blog from './components/Blog'
import LoginForm from './components/LoginForm'
import BlogForm from './components/BlogForm'
import Notification from './components/Notification'
import Togglable from './components/Togglable'
import blogsService from './services/blogs'
import loginService from './services/login'

const App = () => {

    const [blogs, setBlogs] = useState([])
    const [user, setUser] = useState(null)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [notificationMessage, setNotificationMessage] = useState(null)

    const blogFormRef = useRef()

    useEffect(() => {
        console.log('retreiving logged user if any...')
        const loggedInBlogUser = window.localStorage.getItem('loggedInBlogUser')
        if (loggedInBlogUser) {
            const user = JSON.parse(loggedInBlogUser)
            setUser(user)
            blogsService.setToken(user.token)

            blogsService
                .getAll()
                .then(blogs => {
                    console.log(blogs)
                    setBlogs(blogs)
                })
        }
    }, [])

    const handleUsernameChange = (event) => {
        setUsername(event.target.value)
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value)
    }

    const createBlog = async (newBlog) => {
        blogFormRef.current.toggleVisibility()
        console.log('creating blog with details', newBlog)

        try {
            const createdBlog = await blogsService.create(newBlog)
            console.log('createdBlog', createdBlog)
            setNotificationMessage(`Blog created! ${createdBlog.title} ${createdBlog.author} ${createdBlog.url}`)
            setTimeout(() => {
                setNotificationMessage(null)
            }, 5000)

        } catch (exception) {
            console.log(exception)
            setNotificationMessage('Something is broken!')
            setTimeout(() => {
                setNotificationMessage(null)
            }, 5000)
        }
    }

    const handleLogin = async (event) => {
        event.preventDefault()
        console.log(`logging with ${username} ${password}`)

        try {
            const user = await loginService.login({ username, password })
            window.localStorage.setItem('loggedInBlogUser', JSON.stringify(user))
            blogsService.setToken(user.token)
            setUser(user)
            setUsername('')
            setPassword('')

        } catch (exception) {
            console.log(exception)
            setNotificationMessage('Wrong username of password')
            setTimeout(() => {
                setNotificationMessage(null)
            }, 5000)

        }
    }

    const handleLogout = () => {
        console.log('logging out...')
        window.localStorage.removeItem('loggedInBlogUser')
        blogsService.setToken(null)
        setUser(null)
        setUsername('')
        setPassword('')
    }
    return (
        <div>
            <Header />
            <Notification notificationMessage={notificationMessage} />
            {user === null ?
                <div>
                    <p>Please login</p>
                    <LoginForm
                        handleLogin={handleLogin}
                        handleUsernameChange={handleUsernameChange}
                        handlePasswordChange={handlePasswordChange}
                        username={username}
                        password={password}
                    />
                </div> :
                <div>
                    <div>
                        {user.name} logged-in
                        <button type="submit" onClick={handleLogout}>Logout</button>
                    </div>
                    <Togglable buttonLabel='Add' ref={blogFormRef}>
                        <BlogForm createBlog={createBlog} />
                    </Togglable>
                    <Blog blogs={blogs} />
                </div>}
            <Footer />
        </div>
    )
}

export default App