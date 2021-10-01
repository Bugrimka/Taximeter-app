import {Button} from 'antd';
import {signInWithPopup, GoogleAuthProvider, browserSessionPersistence, setPersistence} from 'firebase/auth'
import {useDispatch} from "react-redux";
import {setUser} from "../store/user";
import {useHistory} from "react-router-dom";
import {GoogleOutlined} from "@ant-design/icons";

export const Authorization = (props) => {
    const {provider, auth} = props
    const dispatch = useDispatch()
    const history = useHistory()
    const handleClick = () => {
        setPersistence(auth, browserSessionPersistence)
            .then(() => {
                signInWithPopup(auth, provider)
                    .then((result) => {
                        const credential = GoogleAuthProvider.credentialFromResult(result);
                        const user = result.user;
                        dispatch(setUser({
                            displayName: user.displayName,
                            email: user.email,
                            uid: user.uid
                        }))
                        history.push('/')
                    }).catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    const email = error.email;
                    const credential = GoogleAuthProvider.credentialFromError(error);
                });
            })

    }

    return <div className="login-block">
        <span>Please login for Authorization</span>
        <Button onClick={handleClick} type="primary"><GoogleOutlined/></Button>
    </div>
};