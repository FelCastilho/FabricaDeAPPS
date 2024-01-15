import React, {useState} from 'react';
import {Text, View } from 'react-native';
import {Container, Title, Nome, Botao, BotaoText} from './src/styles';

export default function App() {

  return (
    <Container>
      <Title>Olá, mundo!</Title>
      <Nome>Felipe</Nome>

      <Botao onPress={()=> alert("Clicou")}>
        <BotaoText>Felipe Coutinho</BotaoText>
      </Botao>

    </Container>
  );
}


