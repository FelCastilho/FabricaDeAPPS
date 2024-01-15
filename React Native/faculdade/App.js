import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import Home from "./src/Home";
import Sobre from "./src/Sobre";

export default function App(){

  const Stack = createNativeStackNavigator();

  return(
    <NavigationContainer>

      <Stack.Navigator>

        <Stack.Screen
        component={Home}
        name='Home'
        />

        <Stack.Screen
        component={Sobre}
        name='Sobre'
        />

      </Stack.Navigator>

    </NavigationContainer>
  )

}


