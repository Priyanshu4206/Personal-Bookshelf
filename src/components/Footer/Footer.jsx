import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="grid">
                <div>
                    <h1 className="logo">Logo</h1>
                </div>
                <div>
                    <h3 className="footer-heading">Quick Links</h3>
                    <ul className="footer-list">
                        <li><Link to="/" className="footer-link">Home</Link></li>
                        <li><Link to="/about" className="footer-link">About</Link></li>
                        <li><Link to="/contact" className="footer-link">Contact</Link></li>
                        <li><Link to="/faq" className="footer-link">FAQ</Link></li>
                    </ul>
                </div>
                <div>
                    <h3 className="footer-heading">Resources</h3>
                    <ul className="footer-list">
                        <li><Link to="/all-posts" className="footer-link">Blog</Link></li>
                        <li><Link to="/" className="footer-link">Guides</Link></li>
                        <li><Link to="/contact" className="footer-link">Support</Link></li>
                        <li><Link to="/policy" className="footer-link">Privacy Policy</Link></li>
                    </ul>
                </div>
                <div>
                    <h3 className="footer-heading">Follow Us</h3>
                    <ul className="footer-list">
                        <li><Link to="/" className="footer-link">Instagram</Link></li>
                        <li><Link to="/" className="footer-link">LinkedIn</Link></li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Priyanshu Agarwal. All rights reserved.</p>
            </div>
        </footer >
    );
};

export default Footer;
