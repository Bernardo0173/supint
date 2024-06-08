import { createContext, useContext, useState } from "react";


const LogInContext = createContext();

export const useLogInContext = () => {
    return useContext(LogInContext);
}

export const LogInProvider = ({children}) => {

    const defaultAgent = {
        IdEmpleado: null,
        Nombre: null,
        ApellidoP: null,
        ApellidoM: null,
        //usuario?
    }

    const [agent, setAgent] = useState(defaultAgent);

    const agentData = ({IdEmpleado, Nombre, ApellidoP, ApellidoM}) => {
        setAgent(prevAgent => ({
            ...prevAgent,
            IdEmpleado: IdEmpleado,
            Nombre: Nombre,
            ApellidoP: ApellidoP,
            ApellidoM: ApellidoM,
        }));
    }

    const restartAgent = () => {
        setAgent(defaultAgent);
    };

    return (
        <LogInContext.Provider value={[agent, agentData, restartAgent]}>
            {children}
        </LogInContext.Provider>

    )


}