import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Login } from '../components/auth/Login';
import { Register } from '../components/auth/Register';

export const AuthRouter = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/auth/register" component={Register} />
                <Route exact path="/auth/login" component={Login} />
                <Redirect to="/auth/login" />
            </Switch>
        </div>
    )
}


