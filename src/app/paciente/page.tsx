"use client"

//importaciones
import { useEffect, useState } from "react";
import PacienteTable from "../components/PacientTable";
import PlusIcon from "../components/AddPacient";


//Definir función que se ejecuta cuando hagan una petición a esta "ruta"

export default function PacientePage(){

    // Rescatar los datos de los pacientes desde la API
    const [pacientes, setPacientes ]=useState([])

    useEffect(
        ()=>{

            const fetchPacientes= async()=>{
                try{
                    const response= await fetch(`http://localhost:4500/pacientes`)
                    if(!response.ok){
                        throw new Error("No puede rescatar pacientes")
                    }
                    
                    const data= await response.json()                    
                    setPacientes(data._embedded.pacientes)
                }catch(error){
                    console.error(error)
                }
            }

            fetchPacientes()
        }
    )

    // Llamar al componente StudentTable

    return(
        <div className="container mx-auto">
            <h1 className="p-6">Listado de Pacientes</h1>
            <PacienteTable pacientes={pacientes} />
            <PlusIcon></PlusIcon>
        </div>

    )
}