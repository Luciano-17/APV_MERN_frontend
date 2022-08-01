import { Link } from "react-router-dom"

const AdminNav = () => {
  return (
    <nav className="flex gap-3">
        <Link
            className="font-bold uppercase text-gray-500 duration-200 hover:text-gray-800" 
            to='/admin/perfil'>
            Perfil
        </Link>

        <Link
            className="font-bold uppercase text-gray-500 duration-200 hover:text-gray-800" 
            to='/admin/cambiar-password'>
            Cambiar password
        </Link>
    </nav>
  )
}

export default AdminNav