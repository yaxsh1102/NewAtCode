import { createContext, useState } from "react";

export const AppContext = createContext();

export default function AppContextProvider( {children} ){
    const [email, setEmail] = useState("");
    const [out, setOut] = useState(false);
    const[sign , setSign]=useState(true) ;
    const[log,setLog]=useState(true);

    const value = {
        email,
        setEmail,
        out,
        setOut,
        sign,
        setSign,
        log,
        setLog
    }
    return <AppContext.Provider value = {value}>
        {children}
    </AppContext.Provider>
}
