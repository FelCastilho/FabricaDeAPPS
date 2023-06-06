//Importando o react
import React, {useState} from "react";
//Importando os itens do react-native
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';


function App(){

  const [nome, setNome] = useState('');
  const [input, setInput] = useState('')

  function entrar(){
    
    if(input === ''){
      alert('Digite seu nome!');
      return;
    }

    setNome(`Bem vindo ${input}`);

  }

  return(

    <View styles = {styles.container}>
      <TextInput
        style = {styles.input}
        placeholder = 'Digite seu nome:'
        onChangeText ={(texto) => setInput(texto)}
      />
      
      <Button title ={'Entrar'} onPress={ entrar }/>

      <Text style ={styles.texto}>{nome}</Text>
    </View>
    
  );

}

const styles = StyleSheet.create({
  container:{
    flex:1,
    
  },
  input:{
    marginTop: 50,
    height: 45,
    borderWidth: 1,
    margin:10,
    padding: 10,
    fontSize: 20
  },
  texto:{
    textAlign: 'center',
    fontSize: 25,
    marginTop: 50,
  }
});

//Exportando o projeto
export default App;