import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList, ActivityIndicatorBase } from 'react-native';

import firebase from './src/firebaseConection';


export default function App() {

  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  

  async function cadastrar(){
    await firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((value)=>{
      firebase.database().ref('usuarios').child(value.user.uid).set({
        nome: nome,
      })

      alert('Usuario criado com sucesso!')
    })
    .catch((error) =>{
      alert('Algo deu errado!')
    })
  }

  

  return (
    <View style={styles.container}>

      <Text style={styles.texto}>Nome:</Text>
      <TextInput
      style ={styles.input}
      underlineColorAndroid='transparent'
      onChangeText={(texto) => setNome(texto)}
      value = {nome}
      />


      <Text style={styles.texto}>Email:</Text>
      <TextInput
      style ={styles.input}
      underlineColorAndroid='transparent'
      onChangeText={(texto) => setEmail(texto)}
      value = {email}
      />

      <Text style={styles.texto}>Password:</Text>
      <TextInput
      style ={styles.input}
      underlineColorAndroid='transparent'
      onChangeText={(texto) => setPassword(texto)}
      value = {password}
      />

      <View style = {styles.btnContainer}>
        <Button
        title='Cadastrar'
        onPress ={cadastrar}
        style ={styles.btn}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    marginTop: 60,
    backgroundColor: '#fff',

  },

  texto:{
    fontSize: 20,
  },

  input:{
    marginTop: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#121212',
    height: 40,
    fontSize: 17,
    width: '90%',
  },
  
  btn:{
    paddingTop: 50
  },

  btnContainer:{
    marginTop: 20,
  }
});