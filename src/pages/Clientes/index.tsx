import React, { useEffect, useState } from 'react';
import { Paciente } from '../../app/models/Paciente';
import { usePacienteService } from '../../app/services/cliente.service';
import { Navbar } from '../../components/Navbar';

export const Clientes:React.FC = () => {

    const service = usePacienteService();
    const [ pacientes, setPacientes ] = useState<Paciente[]>([]);

    useEffect(() =>{

        service
            .listar()
            .then(response =>{
                setPacientes(response);
            })

    }, [])

    const renderBodyTable = () =>{

        return(
            pacientes.map((pac,i) =>{
                return(
                <tr key={i}>
                    <td>{pac.nome}</td>
                    <td>{pac.idade}</td>
                </tr>
                )
            })

        )

    }

  return (
      <>
        <Navbar />
        <table className="table">
            <thead>
            <tr>
                <th scope="col">Nome</th>
                <th scope="col">Idade</th>
           </tr>
            </thead>
            <tbody>
                {renderBodyTable()}
            </tbody>
        </table>
      </>
  );
}
