import { useState } from "react"
import AdminNav from "../components/AdminNav"
import Alerta from '../components/Alerta'
import useAuth from '../hooks/useAuth'

const CambiarPassword = () => {
  const {guardarPassword} = useAuth()

  const [alerta, setAlerta] = useState({})
  const [password, setPassword] = useState({
    passwordActual: '',
    passwordNuevo: ''
  })

  const handleSubmit = async e => {
    e.preventDefault()

    if(Object.values(password).some(campo => campo === '')) {
        setAlerta({
          msg: 'Todos los campos son obligatorios',
          error: true
        })
        return
    }
    if(password.passwordNuevo.length < 6) {
      setAlerta({
        msg: 'El password debe contener al menos 6 caracteres',
        error: true
      })
      return
    }

    const resultado = await guardarPassword(password)
    setAlerta(resultado)
  }

  const {msg} = alerta

  return (
    <>
        <AdminNav />

        <h2 className="font-black text-3xl text-center mt-10">Cambiar password</h2>
        <p 
            className="text-xl mt-5 mb-10 text-center">Modifita tu {""} 
            <span className="text-indigo-600 font-bold">password</span>
        </p>

        <div className="flex justify-center">
            <div className="w-full md:w-1/2 bg-white shadow rounded-lg p-5">
                <form
                    onSubmit={handleSubmit}
                >
                    <div className="my-3">
                        <label className="uppercase font-bold text-gray-600">Password actual</label>
                        <input 
                            type='password'
                            className="border bg-gray-50 w-full p-2 mt-5 rounded-lg"
                            name='passwordActual'
                            placeholder="Escribe tu password actual"
                            onChange={e => setPassword({
                              ...password,
                              [e.target.name] : e.target.value
                            })}
                        />
                    </div>

                    <div className="my-3">
                        <label className="uppercase font-bold text-gray-600">Nuevo password</label>
                        <input 
                            type='password'
                            className="border bg-gray-50 w-full p-2 mt-5 rounded-lg"
                            name='passwordNuevo'
                            placeholder="Escribe tu nuevo password"
                            onChange={e => setPassword({
                              ...password,
                              [e.target.name] : e.target.value
                            })}
                        />
                    </div>

                    {msg && <Alerta alerta={alerta} />}

                    <input 
                        type='submit'
                        value='Actualizar password'
                        className="bg-indigo-700 px-10 py-3 font-bold text-white uppercase rounded-lg w-full mt-5 hover:bg-indigo-900 duration-300 cursor-pointer"
                    />
                </form>
            </div>
        </div>
    </>
  )
}

export default CambiarPassword