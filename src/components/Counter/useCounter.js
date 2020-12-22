import { useState, useEffect, useCallback } from 'react';
import firebase from 'firebase';

export const useCounter = () => {
    const [ isLoggedOut, setIsLoggedOut ] = useState(false)
    const [ isLoading, setIsLoading ] = useState(true)
    const [ time, setTime ] = useState({})

    const getData = useCallback(() => {
        const uid = firebase.auth().currentUser.uid
        const userRef = firebase.database().ref(uid)
        
        userRef.once('value')
        .then(el => setTime(el.val()))
        .then(() => setIsLoading(false))
        .catch(e => console.log(e))
    }, [])
    
    const logout = () => {
        firebase.auth().signOut()
        .then(() => setIsLoggedOut(true))
        .catch(e => console.log(e))
    }
    
    useEffect(() => {
        getData()
    }, [getData])

    return { isLoggedOut, isLoading, time, logout }
}