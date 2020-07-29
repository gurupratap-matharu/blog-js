import React from 'react'
import PropTypes from 'prop-types'

const LoginForm = ({
    handleLogin,
    handleUsernameChange,
    handlePasswordChange,
    username,
    password
}) => {
    return (
        <div>
            <form onSubmit={handleLogin}>
                <div>
                    username
                    <input type="text" value={username} onChange={handleUsernameChange} />
                </div>
                <div>
                    password
                    <input type="password" value={password} onChange={handlePasswordChange} />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

LoginForm.propTypes = {
    handleLogin: PropTypes.func.isRequired,
    handleUsernameChange: PropTypes.func.isRequired,
    handlePasswordChange: PropTypes.func.isRequired,
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired
}

export default LoginForm