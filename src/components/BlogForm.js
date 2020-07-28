import React from 'react'

const BlogForm = (props) => {
    return (
        <div>
            <form onSubmit={props.handleBlogCreate}>
                <div>
                    <input type="text" name="" placeholder="title" onChange={props.handleTitleChange} />
                </div>
                <div>
                    <input type="text" name="" placeholder="author" onChange={props.handleAuthorChange} />
                </div>
                <div>
                    <input type="url" name="" placeholder="url" onChange={props.handleUrlChange} />
                </div>
                <button type="submit">Create</button>
            </form>
        </div>
    )
}

export default BlogForm