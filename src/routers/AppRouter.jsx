import { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Navbar } from '../components/shared/Navbar';
import { AuthRouter } from './AuthRouter';
import { CrudRouter } from './CrudRouter';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { validateTokenAction } from '../actions/auth-action';

export const AppRouter = () => {
    const dispatch = useDispatch();
    const { check } = useSelector(state => state.auth)

    useEffect(() => {
        dispatch(validateTokenAction());
    },[dispatch])

    return (
        <Router>    
            <div>
                <Navbar />
                <Switch>
                    <PublicRoute 
                        path="/auth" 
                        component={AuthRouter}
                        isAuthenticated={check}
                    />
                    <PrivateRoute 
                        path="/crud" 
                        component={CrudRouter}
                        isAuthenticated={check}
                    />
                    <Redirect to="/auth/login" /> 
                </Switch>
            </div>
        </Router>
    )
}



