import React, { useState } from 'react';
import gif from "../../assests/signup_gif.gif";
import { Link, useNavigate } from "react-router-dom";
import './style.css';

const Signup = () => {
    const [user, setUser] = useState({
        fname: "",
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
            <div className="signup-container">
                <img src={gif} alt="Animated GIF" />
                <div>
                    <h2>Sign up to Create Account</h2>
                    <p>
                        Already have an Account?&nbsp;
                        <Link to="/login">Sign In</Link>
                    </p>
                    <form onSubmit={handleSubmit}>
                        <div className="input-group ">
                            <label htmlFor="fname">Full Name</label>
                            <input
                                type="text"
                                placeholder="Full Name"
                                id="fname"
                                value={user.fname}
                                onChange={handleChange}
                                name="fname"
                                required
                            />
                        </div>
                        <div className="input-group ">
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
                            Create Account
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Signup;
