import {useContext} from 'react'
import PacienteContext from '../context/PacientesProvider'

// Con el useContext podemos extraer los datos
const usePacientes = () => {
    return useContext(PacienteContext)
}

export default usePacientes