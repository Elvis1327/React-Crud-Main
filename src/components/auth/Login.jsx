import React, { useState } from 'react';
import { useForm } from '../../hooks/useForm';
import { useDispatch } from 'react-redux';
import { loginAction } from '../../actions/auth-action';

export const Login = () => {
    const dispatch = useDispatch();
    const [ errors, SetErrors ] = useState({});

    const { handleInputChange, inputsData } = useForm({
        _id: '',
        email: '',
        password: ''
    });
    const { email, password } = inputsData;

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if(validateForm()){
            SetErrors({})
        }
        
        dispatch(loginAction(inputsData))
    };

    const validateForm = () => {

        if(password.lenght <= 5){
            SetErrors({formPassword: 'La Password debe de tener 5 o mas caracteres'})
            return false
        }

        return true
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
                    {errors?.formPassword && <p> {errors.formPassword} </p>}
                </div>
                <button type="submit" className="__login-submit">
                    Login
                </button>
            </form>
        </div>
    )
}



