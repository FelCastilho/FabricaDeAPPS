import React, { useState } from 'react';
import { Background, Input, SubmitButton, SubmitText } from './styles';

import firebase from '../../services/firebaseConnection';

export default function SignUp() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('')

  async function cadastrar(){

    await firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(() => {
      alert('Usuário criado com sucesso');
    })
    .catch((err) =>{
      alert('Erro' + err)
    }) 
  }

 return (
   <Background>

        <Input
        placeholder='Name'
        value={name}
        onChangeText={(text) => setName(text)}
        />

        <Input
        placeholder='Email'
        value={email}
        onChangeText={(text) => setEmail(text)}
        />

        <Input
        placeholder='Password'
        value={password}
        onChangeText={(text) => setPassword(text)}
        />

        <SubmitButton onPress={cadastrar}>
            <SubmitText>Sign Up</SubmitText>
        </SubmitButton>
   </Background>
  );
}