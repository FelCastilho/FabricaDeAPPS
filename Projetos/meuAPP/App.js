//Importando o react
import React, {useState} from "react";
//Importando os itens do react-native
import {View, Text, StyleSheet} from 'react-native';
import {Picker} from '@react-native-picker/picker';


function App(){
  const [carroSelecionado, setCarroSelecionado] = useState(0);

  const [carros, setCarros] = useState([
    {key: 1, nome: "Golf 1.6", valor : 62.000},
    {key: 2, nome: "Saveiro 1.6", valor : 29.300},
    {key: 3, nome: "Gol 1.0", valor : 12.300},
  ])

  let carrosItem = carros.map((v, k) =>{
    return <Picker.Item key={k} value={k} label={v.nome}/>
  })

  return(

    <View styles = {styles.container}>

      <Picker
        selectedValue={carroSelecionado}
        onValueChange={(itemValue, itemIndex) => setCarroSelecionado(itemValue)}
      >
      {carrosItem}
      </Picker>

      <Text style ={styles.carros}>Carros: {carros[carroSelecionado].nome}</Text>
      <Text style ={styles.carros}>Valor: R$ {carros[carroSelecionado].valor.toFixed(3)}</Text>
    </View>
    
  );

}

const styles = StyleSheet.create({
  container:{
    flex:1,
  },

  carros:{
    marginTop: 15,
    fontSize: 25
  }

});


//Exportando o projeto
export default App;