import React from 'react'
import PropTypes from 'prop-types'

const Notification = ({ notificationMessage }) => {
    if (notificationMessage === null) {
        return null
    }
    return (
        <h1>{notificationMessage}</h1>
    )
}

Notification.propTypes = {
    notificationMessage: PropTypes.string.isRequired
}

export default Notification