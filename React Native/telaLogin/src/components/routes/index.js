import React from 'react';

//Importando 
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Cadastro from '../Cadastro';
import Home from '../Home';
import Login from '../Login'
 
export default function Routes() {

    const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{headerShown: false}}
      >
            <Stack.Screen name = 'Cadastro' component={Cadastro}/>
            <Stack.Screen name = 'Login' component={Login} />
            <Stack.Screen name = 'Home' component={Home} />
        </Stack.Navigator>
    </NavigationContainer>

  );
}
