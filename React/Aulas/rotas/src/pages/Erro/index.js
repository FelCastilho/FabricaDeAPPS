import { Link } from "react-router-dom"

export default function Erro(){
    return(
        <div>
            <h2>Ops, parece que essa página não existe</h2>
            <Link to="/">Voltar para Home</Link>
        </div>
    )
}
