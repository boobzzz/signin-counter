import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { UserRegister } from './components/User/Register';
import { UserLogin } from './components/User/Login';
import { Counter } from './components/Counter';

export function App() {
    return (
        <Router basename="/signin-counter">
            <Switch>
                <Route exact path="/">
                    <UserRegister />
                </Route>
                <Route path="/login">
                    <UserLogin />
                </Route>
                <Route path="/counter">
                    <Counter />
                </Route>
            </Switch>
        </Router>
    )
}