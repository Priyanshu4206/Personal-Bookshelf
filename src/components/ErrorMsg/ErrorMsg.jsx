import React from 'react'
import './style.css';
import errorIlustration from "../../assests/error_illustration.jpg";
const ErrorMsg = ({ msg }) => {
    return (
        <div className="custom-error-box">
            <img src={errorIlustration} alt="Error Illustration" />
            <p className="custom-error-message">{msg}</p>
        </div>
    )
}

export default ErrorMsg