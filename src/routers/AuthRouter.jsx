import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Login } from '../components/auth/Login';
import { Register } from '../components/auth/Register';
import { NotMatch } from '../components/shared/NotMatch';

export const AuthRouter = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/auth/register" component={Register} />
                <Route exact path="/auth/login" component={Login} />
                <Route path="*" component={NotMatch} />
            </Switch>
        </div>
    )
}


