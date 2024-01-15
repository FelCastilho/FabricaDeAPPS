import React, {useContext} from "react";

import { 
    Container, 
    Message,
    Name,
    NewLinK,
    NewText,
    LogoutButton,
    LogoutText
} from "./styles";

import Header from "../../components/Header";
import New from "../New";
import { AuthContext } from '../../contexts/auth';
import { useNavigation } from "@react-navigation/native";

export default function Profile(){

    const {user, signOut} = useContext(AuthContext);
    const navigation = useNavigation();

    return(
        <Container>
            <Header
            title={'Meu Perfil'}
            />

            <Message>
                Olá, bem vindo de volta!
            </Message>

            <Name numberOfLines={1}>
                {user && user.name}
            </Name>

            <NewLinK onPress={() => navigation.navigate('Registrar')}>
                <NewText>Fazer registro</NewText>
            </NewLinK>

            <LogoutButton onPress={()=> signOut()}>
                <LogoutText>Sair</LogoutText>
            </LogoutButton>
        </Container>
    )
}