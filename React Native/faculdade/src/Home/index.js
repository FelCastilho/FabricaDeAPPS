import React from "react";
import { SafeAreaView, Text, TouchableOpacity, StyleSheet } from "react-native";   
import { useNavigation } from "@react-navigation/native";

export default function Home(){

    const navigation = useNavigation();

    return(
        <SafeAreaView style={{alignItems: 'center', justifyContent: 'center'}}>

            <Text>Tela Home</Text>

            <TouchableOpacity 
            style={styles.botao}
            onPress={() => navigation.navigate("Sobre")}
            >
                <Text>Ir para tela Sobre</Text>
            </TouchableOpacity>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    botao:{
        borderRadius: 10,
        backgroundColor: 'red',
        padding: 20,
    }
})
