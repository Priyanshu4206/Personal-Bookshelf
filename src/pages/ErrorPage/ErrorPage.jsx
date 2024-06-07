import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';
import bgImg from "../../assests/404_page.webp";
const ErrorPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const redirect = setTimeout(() => {
            navigate("/");
        }, 4000);
        return () => clearTimeout(redirect);
    }, [navigate]);

    return (
        <div className="errorpage-container" style={{ backgroundImage: `url(${bgImg})` }}>
            <h1>Redirecting back to Home Page</h1>
        </div>
    );
};

export default ErrorPage;
