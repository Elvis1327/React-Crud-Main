import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { useForm } from '../../hooks/useForm';
import { createOneUserAction, editOneUserAction, getOneUserAction } from '../../actions/crudActions';

export const CreateUser = () => {

    const dispatch = useDispatch();

    const { users } = useSelector(state => state.crud);

    const { id } = useParams();

    const { inputsData, handleInputChange, setInputsData } = useForm({
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

    const navigate = useNavigate();

    const handleFormSubmit = (e) => {
        e.preventDefault();
        
        if(id){
            dispatch(editOneUserAction(inputsData));
            navigate('/crud/manage');
        }else{
            dispatch(createOneUserAction(inputsData));
            setInputsData({
                id: "",
                nombre: "",
                email: "",
                sueldo: ""
            });
        };
    };

    return (
        <section className="_main-create-container">
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
                </div>
                <div className="inputs">
                    <input 
                        type="text" 
                        className="input"
                        autoComplete="off"
                        name="sueldo"
                        placeholder="introduce your sueldo"
                        value={sueldo}
                        onChange={handleInputChange}
                    />
                </div>
                <button
                    className="_create-button">
                        {id ? 'Edit User' : 'Create User' } 
                </button>
            </form>
        </section>
    );
};



