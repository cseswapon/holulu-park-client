import { useContext } from "react";
import { AuthProvider } from "../Pages/Context/Authproviders";

const useAuth = ()=> {
    return useContext(AuthProvider)
}
export default useAuth;