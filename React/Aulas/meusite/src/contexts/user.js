import { useState, createContext, Children } from "react";

export const UserContext = createContext({});

function UserProvider({children}){

    const [alunos, setAlunos ] = useState('Felipe Coutinho');
    const [qtdAlunos, setQtdAlunos] = useState(85);

    return(

        <UserContext.Provider value={{alunos, setAlunos}}>
            {children}
        </UserContext.Provider>

    )

}

export default UserProvider;