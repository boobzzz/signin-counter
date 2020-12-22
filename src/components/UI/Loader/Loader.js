import ClockLoader from 'react-spinners/ClockLoader';

import classes from './Loader.module.css';

export const Loader = (props) => {
    const { size, color, loading } = props

    return (
        <div className={classes.Loader}>
            <ClockLoader size={size} color={color} loading={loading} />
        </div>
    )
}