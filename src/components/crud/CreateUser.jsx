import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as yup from 'yup';

import { createOneUserAction, editOneUserAction } from '../../actions/crudActions';

export const CreateUser = () => {

    const dispatch = useDispatch();

    const { id } = useParams();

    const navigate = useNavigate();

    return (
        <section className="_main-create-container">
            <Formik
                initialValues={{
                    _id: id || '',
                    nombre: "",
                    email: "",
                    sueldo: ""
                }}
                onSubmit={(values) => {
                    if(values._id){
                        dispatch(editOneUserAction(values));
                        navigate('/crud/manage');
                    }else{
                        dispatch(createOneUserAction(values));
                        
                    };
                }}
                validationSchema={yup.object().shape({
                    nombre: yup.string()
                                .min(5, 'The name needs to have 5 or more letters')
                                .required('Required'),
                    email: yup.string()
                                .email('the Email needs to have valid characters')
                                .required('Required'),
                    sueldo: yup.number()
                            .required('Required')
                })}
            >
                <Form>
                        <h1 className='_create-h1'>
                            {!id ? 'Create One User' : 'Edit One User'}
                        </h1>
                        <div className="inputs">
                            <Field 
                                name="nombre" 
                                className="input" 
                                placeholder="Introduce your Name"
                            />
                            <ErrorMessage 
                                name='nombre' 
                                render={errorMsg => <span className='_create-error-message-form'>{errorMsg}</span>} 
                            />
                        </div>
                        <div className="inputs">
                            <Field 
                                name="email" 
                                className="input" 
                                placeholder="Introduce you Email" 
                            />
                            <ErrorMessage 
                                name='email' 
                                render={errorMsg => <span className='_create-error-message-form'>{errorMsg}</span>} 
                            />
                        </div>
                        <div className="inputs">
                            <Field 
                                name="sueldo" 
                                className="input" 
                                placeholder="Introduce your Salary" 
                            />
                            <ErrorMessage 
                                name='sueldo' 
                                render={errorMsg => <span className='_create-error-message-form'>{errorMsg}</span>} 
                            />
                        </div>
                        <button type="submit"  className="_create-button">Submit</button>
                    </Form>
            </Formik>
        </section>
    );
};



