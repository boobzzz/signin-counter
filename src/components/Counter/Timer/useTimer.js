import { useState, useEffect } from 'react';

export const useTimer = (title, width, seconds) => {
    const [ totalSeconds, setTotalSeconds ] = useState(0)

    let hrs = Math.floor((totalSeconds % (60 * 60 * 24 )) / (60 * 60))
    let mins = Math.floor((totalSeconds % (60 * 60)) / 60)
    let secs = Math.floor(totalSeconds % 60)

    const interval = () => {
        setInterval(() => {
            setTotalSeconds(prevSeconds => prevSeconds + 1)
        }, 1000)
    }
    
    useEffect(() => {
        setTotalSeconds(seconds)
        
        if (title === 'Desktop') {
            width > 760 ? interval() : clearInterval(interval)
        }
        if (title === 'Mobile') {
            width <=  760 ? interval() : clearInterval(interval)
        }

        return () => clearInterval(interval)
    }, [])

    return { totalSeconds, hrs, mins, secs }
}