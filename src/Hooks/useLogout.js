import { signOut } from 'firebase/auth';
import { useState } from 'react'
import { auth } from '../Firebase/Config';
import { useAuthContext } from './useAuthContext';

export default function useLogout() {
    const [isPending, setIsPending] = useState(false);
    const [error, setError] = useState(null);
    const { dispatch } = useAuthContext()

    const logout = () => {
        setIsPending(true)
        setError(null)
        signOut(auth)
            .then(() => {
                setIsPending(false)
                dispatch({ type: 'LOGOUT' })
            })
            .catch((err) => {
                setIsPending(false)
                setError(err.message)
            })

    }
    return [logout, isPending, error]
}
