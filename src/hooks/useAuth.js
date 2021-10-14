import { useContext } from "react"
import { AuthContext } from "../conexts/AuthProvider"

const useAuth = () => {
    return useContext(AuthContext)
}

export default useAuth;