import { useState, FormEvent, useRef } from 'react'
import './App.css'
import { Header } from './components/header'

interface UsersProps {
  nome: string;
  cargo: string;
}

function App() {

  const nameRef = useRef<HTMLInputElement>(null);
  const cargoRef = useRef<HTMLInputElement>(null);

  const [users, setUsers] = useState<UsersProps[]>([]);


  function handleRegister(event: FormEvent) {
    event.preventDefault();

    if (!nameRef.current?.value || !cargoRef.current?.value) {
      alert("Preencha os campos")
      return;
    }

    let user = {
      nome: nameRef.current?.value,
      cargo: cargoRef.current?.value,
    }

    setUsers(values => [...values, user])

    nameRef.current.value = ""
    cargoRef.current.value = ""

  }

  return (
    <main>
      <Header nome="React + TypeScript" description="Alguma descriçao de teste" />

      <form onSubmit={handleRegister}>
        <label>Nome:</label>
        <input
          type="text"
          placeholder="Digite seu nome..."
          ref={nameRef}
        />

        <br /><br />

        <label>Cargo:</label>
        <input
          type="text"
          placeholder="Digite seu cargo atual..."
          ref={cargoRef}
        />

        <br /><br />
        <button type="submit">Cadastrar</button>
      </form>

      {users.map(user => (
        <div key={user.nome}>
          <br />
          <h1>{user.nome}</h1>
          <h3>{user.cargo}</h3>
          <br />
        </div>
      ))}


    </main>
  )
}

export default App
