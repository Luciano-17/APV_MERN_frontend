import {useState} from 'react'
import {Link} from 'react-router-dom';
import clienteAxios from '../config/axios'
import Alerta from '../components/Alerta';

const registrar = () => {
    const [nombre, setNombre] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [repetirPassword, setRepetirPassword] = useState('')

    const [alerta, setAlerta] = useState({})

    const handleSubmit = async e => {
        e.preventDefault();

        if([nombre, email, password, repetirPassword].includes('')) { // Con esto se value que niguno esté vacío
            setAlerta({msg: 'Hay campos vacíos', error: true});
            return;
        }

        if(password !== repetirPassword) {
            setAlerta({msg: 'Los passwords no son iguales', error: true});
            return;
        }

        if(password < 6) {
            setAlerta({msg: 'El password debe tener almenos 6 caracteres', error: true});
            return;
        }

        setAlerta({})

        // Crear el usuario en la API
        try {
            await clienteAxios.post('/veterinarios', {nombre, email, password})
            setAlerta({
                msg: 'Creado correctamente, revisa tu email',
                error: false
            })
        } catch (error) {
            setAlerta({
                msg: error.response.data.msg,
                error: true
            })
        }
    }

    // Evaluar que haya un msg justo antes de hacer el return
    const {msg} = alerta

    return (
        <>
            <div>
                <h1 className="text-indigo-600 font-black text-6xl">Crea tu cuenta y administra tus <br/>
                    <span className="text-black">pacientes</span>
                </h1>
            </div>

            <div className='mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white'>
                <form
                    onSubmit={handleSubmit}
                >
                    <div className="my-5">
                        <label className="uppercase text-gray-600 block text-xl font-bold">
                            Nombre
                        </label>
                        <input 
                            className="border w-full p-3 mt-3 bg-gray-50 rounded-xl" 
                            type="text" 
                            placeholder="Tu nombre" 
                            value={nombre}
                            onChange={e => setNombre(e.target.value)}
                        />
                    </div>

                    <div className="my-5">
                        <label className="uppercase text-gray-600 block text-xl font-bold">
                            Email
                        </label>
                        <input 
                            className="border w-full p-3 mt-3 bg-gray-50 rounded-xl" 
                            type="email" 
                            placeholder="Email de registro" 
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="my-5">
                        <label className="uppercase text-gray-600 block text-xl font-bold">
                            Password
                        </label>
                        <input 
                            className="border w-full p-3 mt-3 bg-gray-50 rounded-xl" 
                            type="password" 
                            placeholder="Tu password" 
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                    </div>

                    <div className="my-5">
                        <label className="uppercase text-gray-600 block text-xl font-bold">
                            Repetir password
                        </label>
                        <input 
                            className="border w-full p-3 mt-3 bg-gray-50 rounded-xl" 
                            type="password" 
                            placeholder="Repite tu password" 
                            value={repetirPassword}
                            onChange={e => setRepetirPassword(e.target.value)}
                        />
                    </div>

                    <input 
                        type="submit"
                        value="Crear cuenta"
                        className="bg-indigo-700 w-full py-3 px-10 rounded-xl text-white uppercase font-bold mt-5 transition-all 
                        duration-300 hover:cursor-pointer hover:bg-indigo-800 md:w-auto"
                    />
                </form>

                {msg && <Alerta 
                    alerta={alerta}
                />}

                <nav className='mt-10 lg:flex lg:justify-between'>
                    <Link to="/" className='block text-center my-5 text-gray-500 transition-all duration-300 
                    hover:text-indigo-500'>
                        ¿Ya tienes una cuenta?
                    </Link>
                    <Link to="/olvide-password" className='block text-center my-5 text-gray-500 transition-all duration-300 
                    hover:text-indigo-500'>
                        Olvide mi password
                    </Link>
                </nav>
            </div>
        </>
    )
}
  
export default registrar