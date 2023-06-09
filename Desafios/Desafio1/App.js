import React, {useState} from "react";
import {View, Text, StyleSheet, FlatList} from "react-native";
import Pessoa from './src/User/index';

export default function App(){

  const [feed, setFeed] = useState([
    {nome: 'Felipe Coutinho', cargo: 'Programador',}
  ])
  return(
  
    <View style={styles.container}>
      <Text>Seja bem vindo</Text>
      <FlatList
      data={feed}
      renderItem ={({item}) => <Pessoa data ={item}/>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  },


})