import React from 'react';
import { useForm } from '../../hooks/useForm';
import { useDispatch, useSelector } from 'react-redux';
import { loginAction } from '../../actions/auth-action';

export const Login = () => {
    const dispatch = useDispatch();
    const { loading } = useSelector(state => state.spinnerAuth)

    const { handleInputChange, inputsData } = useForm({
        _id: '',
        email: '',
        password: ''
    });
    const { email, password } = inputsData;

    const handleFormSubmit = (e) => {
        e.preventDefault();
        
        dispatch(loginAction(inputsData))
    }

    return (
        <section className="_login-main-container">
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
                        value={email}
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
                        value={password}
                    />
                </div>
                {loading === true
                    ?
                    <div className="_boton-start-loading">
                        <div className="loading-login"></div>
                    </div>
                    :
                    <button type="submit" className="__login-submit">
                        Login
                    </button>
                }
            </form>
        </section>
    )
}



