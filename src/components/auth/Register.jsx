import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup'

import { registerAction } from '../../actions/auth-action';

export const Register = () => {
    const dispatch = useDispatch();
    const { loading } = useSelector(state => state.spinnerAuth);

    return (
        <section className="_register-main-container">
            <Formik
                initialValues={{
                    nombre: "",
                    email: "",
                    password: ""
                }}
                onSubmit={(values) => {
                    dispatch(registerAction(values));
                }}
                validationSchema={yup.object().shape({
                    nombre: yup.string()
                                .min(5, 'The Name needs to have 5 or more letters')
                                .required('Required'),
                    email: yup.string()
                                .min(5, 'The Email needs to have 5 or more letters')
                                .email('The Email needs to have valid characters')
                                .required('Required'),
                    password: yup.string()
                                .min(5, 'the Password needs to have 5 or more characters')
                                .required('Required')

                })}
            >
                <Form>
                    <h1>Register</h1>
                    <div className="inputs">
                        <label>Name</label>
                        <Field 
                            name="nombre"
                            className="input"
                            placeholder="Introduce your Name here"
                            type="text"
                        />
                        <ErrorMessage
                            name='nombre'
                            render={errorMsg => <span className='_create-error-message-form'>{errorMsg}</span>}
                        />
                    </div>
                    <div className="inputs">
                        <label>Email</label>
                        <Field 
                            name="email"
                            className="input"
                            placeholder="Introduce your Name here"
                            type="text"
                        />
                        <ErrorMessage
                            name='email'
                            render={errorMsg => <span className='_create-error-message-form'>{errorMsg}</span>}
                        />
                    </div>
                    <div className="inputs">
                        <label>Password</label>
                        <Field 
                            name="password"
                            className="input"
                            placeholder="Introduce your Name here"
                            type="password"
                        />
                        <ErrorMessage
                            name='password'
                            render={errorMsg => <span className='_create-error-message-form'>{errorMsg}</span>}
                        />
                    </div>
                    {loading === true
                        ?
                        <div className="_register-loading-form">
                            <div className="_register-spinner"></div>
                        </div>
                        :
                        <button type="submit" className="_register-button">Register</button>
                    }
                </Form>
            </Formik>
        </section>
    )
}



