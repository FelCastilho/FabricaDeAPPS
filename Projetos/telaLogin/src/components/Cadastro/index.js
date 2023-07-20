import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

import firebase from '../services/firebaseConection';
import { useNavigation } from '@react-navigation/native';

export default function Cadastro() {
  const [nameID, setNameId] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const navigation = useNavigation()

  async function cadastrar(){

    await firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((value) =>{
      firebase.database().ref('usuarios').child(value.user.uid).set({
        nameUID: nameID,
      })
      alert('Conta criada com sucesso');
      navigation.navigate('Login')
    
    }).catch((error) => {
      alert('Algo deu errado');
      return;
    })

    setEmail('');
    setPassword('');
    setNameId('');

  }

  return (

    <View style={styles.container}>


      <Text style = {styles.h1}>Welcome </Text>
      <Text style = {styles.h2}>Create your account:</Text>

      <View style={styles.inputContainer}> 

       <TextInput
        style ={styles.input}
        underlineColorAndroid='transparent'
        onChangeText={(texto) => setNameId(texto)}
        value = {nameID}
        placeholder='Nome'
        />


        <TextInput
        style ={styles.input}
        underlineColorAndroid='transparent'
        onChangeText={(texto) => setEmail(texto)}
        value = {email}
        placeholder='Email'
        />

        <TextInput
        style ={styles.input}
        underlineColorAndroid='transparent'
        onChangeText={(texto) => setPassword(texto)}
        value = {password}
        placeholder='Password'
        keyboardType='numeric'
        />

      </View>

      <View style ={styles.btnContainer}>

        <TouchableOpacity
        style = {styles.btn}
        onPress={cadastrar}
        >
          <Text style={styles.btnText}>Cadastrar</Text>

        </TouchableOpacity>

        <TouchableOpacity style = {styles.loginInput} onPress={() => navigation.navigate('Login')}>
          <Text style = {styles.loginInputText}>Already have an account?</Text>
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
    padding: 15,
    borderWidth: 1,
    borderColor: '#fff',
    height: 50,
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
    fontSize: 15,
  },

  loginInput:{
    marginTop:50
  },

  loginInputText:{
    color: 'white',
    fontSize: 20
  }

  
});
