import React, {useEffect, useState, } from 'react';
import { StyleSheet, Text, View, FlatList, ActivityIndicator } from 'react-native';

//Importando a api da pasta SRC

import api from './src/services/api';
import Filmes from './src/Filmes';

export default function App() {
  
  //Criando função para quando chamar a api quando o aplicativo for renderizado
  const [filmes, setFilmes] = useState([]);
  const [loading, setLoading] = useState(true);

  //Buscando a api quando o programa é iniciado
  useEffect(()=>{

    async function loadFilmes(){
      
      //Passando a rota para a função, dentro desse await, ele vai esperar a requisição
      const response = await api.get('r-api/?api=filmes')
      //console.log(response.data)
      setFilmes(response.data);
      setLoading(false)
    }

    loadFilmes()

  },[])

  //Criando tela de loading

  if(loading){
    return(
      <View style ={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
        <ActivityIndicator color={'#121212'} size={45}/>
      </View>
    )
  }else{
    return (
      <View style={styles.container}>
        <FlatList
        data ={filmes}
        keyExtractor={item => String(item.id)}
        renderItem={({item}) => <Filmes data = {item}/>}
        />
      </View>
    );
    
  }

 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
