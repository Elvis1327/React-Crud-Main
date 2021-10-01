import React, { useEffect, useState } from 'react';
import { useForm } from '../../hooks/useForm';
import { useDispatch, useSelector } from 'react-redux';
import { createOneUserAction, editOneUserAction, getOneUserAction } from '../../actions/crudActions';
import { useParams } from 'react-router-dom';
import Validator from 'validator';

export const CreateUser = () => {
    // HOOKS
    const dispatch = useDispatch();
    const { users } = useSelector(state => state.crud);
    const { id } = useParams();
    const [ errors, setErrors ] = useState({});
    const { inputsData, handleInputChange, setInputsData, resetForm } = useForm({
        _id: id,
        nombre: '',
        email: '',
        sueldo: ''
    });
    const { nombre, email, sueldo } = inputsData;

    useEffect(()=> {
        dispatch(getOneUserAction(id));
        const usuario = users.find(user => user._id === id);
        if(id){
            setInputsData({
                _id: id,
                nombre: usuario.nombre,
                email: usuario.email,
                sueldo: usuario.sueldo
            });
        }
    },[id, dispatch, setInputsData, users]);


    // MY FUNCTIONS
    const handleFormSubmit = (e) => {
        e.preventDefault();

        if(validateCrudForm()){
            setErrors({});
        }
        
        if(id){
            dispatch(editOneUserAction(inputsData));
        }else{
            dispatch(createOneUserAction(inputsData));
        };
    };

    const validateCrudForm = () => {
        if(nombre.length < 5){
            setErrors({msgNombre: 'El Nombre debe tener 5 o mas caracteres'});
            return false;
        }
        else if(email.length < 5){
            setErrors({msgEmail: 'El Email debe de tener 5 o mas caracteres'});
            return false;
        }
        else if(!Validator.isEmail(email)){
            setErrors({msgEmail: 'El Email debe de tener caracteres validos'});
            return false;
        }
        else if(sueldo.length < 5){
            setErrors({msgSueldo: 'El sueldo debe de tener 5 o mas numeros'});
            return false;
        }
        else if(!Validator.isNumeric(sueldo)){
            setErrors({msgSueldo: 'El Sueldo debe contener solamente numeros'});
            return false;
        }
        return true;
    }

    return (
        <div className="_main-create-container">
            <form onSubmit={handleFormSubmit}>
                <h1 style={{fontWeight: 'bold', 
                    borderBottom: '1px solid rgba(0, 0, 0, 0.336)'}}>
                        {!id ? 'Create One User' : 'Edit One User'}
                </h1>
                <div className="inputs">
                    <input 
                        type="text" 
                        className="input"
                        autoComplete="off"
                        name="nombre"
                        placeholder="introduce your name"
                        onChange={handleInputChange}
                        value={nombre}
                    />
                    {errors?.msgNombre && <p className="_create-form-validation"> {errors.msgNombre} </p> }
                </div>
                <div className="inputs">
                    <input 
                        type="text" 
                        className="input"
                        autoComplete="off"
                        name="email"
                        placeholder="introduce your email"
                        onChange={handleInputChange}
                        value={email}
                    />
                    {errors?.msgEmail && <p className="_create-form-validation"> {errors.msgEmail} </p> }
                </div>
                <div className="inputs">
                    <input 
                        type="text" 
                        className="input"
                        autoComplete="off"
                        name="sueldo"
                        placeholder="introduce your sueldo"
                        onChange={handleInputChange}
                    />
                    {errors?.msgSueldo && <p className="_create-form-validation"> {errors.msgSueldo} </p> }
                </div>
                <button className="_create-button"> {id ? 'Edit User' : 'Create User' } </button>
            </form>
        </div>
    );
};



