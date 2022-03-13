import {Navigate, Outlet, useLocation} from "react-router-dom"
import useAuth from "../hooks/useAuth";


const PrivateRoute = ({allowedRoles}) =>{
    const {auth} = useAuth()
    const location = useLocation()

    return(
        auth?.roles?.find(role => allowedRoles?.includes(role))
        ? <Outlet></Outlet>
            : auth?.user
                ? <Navigate to ="/unauthorized" state = {{from: location}} replace></Navigate>
                : <Navigate to="/login" state = {{from:location}} replace></Navigate>
    )
}

export  default  PrivateRoute