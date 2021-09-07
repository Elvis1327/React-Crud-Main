import React from 'react';
import { Route, Switch } from 'react-router-dom'; 
import { CreateUser } from '../components/crud/CreateUser';
import { ManageUsers } from '../components/crud/ManageUsers';

export const CrudRouter = () => {
    return (
        <div>
            <div>
                <Switch>
                    <Route exact path="/create" component={CreateUser} />
                    <Route exact path="/create/:id" component={CreateUser} />
                    <Route exact path="/" component={ManageUsers} />
                </Switch>
            </div>
        </div>
    )
}

 