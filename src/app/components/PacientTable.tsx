//Interfaz del paciente
interface Paciente{
    cedula:          number;
    nombre:          string;
    apellido:        string;
    fechaNacimiento: string;
    telefono:        string;
}

 //Interfaz para el conjunto de pacientes
 interface PacienteTableProps{
    pacientes: Paciente[]
}

//Definir el componente de FC. Crear un listado basado en la función map
const PacienteTable:React.FC<PacienteTableProps> = ({ pacientes })=>{

    console.log(pacientes)

    return(
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead>
                <tr>
                    <th>Cédula</th>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Fecha de Nacimiento</th>
                    <th>Teléfono</th>
                </tr>

            </thead>
            <tbody>
                {
                    pacientes.map((paciente, index)=>{

                        return(
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <td>{paciente.cedula}</td>
                                <td>{paciente.nombre}</td>
                                <td>{paciente.apellido}</td>
                                <td>{paciente.fechaNacimiento}</td>
                                <td>{paciente.telefono}</td>
                            </tr>
                        )
                    }
                    )
                }
            </tbody>
        </table>
    )
}

export default PacienteTable