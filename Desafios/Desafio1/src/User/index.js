import React from "react";
import {View, Text, StyleSheet} from "react-native";

function Pessoa(props){
    return(
        <View style ={styles.areaPessoa}>
         
            <Text style ={styles.textoPessoa}>Nome:{props.data.nome}</Text>
            <Text style ={styles.textoPessoa}>cargo:{props.data.cargo}</Text>
        </View>
    );
  }

const styles = StyleSheet.create({
    areaPessoa:{
        backgroundColor:'#123',
        padding:20,
    },

    textoPessoa:{
        color:'white',
        fontFamily: 'Arial'
    }

})

export default Pessoa;
  