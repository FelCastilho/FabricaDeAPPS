import React, {useState} from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

export default function ResultModal(props){

    const [result, setResult] = useState(parseFloat(props.inputAlcool) / parseFloat(props.inputGas) < 0.7 ? 'Alcool' : 'Gás');


    return(
        <View style = {styles.container}>

            <View style = {styles.logoContainer}>
                <Image
                source={require('../gas.png')}
                style= {styles.logo}
                />  
            </View>

            <View>
                <Text style={styles.tituloResultado}>Compensa usar {result}</Text>

                <Text style={styles.titulo}>Com os preços: </Text>

                <Text style={styles.text}>Álcool: {props.inputAlcool} </Text>

                <Text style={styles.text}>Gasolina: {props.inputGas}</Text>
            </View>

            <TouchableOpacity 
            onPress={props.fechar}
            style ={styles.btn}>
                <Text style ={styles.btnText}>Calcular Novamente</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#121212', 
    justifyContent: "center",
    alignItems:'center'
  },

  titulo:{
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginTop: 25,
    marginBottom: 10
  },

  tituloResultado:{
    color: '#2ECC71',
    fontSize: 30,
    fontWeight: 'bold',
  },

  text:{
    color: '#fff',
    fontSize: 20,
    marginTop: 5,
    textAlign: 'center'
  },

  logoContainer:{
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 40,
   },

   btn:{
    width: '50%',
    height: 45,
    borderWidth: 2,
    borderColor: '#FF502F',
    justifyContent: "center",
    alignItems:'center',
    borderRadius: 5,
    marginTop: 30
   },

   btnText:{
    color: '#FF502F',
    fontWeight: 'bold'
   }
});