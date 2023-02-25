//rfce
import {useEffect, useState} from "react"

import Paciente from "./Paciente"



const ListadoPacientes = ({ pacientes, setPaciente}) => {



  useEffect(()=> {
    if(pacientes.length > 0){
      console.log('Nuevo Paciente')
    }}
   ,[pacientes]
)



  return (



    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">

      {pacientes && pacientes.length ?
        (

          <div>
            <h2 className="font-black text-3xl text-center">Listado de Pacientes</h2>
            <p className="text-xl mt-5 mb-10 text-center">
              Administar tus  {' '}
              <span className="text-indigo-600 font-bold ">Pacientes y Citas</span>
            </p>

            {pacientes.map(paciente => (
              <Paciente

                key={paciente.id}//siempre se debe tener un key para iterar arreglo
                paciente={paciente}//Props que se envia al componente Paciente
                setPaciente={setPaciente}
              />
            ))}
          </div>
        ) : (

          <div>

            <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
            <p className="text-xl mt-5 mb-10 text-center">
              <span className="text-indigo-600 font-bold ">Comienza agregando pacientes y apareceran</span>
            </p>


          </div>



        )}













    </div>
  )
}

export default ListadoPacientes