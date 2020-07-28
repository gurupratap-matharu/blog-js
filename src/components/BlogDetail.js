import React from 'react'

const BlogDetail = ({ blog }) => {
    return (
        <div>
            {blog.title} - {blog.author} - {blog.likes}
        </div>
    )
}

export default BlogDetail