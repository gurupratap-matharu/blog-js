import React from 'react'
import PropTypes from 'prop-types'

const BlogDetail = ({ blog }) => {
    const blogStyle = {
        paddingTop: 10,
        paddingLeft: 2,
        border: 'solid',
        borderWidth: 1,
        marginBottom: 5
    }
    const likes = blog.likes === undefined ? 0 : blog.likes
    return (
        <div style={blogStyle}>
            <p>{blog.url}</p>
            <p>likes {likes}</p>
            <p>{blog.author}</p>
        </div>
    )
}

BlogDetail.propTypes = {
    blog: PropTypes.object.isRequired
}

export default BlogDetail