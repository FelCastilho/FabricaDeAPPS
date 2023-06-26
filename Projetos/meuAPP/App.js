//Importando o react
import React, {useState} from "react";
//Importando os itens do react-native
import {NavigationContainer} from '@react-navigation/native';

//Importando o tipo de Navegação
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//Importando os componentes externos
import Home from './src/pages/Home';
import Sobre from './src/pages/Sobre';
import Contato from './src/pages/Contato';


//Criando uma variavel para receber a navegação
const Stack = createNativeStackNavigator();

export default function App(){
  return(
    <NavigationContainer> 

    </NavigationContainer>

  )
}