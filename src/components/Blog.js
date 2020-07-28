import React from 'react'
import BlogDetail from './BlogDetail'

const Blog = ({ blogs }) => {
    return (
        <div>
            {blogs.map((blog, i) =>
                <BlogDetail
                    key={i}
                    blog={blog}
                />
            )}
        </div>
    )
}

export default Blog