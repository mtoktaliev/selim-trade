import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { checkIsAuth } from '../../../../../functions/auth/authSlice';

const PrivatAuth = ({children}) => {

    const auth = useSelector(checkIsAuth)
    
    if(!auth) {
        return <Navigate to='/login' />
    }

    return children
}

export {PrivatAuth};