import { Navigate, Route } from 'react-router-dom'

export default function PrivateRoute({ isAuthenticated, path, Component, redirect }) {
    return (
        <Route path={path} element={isAuthenticated ? <Component /> : <Navigate to={redirect} />} />
    )
}
