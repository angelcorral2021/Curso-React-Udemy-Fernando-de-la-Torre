import Formulario from "./components/Formulario"
import Header from "./components/Header"
import ListadoPacientes from './components/ListadoPacientes'
import {useState} from "react"

function App() {

const [pacientes, setPacientes] = useState([]);//Se declara aqui porque sera utilizado por otros componentes
const [paciente,setPaciente] = useState({})//se declara como un objeto vacio para hacer referencia a un solo paciente





  return (//Todo lo que se va aver en pantalla
    <div className= "container mx-auto mt-20" >
      <Header />

      <div className="mt-12 md:flex">
      
      <Formulario 
      pacientes = {pacientes}
      setPacientes = {setPacientes}
      paciente = {paciente}
      
      />
      
      <ListadoPacientes 
      
   
      pacientes = {pacientes}
      setPaciente = {setPaciente}
      />
      </div>
      
    </div>

  )
}

export default App
