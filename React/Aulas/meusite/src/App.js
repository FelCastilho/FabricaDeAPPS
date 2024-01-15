import React, {useState} from "react";
import Alunos from './components/Alunos';
import UserProvider from "./contexts/user";

export default function App(){

  const [ nomeAluno, setNomeAluno ] = useState('Miguel');

  return(
    <UserProvider>
      <div>
        <h1>Escola: </h1>
        <hr/>

        <Alunos nome={nomeAluno}/>
    </div>
    </UserProvider>
    
  )
}