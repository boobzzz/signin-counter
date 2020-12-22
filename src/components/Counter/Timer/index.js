import { useEffect, useCallback } from 'react';
import { RiTimerFlashLine } from 'react-icons/ri';
import firebase from 'firebase';

import { useTimer } from './useTimer';
import classes from './Timer.module.css';

export const Timer = ({ title, data }) => {
    const { seconds } = data
    const { innerWidth } = window
    const { totalSeconds, hrs, mins, secs } = useTimer(title, innerWidth, seconds)
    
    const sendData = useCallback(() => {
        const uid = firebase.auth().currentUser.uid
        const userRef = firebase.database().ref(uid)
        let data = {
            seconds: totalSeconds
        }

        userRef.child(title).set(data)
    }, [totalSeconds, title])

    useEffect(() => {
        sendData()
    }, [sendData])
            
    return (
        <div className={classes.Container}>
            <h3>{title}</h3>
            <span><RiTimerFlashLine /></span>
            <div>
                <span>{hrs < 10 ? `0${hrs}` : hrs}</span>:
                <span>{mins < 10 ? `0${mins}` : mins}</span>:
                <span>{secs < 10 ? `0${secs}` : secs}</span>
            </div>
        </div>
    )
}