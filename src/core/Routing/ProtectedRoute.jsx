import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ auth, children}) => {

    const validRoute = () => {                        
        return auth ?  <Navigate to="/login" replace={true} /> : children
    }

    return validRoute();
};

export default ProtectedRoute