const Alerta = ({alerta}) => {
  return (
    <div 
        className={`${alerta.error ? 'from-red-400 to-red-500' : 'from-indigo-400 to-indigo-500'} bg-gradient-to-r 
        text-center p-3 rounded-xl uppercase text-white font-bold text-sm mt-5`}
    >
        {alerta.msg}
    </div>
  )
}

export default Alerta