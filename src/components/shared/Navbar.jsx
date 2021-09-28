import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { AuthNavbar } from './AuthNavbar';
import { logoutAction } from '../../actions/auth-action'

export const Navbar = () => {
    const dispatch = useDispatch();
    const { check } = useSelector(state => state.auth);

    const handleButtonLogout = () => {
        dispatch(logoutAction());
    }

    return (
        <>
        {check === true
            ?
            <header className="_main-header">
                <h1>Crud App</h1>
                <nav className="_header-navbar">
                    <ul className="_header-ul">
                        <li className="_header-li">
                            <Link className="links" to="/crud/create" >Create</Link>
                        </li>
                        <li className="_header-li">
                            <Link className="links" to="/crud/manage" >Manage</Link>
                        </li>
                        <li onClick={handleButtonLogout}>
                            <button 
                                className="_logout-button"
                                
                            >
                                Logout
                            </button>
                        </li>
                    </ul>
                </nav>
            </header>
            :
            <AuthNavbar />
        }
        </>
    )
}


