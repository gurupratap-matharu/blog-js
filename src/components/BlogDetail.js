import React from 'react'
import PropTypes from 'prop-types'

const BlogDetail = ({ blog }) => {
    return (
        <div>
            {blog.title} - {blog.author} - {blog.likes}
        </div>
    )
}

BlogDetail.propTypes = {
    blog: PropTypes.object.isRequired
}

export default BlogDetail