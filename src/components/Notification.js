import React from 'react'

const Notification = ({ notificationMessage }) => {
    if (notificationMessage === null) {
        return null
    }
    return (
        <h1>{notificationMessage}</h1>
    )
}

export default Notification