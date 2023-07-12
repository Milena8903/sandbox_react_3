//Importaciones

import { useState } from "react"

//Crear la función
const PlusIcon =()=>{

    const [abierto, setAbierto]= useState(false)

    const [datosFormulario, setDatosFormulario]=useState(
        {
            "cedula" : " ",
            "nombre" : " ",
            "apellido" : " ",
            "fechaNacimiento": " ",
            "telefono": " "	
        }
    )

    //Manejadores de eventos

    const clickIcon=()=>{
        setAbierto(!abierto)
    }

    const cambiarValor=(e:any)=>{

        setDatosFormulario(
            {
                ...datosFormulario,
                [e.target.name]:e.target.value
            }
        )
    }



    const procesarFormulario= async(e:any)=>{

        e.preventDefault()

        //Manejar el formulario
        try {

            const response= await fetch('http://localhost:8080/students',
            {
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(datosFormulario)
            }
            )

            if(!response.ok){
                throw new Error("No se pudo guardar el registro")
            }

            setAbierto(false)
            
        } catch (error) {

            console.log(error)
            
        }


    }

    //Estructura JSX del componente

    return(
        <div>
            <div onClick={clickIcon}>
                <span>+</span>
            </div>
            {abierto &&(
                <form onSubmit={procesarFormulario}>
                    <input
                        type="number"
                        name= "cedula"
                        placeholder="Cédula"
                        onChange={cambiarValor}
                    />
                    <input
                        type="text"
                        name= "nombre"
                        placeholder="Nombre"
                        onChange={cambiarValor}
                    />
                    <input
                        type="text"
                        name= "apellido"
                        placeholder="Apellido"
                        onChange={cambiarValor}
                    />
                    <input
                        type="date"
                        name= "fechaNacimiento"
                        placeholder="Fecha de Nacimiento"
                        onChange={cambiarValor}
                    />
                    <input
                        type="number"
                        name= "telefono"
                        placeholder="Teléfono"
                        onChange={cambiarValor}
                    />
                    <button type="submit"> Guardar </button>
                </form>
            )
            }
        </div>

    )
}

export default PlusIcon
