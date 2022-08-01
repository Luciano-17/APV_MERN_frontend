import {useContext} from 'react'
import AuthContext from '../context/AuthProvider'

// Con el useContext podemos extraer los datos
const useAuth = () => {
    return useContext(AuthContext)
}

export default useAuth