import React, {useState} from "react";  
import { View, Text, StyleSheet, Image, TouchableOpacity, Modal } from "react-native";

import Detalhes from "../Modal";

export default function Filmes({data}){

    const [visibleModal, setVisibleModal] = useState(false);

    return(
        <View>
            <View style = {styles.card}>
                <Text style = {styles.titulo}>{data.nome}</Text>

                <Image
                source={{uri: data.foto}}
                style={styles.capa}
                />

                <View style = {styles.areaBotao}>
                    <TouchableOpacity style = {styles.botao} onPress={()=> setVisibleModal(true)}>
                        <Text style = {styles.botaoTexto}>Leia Mais</Text>
                    </TouchableOpacity>
                </View>

                <Modal animationType="slide" visible={visibleModal} transparent={true}>
                    <Detalhes filme ={data} voltar ={() => setVisibleModal(false)}/>
                </Modal>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card:{
        backgroundColor: '#fff',
        margin: 15,
        elevation: 6
    },

    capa:{
        height: 250,
        zIndex: 2,
    },

    titulo:{
        padding: 15,
        fontSize: 18,
        fontWeight: 'bold',
    },

    areaBotao:{
        alignItems: 'flex-end',
        marginTop: -45,
        zIndex: 9
    },

    botao:{
        width: 100,
        backgroundColor: '#09a6ff',
        opacity: 1,
        padding: 8,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 4,
    },

    botaoTexto:{
        color: '#fff',
        textAlign: 'center'
    }
})