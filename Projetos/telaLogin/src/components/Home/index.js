import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import firebase from '../services/firebaseConection';
import { useNavigation } from '@react-navigation/native';

export default function Home() {

  const navigation = useNavigation();

  async function deslogar(){
    await firebase.auth().signOut();
    alert('Deslogado com sucesso!')
    navigation.navigate('Login')
  }

 return (
   <View style = {styles.containerA}>
    <Text>Seja bem-vindo</Text>

    <View style = {styles.btnContainer}>
      <TouchableOpacity style = {styles.btn} onPress={deslogar}>
        <Text style = {styles.btnText}>Deslogar</Text>
      </TouchableOpacity>
    </View>


   </View>
  );
}

const styles = StyleSheet.create({
    containerA: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center'  
    },


    btnContainer:{
      marginTop: 50,
      alignItems:'center',
      justifyContent:'center'
    },
  
    btn:{
      borderColor: '#fff',
      borderWidth: 1,
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

    
  });
  