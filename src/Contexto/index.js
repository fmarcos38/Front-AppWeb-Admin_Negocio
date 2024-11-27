import { createContext, useEffect, useState } from "react";
import {userLogData} from "../LocalStorage";

//creo contexto
export const AppContexto = createContext();

//--creo COMPONENTE provider - aquí desarrollo estados globales-------------------------
export const AppProvider = ({ children }) => {

    //estado user log
    const [userLog, setUserLog] = useState(null);
    //estado para login
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    //estado nombreUser
    const [nombre, setNombre] = useState();
    //estado para el SEARCH
    const [search, setSearch] = useState(''); 

    //efecto para el login
    useEffect(()=>{
        const userLogin = userLogData();
        if(userLogin){
            setUserLog(userLogin);
            setIsAuthenticated(true);
            setNombre(userLogin.nombre);
        }
    },[]); //sin dependencias, para que se ejecute una sola vez

    return (
        <AppContexto.Provider
            value={{
                userLog,
                setUserLog,
                isAuthenticated,
                setIsAuthenticated,
                nombre,
                search,
                setSearch
            }}
        >
            {children}
        </AppContexto.Provider>
    )
};