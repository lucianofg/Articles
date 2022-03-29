import React, { useState } from 'react'
import './sign-in.css'
import Logo from "../components/logo";

export default function SignIn() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    function validateForm() {
        return email && password
    }

    return (
        <div>
            <form>
                <Logo />
                <h2>Sign In</h2>
                <input
                    className="signin-input"
                    type="email"
                    placeholder="E-mail"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    className="signin-input"
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
