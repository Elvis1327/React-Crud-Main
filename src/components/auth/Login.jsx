import React from 'react';
import { useForm } from '../../hooks/useForm';
import { useDispatch } from 'react-redux';
import { loginAction } from '../../actions/auth-action';

export const Login = () => {
    const dispatch = useDispatch();

    const { handleInputChange, inputsData } = useForm({
        _id: '',
        email: '',
        password: ''
    });

    const handleFormSubmit = (e) => {
        e.preventDefault();
        dispatch(loginAction(inputsData))
    }


    return (
        <div className="_login-main-container">
            <form 
                onSubmit={handleFormSubmit} 
                className="_login-form"
            >
                <h1>Login</h1>
                <div className="inputs">
                    <label>Email</label>
                    <input 
                        type="text" 
                        className="input"
                        autoComplete="off"
                        name="email"
                        placeholder="Introduce Your Email Here"
                        onChange={handleInputChange}
                    />
                </div>
                <div className="inputs">
                    <label>Password</label>
                    <input 
                        type="password" 
                        className="input"
                        autoComplete="off"
                        name="password"
                        placeholder="Introduce your Password Here"
                        onChange={handleInputChange}
                    />
                </div>
                <button type="submit" className="__login-submit">
                    Login
                </button>
            </form>
        </div>
    )
}



