import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

import firebase from '../services/firebaseConection';

import { useNavigation } from '@react-navigation/native';


export default function Login() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function logar(){

    await firebase.auth().signInWithEmailAndPassword(email, password)
    .then((value) =>{
      alert('Logado com sucesso');
      navigation.navigate('Home')

    }).catch((error) => {
      alert('Algo deu errado');
      return;
    })

    setEmail('');
    setPassword('');

  }

  return (

    <View style={styles.container}>


      <Text style = {styles.h1}>Welcome back</Text>
      <Text style = {styles.h2}>Connect to your account</Text>

      <View style={styles.inputContainer}> 

        <TextInput
        style ={styles.input}
        underlineColorAndroid='transparent'
        onChangeText={(texto) => setEmail(texto)}
        value = {email}
        placeholder='email'
        />

        <TextInput
        style ={styles.input}
        underlineColorAndroid='transparent'
        onChangeText={(texto) => setPassword(texto)}
        value = {password}
        placeholder='password'
        />

      </View>

      <View style ={styles.btnContainer}>

        <TouchableOpacity
        style = {styles.btn}
        onPress={logar}
        >
          <Text style={styles.btnText}>Login</Text>

        </TouchableOpacity>

        
        <TouchableOpacity style = {styles.cadastroInput} onPress={() => navigation.navigate('Cadastro')}>
          <Text style = {styles.cadastroInputText}>Criar conta</Text>
        </TouchableOpacity>

      </View>



    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#15273C',

  },

  h1:{
    marginTop: 50,
    marginBottom: 20,
    textAlign: 'center',
    color: '#fff',
    fontSize: 40,
    fontWeight: 'bold'
  },

  h2:{
    textAlign: 'center',
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold'
  },

  inputContainer:{
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },

  input:{
    marginTop: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#fff',
    height: 40,
    fontSize: 17,
    width: '70%',
    borderRadius: 20,
    color: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  },

  btnContainer:{
    marginTop: 50,
    alignItems:'center',
    justifyContent:'center'
  },

  btn:{
    borderRadius: 15,
    backgroundColor: '#365475',
    padding: 10,
    width: '40%',
  },

  btnText:{
    textAlign: 'center',
    color: '#fff',
    fontSize: 15
  },

  cadastroInput:{
    marginTop:50
  },

  cadastroInputText:{
    color: 'white',
    fontSize: 20
  }

  
});
