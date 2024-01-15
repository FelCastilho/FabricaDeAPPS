import React, {useState} from "react";
import {View, Text, TouchableOpacity, StyleSheet} from "react-native";


function App(){

    let dbz = ['Goku', 'Vegeta', 'Gohan', 'Goten', 'Videl'];

    let naruto = ['Naruto', 'Itachi', 'Sasuke', 'Tobirama', 'Hashirama'];

    let kimetsu = ['Tanjiro', 'Tomioka', 'Uzui', 'Rengoku', 'Yoriichi'];

    let deathNote = ['Light Yagami', 'L', 'Soichiro Yagami', 'Mello', 'Ryuk'];

    let onePunchMan = ['Saitama', 'Bang', 'Genos', 'Garou', 'Tatsumaki'];

    let onePiece = ['Luffy', 'Zoro', 'Sanji', 'Mihawk', 'Shanks'];

    let nanatsuTaizai = ['Meliodas', 'Escanor', 'Ban', 'King', 'Zeldris'];

    let bleach = ['Ichigo', 'Rei Quincy', 'Aizen', 'Yamamoto', 'Urahara']

    let dc = ['Superman', 'Flash', 'Darkseid', 'Mulher Maravilha', 'Batman'];

    let marvel = ['Hulk', 'Spiderman', 'Capitão América', 'Thanos', 'Feiticeira Escarlate'];

    let harryPotter = ['Alvo Dumbledore', 'Gellert Grindelwald', 'Voldemort', 'Harry Potter', 'Newt Scammander'];

    let monsterVerse = ['Godzilla', 'King Kong', 'Rei Ghidorah', 'Motra', 'Mechagodzilla'];

    let sekiro = ['Sekiro', 'Ishin Ashina', 'Genichiro Ashina', 'Pai Coruja', 'Escultor'];

    let darkSouls = ['Artorias do Abismo', 'Gwyn', 'Ashen One', 'Cinder', 'Choosen Undead'];

    let bloodBorne = ['Hunter', 'Lady Maria', 'Gherman', 'Ludwig', 'Órfão de Kos'];

    let swordArtOnline = ['Kirito', 'Asuna', 'Klein', 'Alice (SAO)', 'Sinoh']

    
    //Recebendo todos os animes em um unico array
    let animes = [...dbz, ...naruto, ...kimetsu, ...deathNote, ...onePiece, ...onePunchMan, ...dc, ...marvel, ...harryPotter, ...monsterVerse, ...sekiro, ...darkSouls, ...bloodBorne, ...nanatsuTaizai, ...swordArtOnline, ...bleach];

    const [destruidor, setDestruidor] = useState('');
    const [defensor1, setDefensor1] = useState('');
    const [defensor2, setDefensor2] = useState('');
    const [defensor3, setDefensor3] = useState('');
    const [traidor, setTraidor] = useState('');
    const [lider, setLider] = useState('');

    function gerar(){

        function criarDestruidor(animes){
            let destruidorAleatorio = Math.floor(Math.random(animes) * animes.length);
            setDestruidor(animes[destruidorAleatorio])
        }

        function criarDefensor1(animes){
            let defensor1Aleatorio = Math.floor(Math.random(animes) * animes.length);
            setDefensor1(animes[defensor1Aleatorio]);
        }

        function criarDefensor2(animes){
            let defensor2Aleatorio = Math.floor(Math.random(animes) * animes.length);
            setDefensor2(animes[defensor2Aleatorio]);
        }

        function criarDefensor3(animes){
            let defensor3Aleatorio = Math.floor(Math.random(animes) * animes.length);
            setDefensor3(animes[defensor3Aleatorio]);
        }

        function criarTraidor(animes){
            let traidorAleatorio = Math.floor(Math.random(animes) * animes.length);
            setTraidor(animes[traidorAleatorio]);
        }

        function criarLider(animes){
            let liderAleatorio = Math.floor(Math.random(animes) * animes.length);
            setLider(animes[liderAleatorio]);
        }

        criarDestruidor(animes); 
        criarDefensor1(animes);
        criarDefensor2(animes);
        criarDefensor3(animes);
        criarTraidor(animes);
        criarLider(animes);
    }


    return(
        <View style = {styles.container}>
            <Text>Destruidor: {destruidor} </Text>
            <Text>Defensor 1:{defensor1} </Text>
            <Text>Defensor 2: {defensor2}</Text>
            <Text>Defensor 3: {defensor3}</Text>
            <Text>Traidor: {traidor}</Text>
            <Text>Líder dos defensores: {lider} </Text>

            <TouchableOpacity style={styles.btn} onPress = {gerar}>
                <View style ={styles.btnArea}>
                    <Text style ={styles.btnText}>Gerar luta</Text>
                </View>
            </TouchableOpacity>
        </View>

    );
}

const styles = StyleSheet.create({
    container:{
        margin:50,
    },

    btn:{
        backgroundColor: '#121212',
        width: 200,
        color:'white',
        justifyContent:'center',
    },

    btnArea:{
        width: 25,
        height: 50
    },

    btnText:{
        textAlign: 'center',
        alignItems:'center',
        color: '#fff',
        width: 100
    }
})

export default App;