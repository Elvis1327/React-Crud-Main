import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Navbar } from '../components/shared/Navbar';
import { NotMatch } from '../components/shared/NotMatch';
import { AuthRouter } from './AuthRouter';
import { CrudRouter } from './CrudRouter';

export const AppRouter = () => {
    return (
        <Router>    
            <div>
                <Navbar />
                <Switch>
                    <Route path="/auth" component={AuthRouter} />
                    <Route path="/" component={CrudRouter} />
                    <Route path="*" component={NotMatch} />
                </Switch>
            </div>
        </Router>
    )
}



