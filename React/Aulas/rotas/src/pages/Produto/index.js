//Buscando um item pelo ID
import { useParams } from "react-router-dom";

export default function Produto(){

    const { id, setId } = useParams();

    return(
        <div>
            <h1>Meu produto é {id}</h1>
        </div>
    )
}