import { useState } from 'react';
import firebase from 'firebase';

export const useLogin = () => {
    const [ userData, setUserData ] = useState({
        email: '',
        password: ''
    })
    const [ isLoggedIn, setIsLoggedIn ] = useState(false)

    const changeHandler = ({ target: { id, value } }) => {
        setUserData({
            ...userData,
            [id]: value
        })
    }

    const sendData = (e) => {
        e.preventDefault()
        const { email, password } = userData

        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(() => setIsLoggedIn(true))
        .catch(e => console.log(e))
    }

    return { isLoggedIn, changeHandler, sendData }
}