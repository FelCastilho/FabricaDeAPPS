import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from '../Home/styles';

export default function Carrinho({price}) {
 return (
   <View>
    <Text style= {{textAlign: 'center', marginTop: 40}}>Nenhum item no carrinho</Text>
    <Button onPress={() => console.log(price)}/>

    </View>
  );
}
