//Importando o react
import React from "react";
//Importando os itens do react-native
import {View, Text} from 'react-native';


function App(){

  return(

    <View style={{flex: 1, backgroundColor: '#121212' }}>
      
      <View style={{height: 65, height: 50, backgroundColor: '#121212' }}></View>
      <View style={{flex: 1, height: 50, backgroundColor: '#DDD' }}>
        <Text>Olá, mundo!</Text>
      </View>
      <View style={{height:65, height: 50, backgroundColor: '#121212' }}></View>

    </View>
  );

}

//Exportando o projeto
export default App;