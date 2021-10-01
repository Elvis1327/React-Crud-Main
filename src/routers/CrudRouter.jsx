import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'; 
import { CreateUser } from '../components/crud/CreateUser';
import { ManageUsers } from '../components/crud/ManageUsers';

export const CrudRouter = () => {
    return (
        <div>
            <div>
                <Switch>
                    <Route exact path="/crud/create" component={CreateUser} />
                    <Route exact path="/crud/create/:id" component={CreateUser} />
                    <Route exact path="/crud/manage" component={ManageUsers} />
                    <Redirect to="/crud/manage" />
                </Switch>
            </div>
        </div>
    )
}

 