import { useContext } from "react";
import { UserContext } from "../../contexts/user";

function Nome(){

  const {alunos, setAlunos} = useContext(UserContext); 

  return(

    <div>
      <span style={{color: '#ff0000'}}>Bem vindo: {alunos}</span>
      <button onClick={() => setAlunos('Miguel')}>Troca nome</button>
    </div>

  )
}

export default Nome;