import React from "react";


import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from "../pages/Home";
import Carrinho from "../pages/Carrinho";

export function Routes(){
    const Stack = createNativeStackNavigator();
    return(
         <Stack.Navigator>
            <Stack.Screen
            name = 'Home'
            component={Home}
            options={{
                headerShown: false
            }}
            />

            <Stack.Screen
            name = 'Carrinho'
            component={Carrinho}
            options={{
                title: 'Minhas compras'
            }}
            />
        </Stack.Navigator>  
    )
}