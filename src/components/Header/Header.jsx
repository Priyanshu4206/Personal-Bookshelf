import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';

const Header = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen);
    };

    const closeDrawer = () => {
        setDrawerOpen(false);
    };

    return (
        <>
            <header>
                <div className="header">
                    <h1 className="logo">Logo</h1>
                    <nav className={`nav ${drawerOpen ? 'blur' : ''}`}>
                        <div className={`drawer ${drawerOpen ? 'drawer-visible' : ''}`}>
                            <button className="close-btn" aria-label="Close Drawer" onClick={closeDrawer}>
                                <svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg" aria-label="Close Drawer" role="img">
                                    <path d="M0 0h24v24H0z" fill="none"></path>
                                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
                                </svg>
                            </button>
                            <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""} onClick={closeDrawer}>Home</NavLink>
                            <NavLink to="/myBookShelf" className={({ isActive }) => isActive ? "active" : ""} onClick={closeDrawer}>My Bookshelf</NavLink>
                            <NavLink to="/login" className={({ isActive }) => isActive ? "active" : ""} onClick={closeDrawer}>Login</NavLink>
                            <NavLink to="/signup" className={({ isActive }) => isActive ? "active" : ""} onClick={closeDrawer}>SignUp</NavLink>
                        </div>
                        <div className="blank" onClick={closeDrawer}></div>
                    </nav>
                    <button className="drawer-btn" aria-label="Open Drawer" onClick={toggleDrawer}>
                        <svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg" aria-label="Open Drawer" role="img">
                            <path d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
                        </svg>
                    </button>
                </div>
            </header>
        </>
    );
};

export default Header;
