import React from 'react'
import BlogDetail from './BlogDetail'
import PropTypes from 'prop-types'
import TogglableBlog from './TogglableBlog'

const Blog = ({ blogs }) => {
    return (
        <div>
            {blogs.map((blog, i) => {
                return (
                    <div>
                        {blog.title}
                        <TogglableBlog key={i} buttonLabel='view' hideLabel='hide'>
                            <BlogDetail key={i} blog={blog} />
                        </TogglableBlog>
                    </div>
                )}
            )}
        </div>
    )
}

Blog.propTypes = {
    blogs: PropTypes.array.isRequired
}

export default Blog