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
                    <input type="text" name="" placeholder="likes" />
                </div>
                <button type="submit">Save</button>
            </form>
        </div>
    )
}

export default BlogForm