import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerAction } from '../../actions/auth-action';
import { useForm } from '../../hooks/useForm';
import Validator from 'validator';

export const Register = () => {
    const dispatch = useDispatch();
    const [ errors, setErrors ] = useState({});
    const { handleInputChange, inputsData } = useForm({
        _id: '',
        nombre: '',
        email: '',
        password: ''
    });
    const { nombre, email, password } = inputsData;

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if(validateFormRegister()){
            setErrors({});
        }
        dispatch(registerAction(inputsData));;
    };

    const validateFormRegister = () => {
        if(nombre.length < 5){
            setErrors({msgNombre: 'El Nombre debe de tener 5 o mas caracteres'});
            return false;
        }
        else if(!Validator.isEmail()){
            setErrors({msgEmail: 'El Email debe de tener caracteres validos'});
            return false;
        }
        else if(email.length < 5){
            setErrors({msgEmail: 'El Email debe de tener 5 o mas caracteres'});
            return false;
        }
        else if(password.length){
            setErrors({msgPassword: 'Las Password debe de tener  5 o mas caracteres'});
            return false;
        }
        return true;
    }

    return (
        <div className="_register-main-container">
            <form onSubmit={handleFormSubmit} className="_register-form">
                <h1>Register</h1>
                <div className="inputs">
                    <label>Nombre</label>
                    <input 
                        type="text"
                        autoComplete="off"
                        className="input"
                        placeholder="Introduce your Name here"
                        name="nombre"
                        onChange={handleInputChange}
                    />
                    {errors?.msgNombre && <p className="_errors-form-register"> {errors.msgNombre} </p> }
                </div>
                <div className="inputs">
                    <label>Email</label>
                    <input 
                        type="text"
                        autoComplete="off"
                        className="input"
                        placeholder="Introduce your Name here"
                        name="email"
                        onChange={handleInputChange}
                    />
                    {errors?.msgEmail && <p className="_errors-form-register"> {errors.msgEmail} </p> }
                </div>
                <div className="inputs">
                    <label>Password</label>
                    <input 
                        type="password"
                        autoComplete="off"
                        className="input"
                        placeholder="Introduce your Name here"
                        name="password"
                        onChange={handleInputChange}
                    />
                    {errors?.msgPassword && <p className="_errors-form-register"> {errors.msgPassword} </p> }
                </div>
                <button type="submit" className="_register-button">Register</button>
            </form>
        </div>
    )
}



