import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

import { loginAction } from '../../actions/auth-action';

export const Login = () => {
    const dispatch = useDispatch();
    const { loading } = useSelector(state => state.spinnerAuth)


    return (
        <section className="_login-main-container">

            <Formik
                initialValues={{
                    email: '',
                    password: ''
                }}
                onSubmit={(values) => {
                    dispatch(loginAction(values))
                }}
                validationSchema={yup.object().shape({
                    email: yup.string()
                                .min(5, 'The Email needs to have 5 or more letters',)
                                .email('The Email needs to have valid characters')
                                .required('Required'),
                    password: yup.string()
                                .min(5, 'the Password needs to have 5 or more characters')
                                .required('Required')

                })}
            >
                <Form className='_login-form'>
                    <h1>Login</h1>
                    <div className="inputs">
                        <label>Email</label>
                        <Field 
                            name="email"
                            className="input"
                            placeholder="Introduce your Email here"
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
                            placeholder="Introduce your Password here"
                            type="password"
                        />
                        <ErrorMessage 
                            name='password' 
                            render={errorMsg => <span className='_create-error-message-form'>{errorMsg}</span>} 
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
                </Form>
            </Formik>
        </section>
    )
}



