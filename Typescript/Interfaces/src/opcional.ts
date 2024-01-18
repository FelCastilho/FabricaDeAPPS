interface CadastroProps{
    nome?: string, //Opcional
    email: string,
    status: boolean,
}

const novoUsuario: CadastroProps = {
    nome: 'Felipe',
    email: 'teste@teste.com',
    status: true,
}

function novoUser(props: CadastroProps){
    console.log(props.email);
}

novoUser({email: 'teste@teste.com', status: false})