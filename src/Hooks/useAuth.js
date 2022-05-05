import { useState } from 'react'
import { auth } from '../Firebase/Config'
import { signInWithPopup, GoogleAuthProvider, signOut } from 'firebase/auth'
import { useAuthContext } from './useAuthContext'

export default function useAuth() {
    const [isPending, setIsPending] = useState(false);
    const [error, setError] = useState(null);
    const { dispatch } = useAuthContext()

    const signInWithGoogle = () => {
        setIsPending(true)
        setError(null)
        const provider = new GoogleAuthProvider()
        signInWithPopup(auth, provider)
            .then((resp) => {
                setIsPending(false)
                dispatch({ type: 'LOGIN', payload: resp.user })
            })
            .catch((err) => {
                console.log(err.message);
                setIsPending(false)
                setError(err.message)
            })
    }

    return [signInWithGoogle, isPending, error]
}
