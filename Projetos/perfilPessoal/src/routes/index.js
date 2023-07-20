import React from 'react';

//Importando o container do Stack
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Feather } from '@expo/vector-icons';

//Importando 
import Home from '../pages/Home';
import Sobre from '../pages/Sobre';
import Contato from '../pages/Contato';

export default function Routes() {
  const Tab = createBottomTabNavigator();

  return (

      <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        

        tabBarStyle:{
          backgroundColor: '#223D7C',
          borderTopWidth: 0
        }
      }}
      >

        <Tab.Screen
        name = "Home"
        component={Home}
        options={{
          tabBarIcon: ({color, size}) => {
            return <Feather name="home" size={size} color={color} />
          }
        }}
        />

        <Tab.Screen
        name = "Sobre"
        component={Sobre}
        options={{
          tabBarIcon: ({color, size}) => {
            return <Feather name="file-text" size={size} color={color} />
          }
        }}
        />

        <Tab.Screen
        name = "Contato"
        component={Contato}
        options={{
          tabBarIcon: ({color, size}) =>{
            return <Feather name="phone" size={size} color= {color} />
          }
        }}
        />
      </Tab.Navigator>

  );
}
