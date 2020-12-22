import { useState } from 'react';
import firebase from 'firebase';

export const useUserRegister = () => {
    const [ userData, setUserData ] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    })
    const [ isLoading, setIsLoading ] = useState(false)
    const [ isRegistered, setIsRegistered ] = useState(false)

    const changeHandler = ({ target: { id, value } }) => {
        setUserData({
            ...userData,
            [id]: value
        })
    }

    const addUserData = (uid) => {
        const data = {
            Desktop: { seconds: 0 },
            Mobile: { seconds: 0 }
        }

        const db = firebase.database()
        db.ref(uid).set(data)
    }

    const addNewUser = () => {
        const { email, password } = userData

        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(user => addUserData(user.user.uid))
        .then(() => setIsLoading(false))
        .then(() => setIsRegistered(true))
        .catch(e => console.log(e))
    }

    const sendData = (e) => {
        e.preventDefault()
        
        setIsLoading(true)
        addNewUser()
    }

    return { isLoading, isRegistered, changeHandler, sendData }
}