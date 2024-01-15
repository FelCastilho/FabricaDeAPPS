import {useContext} from "react";
import Nome from "../Nome";

import { UserContext } from "../../contexts/user";

export default function Alunos(props){

  const { alunos } = useContext(UserContext);

  return(
    <div>
      <h2>Componente alunos: {alunos}</h2>

      <Nome nome = {props.nome}/>
    </div>
  )
}