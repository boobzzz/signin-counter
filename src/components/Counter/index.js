import { Redirect } from 'react-router-dom';
import { Loader } from '../UI/Loader/Loader';
import { Timer } from './Timer';

import { useCounter } from './useCounter';
import classes from './Counter.module.css';

export const Counter = () => {
    const { isLoggedOut, isLoading, time, logout } = useCounter()
    const { Desktop, Mobile } = time

    if (isLoading) {
        return (
            <div className={classes.Wrapper}>
                <Loader size={60} color="#b0c4de" loading={isLoading} />
            </div>
        )
    }

    if (isLoggedOut) return <Redirect to="/login" />

    return (
        <div className={classes.Wrapper}>
            <div className={classes.Container}>
                <Timer title="Desktop" data={Desktop} />
                <Timer title="Mobile" data={Mobile} />
            </div>
            <button onClick={logout}>log out</button>
        </div>
    )
}