import { Link, Redirect } from 'react-router-dom';
import { Loader } from '../../UI/Loader/Loader';

import { useUserRegister } from './useUserRegister';
import classes from './UserRegister.module.css';

export const UserRegister = () => {
    const { isLoading, isRegistered, changeHandler, sendData } = useUserRegister()
    
    if (isLoading) {
        return (
            <div className={classes.Wrapper}>
                <Loader size={60} color="#b0c4de" loading={isLoading} />
            </div>
        )
    }

    if (isRegistered) return <Redirect to="/login" />

    return (
        <div className={classes.Wrapper}>
            <div className={classes.Container}>
                <h3>Register</h3>
                <form onSubmit={sendData}>
                    <input
                        type="text"
                        id="firstName"
                        onChange={changeHandler}
                        placeholder="First name"/>
                    <input
                        type="text"
                        id="lastName"
                        onChange={changeHandler}
                        placeholder="Last name"/>
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
                <p>Already have account? <Link to="/login">Sign In</Link></p>
            </div>
        </div>
    )
}