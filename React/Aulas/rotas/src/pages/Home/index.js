import { Link } from "react-router-dom";

function Home() {

  return (

    <div>

      <h1>Bem vindo a página Home</h1>

      <hr/>

      <Link to='/produto/12345'>Ir para produto 12345</Link>
    </div>
    
  );
}

export default Home;
