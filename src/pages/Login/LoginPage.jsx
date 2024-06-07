import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import gif from "../../assests/login_gif.gif";
import "./style.css";

const LoginPage = () => {
    const [user, setUser] = useState({
        email: "",
        password: "",
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser((prev) => ({ ...prev, [name]: value }))
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/");
    }

    return (
        <section className="section-container">
            <div className="login-container">
                <div className="login-container-row">
                    <img src={gif} alt="Animated GIF" />
                    <div>
                        <h2>Sign in to your Account</h2>
                        <p>
                            Don't have an Account?&nbsp;
                            <Link to="/signup">Sign Up</Link>
                        </p>
                    </div>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            placeholder="Email Address"
                            value={user.email}
                            onChange={handleChange}
                            name="email"
                            id="email"
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            placeholder="Password"
                            value={user.password}
                            onChange={handleChange}
                            name="password"
                            id="password"
                            required
                        />
                    </div>
                    <button type="submit">
                        Login
                    </button>
                </form>
            </div>
        </section>
    )
}

export default LoginPage