import React from 'react';
import { Link } from 'react-router-dom';

export const AuthNavbar = () => {
    return (
        <header className="_main-header">
            <h1>Crud App</h1>
            <nav className="_header-navbar">
                <ul className="_header-ul">
                    <li className="_header-li">
                        <Link className="links" to="/auth/register" >Register</Link>
                    </li>
                    <li className="_header-li">
                        <Link className="links" to="/auth/login" >Login</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}


