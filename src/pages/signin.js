import React, { useState } from 'react'
import './signin.css'

export default function SignIn() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    function validateForm() {
        return email && password
    }

    return (
        <div>
            <form>
                <h2>Sign In</h2>
                <input
                    type="email"
                    placeholder="E-mail"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <div className="forgot-password"><a>Forgot your password?</a></div>
                <input
                    className="signin-buttom"
                    type="submit"
                    value="Sign In"
                    disabled={!validateForm()}
                />
            </form>
        </div>
    )
}
