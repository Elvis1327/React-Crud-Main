import React, { useState } from 'react';
import { useForm } from '../../hooks/useForm';
import { useDispatch, useSelector } from 'react-redux';
import { loginAction } from '../../actions/auth-action';
import Validator from 'validator';

export const Login = () => {
    const dispatch = useDispatch();
    const { loading } = useSelector(state => state.spinnerAuth)
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
    }

    const validateForm = () => {
        
        if(email.length < 5){
            SetErrors({msgEmail: 'El Email debe de tener 5 o masa caracteres'})
            return false
        }
        else if(!Validator.isEmail(email)){
            SetErrors({msgEmail: 'El Email debe de tener caracteres Validos'});
            return false;
        }
        if(password.length < 5){
            SetErrors({msgPassword: 'La Password debe de tener 5 o mas caracteres'});
            return false;
        }
        return true;
    };



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
                    {errors?.msgEmail && <p className="_form-errors-login"> {errors.msgEmail}. </p> }
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
                    {errors?.msgPassword && <p className="_form-errors-login"> {errors.msgPassword}. </p>}
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
        </div>
    )
}



