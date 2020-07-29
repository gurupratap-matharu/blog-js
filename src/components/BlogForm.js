import React, { useState } from 'react'
import PropTypes from 'prop-types'

const BlogForm = ({ createBlog }) => {

    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [url, setUrl] = useState('')

    const handleTitleChange = (event) => {
        setTitle(event.target.value)
    }
    const handleAuthorChange = (event) => {
        setAuthor(event.target.value)
    }

    const handleUrlChange = (event) => {
        setUrl(event.target.value)
    }

    const addBlog = (event) => {
        event.preventDefault()
        createBlog({
            title: title,
            author: author,
            url:url
        })
        setTitle('')
        setAuthor('')
        setUrl('')
    }
    return (
        <div>
            <form onSubmit={addBlog}>
                <div>
                    <input type="text" name="" placeholder="title" value={title} onChange={handleTitleChange} />
                </div>
                <div>
                    <input type="text" name="" placeholder="author" value={author} onChange={handleAuthorChange} />
                </div>
                <div>
                    <input type="url" name="" placeholder="url" value={url} onChange={handleUrlChange} />
                </div>
                <button type="submit">Create</button>
            </form>
        </div>
    )
}

BlogForm.propTypes = {
    createBlog: PropTypes.func.isRequired,
}

export default BlogForm