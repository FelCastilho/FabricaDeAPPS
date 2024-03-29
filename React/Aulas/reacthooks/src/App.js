import React, { useState, useEffect, useMemo, useCallback } from 'react';

function App(){

  const [tarefas, setTarefas] = useState([
    "Pagar a conta de luz",
    'Estudar React Hooks'
  ]);

  const [ input, setInput ] = useState('')

  const handleAdd = useCallback(() => {
    setTarefas([...tarefas, input]);
    setInput('');
  }, [input, tarefas])

  useEffect(() => {
    const tarefasStorage = localStorage.getItem('tarefas');

    if(tarefasStorage){
      setTarefas(JSON.parse(tarefasStorage));
    }

    return () => {};
  }, [])

  useEffect(() => {
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
  }, [tarefas])

  const totalTarefas = useMemo(() => tarefas.length, [tarefas])

  return(

    <div>

      <ul>
        {tarefas.map(tarefa => ( 
          <li key={tarefa}>{tarefa}</li>
        ))}
      </ul>

      <br/>

      <strong>VocÊ tem {totalTarefas} tarefas!</strong>

      <br/>

      <input type='text' value={input} onChange={e => setInput(e.target.value)}/>

      <button type='button' onClick={handleAdd}>Adicionar</button>
    </div>
  )

}

export default App;