import React, {useState} from "react";
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

function App(){
  const [img, setImg] = useState(require('./src/biscoito.png'));
  const [textFrase, setTextoFrase] = useState('')

  let frases = [
    'Para uma mente bem estruturada, a morte e apenas a aventura seguinte.',
    'Com grandes poderes vem grandes responsabilidades',
    'Todos temos luzes e trevas dentro de nós, basta sabermos qual lado escolher',
  ];

  function quebraBiscoito(){
    let numeroAleatorio = Math.floor(Math.random() * frases.length)
    
    setTextoFrase(`" ${frases[numeroAleatorio]} "`);
    setImg(require('./src/biscoitoAberto.png'))
  }

  function reiniciar(){
    setTextoFrase('')
    setImg(require('./src/biscoito.png'));
  }

  return(
    <View style ={styles.container}>
      
      <Image
      source = {img}
      style = {styles.img}
      />

      <Text style={styles.textoFrase}>{textFrase}</Text>

      <TouchableOpacity style = {styles.botao} onPress ={ quebraBiscoito }>
        <View style = {styles.btnArea}>
          <Text style = {styles.btnTexto}>Quebrar biscoito</Text>
        </View>
      </TouchableOpacity>

      
      <TouchableOpacity style = {[styles.botao, {marginTop: 15, borderColor: '#121212'}]}  onPress ={ reiniciar }>
        <View style = {styles.btnArea}>
          <Text style = {[styles.btnTexto, {color: '#121212'}]}>Reiniciar biscoito</Text>
        </View>
      </TouchableOpacity>


    </View>
  );
}

//Criando os estilos
const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  img: {
    width: 230,
    height: 230,
  },
  textoFrase:{
    fontSize: 20,
    color: '#dd7b22',
    margin: 30,
    fontStyle: 'italic',
    textAlign: 'center',
  },
  botao:{
    width: 250,
    height: 50,
    borderColor: '#dd7b22',
    borderWidth: 2,
    borderRadius: 25,
  },

  btnArea:{
    flex:1,
    justifyContent: 'center',
    alignItems:'center',
  },

  btnTexto:{
    fontSize: 18,
    fontWeight: 'bold',
    color: '#dd7b22',
  }
})

export default App;