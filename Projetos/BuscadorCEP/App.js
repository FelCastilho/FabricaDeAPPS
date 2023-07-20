import React, {useState, useRef} from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, SafeAreaView, View, Keyboard } from 'react-native';

//Importando a API
import api from './src/services/api';

export default function App() {

  const [cep, setCep] = useState('');
  const inputRef = useRef(null);
  const [cepUser, setCepUser] = useState(null);
  
  function limpar(){
    setCep('');
    inputRef.current.focus();
  }

  async function buscar(){
    if(cep == ''){
      alert('Digite um CEP válido!')
      setCep('');
      return; //Parando a execução do código
    }

    try{
      const response = await api.get(`/${cep}/json`);
      console.log(response.data);
      setCepUser(response.data)
      Keyboard.dismiss(); //Garantir que o teclado seja fechado!
    }catch(error){
      console.log('ERROR ' + error)
    }


  }

  return (
    <SafeAreaView style={styles.container}>

      <View style ={{alignItems: 'center'}}>

        <Text style ={styles.text}>Digite o CEP desejado</Text>

        <TextInput
        style={styles.input}
        placeholder='Ex: 24715382'
        value ={cep}
        onChangeText={(texto) => setCep(texto)}
        keyboardType='numeric'
        ref={inputRef}
        />
      </View>

      <View style ={styles.areaBtn}> 

        <TouchableOpacity
         style ={[styles.botao, {backgroundColor: '#1d75cd'}]}
         onPress={buscar}
         >
          <Text style ={styles.botaoText}>Buscar</Text>
        </TouchableOpacity>

        <TouchableOpacity
        style ={[styles.botao, {backgroundColor: '#cd3e1d'}]}
        onPress ={limpar}
        >
          <Text style ={styles.botaoText}>Limpar</Text>
        </TouchableOpacity>

      </View>


      {cepUser && 
      <View style ={styles.resultado}>
        <Text style = {styles.itemText}>CEP: {cepUser.cep}</Text>
        <Text style = {styles.itemText}>Logradouro: {cepUser.logradouro}</Text>
        <Text style = {styles.itemText}>Bairro: {cepUser.bairro}</Text>
        <Text style = {styles.itemText}>Cidade: {cepUser.localidade}</Text>
        <Text style = {styles.itemText}>Estado: {cepUser.uf}</Text>
      </View>
      }


    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,    
  },

  text:{
    marginTop: 25,
    marginBottom: 15,
    fontSize: 25,
    fontWeight: 'bold'
  },

  input:{
    width: '90%',
    backgroundColor: '#FFF',
    borderWidth: 2,
    borderColor: '#DDD',
    borderRadius: 5,
    padding: 10,
    fontSize: 18,
  },

  areaBtn:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 15,
  },

  botao:{
    marginRight: 10,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 5,
  
  },

  botaoText:{
    fontSize: 20,
    color: '#fff'
  },

  resultado:{
    flex: 1,
    alignItems:'center',
    justifyContent: 'center'
  },

  itemText:{
    fontSize: 22
  }

});
