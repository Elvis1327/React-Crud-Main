import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
    return (
        <header className="_main-header">
            <h1>Crud App</h1>
            <nav className="_header-navbar">
                <ul className="_header-ul">
                    <li className="_header-li">
                        <Link className="links" to="/create" >Create</Link>
                    </li>
                    <li className="_header-li">
                        <Link className="links" to="/" >Manage</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}


