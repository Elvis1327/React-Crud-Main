import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { CreateUser } from '../components/crud/CreateUser';
import { ManageUsers } from '../components/crud/ManageUsers';
import { Navbar } from '../components/shared/Navbar';
import { NotMatch } from '../components/shared/NotMatch';

export const AppRouter = () => {
    return (
        <Router>    
            <div>
                <Navbar />
                <Switch>
                    <Route exact path="/create" component={CreateUser} />
                    <Route exact path="/create/:id" component={CreateUser} />
                    <Route exact path="/" component={ManageUsers} />
                    <Route path="*" component={NotMatch} />
                </Switch>
            </div>
        </Router>
    )
}



