import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoute({children, redirecTo='/login'}) {
    const isAuthenticated = localStorage.getItem('jwt');
    console.log(isAuthenticated);

    if (!isAuthenticated) {
        return <Navigate to={redirecTo}/>
    }
    
    return children ? children : <Outlet />
}