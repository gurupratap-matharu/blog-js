import React from 'react'
import BlogDetail from './BlogDetail'
import PropTypes from 'prop-types'

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

Blog.propTypes = {
    blogs: PropTypes.array.isRequired
}

export default Blog