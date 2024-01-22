interface ProdutoProps{
    //Não é possivel alterar
    readonly id: string,
    nome: string,
    descricao: string,
}

let produto1: ProdutoProps = {
    id: '1',
    nome: 'Tenis Nike',
    descricao: 'Super tenis descolado'
}

//retorna um erro
//produto1.id = '123',

console.log(produto1);