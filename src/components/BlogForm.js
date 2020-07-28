import React from 'react'
import PropTypes from 'prop-types'

const BlogForm = ({
    handleBlogCreate,
    handleTitleChange,
    handleAuthorChange,
    handleUrlChange
}) => {
    return (
        <div>
            <form onSubmit={handleBlogCreate}>
                <div>
                    <input type="text" name="" placeholder="title" onChange={handleTitleChange} />
                </div>
                <div>
                    <input type="text" name="" placeholder="author" onChange={handleAuthorChange} />
                </div>
                <div>
                    <input type="url" name="" placeholder="url" onChange={handleUrlChange} />
                </div>
                <button type="submit">Create</button>
            </form>
        </div>
    )
}

BlogForm.propTypes = {
    handleBlogCreate: PropTypes.func.isRequired,
    handleTitleChange: PropTypes.func.isRequired,
    handleAuthorChange: PropTypes.func.isRequired,
    handleUrlChange: PropTypes.func.isRequired
}

export default BlogForm