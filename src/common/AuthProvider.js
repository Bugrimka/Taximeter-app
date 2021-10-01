import {useHistory} from "react-router-dom";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {setUser} from "../store/user";

export const AuthProvider = (props) => {
    const history = useHistory()
    const dispatch = useDispatch()
    const getSession = () => {
        const key = Object.keys(sessionStorage).filter(item => item.includes("firebase"))[0]
        if (!key) {
            history.push('/authorization')
            return false
        }
        const userData = JSON.parse(sessionStorage.getItem(key))
        dispatch(setUser({
            displayName: userData.displayName,
            email: userData.email,
            uid: userData.uid
        }))
        return userData
    }
    const {children} = props

    useEffect(() => {
        getSession()
    }, [])

    return <>
        {children}
    </>
}