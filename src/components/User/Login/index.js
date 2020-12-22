import { Link, Redirect } from 'react-router-dom';

import { useLogin } from './useLogin';
import classes from './UserLogin.module.css';

export const UserLogin = () => {
    const { isLoggedIn, changeHandler, sendData } = useLogin()
    
    if (isLoggedIn) return <Redirect to="/counter" />

    return (
        <div className={classes.Wrapper}>
            <div className={classes.Container}>
                <h3>Login</h3>
                <form onSubmit={sendData}>
                    <input
                        type="text"
                        id="email"
                        onChange={changeHandler}
                        placeholder="Email"/>
                    <input
                        type="password"
                        id="password"
                        onChange={changeHandler}
                        placeholder="Password"/>
                    <input type="submit" value="sign in"/>
                </form>
                <p>Don't have an account? <Link to="/">Sign Up</Link></p>
            </div>
        </div>
    )
}