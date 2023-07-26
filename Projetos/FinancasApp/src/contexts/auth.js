import React, {createContext, useState} from 'react';

import api from '../services/api';
import { useNavigation } from '@react-navigation/native';

export const AuthContext = createContext({});

function AuthProvider({ children }){

    const [user, setUser] = useState();
    const [loadingAuth, setLoadingAuth] = useState(false);

    const navigation = useNavigation();

    async function signUp(email, password, nome){
        //Tela de carregamento (1)
        setLoadingAuth(true);

        try{
            const response = await api.post('/users', {
                name: nome,
                password: password, 
                email: email,
            })

            setLoadingAuth(false)
            navigation.goBack();

        }catch(err){
            console.log('Erro ao cadastrar', err)
            //Tela de carregamento (2)
            setLoadingAuth(false)
        }
    }

    return(
        <AuthContext.Provider value={{ signed: !!user, user, signUp, loadingAuth}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;