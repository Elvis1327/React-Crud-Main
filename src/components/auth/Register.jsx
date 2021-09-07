import React from 'react';
import { useDispatch } from 'react-redux';
import { registerAction } from '../../actions/auth-action';
import { useForm } from '../../hooks/useForm';

export const Register = () => {
    const dispatch = useDispatch();

    const { handleInputChange, inputsData } = useForm({
        _id: '',
        nombre: '',
        email: '',
        password: ''
    })

    const handleFormSubmit = (e) => {
        e.preventDefault();
        dispatch(registerAction(inputsData))
    
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
                </div>
                <button type="submit" className="_register-button">Register</button>
            </form>
        </div>
    )
}



