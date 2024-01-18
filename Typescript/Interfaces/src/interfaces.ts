/*
let loja: object;

loja = {
    nome: 'BK',
    endereco: 'Rua X',
    status: true,
}
*/


//Padrão mais utilizado: (as vezes vem com o I)
interface LojaProps{
    nome: string;
    endereco: string;
    status: boolean;
    //produtoPromocao: string,
}

const BurguerK: LojaProps = {
    nome: 'Burguer K',
    endereco: 'Rua X',
    status: true,
    //produtoPromocao: 'Burguer Duplo'
}

//console.log(BurguerK)

function novaLoja({nome, endereco, status} : LojaProps) : void{
    console.log(`Loja ${nome} criada com sucesso!`)
    console.log(`Endereço da loja: ${endereco} `)
    console.log(`Status da loja:  ${status}`)
}

novaLoja({nome: 'HeadBurguer', endereco: 'Rua X', status: true});

