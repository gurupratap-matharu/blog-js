import React from 'react'
import PropTypes from 'prop-types'

const BlogDetail = ({ blog }) => {

    const likes = blog.likes === undefined ? 0 : blog.likes
    console.log(likes)
    return (
        <div>
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