import { useState } from "react";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div>
            <h2>Admin Sign In</h2>
            <p>Working United in the Community to Better Healthcare</p>
            <p>
                <label htmlFor="user_login">Email Address or Username</label>
                <input input="text" value={email} onChange={(e) => setEmail(e.target.value)} />
            </p>
            <p>
                <label htmlFor="user_pass">Password</label>
                <input input="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </p>
            <p>
                <a href="#">Forgot Password?</a>
            </p>
            <p>
                <button>Sign in</button>
            </p>
        </div>
    )
}

export default Login