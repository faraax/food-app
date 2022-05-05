import { Navigate } from 'react-router-dom'

export default function PrivateRoute(isAuthenticated) {
    if (!isAuthenticated) {
        return <Navigate to='signin' />
    }
}
