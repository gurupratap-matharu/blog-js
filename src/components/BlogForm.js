import React from 'react'

const BlogForm = () => {
    return (
        <div>
            <form>
                <div>
                    <input type="text" name="" placeholder="title" />
                </div>
                <div>
                    <input type="text" name="" placeholder="author" />
                </div>
                <div>
                    <input type="url" name="" placeholder="url" />
                </div>
                <button type="submit">Create</button>
            </form>
        </div>
    )
}

export default BlogForm