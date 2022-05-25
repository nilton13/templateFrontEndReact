import { httpClient } from "../http";
import { Paciente } from "../models/Paciente";


const resourceUrl: string = "/api/pacientes";

export const usePacienteService = () =>{
    const listar = async(): Promise<Paciente[]> =>{
        const response = await httpClient.get(resourceUrl);
        return response.data;
    }

    return{
        listar
    }
}