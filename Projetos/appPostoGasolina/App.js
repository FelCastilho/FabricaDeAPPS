import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, Modal} from 'react-native';

import ModalComponent from './src/ModalComponent';

export default function App() {

  const [alcool, setAlcool] = useState('');
  const [gas, setGas] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  function abrirModal(){
    setModalVisible(true);
  }

  function fecharModal(){
    setModalVisible(false)
  }

  return (
    <View style={styles.container}>

      <View style ={styles.logoContainer}> 

        <Image
        source={require('./src/logo.png')}
        style ={styles.logo}
        />

        <Text style={styles.titulo}>Qual a melhor opção?</Text>

      </View>


      <View style ={styles.containerInput}>

        <Text style={styles.subtitulo}>Álcool (preço por litro):</Text>

        <TextInput
        style ={styles.textInput}
        onChangeText={(text) => setAlcool(text)}
        keyboardType='numeric'
        />

        <Text style={styles.subtitulo}>Gasolina (preço por litro):</Text>
        
        <TextInput
        style ={styles.textInput}
        onChangeText={(text) => setGas(text)}
        keyboardType='numeric'
        />

        <TouchableOpacity 
        onPress={abrirModal}
        style={styles.btn}>
          <Text style={styles.btnText}>Calcular</Text>
        </TouchableOpacity>

      </View>

      <Modal
      visible={modalVisible}
      animationType='slide'
      >
        <ModalComponent
        inputAlcool = {alcool}
        inputGas = {gas}
        fechar ={fecharModal}
        />
  
      </Modal>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },

  logoContainer:{
   justifyContent: 'center',
   alignItems: 'center',
   paddingTop: 70,
   paddingBottom: 40,
  },

  titulo:{
    fontSize: 25,
    color: '#fff',
    fontWeight: 'bold',
    marginTop: 25
  },

  containerInput:{
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    margin: 20
  },

  subtitulo:{
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold'
  },

  textInput:{
    height: 45,
    width: '90%',
    backgroundColor: '#fff',
    padding: 10,
    marginTop: 10,
    marginBottom: 20,
    borderRadius: 5,
    borderWidth: 1,
  },

  btn:{
    width: '90%',
    height: 45,
    backgroundColor: '#FF502F',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5
  },

  btnText:{
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold'
  },

  modalContainer:{
    backgroundColor: '#121212'
  }
});
