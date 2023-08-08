import React from 'react';
import { Background, Input, SubmitButton, SubmitText } from './styles';

export default function SignIn() {
 return (
   <Background>
        <Input
        placeholder='Email'
        />

        <Input
        placeholder='Password'
        />

        <SubmitButton>
            <SubmitText>Sign In</SubmitText>
        </SubmitButton>
   </Background>
  );
}