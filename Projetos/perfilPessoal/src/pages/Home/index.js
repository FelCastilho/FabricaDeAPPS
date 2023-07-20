import React, {useState} from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';

export default function Home() {

  const [status, setStatus] = useState(false);

 return (
    <View style={status ?  styles.containerA : styles.containerB}>
      <Text style ={styles.text}>Tela Home</Text>

      <Switch
      value = {status}
      onValueChange = {(valorSelecionado) => setStatus(valorSelecionado)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  containerA:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
    },

  containerB:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#121212',
    
  }
})