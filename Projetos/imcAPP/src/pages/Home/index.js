import React, {useState} from 'react';

import { Container, Title, Input, SubmitButton, SubmitText, Result } from './styles';

export default function Home() {

    const [peso, setPeso] = useState();
    const [altura, setAltura] = useState();
    const [imc, setIMC] = useState('');

    function calcularIMC(){
        let valorIMC = Number(peso) / (Number(altura) * Number(altura));
        setIMC(valorIMC.toFixed(2))
    }
    
 return(

   <Container>

    <Title>Calculando IMC</Title>

        <Input
        placeholder='Digite seu peso'
        value={peso}
        onChangeText={(text) => setPeso(text)}
        keyboardType='numeric'
        />   

        <Input
        placeholder='Digite seu peso'
        value={altura}
        onChangeText={(text) => setAltura(text)}
        keyboardType='numeric'
        />  

        <SubmitButton onPress={() => calcularIMC()}>
            <SubmitText>Calcular</SubmitText>
        </SubmitButton>

        <Result>{imc}</Result>

   </Container>

  );
}