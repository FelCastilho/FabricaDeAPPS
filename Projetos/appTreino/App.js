import React, {useRef, useEffect} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

//Importando o firebase
import firebase from './src/firebaseConection';

export default function App() {

  return (
    <View style = {styles.container}>
      <Text>Olá, mundo!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

});