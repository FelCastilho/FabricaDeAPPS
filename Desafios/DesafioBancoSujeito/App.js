import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button, Switch, Slide, ScrollView } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';


export default function DesafioBancoSujeito(){

  //Text Input
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [inputName, setInputName] = useState('');
  const [inputAge, setInputAge] = useState('');

  //Picker
  const [generoSelecionado, setGeneroSelecionado] = useState()
  const [genero, setGenero] = useState([
    {key: 1, sexo: 'Feminino'},
    {key: 2, sexo: 'Masculino'},
  ])

  let sexoItem = genero.map((v, k) => {
    return <Picker.Item key={k} value={k} label={v.sexo}/>
  })

  //Slider
  const [valor, setValor] = useState(0)

  //Switch

  const [status, setStatus] = useState(false)

  //Botão de chamada

  function cadastrar(){
    setName(inputName)
    setAge(inputAge)
    alert(`Seu nome é: ${name} e sua idade é ${age} ${genero[generoSelecionado].sexo},${valor.toFixed(0)}, ${status ? 'É estudante' : 'NÃO É estudante'} `)
  }

  return(
    <ScrollView>
      <View style ={styles.container}>
        <Text style = {{marginTop: 20, marginBottom: 20, textAlign:'center', fontSize: 40}}>Sujeito banco</Text>
       <View>
        <Text style={styles.text}>Digite seu nome:</Text>
            <TextInput
            style ={styles.input}
            onChangeText = {(textNome) => setInputName(textNome)}
            />
       </View>
       <View style ={styles.container}>
        <Text style={styles.text}>Digite sua idade:</Text>
            <TextInput
            style ={styles.input}
            onChangeText = {(textIdade) => setInputAge(textIdade)}
            />
       </View>
       
       <View style ={styles.container}>
       <Text style={styles.text}>Selecione seu gênero:</Text>
        <Picker
        selectedValue={generoSelecionado}
        onValueChange={(itemValue) => setGeneroSelecionado(itemValue)}
        >
        {sexoItem}
        </Picker>

       </View>
       <View style ={styles.container}>
       <Text style={styles.text}>Selecione seu limite inicial:</Text>
        <Slider
        minimumValue = {0}
        maximumValue = {200}
        value = {valor}
        onValueChange = {(valorSelecionado) => (setValor(valorSelecionado))}
        />
        <Text style = {{marginTop: 20, marginBottom: 20, textAlign:'center', fontSize: 40}}>R${valor.toFixed(0)}</Text>
       </View>
       <View style ={styles.container}>
       <Text style={styles.text}>Estudante :</Text>

        <Switch
        value ={status}
        onValueChange ={(valorSelecionado) => setStatus(valorSelecionado)}
        />
        
       </View>
       <View style ={styles.container}>
          <Button title ={'Cadastrar'} onPress= {cadastrar}/>
       </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({

  container:{
    marginTop: 25,
  },

  text:{
    fontSize: 25,
    margin: 10
  },
  input:{
    width: 250,
    height: 45,
    fontSize: 20,
    borderWidth: 1,
    padding: 10,
    margin: 10,
  },
})